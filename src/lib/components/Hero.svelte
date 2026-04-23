<script lang="ts">
  import { onMount } from 'svelte';
  import ArrowRight from 'lucide-svelte/icons/arrow-right';

  let visible = $state(false);
  onMount(() => {
    setTimeout(() => visible = true, 100);
  });
</script>

<section class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden text-center">
  <!-- Decorative background -->
  <div class="absolute inset-0 -z-10">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[600px] bg-accent/5 rounded-full blur-3xl opacity-50"></div>
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] md:w-[600px] md:h-[400px] bg-primary/5 rounded-full blur-3xl opacity-50"></div>
    
    <!-- Subtle Grid Pattern -->
    <div class="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
      <svg width="100%" height="100%">
        <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="1"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>
    </div>
  </div>

  <div class="max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center">
    <div class="space-y-6 md:space-y-8 flex flex-col items-center {visible ? 'animate-fade-up' : 'opacity-0'}">
      <h1 class="text-4xl md:text-6xl font-display font-extrabold text-primary leading-tight px-2">
        Mendorong <span class="text-logo-gradient">Masa Depan</span> <br class="hidden md:block" /> Digital Kampus.
      </h1>
      
      <p class="text-base md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto px-4">
        Tim Inovasi UIN Raden Fatah berdedikasi untuk menciptakan solusi teknologi yang transformatif dan inklusif bagi civitas akademika.
      </p>
      
      <div class="flex flex-col sm:flex-row justify-center gap-4 pt-4 w-full sm:w-auto px-6 sm:px-0">
        <a
          href="https://rafanovation.cloud"
          class="group bg-primary text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-lg shadow-primary/20 hover:scale-105 active:scale-95"
        >
          Mulai Berinovasi
          <ArrowRight size={18} class="group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="#about"
          class="px-8 py-4 rounded-lg font-bold border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 text-center"
        >
          Pelajari Lebih Lanjut
        </a>
      </div>
    </div>
  </div>
</section>
