<script lang="ts">
  import { personalInfo } from '$lib/data/data';
</script>

<section class="mb-16">
  <div class="bg-gradient-to-r from-blue-200 to-cyan-200 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
    <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
      <span class="w-1.5 h-10 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></span>
      About Me
    </h2>
    <p class="text-gray-700 leading-relaxed text-lg">{personalInfo.summary}</p>
  </div>
</section>