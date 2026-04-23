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
  ];
</script>

<nav
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}"
>
  <div class="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-16">
    <a href="/" class="flex items-center h-full">
      <img src="/logo.png" alt="Tim Inovasi UINRF Logo" class="h-8 md:h-10 w-auto object-contain" />
    </a>

    <!-- Desktop Nav -->
    <div class="hidden md:flex items-center gap-8 h-full">
      {#each navLinks as link}
        <a
          href={link.href}
          class="text-sm font-medium text-slate-600 hover:text-accent transition-colors"
        >
          {link.name}
        </a>
      {/each}
      <a
        href="https://rafanovation.cloud"
        class="bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-all"
      >
        Portal Inovasi
      </a>
    </div>

    <!-- Mobile Toggle -->
    <button
      class="md:hidden text-slate-900"
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
    <div class="md:hidden bg-white border-t border-slate-100 absolute top-full left-0 right-0 p-6 flex flex-col gap-4 shadow-xl">
      {#each navLinks as link}
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
        class="bg-accent text-white px-5 py-3 rounded-lg text-center font-bold"
      >
        Portal Inovasi
      </a>
    </div>
  {/if}
</nav>
