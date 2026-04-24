<script lang="ts">
	import { onMount } from 'svelte';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';

	let visible = $state(false);
	onMount(() => {
		setTimeout(() => (visible = true), 100);
	});
</script>

<section
	class="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 text-center"
>
	<!-- Decorative background -->
	<div class="absolute inset-0 -z-10">
		<div
			class="absolute top-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-accent/5 opacity-50 blur-3xl md:h-[600px] md:w-[800px]"
		></div>
		<div
			class="absolute bottom-0 left-1/2 h-[200px] w-[200px] -translate-x-1/2 rounded-full bg-primary/5 opacity-50 blur-3xl md:h-[400px] md:w-[600px]"
		></div>

		<!-- Subtle Grid Pattern -->
		<div
			class="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent)] opacity-[0.03]"
		>
			<svg width="100%" height="100%">
				<pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
					<path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="1" />
				</pattern>
				<rect width="100%" height="100%" fill="url(#hero-grid)" />
			</svg>
		</div>
	</div>

	<div class="mx-auto flex max-w-4xl flex-col items-center px-6 md:px-12">
		<div
			class="flex flex-col items-center space-y-6 md:space-y-8 {visible
				? 'animate-fade-up'
				: 'opacity-0'}"
		>
			<h1 class="px-2 font-display text-4xl leading-tight font-extrabold text-primary md:text-6xl">
				Mendorong <span class="text-logo-gradient">Masa Depan</span> <br class="hidden md:block" /> Digital
				Kampus.
			</h1>

			<p class="mx-auto max-w-2xl px-4 text-base leading-relaxed text-slate-600 md:text-xl">
				Tim Inovasi UIN Raden Fatah berdedikasi untuk menciptakan solusi teknologi yang
				transformatif dan inklusif bagi civitas akademika.
			</p>

			<div
				class="flex w-full flex-col justify-center gap-4 px-6 pt-4 sm:w-auto sm:flex-row sm:px-0"
			>
				<a
					href="https://rafanovation.cloud"
					class="group flex items-center justify-center gap-3 rounded-lg bg-primary px-8 py-4 font-bold text-white shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:bg-slate-800 active:scale-95"
				>
					Mulai Berinovasi
					<ArrowRight size={18} class="transition-transform group-hover:translate-x-1" />
				</a>
				<a
					href="#about"
					class="rounded-lg border border-slate-200 px-8 py-4 text-center font-bold text-slate-700 transition-all hover:scale-105 hover:bg-slate-50 active:scale-95"
				>
					Pelajari Lebih Lanjut
				</a>
			</div>
		</div>
	</div>
</section>
