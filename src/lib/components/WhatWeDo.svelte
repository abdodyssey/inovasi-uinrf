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
  <div class="max-w-7xl mx-auto">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h2 class="text-2xl md:text-3xl font-display font-extrabold text-primary mb-4">
        Fokus Utama Pengembangan
      </h2>
      <p class="text-slate-500 text-base">
        Kami bergerak di berbagai lini untuk memastikan ekosistem digital kampus tetap relevan dan kompetitif.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each services as service}
        <div class="group p-8 rounded-xl border border-slate-100 bg-white hover:shadow-lg transition-all duration-300">
          <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-6 {service.color}">
            <service.icon size={24} />
          </div>
          <h3 class="text-lg font-bold text-primary mb-3">{service.title}</h3>
          <p class="text-slate-500 leading-relaxed text-sm">
            {service.desc}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
