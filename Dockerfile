FROM node:24-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN apk add bash

RUN corepack enable
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0

WORKDIR /app
COPY . .

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --ignore-scripts
ENV ASTRO_TELEMETRY_DISABLED=1
RUN pnpm run build
RUN pnpm prune --prod --ignore-scripts

FROM node:24 AS runtime

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=8000

EXPOSE 8000
CMD ["node", "./dist/server/entry.mjs"]
