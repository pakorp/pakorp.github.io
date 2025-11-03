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
  {#each personalInfo.projectsPage as project, index}
    <div 
      class="rounded-2xl shadow-2xl p-8 border-4 relative overflow-hidden"
      style="background: linear-gradient(to right, {getColor(project.theme.gradientFrom)}, {getColor(project.theme.gradientVia)}, {getColor(project.theme.gradientTo)}); border-color: {getColor(project.theme.borderColor)};"
    >
      <!-- Decorative circles -->
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32"></div>
      <div class="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-24 -mt-24"></div>
      
      <div class="relative flex flex-col lg:flex-row items-center gap-8">
        <div class="flex-1">
          <div class="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" style="color: {getColor(project.theme.badgeTextColor)}">
              <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
            <span class="font-bold text-sm" style="color: {getColor(project.theme.badgeTextColor)}">PROJECT</span>
          </div>
          
          <h2 class="text-4xl font-bold text-white mb-3">🚀 {project.name}</h2>
          <p class="mb-4" style="color: {getColor(project.theme.textSecondaryColor)}">{project.description}</p>
          
          <div class="flex flex-wrap gap-2 mb-4">
            {#each project.tags as tag}
              <span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white">{tag}</span>
            {/each}
          </div>

          <!-- Project Links -->
          <div class="flex flex-wrap gap-3 mt-4">
            {#if project.liveUrl && project.liveUrl !== 'null'}
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-white font-semibold transition-all border border-white/40"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                View Live
              </a>
            {/if}
            {#if project.githubUrl && project.githubUrl !== 'null'}
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-white font-semibold transition-all border border-white/40"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            {/if}
          </div>
        </div>
        
        <div class="lg:w-96 flex-shrink-0">
          <a 
            href={project.imageUrl}
            target="_blank"
            class="relative group block cursor-zoom-in"
          >
            <img 
              src={project.imageUrl}
              alt="{project.name} Preview" 
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
          <p class="text-center text-xs mt-2" style="color: {getColor(project.theme.accentColor)}">Click to enlarge</p>
        </div>
      </div>
    </div>
  {/each}
</section>