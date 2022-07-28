<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/projects.json');
		if (res.ok) {
			const { projects } = await res.json();
			return {
				props: { projects }
			};
		}
	};
</script>

<script>
	export let projects;
</script>

{#each projects as { name, description }}
	<div class="card w-96 bg-base-100 shadow-xl">
		<div class="card-body">
			<h2 class="card-title">{name}</h2>
			<p>{description}</p>
			<div class="card-actions justify-end">
				<button class="btn btn-primary">Lue lisää</button>
				<button class="btn btn-primary">Koodi</button>
			</div>
		</div>
	</div>
{/each}
