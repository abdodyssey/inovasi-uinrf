<script lang="ts">
  import ExternalLink from 'lucide-svelte/icons/external-link';
</script>

<section class="section-padding">
  <div class="max-w-7xl mx-auto">
    <div class="relative overflow-hidden bg-primary rounded-xl p-8 md:p-12 lg:p-16 text-white shadow-2xl">
      <!-- Decorative elements -->
      <div class="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      
      <!-- Subtle Grid -->
      <div class="absolute inset-0 opacity-10 [mask-image:linear-gradient(to_bottom,black,transparent)]">
        <svg width="100%" height="100%">
          <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div class="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div class="max-w-2xl text-center lg:text-left">
          <h2 class="text-2xl md:text-4xl font-display font-extrabold mb-6 leading-tight">
            Siap untuk Menjadi Bagian dari Perubahan?
          </h2>
          <p class="text-base md:text-lg text-slate-300 leading-relaxed">
            Bergabunglah dengan Tim Inovasi dan bantu kami membangun masa depan digital UIN Raden Fatah yang lebih cerah.
          </p>
        </div>

        <a
          href="https://rafanovation.cloud"
          class="flex-shrink-0 group bg-white text-primary px-8 py-4 rounded-lg font-bold flex items-center gap-3 hover:bg-slate-100 transition-all shadow-xl"
        >
          Gabung Sekarang
          <ExternalLink size={20} class="text-accent" />
        </a>
      </div>
    </div>
  </div>
</section>
