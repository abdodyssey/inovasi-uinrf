<script lang="ts">
	import ExternalLink from 'lucide-svelte/icons/external-link';
</script>

<section class="section-padding">
	<div class="mx-auto max-w-7xl">
		<div
			class="relative overflow-hidden rounded-xl bg-primary p-8 text-white shadow-2xl md:p-12 lg:p-16"
		>
			<!-- Decorative elements -->
			<div
				class="absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
			></div>
			<div
				class="absolute bottom-0 left-0 -mb-20 -ml-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
			></div>

			<!-- Subtle Grid -->
			<div
				class="absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)] opacity-10"
			>
				<svg width="100%" height="100%">
					<pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
						<path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="1" />
					</pattern>
					<rect width="100%" height="100%" fill="url(#cta-grid)" />
				</svg>
			</div>

			<div class="relative z-10 flex flex-col items-center justify-between gap-12 lg:flex-row">
				<div class="max-w-2xl text-center lg:text-left">
					<h2 class="mb-6 font-display text-2xl leading-tight font-extrabold md:text-4xl">
						Siap untuk Menjadi Bagian dari Perubahan?
					</h2>
					<p class="text-base leading-relaxed text-slate-300 md:text-lg">
						Bergabunglah dengan Tim Inovasi dan bantu kami membangun masa depan digital UIN Raden
						Fatah yang lebih cerah.
					</p>
				</div>

				<a
					href="https://rafanovation.cloud"
					class="group flex shrink-0 items-center gap-3 rounded-lg bg-white px-8 py-4 font-bold text-primary shadow-xl transition-all hover:bg-slate-100"
				>
					Gabung Sekarang
					<ExternalLink size={20} class="text-accent" />
				</a>
			</div>
		</div>
	</div>
</section>
