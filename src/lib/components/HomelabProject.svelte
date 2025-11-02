<script lang="ts">
  import { personalInfo } from '$lib/data/data';
</script>

<section class="mb-16">
  <div class="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 rounded-2xl shadow-2xl p-8 border-4 border-cyan-300 relative overflow-hidden">
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32"></div>
    <div class="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-24 -mt-24"></div>
    <div class="relative flex flex-col lg:flex-row items-center gap-8">
      <div class="flex-1">
        <div class="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
          <svg class="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
          </svg>
          <span class="text-blue-900 font-bold text-sm">HOMELAB PROJECT</span>
        </div>
        <h2 class="text-4xl font-bold text-white mb-3">🔧 Homelab Infrastructure</h2>
        <p class="text-xl text-cyan-100 mb-2 font-medium">OPNSense Router + Proxmox K3s Cluster</p>
        <p class="text-cyan-50 mb-4">I structured a homelab featuring best enterprise practices with a separate OPNSense router and a K3s cluster in Proxmox VE9 over 3 nodes integrating GitOps principles for orchestration via Terraform and provisioning via Ansible. Kubernetes cluster uses Helm charts and ArgoCD as the core foundation</p>
        <div class="flex flex-wrap gap-2">
          <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white">OPNSense</span>
          <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white">Proxmox VE</span>
          <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white">K3s</span>
          <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white">Kubernetes</span>
          <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white">Network Architecture</span>
        </div>
      </div>
          <div class="lg:w-96 flex-shrink-0">
              <a 
                  href="/homelab-diagram.png" 
                  target="_blank"
                  class="relative group block cursor-zoom-in"
              >
                  <img 
                      src="/homelab-diagram.png" 
                      alt="Homelab Architecture" 
                      class="rounded-xl shadow-2xl border-4 border-white/50 w-full bg-white/10 p-4 transition-transform group-hover:scale-105" 
                  />
                  <div class="absolute inset-0 flex items-center justify-center opacity-75 bg-black/0 group-hover:bg-black/20 transition-all rounded-xl pointer-events-none">
                      <svg class="w-16 h-16 text-white opacity-75 group-hover:opacity-100 transition-opacity"
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                      >
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                      </svg>
                  </div>
              </a>
              <p class="text-center text-xs text-cyan-200 mt-2">Click to enlarge</p>
          </div>
    </div>
  </div>
</section>