import type { APIRoute } from 'astro';

import { navigatableMembers } from '../lib/members';

export const GET = (({ redirect, url }) => {
	const id = url.searchParams.get('id');
	if (id === null) return redirect('/rand');

	const i = navigatableMembers.findIndex((e) => e.id === id);
	if (i === -1) return redirect('/rand');

	const next = navigatableMembers[(i + 1) % navigatableMembers.length];

	return redirect(next.url);
}) satisfies APIRoute;

export const prerender = false;
