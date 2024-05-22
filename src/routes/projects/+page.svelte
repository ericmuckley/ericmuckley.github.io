<script lang="ts">
	import ImagePopout from '$lib/components/ImagePopout.svelte';
	//import BackButton from '$lib/components/BackButton.svelte';

	const projects = [
		{
			name: 'Integrated multi-functional environmental characterization system',
			link: 'imes',
			github: 'https://github.com/ericmuckley/IMES',
			text: `Screening functional materials for performance in sensing and optoelectronic applications is significantly accelerated by automated control of environmental conditions and measurement settings using real-time feedback. This integrated multifunctional characterization system at the <a class="mx-1" target="_blank" href="https://www.ornl.gov/facility/cnms">Center for Nanophase Materials Sciences</a> at <a class="mx-1" target="_blank" href="https://www.ornl.gov/">Oak Ridge National Laboratory</a> is used for rapidly screening materials and sensors across an ultra-wide range frequency spectrum spanning electrical, gravimetric/vsicoelastic, and optical functional modes. The system's control software interfaces with over 15 different scientific instruments and performs real-time data analytics and machine learning for enabling autonomous experiments.`,
			img: [
				{
					url: 'IMES_broadband.JPG',
					title: 'Capabilities of the autonomous characterization system'
				},
				{ url: 'IMES_screenshot.JPG', title: 'Python-based control software' },
				{ url: 'system343b.jpg', title: 'Autonomous characterization system' },
				{ url: 'systemcentered.jpg', title: 'Autonomous characterization system' }
			],
			vid: [
				{ url: 'https://www.youtube.com/embed/TG-s2J7XrX8?autoplay=0&loop=1&playlist=TG-s2J7XrX8' }
			]
		},
		{
			name: 'Automated nanomaterials processing system',
			link: 'laser-triggering',
			github: 'https://github.com/ericmuckley/laser_triggering',
			text: `Development of functional nanomaterials is accelerated when laser processing can occur in tandem with in situ spectroscopic characterization. The control software triggers laser pulses, acquisition of Raman spectra, motorized translational stages, and control of motorized optical polarizer/analyzer systems. The system is in use at one of the laser processing labs for 2D materials at the <a class="mx-1" href="https://www.ornl.gov/facility/cnms">Center for Nanophase Materials Sciences</a> at <a class="mx-1" href="https://www.ornl.gov/">Oak Ridge National Laboratory</a>.`,
			img: [
				{
					url: 'laser-triggering-ui.jpg',
					title: 'User interface for controlling automated laser processing system'
				},
				{
					url: 'laser-triggering-diagram.jpg',
					title: 'Schematic diagram of laser processing system'
				},
				{ url: 'laserlabpano.jpg', title: 'Laser processing lab' }
			]
		},
		{
			name: 'Smart beer brewing system',
			link: 'brewing',
			github: 'https://github.com/ericmuckley/smart_homebrewing_system',
			text: `Home-brewed beer fermentation process can be monitored in real-time using a raspberry pi computer, camera, and array of gas/vapor sensors. The camera acquires images of the fermentation at constant 
                time intervals as the sensors measure tepmerature, pressure, relative humidity, and alcohol concentration (measured by MQ-X gas sensors) over time. Data is wirelessly streamed to a remote server for analytics and plotting.`,
			img: [{ url: 'carboy.JPG', title: 'Fermentation vessel with sensors and camera' }],
			vid: [
				{ url: 'https://www.youtube.com/embed/_vpxnixSp3A?autoplay=0&loop=1&playlist=_vpxnixSp3A' }
			]
		},
		{
			name: 'Real-time machine learning',
			link: 'rt-ml',
			text: `To reap the benefits of predictive analytics in real-time, its often necessary to stream data directly from acquisition sources into model training workflows, which enables dynamic models that improve as training data evolves.`,
			vid: [
				{ url: 'https://www.youtube.com/embed/iIOD1UxuxVo?autoplay=0&loop=1&playlist=iIOD1UxuxVo' },
				{ url: 'https://www.youtube.com/embed/qShslUHae9w?autoplay=0&loop=1&playlist=qShslUHae9w' }
			],
			tags: ['data science', 'machine learning', 'visualization']
		},
		{
			name: 'Machine learning performance diagnostics',
			link: 'modeldiagnostics',
			text: `Tuning machine learning model parameters is often difficult due to the large number of degrees of freedom in the model. Parameter convergence often occurs by automated Bayesian optimization and domain-specific constraints for balancing prediction accuracy and resources required for model training.`,
			img: [
				//{"url": "ANNsamplesplot.jpg", "title": "Effects of training set size on performance and training time"},
				//{"url": "nnmaps.jpg", "title": "Effects of hidden layer neurons on performance and training time"},
			],
			vid: [
				{ url: 'https://www.youtube.com/embed/b6TPW9VnTuk?autoplay=0&loop=1&playlist=b6TPW9VnTuk' }
			]
		},

		{
			name: 'Spectral deconvolution',
			link: 'peakfinding',
			text: `Reliable tools for automated peak detection and spectral deconvolution are critical in many areas of science and engineering. In some cases it is possible to automate spectal deconvolution by simulation of Gaussian-shaped peaks which enables reconstruction of the fitted signal. Peak positions are tracked over time to more easily enable prediction of future peak positions. The positions, widths, and equivalent circuit model parameters can be extracted from each peak automatically and tracked over time to further aid in prediction of signal evolution.`,
			img: [
				//{"url": "peakfinder.png", "title": "Automated peak detection in complex spectra"},
				//{"url": "caseinpeaks.png", "title": "Spectral deconvolution by simulation of constituent peaks"},
			],
			vid: [
				{ url: 'https://www.youtube.com/embed/G8a7ou1wLBw?autoplay=0&loop=1&playlist=G8a7ou1wLBw' }
			]
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
			<p class="mt-4 text-lg">{@html project.text}</p>
			{#if project.github}
				<div class="my-8 text-xl font-bold">
					<a href={project.github} target="_blank" class="bg-dim2 px-6 py-2 rounded-full">
						<span class="ml-2">View on GitHub</span>
						<i class="bi bi-github" />
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
