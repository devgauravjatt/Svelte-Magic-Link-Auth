<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="container pt-12">
	{@render children()}
</main>
