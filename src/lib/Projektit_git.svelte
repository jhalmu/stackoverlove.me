<script>
	export let projects_git;
	import { marked } from 'marked';
</script>

{#each projects_git.user.pinnedItems.nodes as { name, createdAt, description, languages, url }}
	<div class="card justify-content max-h-fit w-80 max-w-xl bg-base-100 border">
		<figure class="mt-10">
			<img
				class="rounded-xl"
				src="figure.jpg"
				alt={`Cover image for ${name}`}
				title={`Cover image for ${name}`}
			/>
		</figure>
		<div class="card-body">
			<h2 class="card-title">{name}</h2>
			<p class="prose prose-base">
				{#if description}
					{@html marked(description)}
				{/if}
			</p>
			<div class="flex justify-center mt-5 space-x-2 flex-wrap">
				{#each languages.nodes as nuudeli}
					<span class="badge badge-accent min-w-fit p-4 m-1" title="tag">{nuudeli.name}</span>
				{/each}
			</div>

			<div class="card-actions justify-center mt-5">
				<a href={url} target="_blank"
					><img
						width="40"
						src="GitHub-Mark-64px.png"
						alt="Read source in GitHub"
						title="Read {name}'s source in GitHub"
						aria-label="Read {name}'s source in GitHub"
					/></a
				>
			</div>
		</div>
	</div>
{/each}
