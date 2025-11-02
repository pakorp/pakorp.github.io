<script lang="ts">
  import { personalInfo } from '$lib/data/data';
</script>
<section>
    <h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
        <span class="w-1.5 h-10 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></span>
        Languages
    </h2>
    <div class="bg-gradient-to-br from-purple-50/95 to-pink-50/95 rounded-xl p-6 shadow-xl border-2 border-purple-200/40">
        <ul class="space-y-4">
            {#each personalInfo.languages as language}
                <li class="flex items-center justify-between p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-colors">
                    <div class="flex items-center gap-3">
                        <span class="text-3xl">{language.flag}</span>
                        <div>
                            <p class="font-bold text-gray-900">{language.lang}</p>
                            <p class="text-xs text-gray-600 font-medium">{language.level}</p>
                        </div>
                    </div>
                </li>
            {/each}
        </ul>
    </div>
    <!-- Certifications -->
    <h2 class="text-2xl font-bold text-white mb-4 flex items-center gap-3 mt-8">
        <span class="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></span>
        Certifications
    </h2>
    <div class="bg-gradient-to-br from-green-50/95 to-emerald-50/95 rounded-xl p-5 shadow-xl border-2 border-green-200/40">
        <ul class="space-y-3">
            {#each personalInfo.certifications as cert}
                <li class="flex gap-3 text-gray-700 text-sm items-start p-2 bg-white/50 rounded-lg hover:bg-white/70 transition-colors">
                    <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span class="font-medium">{cert}</span>
                </li>
            {/each}
        </ul>
    </div>
</section>