import authClient from '$lib/auth-client';
import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();

		const email = formData.get('email') as string;

		const { data, error } = await authClient.signIn.magicLink({
			email: email
		});

		console.log('🚀  default:   data, error :- ', data, error);

		return {
			data
		};
	}
} satisfies Actions;
