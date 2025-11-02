    <script lang="ts">
    import { personalInfo } from '$lib/data/data';
    </script>
    <header class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-2xl border-b-4 border-indigo-400">
        <div class="max-w-7xl mx-auto px-6 py-16 sm:py-20">
            <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                <div class="flex-1">
                    <div class="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                        >
                    </div>
                    <h1 class="text-5xl sm:text-6xl font-bold tracking-tight mb-3">{personalInfo.basic.name}</h1>
                    <p class="text-2xl sm:text-3xl text-blue-100 font-light mb-2">{personalInfo.basic.title}</p>
                    <p class="text-lg text-blue-200">{personalInfo.basic.subtitle}</p>
                </div>
            </div>
            <div class="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-base text-blue-100">
                <div class="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <a href="mailto:{personalInfo.basic.email}" class="inline-flex items-center gap-2 hover:text-white transition-colors">
                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                        {personalInfo.basic.email}
                    </a>
                </div>
                <div class="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <span class="inline-flex items-center gap-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                        {personalInfo.basic.phone}
                    </span>
                </div>
                <div class="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <span class="inline-flex items-center gap-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        {personalInfo.basic.location}
                    </span>
                </div>
            </div>
        </div>
    </header>