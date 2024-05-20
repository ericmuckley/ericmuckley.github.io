<script>
	import '../app.css';
	import TopNavBar from '$lib/components/TopNavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<main>
	<TopNavBar />
	<div class="p-6">
		<slot />
	</div>
	<Footer />
</main>
