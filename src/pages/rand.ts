import type { APIRoute } from 'astro';

import { navigatableMembers } from '../lib/members';

export const GET = (({ redirect }) => {
	// Get a random number between `0` and `members.length - 1`
	// https://stackoverflow.com/a/61696576
	const i = (Math.random() * navigatableMembers.length) | 0;
	const url = navigatableMembers[i].url;

	return redirect(url);
}) satisfies APIRoute;

export const prerender = false;
