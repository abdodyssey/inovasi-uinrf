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
  <div class="max-w-7xl mx-auto">
    <div class="grid lg:grid-cols-3 gap-12">
      {#each benefits as benefit}
        <div class="flex flex-col items-center text-center">
          <div class="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-slate-400">
            <benefit.icon size={32} />
          </div>
          <h3 class="text-xl font-display font-bold mb-4">{benefit.title}</h3>
          <p class="text-slate-400 text-sm leading-relaxed max-w-xs">
            {benefit.desc}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
