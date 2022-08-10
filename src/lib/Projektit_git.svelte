<script>
	import TwitterIcon from './icons/TwitterIcon48.svelte';
	import GitHubIcon from './icons/GitHubIcon48.svelte';
	import WwwPageIcon from './icons/WwwPageIcon48.svelte';
	export let projects_git;
	import { marked } from 'marked';
</script>

{#each projects_git.user.pinnedItems.nodes as { avatarUrl, name, createdAt, description, homepageUrl, languages, url }}
	<div class="card max-h-fit w-80 max-w-xl bg-base-100 border">
		<figure class="mt-10">
			<img class="rounded-xl" src="figure.jpg" alt={`Cover image for ${name}`} />
		</figure>
		<div class="card-body content-center">
			<h2 class="card-title">{name}</h2>
			<div class="prose prose-base h-40">
				{#if description}
					{@html marked(description)}
				{/if}
			</div>
			<div />
			<div class="flex justify-center flex-wrap h-20">
				{#each languages.nodes as nuudeli}
					<span class="badge badge-accent min-w-fit p-4 m-1 text-cyan-800" title="tag"
						>{nuudeli.name}</span
					>
				{/each}
			</div>
			<div class="card-actions flex-wrap justify-center content-end mt-5 h-40 space-x-5">
				<span class="text-cyan-800">
					{#if homepageUrl}
						<a href={homepageUrl} target="_blank">
							<label for="demolink" tabindex="0" title="{name}'s Page" aria-label="{name}'s Page">
								<span id="demolink"> Demo <WwwPageIcon /></span>
							</label>
						</a>
					{/if}
				</span>
				<span class="text-cyan-800">
					<a href={url} target="_blank">
						<label
							for="githublink"
							tabindex="0"
							title="Read {name}'s source in GitHub"
							aria-label="Read {name}'s source in GitHub"
						>
							<span id="githublink"> GitHub <GitHubIcon /></span>
						</label>
					</a>
				</span>
			</div>
		</div>
	</div>
{/each}
