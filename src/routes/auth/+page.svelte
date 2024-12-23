<script lang="ts">
	import { enhance } from '$app/forms';
	import { Mail } from 'lucide-svelte';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<div class="mx-auto max-w-md">
	<div class="flex flex-col items-center justify-center">
		<h2>This is the auth page</h2>
		<p>This work with Magic Link Auth</p>
	</div>
	<div>
		{#if form?.data?.status}
			<div class="flex animate-pulse flex-col items-center justify-center">
				<Mail color="green" size={80} />
				<p>Check your email in link to auth</p>
			</div>
		{/if}
	</div>
	<form method="POST" use:enhance>
		<label>
			Email
			<input required minlength="10" maxlength="50" name="email" type="email" />
		</label>
		<button>Send Magic Link</button>
	</form>
</div>
