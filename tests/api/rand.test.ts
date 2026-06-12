import type { APIContext } from 'astro';

import { describe, expect, test, vi } from 'vite-plus/test';
import { GET } from '../../src/pages/rand';

vi.mock(import('../../src/lib/members'), () => ({
	members: [
		{ id: 'a', name: 'A', url: 'https://example.com/a' },
		{ id: 'b', name: 'B', url: 'https://example.com/b' },
		{ id: 'c', name: 'C', url: 'https://example.com/c' },
	],
}));

describe('/rand redirects', () => {
	test('All websites should appear', () => {
		const redirect = vi.fn();
		const random = vi.spyOn(Math, 'random');

		const ctx = { redirect, url: new URL('http://localhost/rand') } as unknown as APIContext;

		random.mockReturnValue(0);
		void GET(ctx);
		expect(redirect).toHaveBeenLastCalledWith('https://example.com/a');

		random.mockReturnValue(0.5);
		void GET(ctx);
		expect(redirect).toHaveBeenLastCalledWith('https://example.com/b');

		random.mockReturnValue(0.9);
		void GET(ctx);
		expect(redirect).toHaveBeenLastCalledWith('https://example.com/c');

		random.mockRestore();
	});
});
