<script lang="ts">
  import { personalInfo } from '$lib/data/data';
</script>

<section class="lg:col-span-2">
    <h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
        <span class="w-1.5 h-10 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></span>
        Education
    </h2>
    <div class="space-y-6">
        {#each personalInfo.education as edu}
            <div class="bg-gradient-to-br from-blue-50/95 to-indigo-100/95 rounded-xl p-6 shadow-xl border-2 border-blue-200/40 hover:shadow-2xl transition-all">
                {#if edu.distinction}
                    <div class="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-amber-400 to-yellow-400 text-amber-900 rounded-full text-xs font-bold mb-3 shadow-md">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        {edu.distinction}
                    </div>
                {/if}
                <h3 class="text-xl font-bold text-gray-900">{edu.degree}</h3>
                <p class="text-base text-gray-700 mt-1 font-medium">{edu.institution} • {edu.location}</p>
                <p class="text-sm text-gray-600 mt-1 font-medium">{edu.period}</p>
                <ul class="mt-4 space-y-2">
                    {#each edu.details as detail}
                        <li class="flex gap-2 text-gray-700 text-sm">
                            <span class="text-blue-600 mt-0.5 font-bold">•</span>
                            <span>{detail}</span>
                        </li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
</section>