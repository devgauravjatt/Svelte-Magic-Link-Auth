<script lang="ts">
	import { LogOut } from 'lucide-svelte';
	import type { PageData } from './$types';
	import authClient from '$lib/auth-client';

	const session = authClient.useSession();

	function signOut() {
		authClient.signOut();
		window.location.reload();
	}

	const { data }: { data: PageData } = $props();
</script>

<div
	class="container mx-auto flex max-w-lg flex-col items-center justify-center gap-5 text-center"
>
	<h2>Hello User</h2>
	<h2 class="size-10 rounded-lg bg-green-600 text-center text-gray-200">
		{data?.user?.name.slice(0, 1)}
	</h2>
	<p>Email: {data?.user?.email}</p>
	<button onclick={signOut} class="bg-red-700 text-gray-100"
		><LogOut /> Logout</button
	>
</div>
