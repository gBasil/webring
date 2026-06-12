import { describe, expect, test } from 'vite-plus/test';
import { members } from '../src/lib/members';

function hasDuplicates(array: unknown[]): boolean {
	const filtered = [...new Set(array)];
	return array.length !== filtered.length;
}

describe('Member constraints', () => {
	test('Each member has a unique ID', () => {
		expect(hasDuplicates(members.map((e) => e.id))).toBeFalsy();
	});
});
