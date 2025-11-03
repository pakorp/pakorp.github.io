<script lang="ts">
  import { personalInfo } from '$lib/data/data';
  const achievement = personalInfo.koodAchievement;
</script>

<section class="mb-16">
  <div class="bg-gradient-to-r {achievement.theme.gradient} rounded-2xl shadow-2xl p-8 border-4 {achievement.theme.borderColor} relative overflow-hidden">
    <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
    
    <div class="relative flex flex-col lg:flex-row items-center gap-8">
      <div class="flex-1">
        <div class="inline-flex items-center gap-2 {achievement.theme.badgeBackground} backdrop-blur-sm px-4 py-2 rounded-full mb-4">
          <svg class="w-6 h-6 {achievement.theme.badgeTextColor}" fill="currentColor" viewBox="0 0 20 20">
            <path d="{achievement.badge.icon}"/>
          </svg>
          <span class="{achievement.theme.badgeTextColor} font-bold text-sm">{achievement.badge.text}</span>
        </div>
        
        <h2 class="text-4xl font-bold {achievement.theme.textColors.title} mb-3">{achievement.title}</h2>
        <p class="text-xl {achievement.theme.textColors.subtitle} mb-2 font-medium">{achievement.subtitle}</p>
        <p class="{achievement.theme.textColors.description} mb-4">{achievement.description}</p>
        
        <div class="flex flex-wrap gap-2">
          {#each achievement.tags as tag}
            <span class="px-3 py-1 {achievement.theme.tagBackground} backdrop-blur-sm rounded-full text-xs font-bold text-white">
              {tag}
            </span>
          {/each}
        </div>
      </div>
      
      <div class="lg:w-96 flex-shrink-0">
        <img 
          src={achievement.image.src}
          alt={achievement.image.alt}
          class="rounded-xl shadow-2xl border-4 border-white/50 w-full" 
        />
      </div>
    </div>
  </div>
</section>