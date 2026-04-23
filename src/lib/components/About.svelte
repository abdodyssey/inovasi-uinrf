<script lang="ts">
  import Users from 'lucide-svelte/icons/users';
  import Target from 'lucide-svelte/icons/target';
</script>

<section id="about" class="section-padding bg-slate-50">
  <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
    <div>
      <h2 class="text-3xl md:text-4xl font-display font-extrabold text-primary mb-6">
        Membangun Ekosistem Inovasi yang Berkelanjutan
      </h2>
      <p class="text-lg text-slate-600 leading-relaxed mb-8">
        Tim Inovasi UIN Raden Fatah adalah unit strategis yang berfokus pada pengembangan teknologi dan metodologi baru untuk meningkatkan kualitas pendidikan, penelitian, dan pengabdian masyarakat. Kami percaya bahwa teknologi harus menjadi jembatan menuju inklusivitas dan keunggulan akademik.
      </p>
      
      <div class="space-y-6">
        <div class="flex gap-4">
          <div class="flex-shrink-0 w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-accent">
            <Target size={24} />
          </div>
          <div>
            <h4 class="font-bold text-primary">Misi Kami</h4>
            <p class="text-slate-500">Mengintegrasikan teknologi mutakhir ke dalam kurikulum dan administrasi kampus.</p>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="flex-shrink-0 w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-accent">
            <Users size={24} />
          </div>
          <div>
            <h4 class="font-bold text-primary">Kolaborasi</h4>
            <p class="text-slate-500">Bekerja sama dengan mahasiswa dan dosen untuk mewujudkan ide-ide brilian.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div class="bg-white p-8 rounded-xl shadow-sm border border-slate-100 mt-12">
        <p class="text-4xl font-display font-bold text-accent mb-2">100%</p>
        <p class="text-sm font-medium text-slate-500 uppercase tracking-wide">Komitmen Digital</p>
      </div>
      <div class="bg-primary p-8 rounded-xl shadow-xl text-white">
        <p class="text-4xl font-display font-bold mb-2">24/7</p>
        <p class="text-sm font-medium opacity-70 uppercase tracking-wide">Inovasi Berkelanjutan</p>
      </div>
      <div class="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
        <p class="text-4xl font-display font-bold text-accent mb-2">50+</p>
        <p class="text-sm font-medium text-slate-500 uppercase tracking-wide">Talenta Kreatif</p>
      </div>
      <div class="bg-white p-8 rounded-xl shadow-sm border border-slate-100 -mt-12">
        <p class="text-4xl font-display font-bold text-accent mb-2">10+</p>
        <p class="text-sm font-medium text-slate-500 uppercase tracking-wide">Partner Industri</p>
      </div>
    </div>
  </div>
</section>
