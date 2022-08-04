<script context="module">
	import Projektit_git from '$lib/Projektit_git.svelte';
	export const load = async ({ fetch }) => {
		const res = await fetch('/git.json');
		if (res.ok) {
			const { projects_git } = await res.json();
			return {
				props: { projects_git }
			};
		}
	};
</script>

<script>
	import Headroom from 'svelte-headroom';
	import '$lib/global.css';
	import Nav from '$lib/Nav.svelte';
	import About from '$lib/About.svelte';
	import BackToTop from '$lib/BackToTop.svelte';
	export let projects_git;
</script>

<svelte:head>
	<title>Juhan sivut | Welcome</title>
</svelte:head>

<header class="sticky z-50 ">
	<Headroom duration="300ms" offset={50} tolerance={0}>
		<nav class="navbar sticky z-50">
			<Nav />
		</nav>
	</Headroom>
</header>

<main class="mx-auto mt-40 col-3 -z-50">
	<article class="hero min-h-fit z-[100]" id="start">
		<div class="hero-overlay bg-opacity-60" />
		<section class="hero-content text-center text-neutral-content p-5">
			<div class="max-w-md">
				<h1 class="text-5xl">Tervetuloa</h1>
				<p class="py-6">
					Minä olen Juha Halmu. Näille sivuille kerään informaatiota tekemisistäni. Aloittele vaikka
					projekteista. Githubissa lisää halutusta projektista.
				</p>
				<span class="mr-5"><a href="#about" class="btn btn-primary">Lue lisää</a></span><span>
					<a href="#yhteys" class="btn btn-primary">Ota yhteyttä</a></span
				>
			</div>
		</section>
	</article>

	<article id="projects">
		<section class="flex flex-wrap gap-8 justify-center">
			<div class="hero flex flex-wrap justify-center mb-2 mt-8 text-4xl font-extralight ">
				<h2>Projektit</h2>
			</div>
			<Projektit_git {projects_git} />
		</section>
	</article>

	<article id="about">
		<section class="flex flex-wrap gap-8 justify-center">
			<div class="hero flex flex-wrap justify-center mb-2 mt-8 text-4xl font-extralight ">
				<h2>About</h2>
			</div>
			<About />
		</section>
	</article>
</main>
<footer class="footer p-40  text-base-content mt-4">
	<div>
		<svg
			width="30"
			height="30"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			fill-rule="evenodd"
			clip-rule="evenodd"
			class="fill-current"
			><path
				d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
			/></svg
		>
		<p>Juha Halmu<br />Coding in rabbithole since stoneage</p>
	</div>
	<div>
		<span class="footer-title">Oikeudet</span>
		<p>&copy; Juha Halmu ja oikeudenomistajat.</p>
		<p>
			Tämä sivusto käyttää keksejä, <br /> että matkasi olisi mukavampi.
		</p>
		<p>
			<input id="gdprs" type="checkbox" name="gdprsRulesOk" /> <label for="gdprs">Oukei?</label>
		</p>
	</div>
	<div>
		<span class="footer-title">Yhteys</span>
		Laita spostia (qr-lukija tai puhelimen kamera)
		<img src="osoite.png" alt="Lähetä postia!" />
		<a
			class="link link-hover"
			href="https://www.linkedin.com/in/juha-halmu-430751232/"
			target="_blank">tai pistä viestiä LinkedIn:in kautta</a
		>
	</div>
	<div id="yhteys">
		<span class="footer-title">Vanhat blogit ym</span>
		<a class="link link-hover" href="https://dividends-o-matic.net/" target="_blank"
			>dividends-o-matic.net</a
		>
		<a class="link link-hover" href="https://juhahalmu.wordpress.com/" target="_blank">WP</a>
		<a class="link link-hover" href="https://www.flickr.com/photos/juhahalmu/" target="_blank"
			>Flickr</a
		>
	</div>
</footer>
<div><BackToTop /></div>
