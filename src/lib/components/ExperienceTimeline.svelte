<script lang="ts">
  import { personalInfo } from '$lib/data/data';
</script>
<section class="mb-16">
    <h2 class="text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <span class="w-1.5 h-10 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></span>
        Professional Experience
    </h2>
    <div class="space-y-6">
        {#each personalInfo.experience as job}
            <div class="relative pl-10 pb-6 border-l-2 border-blue-400/50 last:border-l-0 last:pb-0">
                <div class="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900 shadow-lg shadow-blue-500/50"></div>
                <div class="bg-gradient-to-br from-blue-50/90 to-indigo-50/90 backdrop-blur-sm rounded-xl p-7 shadow-xl border border-blue-200/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all">
                    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                        <div>
                            <h3 class="text-xl font-bold text-gray-900">{job.title}</h3>
                            <p class="text-base text-gray-600 mt-1 font-medium">{job.company} • {job.location}</p>
                        </div>
                        <span class="text-sm text-gray-700 font-medium whitespace-nowrap bg-white/60 px-3 py-1 rounded-full">{job.period}</span>
                    </div>
                    <ul class="mt-4 space-y-2.5">
                        {#each job.achievements as achievement}
                            <li class="flex gap-3 text-gray-700 text-sm leading-relaxed">
                                <span class="text-blue-500 mt-1.5 text-xs font-bold">▸</span>
                                <span>{achievement}</span>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        {/each}
    </div>
</section>