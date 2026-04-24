<script lang="ts">
	import Users from 'lucide-svelte/icons/users';
	import Target from 'lucide-svelte/icons/target';
</script>

<section id="about" class="section-padding bg-slate-50">
	<div class="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
		<div>
			<h2 class="mb-6 font-display text-3xl font-extrabold text-primary md:text-4xl">
				Membangun Ekosistem Inovasi yang Berkelanjutan
			</h2>
			<p class="mb-8 text-lg leading-relaxed text-slate-600">
				Tim Inovasi UIN Raden Fatah adalah unit strategis yang berfokus pada pengembangan teknologi
				dan metodologi baru untuk meningkatkan kualitas pendidikan, penelitian, dan pengabdian
				masyarakat. Kami percaya bahwa teknologi harus menjadi jembatan menuju inklusivitas dan
				keunggulan akademik.
			</p>

			<div class="space-y-6">
				<div class="flex gap-4">
					<div
						class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-accent shadow-sm"
					>
						<Target size={24} />
					</div>
					<div>
						<h4 class="font-bold text-primary">Misi Kami</h4>
						<p class="text-slate-500">
							Mengintegrasikan teknologi mutakhir ke dalam kurikulum dan administrasi kampus.
						</p>
					</div>
				</div>
				<div class="flex gap-4">
					<div
						class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-accent shadow-sm"
					>
						<Users size={24} />
					</div>
					<div>
						<h4 class="font-bold text-primary">Kolaborasi</h4>
						<p class="text-slate-500">
							Bekerja sama dengan mahasiswa dan dosen untuk mewujudkan ide-ide brilian.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="grid grid-cols-2 gap-4">
			<div class="mt-12 rounded-xl border border-slate-100 bg-white p-8 shadow-sm">
				<p class="mb-2 font-display text-4xl font-bold text-accent">100%</p>
				<p class="text-sm font-medium tracking-wide text-slate-500 uppercase">Komitmen Digital</p>
			</div>
			<div class="rounded-xl bg-primary p-8 text-white shadow-xl">
				<p class="mb-2 font-display text-4xl font-bold">24/7</p>
				<p class="text-sm font-medium tracking-wide uppercase opacity-70">Inovasi Berkelanjutan</p>
			</div>
			<div class="rounded-xl border border-slate-100 bg-white p-8 shadow-sm">
				<p class="mb-2 font-display text-4xl font-bold text-accent">50+</p>
				<p class="text-sm font-medium tracking-wide text-slate-500 uppercase">Talenta Kreatif</p>
			</div>
			<div class="-mt-12 rounded-xl border border-slate-100 bg-white p-8 shadow-sm">
				<p class="mb-2 font-display text-4xl font-bold text-accent">10+</p>
				<p class="text-sm font-medium tracking-wide text-slate-500 uppercase">Partner Industri</p>
			</div>
		</div>
	</div>
</section>
