import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '../db';
import { magicLink } from 'better-auth/plugins';
import { sendMail } from '../mail';

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: 'sqlite'
	}),
	plugins: [
		magicLink({
			sendMagicLink: async ({ email, url }) => {
				sendMail(url, email);
				return;
			}
		})
	]
});
