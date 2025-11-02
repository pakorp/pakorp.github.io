<script lang="ts">
  import { personalInfo } from '$lib/data/data';
</script>
<section class="mb-16">
    <h2 class="text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <span class="w-1.5 h-10 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></span>
        Technical Competencies & Skills
    </h2>
    
    <div class="grid lg:grid-cols-2 gap-8">
        <!-- Left Column: Core Competencies -->
        <div>
            <h3 class="text-2xl font-bold text-white mb-6">Core Competencies</h3>
            <div class="flex flex-col gap-6">
                {#each personalInfo.coreCompetencies as competency}
                    <div class="bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/30 hover:shadow-blue-500/20 transition-all duration-300">
                        <div class="flex items-start gap-3 mb-4">
                            <div class="text-4xl">{competency.icon}</div>
                            <div>
                                <h4 class="text-xl font-bold text-gray-900">{competency.title}</h4>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-2">
                            {#each competency.skills as skill}
                                <span class="px-3 py-1.5 {skill.color} rounded-lg text-xs font-bold shadow-lg hover:scale-105 transition-transform">
                                    {skill.name}
                                </span>
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Right Column: Technical Skills -->
        <div>
            <h3 class="text-2xl font-bold text-white mb-6">Technical Skills</h3>
            <div class="flex flex-col gap-6">
                {#each Object.entries(personalInfo.technicalSkills) as [category, data]}
                    <div class="{data.bgColor} rounded-xl p-6 shadow-xl border-2 {data.borderColor}">
                        <h4 class="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">{category}</h4>
                        <div class="flex flex-wrap gap-2">
                            {#each data.skills as skill}
                                <span class="px-3 py-1.5 {skill.color} rounded-lg text-xs font-bold shadow-md hover:scale-105 transition-transform">
                                    {skill.name}
                                </span>
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>