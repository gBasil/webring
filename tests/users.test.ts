import { readdir } from 'node:fs/promises';
import { describe, expect, test } from 'vite-plus/test';
import { members } from '../src/lib/members';

function hasDuplicates(array: unknown[]): boolean {
	const filtered = [...new Set(array)];
	return array.length !== filtered.length;
}

describe('Member constraints', () => {
	test("There aren't any duplicate values", () => {
		expect(hasDuplicates(members.map((e) => e.id))).toBeFalsy();
		expect(hasDuplicates(members.map((e) => e.name))).toBeFalsy();
		expect(hasDuplicates(members.map((e) => e.url))).toBeFalsy();
	});

	test('All URLs are valid', () => {
		expect(() => {
			void members.map((e) => new URL(e.url));
		}).not.toThrow();
	});

	test('All members have their corresponding avatar files', async () => {
		const requiredMembers = members.map((e) => e.id + '.svg').sort();
		const avatars = (await readdir('./public/avatars/')).sort();

		expect(avatars).toEqual(expect.arrayContaining(requiredMembers));
	});
});
