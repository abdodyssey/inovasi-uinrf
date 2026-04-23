<script lang="ts">
  import Code from 'lucide-svelte/icons/code';
  import MessageSquare from 'lucide-svelte/icons/message-square';
  import Camera from 'lucide-svelte/icons/camera';
  import Mail from 'lucide-svelte/icons/mail';
</script>

<footer class="bg-slate-950 pt-20 pb-10 text-white">
  <div class="max-w-7xl mx-auto px-6 md:px-12">
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      <div class="lg:col-span-2">
        <h3 class="text-2xl font-display font-bold mb-6">
          Tim Inovasi <span class="text-accent">UIN Raden Fatah</span>
        </h3>
        <p class="text-slate-400 max-w-sm leading-relaxed mb-8">
          Mendorong transformasi digital dan keunggulan akademik melalui inovasi teknologi yang berkelanjutan di lingkungan UIN Raden Fatah.
        </p>
        <div class="flex gap-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-accent transition-colors" title="Instagram">
            <Camera size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-accent transition-colors" title="Twitter">
            <MessageSquare size={20} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-accent transition-colors" title="GitHub">
            <Code size={20} />
          </a>
        </div>
      </div>

      <div>
        <h4 class="font-bold mb-6 text-accent uppercase tracking-widest text-sm">Navigasi</h4>
        <ul class="space-y-4 text-slate-400">
          <li><a href="#about" class="hover:text-white transition-colors">Tentang Kami</a></li>
          <li><a href="#services" class="hover:text-white transition-colors">Fokus Kami</a></li>
          <li><a href="#benefits" class="hover:text-white transition-colors">Manfaat</a></li>
          <li><a href="https://rafanovation.cloud" class="hover:text-white transition-colors">Portal Inovasi</a></li>
        </ul>
      </div>

      <div>
        <h4 class="font-bold mb-6 text-accent uppercase tracking-widest text-sm">Kontak</h4>
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

    <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
      <p>© 2024 Tim Inovasi UIN Raden Fatah. All rights reserved.</p>
      <div class="flex gap-8">
        <a href="/" class="hover:text-white">Privacy Policy</a>
        <a href="/" class="hover:text-white">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
