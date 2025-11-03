<script lang="ts">
  import { personalInfo } from '$lib/data/data';
  const homelab = personalInfo.homelabProject;
</script>

<section class="mb-16">
  <div class="bg-gradient-to-r {homelab.theme.gradient} rounded-2xl shadow-2xl p-8 border-4 {homelab.theme.borderColor} relative overflow-hidden">
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32"></div>
    <div class="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-24 -mt-24"></div>
    
    <div class="relative flex flex-col lg:flex-row items-center gap-8">
      <div class="flex-1">
        <div class="inline-flex items-center gap-2 {homelab.theme.badgeBackground} backdrop-blur-sm px-4 py-2 rounded-full mb-4">
          <svg class="w-6 h-6 {homelab.theme.badgeTextColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="{homelab.badge.icon}"/>
          </svg>
          <span class="{homelab.theme.badgeTextColor} font-bold text-sm">{homelab.badge.text}</span>
        </div>
        
        <h2 class="text-4xl font-bold {homelab.theme.textColors.title} mb-3">{homelab.title}</h2>
        <p class="text-xl {homelab.theme.textColors.subtitle} mb-2 font-medium">{homelab.subtitle}</p>
        <p class="{homelab.theme.textColors.description} mb-4">{homelab.description}</p>
        
        <div class="flex flex-wrap gap-2">
          {#each homelab.tags as tag}
            <span class="px-3 py-1 {homelab.theme.tagBackground} backdrop-blur-sm rounded-full text-xs font-bold text-white">
              {tag}
            </span>
          {/each}
        </div>
      </div>
      
      <div class="lg:w-96 flex-shrink-0">
        <a 
          href={homelab.image.src}
          target="_blank"
          class="relative group block cursor-zoom-in"
        >
          <img 
            src={homelab.image.src}
            alt={homelab.image.alt}
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
        <p class="text-center text-xs {homelab.theme.textColors.clickHint} mt-2">Click to enlarge</p>
      </div>
    </div>
  </div>
</section>