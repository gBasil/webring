import type { APIRoute } from 'astro';

import { members } from '../lib/members';

export const GET = (({ redirect }) => {
	// Get a random number between `0` and `members.length - 1`
	// https://stackoverflow.com/a/61696576
	const i = (Math.random() * members.length) | 0;
	const url = members[i].url;

	return redirect(url);
}) satisfies APIRoute;

export const prerender = false;
