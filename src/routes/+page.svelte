<script>
	const personalInfo = {
		name: "Paul Korp",
		title: "DevOps Engineer",
		subtitle: "Full-Stack Developer & Systems Specialist",
		email: "paul.m.korp@gmail.com",
		phone: "+372 53264707",
		location: "Tallinn, Estonia",
		github: "github.com/paulkorp",
		dob: "15 March 1999"
	};

	const summary = "Diligent and versatile DevOps engineer with comprehensive full-stack development experience and strong systems administration background. Recently graduated top 1 of Batch 4 at kood/Jõhvi as a Full-Stack Web Developer with DevOps specialization. Proven ability to excel in demanding situations with expertise in Kubernetes, infrastructure-as-code, CI/CD pipelines, and cloud orchestration. Passionate about building reliable, scalable systems and contributing to CARIAD's mission in automotive software innovation.";

	const coreCompetencies = [
		{
			icon: '☸️',
			title: 'Kubernetes & Orchestration',
			skills: ['Kubernetes (K8s)', 'K3s', 'ArgoCD', 'Docker', 'High Availability Design']
		},
		{
			icon: '🔧',
			title: 'Infrastructure as Code',
			skills: ['Terraform', 'Ansible', 'Declarative Provisioning', 'Cloud Architecture']
		},
		{
			icon: '🚀',
			title: 'CI/CD & Automation',
			skills: ['GitHub Actions', 'ArgoCD', 'GitOps', 'Automated Deployments']
		},
		{
			icon: '☁️',
			title: 'Cloud & Virtualization',
			skills: ['GCP', 'Proxmox VE', 'KVM/QEMU', 'Xen Hypervisor', 'VirtualBox']
		}
	];

	const experience = [
		{
			title: "Quality Technician",
			company: "Stoneridge Electronics",
			location: "Estonia",
			period: "May 2025 - Present",
			achievements: [
				"Document rework cases, analyzing failure modes and root causes with FMEA methodology",
				"Collect, analyze and share QA metrics (FAN charts, MIS reports) for continuous improvement",
				"Perform corrective actions to restore products to functional specifications",
				"Support 8D corrective action development and ERP database management (J1 Edwards Oracle)"
			]
		},
		{
			title: "Electronic Device Assembler",
			company: "Stoneridge Electronics",
			location: "Estonia",
			period: "February 2025 - May 2025",
			achievements: [
				"Assembled electronics for Renault, Volvo Trucks Wings modules and DAF Chassis modules",
				"Reported faults and provided detailed troubleshooting information"
			]
		},
		{
			title: "Logistics Specialist",
			company: "Coop Eesti",
			location: "Estonia",
			period: "May 2024 - February 2025",
			achievements: [
				"Managed warehouse receiving operations in multilingual environment (Estonian, Russian)",
				"Operated T3 forklift for goods re-palletizing and warehouse management"
			]
		},
		{
			title: "Technician - Drink Canning Specialist",
			company: "CANNERY OÜ",
			location: "Estonia",
			period: "May 2023 - January 2024",
			achievements: [
				"Developed and implemented production processes with line setup and technical maintenance",
				"Maintained mechanical reliability of filling and manufacturing lines",
				"Performed preventative maintenance, calibrations, and troubleshooting",
				"Managed inventory and logistics for production support"
			]
		}
	];

	const technicalSkills = {
		"Programming Languages": {
			bgColor: "bg-purple-500/20",
			borderColor: "border-purple-300/30",
			skills: [
				{ name: "Go", color: "bg-cyan-500 text-white" },
				{ name: "JavaScript/Node.js", color: "bg-yellow-400 text-gray-900" },
				{ name: "Python", color: "bg-blue-500 text-white" },
				{ name: "Java", color: "bg-red-600 text-white" },
				{ name: "HTML/CSS/PHP", color: "bg-orange-500 text-white" }
			]
		},
		"DevOps & Orchestration": {
			bgColor: "bg-blue-500/20",
			borderColor: "border-blue-300/30",
			skills: [
				{ name: "Kubernetes", color: "bg-blue-600 text-white" },
				{ name: "K3s", color: "bg-blue-500 text-white" },
				{ name: "Docker", color: "bg-sky-600 text-white" },
				{ name: "ArgoCD", color: "bg-orange-600 text-white" },
				{ name: "Terraform", color: "bg-purple-600 text-white" },
				{ name: "Ansible", color: "bg-red-600 text-white" }
			]
		},
		"CI/CD & Version Control": {
			bgColor: "bg-green-500/20",
			borderColor: "border-green-300/30",
			skills: [
				{ name: "GitHub", color: "bg-gray-800 text-white" },
				{ name: "GitHub Actions", color: "bg-blue-600 text-white" },
				{ name: "GitOps Workflows", color: "bg-teal-600 text-white" }
			]
		},
		"Cloud & Virtualization": {
			bgColor: "bg-indigo-500/20",
			borderColor: "border-indigo-300/30",
			skills: [
				{ name: "GCP", color: "bg-blue-500 text-white" },
				{ name: "Proxmox VE", color: "bg-orange-600 text-white" },
				{ name: "KVM/QEMU", color: "bg-red-600 text-white" },
				{ name: "Xen", color: "bg-blue-700 text-white" },
				{ name: "VirtualBox", color: "bg-sky-600 text-white" }
			]
		},
		"Operating Systems": {
			bgColor: "bg-gradient-to-r from-lime-400/20 to-lime-500/30",
			borderColor: "border-lime-300/30",
			skills: [
				{ name: "Linux (Debian, Ubuntu Server)", color: "bg-yellow-500 text-gray-900" },
				{ name: "Windows 7/10", color: "bg-blue-600 text-white" }
			]
		},
		"Design Patterns": {
			bgColor: "bg-rose-500/20",
			borderColor: "border-rose-300/30",
			skills: [
				{ name: "REST APIs", color: "bg-green-600 text-white" },
				{ name: "OOP", color: "bg-purple-600 text-white" },
				{ name: "IaC", color: "bg-indigo-600 text-white" },
				{ name: "Containerization", color: "bg-cyan-600 text-white" },
				{ name: "HA Systems", color: "bg-red-600 text-white" }
			]
		}
	};

	const education = [
		{
			institution: "kood/Jõhvi",
			degree: "Full-Stack Developer",
			location: "Estonia",
			period: "2024 - 2025",
			distinction: "🏆 Graduated Top 1 of Batch 4",
			details: [
				"Completed Golang, Node.js, and DevOps specialization modules",
				"Hands-on experience with Kubernetes and Google Cloud Platform"
			]
		},
		{
			institution: "Tallinn University of Technology (TalTech)",
			degree: "IT-Systems Development",
			location: "Estonia",
			period: "2018",
			details: [
				"Completed 2 semesters including CISCO Networking course"
			]
		}
	];

	const languages = [
		{ lang: "English", level: "C2 (Proficient)", flag: "🇬🇧" },
		{ lang: "Estonian", level: "C2 (Native)", flag: "🇪🇪" },
		{ lang: "Russian", level: "B1 (Intermediate)", flag: "🇷🇺" }
	];

	const certifications = [
		"CISCO Networking Experience (TalTech)",
		"DevOps Specialization (kood/Jõhvi)",
		"Full-Stack Web Development (kood/Jõhvi)"
	];
