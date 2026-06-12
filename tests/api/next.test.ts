import type { APIContext } from 'astro';

import { describe, expect, test, vi } from 'vite-plus/test';
import { GET } from '../../src/pages/next';

vi.mock(import('../../src/lib/members'), () => ({
	members: [
		{ id: 'a', name: 'A', url: 'https://example.com/a' },
		{ id: 'b', name: 'B', url: 'https://example.com/b' },
		{ id: 'c', name: 'C', url: 'https://example.com/c' },
	],
}));

describe('/next redirects', () => {
	test('Valid requests', () => {
		const redirect = vi.fn();

		void GET({ redirect, url: new URL('http://localhost/next?id=a') } as unknown as APIContext);
		expect(redirect).toHaveBeenLastCalledWith('https://example.com/b');

		void GET({ redirect, url: new URL('http://localhost/next?id=b') } as unknown as APIContext);
		expect(redirect).toHaveBeenLastCalledWith('https://example.com/c');

		void GET({ redirect, url: new URL('http://localhost/next?id=c') } as unknown as APIContext);
		expect(redirect).toHaveBeenLastCalledWith('https://example.com/a');
	});

	test('Malformed requests', () => {
		const redirect = vi.fn();

		void GET({ redirect, url: new URL('http://localhost/next') } as unknown as APIContext);
		expect(redirect).toHaveBeenLastCalledWith('/rand');

		void GET({ redirect, url: new URL('http://localhost/next?id') } as unknown as APIContext);
		expect(redirect).toHaveBeenLastCalledWith('/rand');

		void GET({ redirect, url: new URL('http://localhost/next?id=') } as unknown as APIContext);
		expect(redirect).toHaveBeenLastCalledWith('/rand');

		void GET({ redirect, url: new URL('http://localhost/next?id=d') } as unknown as APIContext);
		expect(redirect).toHaveBeenLastCalledWith('/rand');
	});
});
