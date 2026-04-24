<script lang="ts">
	import { onMount } from 'svelte';
	import Menu from 'lucide-svelte/icons/menu';
	import X from 'lucide-svelte/icons/x';

	let scrolled = $state(false);
	let mobileMenuOpen = $state(false);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	const navLinks = [
		{ name: 'About', href: '#about' },
		{ name: 'What We Do', href: '#services' },
		{ name: 'Benefits', href: '#benefits' },
		{ name: 'Saran / Feedback', href: '#feedback' }
	];
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<nav
	class="fixed top-0 right-0 left-0 z-50 transition-all duration-300 {scrolled
		? 'bg-white/90 py-2 shadow-sm backdrop-blur-md'
		: 'bg-transparent py-4'}"
>
	<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12">
		<a href="/" class="flex h-full items-center">
			<img src="/logo.png" alt="Tim Inovasi UINRF Logo" class="h-8 w-auto object-contain md:h-10" />
		</a>

		<!-- Desktop Nav -->
		<div class="hidden h-full items-center gap-8 md:flex">
			{#each navLinks as link (link.name)}
				<a
					href={link.href}
					class="text-sm font-medium text-slate-600 transition-colors hover:text-accent"
				>
					{link.name}
				</a>
			{/each}
			<a
				href="https://rafanovation.cloud"
				class="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-slate-800"
			>
				Portal Inovasi
			</a>
		</div>

		<!-- Mobile Toggle -->
		<button
			class="text-slate-900 md:hidden"
			onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
			aria-label="Toggle Menu"
		>
			{#if mobileMenuOpen}
				<X size={24} />
			{:else}
				<Menu size={24} />
			{/if}
		</button>
	</div>

	<!-- Mobile Menu -->
	{#if mobileMenuOpen}
		<div
			class="absolute top-full right-0 left-0 flex flex-col gap-4 border-t border-slate-100 bg-white p-6 shadow-xl md:hidden"
		>
			{#each navLinks as link (link.href)}
				<a
					href={link.href}
					class="text-lg font-medium text-slate-700"
					onclick={() => (mobileMenuOpen = false)}
				>
					{link.name}
				</a>
			{/each}
			<a
				href="https://rafanovation.cloud"
				class="rounded-lg bg-accent px-5 py-3 text-center font-bold text-white"
			>
				Portal Inovasi
			</a>
		</div>
	{/if}
</nav>
