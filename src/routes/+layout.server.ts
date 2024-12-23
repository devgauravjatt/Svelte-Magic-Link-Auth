import { auth } from '$lib/server/auth';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = (async ({ request }) => {
	const session = await auth.api.getSession({
		headers: request.headers
	});
	if (!session && !request.url.includes('/auth')) {
		redirect(302, '/auth');
	}
	if (session && request.url.includes('/auth')) {
		redirect(302, '/');
	}
	return { user: session?.user };
}) satisfies LayoutServerLoad;
