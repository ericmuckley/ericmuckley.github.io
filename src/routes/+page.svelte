<script lang="ts">
	const education = [
		{
			year: '2019',
			degree: 'Ph.D. Energy Science and Engineering',
			location: 'University of Tennessee, Knoxville, TN',
			thesis: 'High-throughput materials characterization with real time analytics and feedback',
			url: 'ESM_PhD_dissertation.pdf'
		},
		{
			year: '2013',
			degree: 'M.S. Applied Physics',
			location: 'California State University, Long Beach, CA',
			thesis: 'Optimizing film morphology in organic photovoltaics',
			url: 'ESM_MS_thesis.pdf'
		},
		{
			year: '2009',
			degree: 'B.S. Physics',
			location: 'California Polytechnic State University, San Luis Obispo, CA',
			thesis: 'Constructing a magneto-optical trap for cold atom trapping',
			url: 'ESM_MOT.pdf'
		}
	];

	const skills = [
		{
			topic: 'AI + language models + NLP',
			items: [
				'OpenAI',
				'Bedrock',
				'Anthropic',
				'Llama3',
				'Sagemaker',
				'ChromaDB',
				'Pinecone',
				'Milus/Ziliz',
				'pgVector',
				'Huggingface',
				'Transformers',
				'Spacy',
				'NLTK',
				'Neo4J',
				'Neptune'
			]
		},
		{
			topic: 'Data science + machine learning',
			items: [
				'Pytorch',
				'Tensorflow',
				'Keras',
				'Scikit-learn',
				'Scipy',
				'Pandas',
				'Numpy',
				'Matplotlb',
				'Plotly',
				'RDKit',
				'Matminer',
				'Pymatgen',
				'SQL',
				'MongoDB',
				'Matlab'
			]
		},
		{
			topic: 'Hardware + software integration',
			items: [
				'NI DAQ',
				'LabView',
				'Serial communication',
				'Raspberry Pi',
				'Arduino',
				'Adafruit',
				'Teensy'
			]
		},
		{
			topic: 'Full-stack web development',
			items: [
				'Javascript',
				'Typescript',
				'Node.js',
				'Express.js',
				'React',
				'Next.js',
				'Sveltekit',
				'FastAPI',
				'Django',
				'Flask',
				'D3.js',
				'Plotly.js',
				'Cytoscape.js',
				'Three.js',
				'Tailwind',
				'Bootstrap',
				'Material design',
				'Git',
				'HTML',
				'CSS'
			]
		},
		{
			topic: 'Laboratory',
			items: [
				'vacuum systems',
				'diode laser assembly + operation',
				'compressed gas halding',
				'electronics protyping',
				'soldering',
				'sputter deposition',
				'thermal evaporation',
				'spin-coating',
				'QCMD',
				'AFM/KPFM',
				'TGA',
				'BET',
				'EIS',
				'SPE',
				'XRD',
				'XRR',
				'AGM',
				'VSM'
			]
		},
		{
			topic: 'Blockchain + web3',
			items: [
				{ text: 'Solidity, Hardhat, Truffle, Infura, Moralis', url: '' },
				{ text: 'Ethers.js, Web3.js, Web3.py', url: '' },
				{ text: 'Etherscan API, OpenSea API', url: '' }
			]
		},
		{
			topic: 'Multimedia',
			items: [
				{ text: 'Adobe Photoshop, Adobe Premiere, GIMP, iMovie', url: '' },
				{ text: 'OriginPro, ImageJ', url: '' },
				{ text: 'Blender, CAD, ', url: '' },
				{ text: 'Drawing, Watercolors, Acrylic', url: '' }
			]
		}
	];

	const patents = [
		{
			url: 'https://patentimages.storage.googleapis.com/7e/1d/27/9ae03499badf76/US20220088876A1.pdf',
			text: 'Additive manufacturing system with at least one electronic nose'
		},
		{
			url: 'https://patentimages.storage.googleapis.com/da/2e/22/6ebb3e19ae7536/US20220091571A1.pdf',
			text: 'Multimodal dynamic characterization of materials under programmable environments and environment prediction (pending)'
		},
		{
			url: 'https://patentimages.storage.googleapis.com/c9/ef/c3/185ebd80a502f7/US20220091083A1.pdf',
			text: 'Chemical detection system with at least one electronic nose (pending)'
		},
		{
			url: 'https://patentimages.storage.googleapis.com/db/c0/53/f012135c36b06d/US20220091081A1.pdf',
			text: 'Aroma detection systems for food and beverage and conversion of detected aromas to natural language descriptors (pending'
		}
	];
</script>

<div class="box">
	<p class="box-title">Education</p>
	<ul class="space-y-3 mt-3">
		{#each education as item}
			<li>
				<h4>{item.degree}</h4>
				<p>{item.year} {item.location}</p>
				<a href="/theses/{item.url}" target="_blank">
					{item.thesis}<i class="bi bi-box-arrow-right ml-2" />
				</a>
			</li>
		{/each}
	</ul>
</div>

<div class="box">
	<p class="box-title">Peer-reviewed journal publications (30+)</p>
	<p>
		Updated publication list at
		<a href="https://scholar.google.com/citations?hl=en&user=KnSc4mMAAAAJ">
			Google Scholar<i class="bi bi-box-arrow-right ml-2" />
		</a>
	</p>
</div>

<div class="box">
	<p class="box-title">Patents</p>
	<ul class="space-y-3 mt-3">
		{#each patents as item}
			<li>
				<a href={item.url} target="_blank">
					{item.text}<i class="bi bi-box-arrow-right ml-2" />
				</a>
			</li>
		{/each}
	</ul>
</div>

<div class="box">
	<p class="box-title">Technical expertise</p>
</div>
