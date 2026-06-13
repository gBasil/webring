import { hasFlag } from './flags';

type Member = {
	/** The unique identifier of the member. Used for the avatar filename and (if applicable) custom apps. */
	id: string;
	/** The display name, shown under the app. */
	name: string;
	/** The website URL, which is used for redirects, and is linked to (when no custom app exists). */
	url: string;
	/** Optional member flags. */
	flags?: number;
};

export enum MemberFlags {
	/** Whether to skip over this member when navigating across the webring. */
	SkipNavigation = 1 << 0,
}

export const members: Member[] = [
	{ id: 'chloe', name: 'Chloe', url: 'https://sapphic.moe' },
	{ id: 'alyxia', name: 'Alyxia', url: 'https://alyxia.dev' },
	{ id: 'basil', name: 'Basil', url: 'https://basil.cafe' },
	{ id: 'tasky', name: 'tasky', url: 'https://uwu.network/~tasky' },
	{ id: 'cynthia', name: 'Cynthia', url: 'https://c7.pm' },
	{ id: 'kyza', name: 'Kyza', url: 'https://github.com/kyza' },
	{ id: 'aagaming', name: 'AAGaming', url: 'https://aagaming.me' },
	{ id: 'kneesox', name: 'Kneesox', url: 'https://kneesox.moe' },
	{ id: 'xirreal', name: 'xirreal', url: 'https://xirreal.dev' },
	{ id: 'allie', name: 'Allie', url: 'https://cutemoth.uk' },
	{ id: 'sophia', name: 'sophia', url: 'https://zvava.org' },
	{ id: 'overimagine', name: 'OVERIMAGINE', url: 'https://overimagine.xyz' },
	{ id: 'valerie', name: 'valerie', url: 'https://latte.party' },
	{ id: 'rort1z2', name: 'R0rt1z2', url: 'https://r0rt1z2.com' },
	{ id: 'nullptr', name: 'nullptr', url: 'https://github.com/nullpo1nt3d' },
	{ id: 'maggie', name: 'Maggie', url: 'https://maggiepi.fyi' },
];

export const navigatableMembers = members.filter(
	(member) => member.flags === undefined || !hasFlag(member.flags, MemberFlags.SkipNavigation),
);