</script>

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-zinc-900 to-slate-900">
	<!-- Animated background pattern -->
	<div class="fixed inset-0 opacity-10">
		<div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 40px 40px;"></div>
	</div>

	<!-- Content wrapper -->
	<div class="relative">
		<!-- Header -->
		<header class="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-2xl border-b-4 border-indigo-400">
			<div class="max-w-7xl mx-auto px-6 py-16 sm:py-20">
				<div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
					<div class="flex-1">
						<div class="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
							Available for Opportunities
						</div>
						<h1 class="text-5xl sm:text-6xl font-bold tracking-tight mb-3">{personalInfo.name}</h1>
						<p class="text-2xl sm:text-3xl text-blue-100 font-light mb-2">{personalInfo.title}</p>
						<p class="text-lg text-blue-200">{personalInfo.subtitle}</p>
					</div>
					<div class="flex gap-3">
						<a href="https://{personalInfo.github}" target="_blank" rel="noopener noreferrer" 
						   class="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 hover:bg-blue-50 rounded-lg transition-all text-sm font-bold shadow-xl hover:shadow-2xl hover:scale-105">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
							</svg>
							GitHub
						</a>
					</div>
				</div>
				<div class="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-base text-blue-100">
					<a href="mailto:{personalInfo.email}" class="inline-flex items-center gap-2 hover:text-white transition-colors">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
						</svg>
						{personalInfo.email}
					</a>
					<span class="inline-flex items-center gap-2">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
						</svg>
						{personalInfo.phone}
					</span>
					<span class="inline-flex items-center gap-2">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
						</svg>
						{personalInfo.location}
					</span>
				</div>
			</div>
		</header>

		<!-- Main Content -->
		<main class="max-w-7xl mx-auto px-6 py-12 sm:py-16">
			
			<!-- Summary -->
			<section class="mb-16">
				<div class="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
					<h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
						<span class="w-1.5 h-10 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></span>
						About Me
					</h2>
					<p class="text-gray-700 leading-relaxed text-lg">{summary}</p>
				</div>
			</section>

			<!-- kood/Johvi Achievement Banner -->
			<section class="mb-16">
				<div class="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-2xl shadow-2xl p-8 border-4 border-amber-300 relative overflow-hidden">
					<div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
					<div class="relative flex flex-col lg:flex-row items-center gap-8">
						<div class="flex-1">
							<div class="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
								<svg class="w-6 h-6 text-amber-900" fill="currentColor" viewBox="0 0 20 20">
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
								</svg>
								<span class="text-amber-900 font-bold text-sm">TOP ACHIEVEMENT</span>
							</div>
							<h2 class="text-4xl font-bold text-white mb-3">🏆 Graduated #1 at kood/Jõhvi</h2>
							<p class="text-xl text-amber-100 mb-2 font-medium">Batch 4 - Full-Stack Developer with DevOps Specialization</p>
							<p class="text-amber-50">Completed comprehensive training in Go, Node.js, Kubernetes, and cloud technologies, finishing as the top student in my cohort.</p>
						</div>
						<div class="lg:w-96 flex-shrink-0">
							<img src="/koodJresults.png" alt="kood/Jõhvi Results" class="rounded-xl shadow-2xl border-4 border-white/50 w-full" />
						</div>
					</div>
				</div>
			</section>

			<!-- Homelab Project Banner -->
			<section class="mb-16">
				<div class="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 rounded-2xl shadow-2xl p-8 border-4 border-cyan-300 relative overflow-hidden">
					<div class="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32"></div>
					<div class="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-24 -mt-24"></div>
					<div class="relative flex flex-col lg:flex-row items-center gap-8">
						<div class="flex-1">
							<div class="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
								<svg class="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
								</svg>
								<span class="text-blue-900 font-bold text-sm">HOMELAB PROJECT</span>
							</div>
							<h2 class="text-4xl font-bold text-white mb-3">🔧 Enterprise Homelab Infrastructure</h2>
							<p class="text-xl text-cyan-100 mb-2 font-medium">OPNSense Router + Proxmox K3s Cluster</p>
							<p class="text-cyan-50 mb-4">Built a production-grade homelab featuring enterprise routing with OPNSense and a Kubernetes cluster on Proxmox virtualization. Demonstrates hands-on experience with network architecture, container orchestration, and infrastructure management.</p>
							<div class="flex flex-wrap gap-2">
								<span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white">OPNSense</span>
								<span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white">Proxmox VE</span>
								<span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white">K3s</span>
								<span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white">Kubernetes</span>
								<span class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white">Network Architecture</span>
							</div>
						</div>
						<div class="lg:w-96 flex-shrink-0">
							<img src="/homelab-diagram.png" alt="Homelab Architecture" class="rounded-xl shadow-2xl border-4 border-white/50 w-full bg-white/10 p-4" />
						</div>
					</div>
				</div>
			</section>

			<!-- Core Competencies - Prominent Display -->
			<section class="mb-16">
				<h2 class="text-3xl font-bold text-white mb-8 flex items-center gap-3">
					<span class="w-1.5 h-10 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></span>
					Core Technical Competencies
				</h2>
				<div class="grid md:grid-cols-2 gap-6">
					{#each coreCompetencies as competency}
						<div class="bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/30 hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300">
							<div class="flex items-start gap-4 mb-6">
								<div class="text-5xl">{competency.icon}</div>
								<div>
									<h3 class="text-2xl font-bold text-gray-900">{competency.title}</h3>
								</div>
							</div>
							<div class="flex flex-wrap gap-3">
								{#each competency.skills as skill}
									<span class="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-sm font-bold shadow-lg">
										{skill}
									</span>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</section>

			<!-- Experience -->
			<section class="mb-16">
				<h2 class="text-3xl font-bold text-white mb-8 flex items-center gap-3">
					<span class="w-1.5 h-10 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></span>
					Professional Experience
				</h2>
				<div class="space-y-6">
					{#each experience as job}
						<div class="relative pl-10 pb-6 border-l-2 border-blue-400/50 last:border-l-0 last:pb-0">
							<div class="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900 shadow-lg shadow-blue-500/50"></div>
							<div class="bg-white/95 backdrop-blur-sm rounded-xl p-7 shadow-xl border border-white/20 hover:shadow-2xl hover:shadow-blue-500/10 transition-all">
								<div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
									<div>
										<h3 class="text-xl font-bold text-gray-900">{job.title}</h3>
										<p class="text-base text-gray-600 mt-1 font-medium">{job.company} • {job.location}</p>
									</div>
									<span class="text-sm text-gray-500 font-medium whitespace-nowrap bg-gray-100 px-3 py-1 rounded-full">{job.period}</span>
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

			<!-- Technical Skills -->
			<section class="mb-16">
				<h2 class="text-3xl font-bold text-white mb-8 flex items-center gap-3">
					<span class="w-1.5 h-10 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></span>
					Technical Skills
				</h2>
				<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{#each Object.entries(technicalSkills) as [category, data]}
						<div class="{data.bgColor} rounded-xl p-6 shadow-xl border-2 {data.borderColor}">
							<h3 class="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">{category}</h3>
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
			</section>

			<!-- Education & Languages Grid -->
			<div class="grid lg:grid-cols-3 gap-8 mb-16">
				<!-- Education -->
				<section class="lg:col-span-2">
					<h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
						<span class="w-1.5 h-10 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></span>
						Education
					</h2>
					<div class="space-y-6">
						{#each education as edu}
							<div class="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20">
								{#if edu.distinction}
									<div class="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-bold mb-3">
										{edu.distinction}
									</div>
								{/if}
								<h3 class="text-xl font-bold text-gray-900">{edu.degree}</h3>
								<p class="text-base text-gray-600 mt-1 font-medium">{edu.institution} • {edu.location}</p>
								<p class="text-sm text-gray-500 mt-1">{edu.period}</p>
								<ul class="mt-4 space-y-2">
									{#each edu.details as detail}
										<li class="flex gap-2 text-gray-700 text-sm">
											<span class="text-blue-500 mt-0.5">•</span>
											<span>{detail}</span>
										</li>
									{/each}
								</ul>
							</div>
						{/each}
					</div>
				</section>

				<!-- Languages -->
				<section>
					<h2 class="text-3xl font-bold text-white mb-6 flex items-center gap-3">
						<span class="w-1.5 h-10 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></span>
						Languages
					</h2>
					<div class="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20">
						<ul class="space-y-4">
							{#each languages as language}
								<li class="flex items-center justify-between">
									<div class="flex items-center gap-3">
										<span class="text-2xl">{language.flag}</span>
										<div>
											<p class="font-bold text-gray-900">{language.lang}</p>
											<p class="text-xs text-gray-600">{language.level}</p>
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
					<div class="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-xl border border-white/20">
						<ul class="space-y-3">
							{#each certifications as cert}
								<li class="flex gap-3 text-gray-700 text-sm items-start">
									<svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
									</svg>
									<span>{cert}</span>
								</li>
							{/each}
						</ul>
					</div>
				</section>
			</div>

		</main>

		<!-- Footer -->
		<footer class="bg-black/40 backdrop-blur-sm text-gray-400 py-10 border-t border-white/10">
			<div class="max-w-7xl mx-auto px-6 text-center">
				<p class="text-sm mb-2">© 2024 {personalInfo.name}</p>
				<p class="text-xs text-gray-500">Built with SvelteKit & Tailwind CSS • Seeking DevOps & Operations Engineering opportunities</p>
			</div>
		</footer>
	</div>
</div>