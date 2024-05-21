<script lang="ts">
	//import BackButton from '$lib/components/BackButton.svelte';
	import ImagePopout from '$lib/components/ImagePopout.svelte';

	const categories = [
		{
			name: 'Watercolor',
			items: [
				{ path: 'baker_beach.jpg', title: 'Baker Beach, San Francisco, California' },
				{ path: 'moonwhales.jpg', title: 'Ethereum whales' },
				{ path: 'longlake.jpg', title: 'Long lake, Sierra Nevada, California' },
				{ path: 'red_blue_forest.jpg', title: 'Red and blue forest' },
				{ path: 'sdbuildings.jpg', title: 'San Diego, California' },
				{ path: 'redsmokies.jpg', title: 'Autumn in the mountains' },
				{ path: 'dinosaurs.jpg', title: 'Prehistoric monsters' },
				{ path: 'milkyway.jpg', title: 'Milky way' },
				{ path: 'yellowvolcanosmoke.jpg', title: 'Prehistoric landscape 2' },
				{ path: 'birdrock_sunset.jpg', title: 'Sunset Cliffs, San Diego, California' },
				{ path: 'ob_subset.jpg', title: 'OB pier, San Diego, California' },
				{ path: 'bratislava.jpg', title: 'Bratislava Castle, Slovakia' },
				{ path: 'hertfordbridge.JPG', title: 'Hertford Bridge in Oxford, UK' },
				{ path: 'abstractcanoe.jpg', title: 'Watercolor dream' },
				{ path: 'barn.jpg', title: 'Barn in the snow' },
				{ path: 'candace.jpg', title: 'Moonlit river' },
				{ path: 'frame.JPG', title: 'Winter cabin' },
				{ path: 'knox.JPG', title: 'Knoxville, tennessee' },
				{ path: 'whitney.jpg', title: 'Mount Whitney, Sierra Nevada, California' },
				{ path: 'adams.jpg', title: 'Mount Adams, Cascades, Washington' },
				{ path: 'virginiapass.jpg', title: 'Virginia pass, Sierra Nevada, California' },
				{ path: 'oldtruck.jpg', title: 'Old truck in Joshua Tree, California' },
				{ path: 'barninsnow.jpg', title: 'Barn in snow' },
				{ path: 'lauren_wedding.jpg', title: 'Lauren and Austin getting married' },
				{ path: 'skull.jpg', title: 'Bad omens' },
				{ path: 'watercolorvolcano.jpg', title: 'Prehistoric landscape' }
			]
		},
		{
			name: 'Acrylic, digital, and mixed media',
			items: [
				{ path: 'tripanelsilverlake.jpg', title: 'Silver Lake, Sierra Nevada' },
				{ path: 'leroy.jpg', title: 'Dark winter night' },
				{ path: 'pier.JPG', title: 'Ocean Beach pier, California' },
				{ path: 'skulllogo.jpg', title: 'Label for muckley brewing company' },
				{ path: 'egretsunset.jpg', title: 'Egret sunset' },
				{ path: 'obremix.jpg', title: 'Ocean Beach, San Diego, California' },
				{ path: 'wave_birds.jpg', title: 'Birds in the sunset' },
				{ path: 'wavemnt.jpg', title: 'Waves and mountains' },
				{ path: 'volcanosun.jpg', title: 'Volcano with rising sun' },
				{ path: 'colorwaves.jpg', title: 'Big Sur, California' },
				{ path: 'bridge_fog.jpg', title: 'Fog in San Francisco, California' },
				{ path: 'buddha.jpg', title: 'Serenity' },
				{ path: 'waveroad.jpg', title: 'Beach town' },
				{ path: 'sixcrane.jpg', title: 'Label for six crane IPA' },
				{ path: 'sunset.JPG', title: 'Trees with sunset' },
				{ path: 'winterroad.jpg', title: 'Dark road' }
			]
		},
		{
			name: 'Pencil and Pen',
			items: [
				{ path: 'birdwallpic.jpg', title: 'Birds drawn on the wall' },
				{ path: 'wavetree.jpg', title: 'Tree on beach' },
				{ path: 'oxford_pencil.jpg', title: 'Oxford, UK' },
				{ path: 'pencil_forest.jpg', title: 'Sierra Nevada, California' },
				{ path: 'pop.JPG', title: 'Pop' },
				{ path: 'buildingjumble.jpg', title: 'Concrete jungle' }
			]
		}
	];

	const music = [
		{ name: 'Anthem guitar', url: 'metal guitar leads.mp3' },
		{ name: 'Pianos', url: 'pianos.mp3' },
		{ name: 'Strings', url: 'realverse.mp3' },
		{ name: 'Steel drum with bass', url: 'steel drum and bass.mp3' },
		{ name: 'Dark hiphop', url: 'dark hiphop.mp3' }
	];
</script>

<h1 class="page-title">ART</h1>

{#each categories as category}
	<div class="box">
		<p class="box-title">{category.name}</p>
		<div class="flex flex-wrap gap-10 mt-12">
			{#each category.items as item}
				<div>
					<ImagePopout title={item.title} path={'/art/' + item.path} />
				</div>
			{/each}
		</div>
	</div>
{/each}

<div class="box">
	<p class="box-title">Music</p>
	<div class="mt-8 space-y-6">
		{#each music as item}
			<div>
				<h4 class="pl-6 mb-2">{item.name}</h4>
				<audio src="/music/{item.url}" controls>
					<track kind="captions" />
				</audio>
			</div>
		{/each}
	</div>
</div>
