<script>
	export let projects;
	import { marked } from 'marked';
</script>

{#each projects as { name, slug, description, tags, image, demo, sourceCode }}
	<div class="card justify-content max-h-fit w-80 max-w-xl bg-base-100 border">
		<figure class="mt-10">
			<img class="rounded-xl " src={image[0].url} alt={`Cover image for ${name}`} />
		</figure>
		<div class="card-body">
			<h2 class="card-title">{name}</h2>
			<article div class="prose prose-base">
				{@html marked(description)}
			</article>
			<div class="flex justify-center mt-5 space-x-2 flex-wrap">
				{#each tags as tag}
					<span class="badge badge-accent min-w-fit p-4 m-1">{tag}</span>
				{/each}
			</div>

			<div class="card-actions justify-center mt-5">
				<a href={sourceCode} target="_blank"
					><img width="40" src="GitHub-Mark-64px.png" alt="Source GitHub" /></a
				>
			</div>
		</div>
	</div>
{/each}
