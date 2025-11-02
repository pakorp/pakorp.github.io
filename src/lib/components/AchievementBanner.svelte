<script lang="ts">
  import { personalInfo } from '$lib/data/data';
</script>

<section class="mb-16">
  <div class="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-2xl shadow-2xl p-8 border-4 border-amber-300 relative overflow-hidden">
    <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
    <div class="relative flex flex-col lg:flex-row items-center gap-8">
      <div class="flex-1">
        <div class="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
          <svg class="w-6 h-6 text-amber-900" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          <span class="text-amber-900 font-bold text-sm">TOP ACHIEVEMENT</span>
        </div>
        <h2 class="text-4xl font-bold text-white mb-3">🏆 Graduated #1 at kood/Jõhvi</h2>
        <p class="text-xl text-amber-100 mb-2 font-medium">Batch 4 - Full-Stack Developer with DevOps Specialization</p>
        <p class="text-amber-50">Completed comprehensive training in Go, Node.js, DevOps - IaC and Kubernetes, finishing as the top student of Batch 4.</p>
        <div class="flex flex-wrap gap-2">
          <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white">Go</span>
          <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white">NodeJS&JavaScript</span>
          <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white">React</span>
          <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white">Terraform&Ansible</span>
          <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white">Kubernetes</span>
        </div>
      </div>
      <div class="lg:w-96 flex-shrink-0">
        <img src="/koodJresults.png" alt="kood/Jõhvi Results" class="rounded-xl shadow-2xl border-4 border-white/50 w-full" />
      </div>
    </div>
  </div>
</section>