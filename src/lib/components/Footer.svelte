<script lang="ts">
	import Code from 'lucide-svelte/icons/code';
	import MessageSquare from 'lucide-svelte/icons/message-square';
	import Camera from 'lucide-svelte/icons/camera';
	import Mail from 'lucide-svelte/icons/mail';
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<footer class="bg-slate-950 pt-20 pb-10 text-white">
	<div class="mx-auto max-w-7xl px-6 md:px-12">
		<div class="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
			<div class="lg:col-span-2">
				<h3 class="mb-6 font-display text-2xl font-bold">
					Tim Inovasi <span class="text-accent">UIN Raden Fatah</span>
				</h3>
				<p class="mb-8 max-w-sm leading-relaxed text-slate-400">
					Mendorong transformasi digital dan keunggulan akademik melalui inovasi teknologi yang
					berkelanjutan di lingkungan UIN Raden Fatah.
				</p>
				<div class="flex gap-4">
					<a
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
						class="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition-colors hover:bg-accent"
						title="Instagram"
					>
						<Camera size={20} />
					</a>
					<a
						href="https://twitter.com"
						target="_blank"
						rel="noopener noreferrer"
						class="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition-colors hover:bg-accent"
						title="Twitter"
					>
						<MessageSquare size={20} />
					</a>
					<a
						href="https://github.com"
						target="_blank"
						rel="noopener noreferrer"
						class="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition-colors hover:bg-accent"
						title="GitHub"
					>
						<Code size={20} />
					</a>
				</div>
			</div>

			<div>
				<h4 class="mb-6 text-sm font-bold tracking-widest text-accent uppercase">Navigasi</h4>
				<ul class="space-y-4 text-slate-400">
					<li><a href="#about" class="transition-colors hover:text-white">Tentang Kami</a></li>
					<li><a href="#services" class="transition-colors hover:text-white">Fokus Kami</a></li>
					<li><a href="#benefits" class="transition-colors hover:text-white">Manfaat</a></li>
					<li>
						<a href="https://rafanovation.cloud" class="transition-colors hover:text-white"
							>Portal Inovasi</a
						>
					</li>
				</ul>
			</div>

			<div>
				<h4 class="mb-6 text-sm font-bold tracking-widest text-accent uppercase">Kontak</h4>
				<ul class="space-y-4 text-slate-400">
					<li class="flex items-center gap-3">
						<Mail size={18} class="text-accent" />
						inovasi@radenfatah.ac.id
					</li>
					<li class="text-sm">
						Jl. Prof. KH. Zainal Abidin Fikri No.1, KM. 3.5, Sumatera Selatan.
					</li>
				</ul>
			</div>
		</div>

		<div
			class="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-slate-500 md:flex-row"
		>
			<p>© 2024 Tim Inovasi UIN Raden Fatah. All rights reserved.</p>
			<div class="flex gap-8">
				<a href="/" class="hover:text-white">Privacy Policy</a>
				<a href="/" class="hover:text-white">Terms of Service</a>
			</div>
		</div>
	</div>
</footer>
