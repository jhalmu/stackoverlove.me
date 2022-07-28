<script>
	export let projects;
</script>

{#each projects as { name, slug, description, tags, image, demo, sourceCode }}
	<div class="card w-96 max-w-xl bg-base-100 border">
		<figure class="px-10 pt-10">
			<img class="rounded-xl" src={image[0].url} alt={`Cover image for ${name}`} />
		</figure>
		<div class="card-body">
			<h2 class="card-title">{name}</h2>
			<p>{description}</p>
			<div class="flex justify-center mt-5 space-x-2">
				{#each tags as tag}
					<span class="badge badge-primary">{tag}</span>
				{/each}
			</div>
			
<!-- 			<div class="card-actions justify-end">
				<a href={`/projects/${slug}`} class="btn btn-primary">Lisää</a>
				<a href={sourceCode} class="btn btn-primary">Koodi</a>
			</div> -->
		</div>
	</div>
{/each}
