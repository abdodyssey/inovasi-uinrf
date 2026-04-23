<script lang="ts">
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import WhatWeDo from '$lib/components/WhatWeDo.svelte';
	import WhyJoinUs from '$lib/components/WhyJoinUs.svelte';
	import CTABanner from '$lib/components/CTABanner.svelte';
	import Footer from '$lib/components/Footer.svelte';

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
				}
			});
		}, { threshold: 0.1 });

		document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
	});
</script>

<svelte:head>
	<title>Tim Inovasi UIN Raden Fatah | Digital Transformation</title>
	<meta name="description" content="Official Innovation Team of UIN Raden Fatah. Empowering academic excellence through digital transformation." />
</svelte:head>

<Navbar />

<main>
	<Hero />
	<div class="reveal">
		<About />
	</div>
	<div class="reveal">
		<WhatWeDo />
	</div>
	<div class="reveal">
		<WhyJoinUs />
	</div>
	<div class="reveal">
		<CTABanner />
	</div>
</main>

<Footer />

<style>
	/* Individual section transitions can be tuned here if needed */
</style>
