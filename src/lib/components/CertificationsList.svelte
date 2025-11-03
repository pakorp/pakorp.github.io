<script lang="ts">
  import { personalInfo } from '$lib/data/data';
  
  // Tailwind color mapping
  const colorMap: Record<string, string> = {
    'yellow-500': '#eab308',
    'yellow-100': '#fef9c3',
    'yellow-50': '#fefce8',
    'yellow-200': '#fef08a',
    'yellow-300': '#fde047',
    'yellow-900': '#713f12',
    'orange-500': '#f97316',
    'red-600': '#dc2626',
    'blue-600': '#2563eb',
    'indigo-600': '#4f46e5',
    'purple-600': '#9333ea',
    'blue-300': '#93c5fd',
    'blue-900': '#1e3a8a',
    'blue-100': '#dbeafe',
    'blue-50': '#eff6ff',
    'blue-200': '#bfdbfe',
    'cyan-600': '#0891b2',
    'teal-600': '#0d9488',
    'green-600': '#16a34a',
    'cyan-300': '#67e8f9',
    'cyan-900': '#164e63',
    'cyan-100': '#cffafe',
    'cyan-50': '#ecfeff',
    'cyan-200': '#a5f3fc',
    'amber-500': '#f59e0b',
    'amber-600': '#d97706',
    'amber-300': '#fcd34d',
    'amber-900': '#78350f',
    'amber-100': '#fef3c7',
    'amber-50': '#fffbeb',
    'amber-200': '#fde68a',
  };
  
  function getColor(colorName: string): string {
    return colorMap[colorName] || '#000000';
  }
</script>

<section class="space-y-8">
  {#each personalInfo.certificationsPage as cert, index}
    <div 
      class="rounded-2xl shadow-2xl p-8 border-4 relative overflow-hidden"
      style="background: linear-gradient(to right, {getColor(cert.theme.gradientFrom)}, {getColor(cert.theme.gradientVia)}, {getColor(cert.theme.gradientTo)}); border-color: {getColor(cert.theme.borderColor)};"
    >
      <!-- Decorative circles -->
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32"></div>
      <div class="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-24 -mt-24"></div>
      
      <div class="relative flex flex-col lg:flex-row items-center gap-8">
        <div class="flex-1">
          <div class="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" style="color: {getColor(cert.theme.badgeTextColor)}">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="font-bold text-sm" style="color: {getColor(cert.theme.badgeTextColor)}">CERTIFICATION</span>
          </div>
          
          <h2 class="text-4xl font-bold text-white mb-3">📜 {cert.name}</h2>
          <p class="text-xl mb-2 font-medium" style="color: {getColor(cert.theme.textPrimaryColor)}">{cert.issuer} • {cert.date}</p>
          <p class="mb-4" style="color: {getColor(cert.theme.textSecondaryColor)}">{cert.description}</p>
          
          <div class="flex flex-wrap gap-2">
            {#each cert.tags as tag}
              <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white">{tag}</span>
            {/each}
          </div>
        </div>
        
        <div class="lg:w-96 flex-shrink-0">
          <a 
            href={cert.pdfUrl}
            target="_blank"
            class="relative group block cursor-zoom-in"
          >
            <img 
              src={cert.imageUrl}
              alt="{cert.name} Certificate" 
              class="rounded-xl shadow-2xl border-4 border-white/50 w-full bg-white/10 p-4 transition-transform group-hover:scale-105" 
            />
            <div class="absolute inset-0 flex items-center justify-center opacity-0 bg-black/0 group-hover:bg-black/30 group-hover:opacity-100 transition-all rounded-xl pointer-events-none">
              <svg class="w-16 h-16 text-white transition-opacity"
                   fill="none" 
                   stroke="currentColor" 
                   viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
              </svg>
            </div>
          </a>
          <p class="text-center text-xs mt-2" style="color: {getColor(cert.theme.accentColor)}">Click to view full certificate</p>
        </div>
      </div>
    </div>
  {/each}
</section>