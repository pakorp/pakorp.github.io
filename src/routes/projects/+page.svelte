<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ProjectsList from '$lib/components/ProjectsList.svelte';
</script>

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-zinc-900 to-slate-900">
  <!-- Animated background pattern -->
  <div class="fixed inset-0 opacity-10">
    <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 40px 40px;"></div>
  </div>
  
  <!-- Content wrapper -->
  <div class="relative">
    <!-- Header -->
    <Header />
    
    <!-- Main Content -->
    <main class="max-w-6xl mx-auto px-6 py-12 sm:py-16">
      <!-- Page Title -->
      <div class="mb-12">
        <h1 class="text-5xl font-bold text-white mb-4 flex items-center gap-4">
          <span class="w-2 h-16 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
          Projects
        </h1>
        <p class="text-xl text-gray-400 ml-6">
          Building solutions, one commit at a time
        </p>
      </div>
      
      <!-- Projects List -->
      <ProjectsList />
    </main>
    
    <!-- Footer -->
    <Footer />
  </div>
</div>