FROM node:24-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN apk add bash

RUN corepack enable
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0

FROM base AS build
WORKDIR /app
ENV CI=true
ENV ASTRO_TELEMETRY_DISABLED=1

COPY package.json pnpm-lock.yaml .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --ignore-scripts --prod

COPY . .
RUN pnpm astro build

FROM node:24 AS runtime

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=8000

EXPOSE 8000
CMD ["node", "./dist/server/entry.mjs"]
