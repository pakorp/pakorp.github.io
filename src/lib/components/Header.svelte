<script lang="ts">
import { personalInfo } from '$lib/data/data';
</script>
<header class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-2xl border-b-4 border-indigo-400">
  <div class="max-w-7xl mx-auto px-6 py-16 sm:py-20">
    <!-- Top flex: Name/title left, navigation/social right -->
    <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
      <!-- Left: Name & title -->
      <div class="flex-1">
        <div class="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
          &gt;
        </div>
        <h1 class="text-5xl sm:text-6xl font-bold tracking-tight mb-3 drop-shadow-md">{personalInfo.basic.name}</h1>
        <p class="text-2xl sm:text-3xl text-blue-100 font-light mb-2">{personalInfo.basic.title}</p>
        <p class="text-lg text-blue-200">{personalInfo.basic.subtitle}</p>
      </div>

      <!-- Right: Navigation Stack + Social buttons -->
      <div class="flex flex-col gap-6">
        <!-- Navigation Bar - Layered Shards (Vertical Stack) -->
        <!-- Navigation Bar - Layered Shards with Subtle Colors -->
        <nav class="flex flex-col gap-2">
          <a 
            href="/" 
            class="group relative w-full"
          >
            <div class="absolute inset-0 bg-blue-400/20 rounded-lg transform translate-x-1 translate-y-1 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div class="relative px-5 py-2.5 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 backdrop-blur-sm rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition-all border border-blue-300/40 text-center hover:from-blue-400/40 hover:to-cyan-400/40">
              Home
            </div>
          </a>
          <a 
            href="/certs" 
            class="group relative w-full"
          >
            <div class="absolute inset-0 bg-indigo-400/20 rounded-lg transform translate-x-1 translate-y-1 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div class="relative px-5 py-2.5 bg-gradient-to-r from-indigo-400/30 to-purple-400/30 backdrop-blur-sm rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition-all border border-indigo-300/40 text-center hover:from-indigo-400/40 hover:to-purple-400/40">
              🏛️ Certifications
            </div>
          </a>
          <a 
            href="/projects" 
            class="group relative w-full"
          >
            <div class="absolute inset-0 bg-purple-400/20 rounded-lg transform translate-x-1 translate-y-1 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div class="relative px-5 py-2.5 bg-gradient-to-r from-purple-400/30 to-pink-400/30 backdrop-blur-sm rounded-lg text-white font-semibold shadow-md hover:shadow-lg transition-all border border-purple-300/40 text-center hover:from-purple-400/40 hover:to-pink-400/40">
              Projects
            </div>
          </a>
        </nav>

        <!-- Social buttons -->
        <div class="flex gap-3 flex-wrap lg:flex-col">
          <!-- GitHub -->
          <a 
            href="https://{personalInfo.basic.github}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-gray-100 rounded-lg transition-all text-sm font-bold shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>

          <!-- LinkedIn -->
          <a 
            href="https://{personalInfo.basic.linkedin}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white hover:bg-blue-600 rounded-lg transition-all text-sm font-bold shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 19h-2.5v-9h2.5v9zm-1.25-10.268c-.828 0-1.5-.673-1.5-1.502 0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.502-1.5 1.502zm13 10.268h-2.5v-4.757c0-1.134-.022-2.593-1.581-2.593-1.582 0-1.823 1.233-1.823 2.505v4.845h-2.5v-9h2.4v1.233h.034c.334-.632 1.15-1.298 2.365-1.298 2.529 0 3 1.664 3 3.827v5.238z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </div>

    <!-- Contact info pills - Now in their own row -->
    <div class="mt-10 flex flex-wrap gap-4 text-base text-blue-100">
        <!-- Email: Gmail-inspired -->
        <div class="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-all">
            <a href="mailto:{personalInfo.basic.email}" class="inline-flex items-center gap-2 text-gray-900 font-medium">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            {personalInfo.basic.email}
            </a>
            <!-- Google colors accent -->
            <span class="w-2 h-2 rounded-full bg-red-500"></span>
            <span class="w-2 h-2 rounded-full bg-yellow-400"></span>
            <span class="w-2 h-2 rounded-full bg-green-500"></span>
        </div>
        <!-- Phone -->
        <div class="flex items-center gap-2 bg-blue-100/20 text-blue-100 rounded-full px-4 py-2 font-medium shadow-sm hover:shadow-md transition-all">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            {personalInfo.basic.phone}
        </div>
        <!-- Location -->
        <div class="flex items-center gap-2 bg-blue-100/20 text-blue-100 rounded-full px-4 py-2 font-medium shadow-sm hover:shadow-md transition-all">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            {personalInfo.basic.location}
        </div>
    </div>
</div>
</header>