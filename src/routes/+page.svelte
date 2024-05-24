<script lang="ts">
	import { education, skills, patents, experience } from '$lib/constants';
</script>

<h1 class="page-title">EXPERIENCE</h1>


<div class="box">
	<p class="box-title">Technical expertise</p>
	<div class="space-y-8 mt-8">
		{#each skills as item}
			<div>
				<h4>{item.topic}</h4>
				<div class="mt-4 border-dim2 flex flex-wrap gap-2">
					{#each item.items as skill}
						<span class="bg-slate-900 px-4 rounded-lg py-1 text-dim text-sm">
							{skill}
						</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>


<div class="box">
	<p class="box-title">Professional experience</p>
	<ul class="space-y-6 mt-3">
		{#each experience as item}
			<li>
				<div class="mt-1 my-1">
					{#each item.roles as role}
						<div class="flex space-x-2">
							<h4 class="font-bold">{role.period}</h4>
							<h4>{role.name}</h4>
						</div>
					{/each}
				</div>

				<p>
					{#if item.url}
						<a href={item.url} target="_blank">
							{item.org}<i class="bi bi-box-arrow-right ml-2" />
						</a>
					{:else}
						{item.org}
					{/if}
				</p>
				<p class="text-sm mt-1">{item.description}</p>
				<!--
				<a href={item.url} target="_blank">
					{item.text}<i class="bi bi-box-arrow-right ml-2" />
				</a>
                -->
			</li>
		{/each}
	</ul>
</div>

<div class="box">
	<p class="box-title">Education</p>
	<ul class="mt-8 space-y-8">
		{#each education as item}
			<li>
				<h4>{item.degree}</h4>
				<div class="mt-2 border-dim2 text-sm">
					<p>{item.year} {item.location}</p>
					<a href="/theses/{item.url}" target="_blank">
						{item.thesis}<i class="bi bi-box-arrow-right ml-2" />
					</a>
				</div>
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
	<ul class="space-y-8 mt-3">
		{#each patents as item}
			<li>
				<a href={item.url} target="_blank">
					{item.text}<i class="bi bi-box-arrow-right ml-2" />
				</a>
			</li>
		{/each}
	</ul>
</div>
