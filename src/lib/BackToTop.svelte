<script>
	export let showOnPx = 150;
	let hidden = true;

/* 	function hideHero() {
		document.getElementById('start').style.display = 'none';
	} */

	function goTop() {
		document.body.scrollIntoView();
		//hideHero();
	}

	function scrollContainer() {
		return document.documentElement || document.body;
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return;
		}

		if (scrollContainer().scrollTop > showOnPx) {
			hidden = false;
		} else {
			hidden = true;
		}
	}
</script>



<style>
	.back-to-top {
		opacity: 1;
		transition: opacity 1s, visibility 1s;
		position: fixed;
		z-index: 99;
		right: 20px;
		user-select: none;
		bottom: 20px;
	}

	.back-to-top.hidden {
		opacity: 0;
		visibility: hidden;
	}
</style>
<svelte:window on:scroll={handleOnScroll} />

<div class="back-to-top btn btn-primary" on:click={goTop} class:hidden>Takaisin ylös</div>