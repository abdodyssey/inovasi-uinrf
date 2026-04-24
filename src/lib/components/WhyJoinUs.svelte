<script lang="ts">
	import Zap from 'lucide-svelte/icons/zap';
	import BookOpen from 'lucide-svelte/icons/book-open';
	import Rocket from 'lucide-svelte/icons/rocket';

	const benefits = [
		{
			title: 'Akses Teknologi Terbaru',
			desc: 'Dapatkan kesempatan bekerja dengan alat dan teknologi mutakhir sebelum orang lain.',
			icon: Zap
		},
		{
			title: 'Pembelajaran Intensif',
			desc: 'Tingkatkan skill teknis dan manajerial melalui berbagai proyek nyata berskala universitas.',
			icon: BookOpen
		},
		{
			title: 'Jejaring Profesional',
			desc: 'Terhubung dengan pakar industri dan komunitas inovator di seluruh Indonesia.',
			icon: Rocket
		}
	];
</script>

<section id="benefits" class="section-padding bg-slate-900 text-white">
	<div class="mx-auto max-w-7xl">
		<div class="grid gap-12 lg:grid-cols-3">
			{#each benefits as benefit (benefit.title)}
				<div class="flex flex-col items-center text-center">
					<div
						class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-white/5 text-slate-400"
					>
						<benefit.icon size={32} />
					</div>
					<h3 class="mb-4 font-display text-xl font-bold">{benefit.title}</h3>
					<p class="max-w-xs text-sm leading-relaxed text-slate-400">
						{benefit.desc}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
