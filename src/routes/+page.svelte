<script lang="ts">
  import { personalInfo } from '$lib/data/data';
  import Header from '$lib/components/Header.svelte';
  import AboutSection from '$lib/components/AboutSection.svelte';
  import AchievementBanner from '$lib/components/AchievementBanner.svelte';
  import HomelabProject from '$lib/components/HomelabProject.svelte';
  import Experience from '$lib/components/ExperienceTimeline.svelte';
  import Education from '$lib/components/Education.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import LanguagesList from '$lib/components/LanguagesList.svelte';
  import TechnicalSkills from '$lib/components/TechnicalSkills.svelte';
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
			<!-- Summary -->
            <AboutSection />
			<!-- kood/Johvi Achievement Banner -->
            <AchievementBanner />
			<!-- Homelab Project Banner -->
            <HomelabProject />
			<!-- Core Competencies - Prominent Display -->
            <!-- Core Competencies - Single Column with Highlighted Skills -->
            <!-- Skills Section - 2 Column Layout -->
            <TechnicalSkills />
            <!-- Experience -->
            <Experience />
            <!-- Education & Languages Grid -->
            <div class="grid lg:grid-cols-3 gap-8 mb-16">
                <!-- Education -->
                <Education />
                <!-- Languages & Certifications -->
                <LanguagesList />
            </div>
		</main>
        <!-- Footer -->
        <Footer />
	</div>
</div>