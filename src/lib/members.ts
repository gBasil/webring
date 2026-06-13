type Member = {
	/** The unique identifier of the member. Used for the avatar filename and (if applicable) custom apps. */
	id: string;
	/** The display name, shown under the app. */
	name: string;
	/** The website URL, which is used for redirects, and is linked to (when no custom app exists). */
	url: string;
};

export const members: Member[] = [
	{ id: 'basil', name: 'Basil', url: 'https://basil.cafe' },
	{ id: 'aagaming', name: 'AAGaming', url: 'https://aagaming.me' },
	{ id: 'tasky', name: 'tasky', url: 'https://uwu.network/~tasky' },
	{ id: 'alyxia', name: 'Alyxia', url: 'https://alyxia.dev' },
	{ id: 'cynthia', name: 'Cynthia', url: 'https://c7.pm' },
	{ id: 'kyza', name: 'Kyza', url: 'https://github.com/kyza' },
];
