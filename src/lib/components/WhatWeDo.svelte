<script lang="ts">
	import Cpu from 'lucide-svelte/icons/cpu';
	import FlaskConical from 'lucide-svelte/icons/flask-conical';
	import Globe from 'lucide-svelte/icons/globe';
	import Users2 from 'lucide-svelte/icons/users-2';

	const services = [
		{
			title: 'Digital Innovation',
			desc: 'Mengembangkan aplikasi dan platform digital yang memudahkan layanan administrasi dan akademik.',
			icon: Cpu,
			color: 'bg-blue-50 text-blue-600'
		},
		{
			title: 'Applied Research',
			desc: 'Melakukan riset mendalam terhadap tren teknologi terbaru untuk diimplementasikan di lingkungan kampus.',
			icon: FlaskConical,
			color: 'bg-purple-50 text-purple-600'
		},
		{
			title: 'Global Technology',
			desc: 'Menghubungkan UIN Raden Fatah dengan standar teknologi global melalui integrasi sistem modern.',
			icon: Globe,
			color: 'bg-emerald-50 text-emerald-600'
		},
		{
			title: 'Strategic Collaboration',
			desc: 'Membangun jejaring dengan berbagai pihak untuk mempercepat hilirisasi produk inovasi.',
			icon: Users2,
			color: 'bg-amber-50 text-amber-600'
		}
	];
</script>

<section id="services" class="section-padding bg-white">
	<div class="mx-auto max-w-7xl">
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h2 class="mb-4 font-display text-2xl font-extrabold text-primary md:text-3xl">
				Fokus Utama Pengembangan
			</h2>
			<p class="text-base text-slate-500">
				Kami bergerak di berbagai lini untuk memastikan ekosistem digital kampus tetap relevan dan
				kompetitif.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#each services as service (service.title)}
				<div
					class="group rounded-xl border border-slate-100 bg-white p-8 transition-all duration-300 hover:shadow-lg"
				>
					<div class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg {service.color}">
						<service.icon size={24} />
					</div>
					<h3 class="mb-3 text-lg font-bold text-primary">{service.title}</h3>
					<p class="text-sm leading-relaxed text-slate-500">
						{service.desc}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
