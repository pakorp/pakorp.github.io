<script lang="ts">
  import { personalInfo } from '$lib/data/data';
</script>
<footer class="relative bg-gradient-to-r from-amber-200 to-yellow-500 text-gray-900 py-12 mt-20 overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full -ml-32 -mt-32"></div>
    <div class="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mb-24"></div>
    
    <div class="relative max-w-7xl mx-auto px-6 text-center">
        <div class="mb-4">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{personalInfo.basic.name}</h3>
            <p class="text-base font-medium text-gray-800">DevOps Engineer & Full-Stack Developer</p>
        </div>
        
        <div class="border-t border-gray-800/20 pt-6">
            <p class="text-sm text-gray-800 mb-2">© 2025 {personalInfo.basic.name} • All Rights Reserved</p>
            <p class="text-xs text-gray-700">Built with SvelteKit & Tailwind CSS • Seeking DevOps & Operations Engineering opportunities</p>
        </div>
    </div>
</footer>