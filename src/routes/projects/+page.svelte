<script lang="ts">
	import ImagePopout from '$lib/components/ImagePopout.svelte';
	//import BackButton from '$lib/components/BackButton.svelte';

	const projects = [
		{
			name: 'Real-time machine learning',
			link: 'rt-ml',
			text: `To reap the benefits of predictive analytics in real-time, its often necessary to stream data directly from acquisition
                sources into model training workflows, which enables dynamic models that improve as training data evolves.`,
			vid: [
				{ url: 'https://www.youtube.com/embed/iIOD1UxuxVo?autoplay=0&loop=1&playlist=iIOD1UxuxVo' },
				{ url: 'https://www.youtube.com/embed/qShslUHae9w?autoplay=0&loop=1&playlist=qShslUHae9w' }
			],
			tags: ['data science', 'machine learning', 'visualization']
		},

		{
			name: 'Viscoelastic modeling application',
			link: 'qcmdapp',
			github: 'https://github.com/ericmuckley/QCMD_calculator',
			text: `The quartz crystal microbalance with energy dissipation monitoring (QCM-D) is an advanced tool for measuring miniscule changes in gravimetic and viscoelastic properties of nanomaterials. Modeling QCM-D response requires specialized numerical solvers using estimates of film thickness, density, shear modulus, and bulk modulus.`,
			img: [
				{ url: 'QCMD-app-UI.JPG', title: 'QCM-D modeling application' },
				{
					url: 'QCMD-app-df-surface.JPG',
					title: 'Calculated surface for solutions in fequency shift space'
				},
				{
					url: 'QCMD-app-dD-surface.JPG',
					title: 'Calculated surface for solutions in eneergy dissipation space'
				},
				{
					url: 'QCMD-app-solution.JPG',
					title: 'Estimation of point at which different solution spaces converge'
				}
			],
			tags: ['data visualization', 'data science', 'phyiscs']
		},
		{
			name: 'Sequential learning simulator',
			link: 'slsimulator',
			text: `Cloud-based simulator for estimating throughput, cost, and time associated with AI-driven materials discovery and development.`,
			img: [{ url: 'SL-dashboard.png', title: 'SL simulator homepage' }],
			tags: ['cloud', 'data science', 'machine learning']
		},
		{
			name: 'Data buddy',
			link: 'databuddy',
			github: 'https://github.com/ericmuckley/data-buddy',
			text: `Cloud tool for exploratory data visualization, analysis, and machine learning.`,
			img: [{ url: 'data-buddy.png', title: 'Data buddy user interface' }],
			tags: ['cloud', 'data science', 'machine learning']
		}
	];
</script>

<h1 class="page-title">PROJECTS</h1>

<div class="flex flex-wrap gap-6">
	{#each projects as project}
		<div class="box my-2 w-full">
			<h3 class="box-title">{project.name}</h3>
			<p class="mt-4 text-lg">{project.text}</p>
			{#if project.github}
				<div class="mt-4">
					<a href={project.github} target="_blank" class="link">
						<span class="ml-2">View on GitHub</span>
						<i class="bi bi-github" />
						<i class="bi bi-box-arrow-right ml-2" />
					</a>
				</div>
			{/if}
			{#if project.img && project.img.length}
				<div class="mt-4 flex flex-wrap gap-4">
					{#each project.img as img}
						<div>
							<ImagePopout title={img.title} path={'/images/' + img.url} />
						</div>
					{/each}
				</div>
			{/if}

			{#if project.vid && project.vid.length}
				<div class="mt-4 flex flex-wrap gap-4">
					{#each project.vid as vid}
						<div class="mt-5 w-full">
							<iframe
								title={vid.url}
								src={vid.url}
								allowfullscreen={true}
								style="min-height: 40vh; width: 100%"
							>
							</iframe>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	{/each}
</div>
