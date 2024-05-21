<script>
	export let path = '';
	export let title = '';
	export let expanded = false;
</script>

{#if expanded}
	<div
		tabindex="-1"
		class="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full bg-slate-950/90"
	>
		<div class="relative">
			<div class="flex justify-between bg-slate-800 px-4 py-1 space-x-2">
				<button type="button" class="link" on:click={() => (expanded = false)}>
					<i class="bi bi-arrow-left" />
				</button>
				<h3>{title}</h3>
				<button type="button" class="link" on:click={() => (expanded = false)}>
					<i class="bi bi-x-lg" />
				</button>
			</div>
			<div class="h-screen flex justify-center">
				<img class="object-scale-down max-h-full" src="/art/{path}" alt={title} />
			</div>
		</div>
	</div>
{:else}
	<button
		type="button"
		class="hover-glow"
		on:click={() => {
			expanded = true;
		}}
	>
		<img class="w-full md:w-64" src="/art/{path}" alt={title} />
	</button>
{/if}
