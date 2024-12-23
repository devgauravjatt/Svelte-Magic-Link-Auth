import { createAuthClient } from 'better-auth/svelte';
import { magicLinkClient } from 'better-auth/client/plugins';

const authClient = createAuthClient({
	plugins: [magicLinkClient()],
	baseURL: 'http://localhost:5173'
});

export default authClient;
