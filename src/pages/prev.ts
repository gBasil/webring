import type { APIRoute } from 'astro';

import { members } from '../lib/members';

export const GET = (({ redirect, url }) => {
	const id = url.searchParams.get('id');
	if (id === null) return redirect('/rand');

	const i = members.findIndex((e) => e.id === id);
	if (i === -1) return redirect('/rand');

	const prev = members.at(i - 1)!;

	return redirect(prev.url);
}) satisfies APIRoute;

export const prerender = false;
