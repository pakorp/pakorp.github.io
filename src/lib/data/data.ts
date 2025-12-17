export const personalInfo = {
    basic: {
        name: "Paul Korp",
        title: "DevOps Enthusiast",
        subtitle: "GitOps-oriented Full-Stack Web Developer",
        email: "paul.m.korp@gmail.com",
        phone: "+372 53264707",
        location: "Tallinn, Estonia",
        github: "github.com/pakorp",
        linkedin: "linkedin.com/in/paul-korp-6b5709167/",
        dob: "15 March 1999"
    },

    homelabProject: {
        badge: {
            icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
            text: "HOMELAB PROJECT"
        },
        title: "🔧 Homelab Infrastructure",
        subtitle: "OPNSense Router + Proxmox K3s Cluster",
        description: "Built a production-grade homelab to develop enterprise DevOps skills. Designed and deployed a high-availability K3s cluster across 3 Proxmox nodes, BGP peering with WAN point for ingress routes. Implemented GitOps-centric workflows with IaC: orchestration, automated provisioning, and ArgoCD with Helm charts as cluster building blocks. Achieved automated, version-controlled infrastructure that demonstrates an understanding of scalable cloud-native architectures.",
        image: {
            src: "/homelab-diagram.png",
            alt: "Homelab Architecture"
        },
        tags: [
            "OPNSense",
            "Proxmox VE",
            "K3s",
            "Kubernetes",
            "Network Architecture"
        ],
        theme: {
            gradient: "from-blue-600 via-cyan-500 to-teal-600",
            borderColor: "border-cyan-300",
            badgeBackground: "bg-white/30",
            badgeTextColor: "text-blue-900",
            tagBackground: "bg-white/20",
            textColors: {
                title: "text-white",
                subtitle: "text-cyan-100",
                description: "text-cyan-50",
                clickHint: "text-cyan-200"
            }
        }
    },

    koodAchievement: {
        badge: {
            icon: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
            text: "TOP ACHIEVEMENT"
        },
        title: "🏆 Graduated #1 at kood/Jõhvi",
        subtitle: "Batch 4 - Full-Stack Developer with DevOps Specialization",
        description: "Invested thousands of hours to rank #1 among 90+ developers during intensive 18-month training, completing most bonus tasks. Engineered a full-stack web forum with JWT and 0Auth, real-time AJAX updates. Developed a Canvas-free multiplayer game engine, implementing optimizations for a smooth experience. Migrated a k8s cluster to GCP, deploying and setting up a prod and test environment.",
        image: {
            src: "/koodJresults.png",
            alt: "kood/Jõhvi Results"
        },
        tags: [
            "Go",
            "NodeJS&JavaScript",
            "React",
            "Terraform&Ansible",
            "Kubernetes"
        ],
        theme: {
            gradient: "from-amber-500 via-yellow-500 to-amber-600",
            borderColor: "border-amber-300",
            badgeBackground: "bg-white/30",
            badgeTextColor: "text-amber-900",
            tagBackground: "bg-white/20",
            textColors: {
                title: "text-white",
                subtitle: "text-amber-100",
                description: "text-amber-50"
            }
        }
    },

    summary : "Versatile and motivated, with years of experience. Passionate about building reliable, scalable systems. Always pushing myself further.",

    coreCompetencies: [
        {
            icon: '☸️',
            title: 'DevOps & Orchestration',
            skills: [
                { name: 'K8s (Kubernetes)', color: 'bg-blue-600 text-white' },
                { name: 'K3s (Kubernetes)', color: 'bg-blue-500 text-white' },
                { name: 'ArgoCD', color: 'bg-orange-600 text-white' },
                { name: 'Docker', color: 'bg-sky-600 text-white' },
                { name: 'High Availability Design', color: 'bg-purple-600 text-white' },
                { name: "Containerization", color: "bg-cyan-600 text-white" },
            ]
        },
        {
            icon: '🔧',
            title: 'Infrastructure as Code',
            skills: [
                { name: 'Terraform', color: 'bg-purple-600 text-white' },
                { name: 'Ansible', color: 'bg-red-600 text-white' },
                { name: 'Declarative Provisioning', color: 'bg-indigo-600 text-white' },
                { name: 'Cloud Architecture', color: 'bg-cyan-600 text-white' }
            ]
        },
        {
            icon: '☁️',
            title: 'Cloud & Virtualization',
            skills: [
                { name: 'GCP', color: 'bg-blue-500 text-white' },
                { name: 'Proxmox VE', color: 'bg-orange-600 text-white' },
                { name: 'KVM/QEMU', color: 'bg-red-600 text-white' },
                { name: 'Xen Hypervisor', color: 'bg-blue-700 text-white' },
                { name: 'VirtualBox', color: 'bg-sky-600 text-white' }
            ]
        },
        {
            icon: '⚙️',
            title: '8D Problem Solving',
            skills: [
                { name: 'Root Cause Analysis', color: 'bg-blue-500 text-white' },
                { name: 'Blameless Postmortem', color: 'bg-orange-600 text-white' },
                { name: 'Failure Mode and Effects Analysis', color: 'bg-red-600 text-white' },
            ]
        }
    ],

    experience: [
        {
            title: "IT Services Change & Release Specialist (Digital Services)",
            company: "CARIAD Estonia AS",
            location: "Estonia",
            period: "January 2026 - Present",
            achievements: [
                "Coordinate change management activities for enterprise automotive infrastructure releases serving thousands of stakeholders",
                "Moderate Change Advisory Board meetings and change review boards, ensuring cross-functional alignment",
                "Review and assure quality of change tickets for completeness, compliance, and implementation readiness",
                "Support major release execution across environments, validating governance and process standards",
                "Maintain audit-ready documentation with full traceability and version control",
                "Collaborate with DevOps teams, business units, and external vendors on release planning and deployment"
            ]
        },
        {
            title: "Quality Technician",
            company: "Stoneridge Electronics",
            location: "Estonia",
            period: "April 2025 - December 2025",
            achievements: [
                "Identified faulty supplier components through Root Cause Analysis, preventing ~€250,000 in potential losses over 16 months",
                "Proposed process changes based on RCAs that reduced rework cases by ~90% and increased FPQ",
                "Resolved systemic MES/PLC-related defects via RCA, reducing rework to operator and supplier concerns",
                "Documented rework cases, analyzing failure modes and root causes with FMEA methodology",
                "Collected, analyzed and shared QA metrics (FAN charts, MIS reports) for continuous improvement",
                "Performed corrective actions to restore products to functional specifications",
                "Supported 8D corrective action development and ERP database management (J1 Edwards Oracle)"
            ]
        },
        {
            title: "Electronic Device Assembler",
            company: "Stoneridge Electronics",
            location: "Estonia",
            period: "February 2025 - May 2025",
            achievements: [
                "Assembled electronics for Renault, Volvo Trucks Wings modules and DAF Chassis modules",
                "Reported faults and provided detailed troubleshooting information",
                "Resolved assembly operation station issues leading to increased productivity",
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
                "Maintained mechanical reliability of drink mixing manufacturing lines",
                "Performed preventative maintenance, calibrations, and troubleshooting",
                "Managed inventory and logistics for production support"
            ]
        }
    ],

    technicalSkills: {
        "Programming Languages": {
            bgColor: "bg-gradient-to-r from-emerald-400 to-cyan-400",
            borderColor: "border-green-300/30",
            skills: [
            { name: "Go", color: "bg-green-700 text-white" },
            { name: "Python", color: "bg-green-600 text-white" },
            { name: "JavaScript&Node.js", color: "bg-green-500 text-gray-900" },
            { name: "SvelteKit&Tailwind", color: "bg-green-500 text-gray-900" },
            { name: "Java", color: "bg-green-600 text-white" },
            ]
        },
        "CI/CD & Version Control": {
            bgColor: "bg-gradient-to-r from-amber-200 to-yellow-400",
            borderColor: "bg-gradient-to-r from-slate-300 to-slate-500",
            skills: [
                { name: "GitHub", color: "bg-gray-800 text-white" },
                { name: "GitHub Actions", color: "bg-blue-600 text-white" },
                { name: "GitLab CI/CD", color: "bg-teal-600 text-white" }
            ]
        },
        "Operating Systems": {
            bgStyle: "background: linear-gradient(to right, rgba(163, 230, 53, 0.2), rgba(132, 204, 22, 0.3))",
            bgColor: "bg-gradient-to-r from-blue-200 to-cyan-200",
            borderColor: "border-lime-300/30",
            skills: [
                { name: "Headless Linux (Debian, Ubuntu Server)", color: "bg-yellow-500 text-gray-900" },
                { name: "Windows", color: "bg-blue-600 text-white" }
            ]
        },
        "Design Patterns": {
            bgColor: "bg-gradient-to-r from-teal-200 to-teal-500",
            borderColor: "border-rose-300/30",
            skills: [
                { name: "RESTful APIs", color: "bg-green-600 text-white" },
                { name: "OOP", color: "bg-purple-600 text-white" },
                { name: "IaC", color: "bg-indigo-600 text-white" },
                { name: "HA Systems", color: "bg-red-600 text-white" },
                { name: "DRY", color: "bg-indigo-600 text-white" },
            ]
        },
        "Databases & Diagramming": {
            bgColor: "bg-gradient-to-r from-amber-200 to-yellow-400",
            borderColor: "border-rose-300/30",
            skills: [
                { name: "PostgreSQL", color: "bg-green-600 text-white" },
                { name: "MermaidJS", color: "bg-purple-600 text-white" },
                { name: "ERDs", color: "bg-teal-600 text-white" },
            ]
        },
    },

    education: [
        {
            institution: "kood/Jõhvi",
            degree: "Full-Stack Web Developer /w DevOps Specialization",
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
                "Completed various courses"
            ]
        }
    ],

    languages: [
        { lang: "English", level: "C2 (Native)", flag: "🇬🇧" },
        { lang: "Estonian", level: "C2 (Native)", flag: "🇪🇪" },
        { lang: "Russian", level: "B1 (Intermediate)", flag: "🇷🇺" }
    ],

    certifications: [
        "CISCO Networking Experience (TalTech)",
        "DevOps Specialization (kood/Jõhvi)",
        "Full-Stack Web Development (kood/Jõhvi)"
    ],

    certificationsPage: [
        {
            name: "Go Module Certificate",
            issuer: "kood/Jõhvi",
            date: "2024",
            description: "Comprehensive Web Development course for Golang",
            imageUrl: "/certs/Go Module Certificate.webp",
            pdfUrl: "/certs/Go Module Certificate.pdf",
            tags: ["Golang", "Go templates", "Docker", "PostgreSQL"],
            // Theme customization
            theme: {
                gradientFrom: "blue-600",
                gradientVia: "indigo-600",
                gradientTo: "purple-600",
                borderColor: "blue-300",
                badgeTextColor: "blue-900",
                textPrimaryColor: "blue-100",
                textSecondaryColor: "blue-50",
                accentColor: "blue-200"
            }
        },
        {
            name: "DevOps Specialization",
            issuer: "kood/Jõhvi",
            date: "2025",
            description: "Advanced DevOps practices including ArgoCD, Helm charts, IaC - provisioning and orchestration and GitOps-centric workflows",
            imageUrl: "/certs/DevOps Module Certificate.webp",
            pdfUrl: "/certs/DevOps Module Certificate.pdf",
            tags: ["Kubernetes", "Terraform", "Ansible", "GitOps"],
            theme: {
                gradientFrom: "cyan-600",
                gradientVia: "teal-600",
                gradientTo: "green-600",
                borderColor: "cyan-300",
                badgeTextColor: "cyan-900",
                textPrimaryColor: "cyan-100",
                textSecondaryColor: "cyan-50",
                accentColor: "cyan-200"
            }
        },
        {
            name: "JavaScript&NodeJS",
            issuer: "kood/Jõhvi",
            date: "2025",
            description: "Full-Stack Web Developer Training",
            imageUrl: "/certs/JavaScript Module Certificate.webp",
            pdfUrl: "/certs/JavaScript Module Certificate.pdf",
            tags: ["JavaScript&Node.js", "React", "WebSocketIO"],
            theme: {
                gradientFrom: "yellow-500",
                gradientVia: "orange-500",
                gradientTo: "red-600",
                borderColor: "yellow-300",
                badgeTextColor: "yellow-900",
                textPrimaryColor: "yellow-100",
                textSecondaryColor: "yellow-50",
                accentColor: "yellow-200"
            }
        },
        {
            name: "Kood/Jõhvi Batch Graduation",
            issuer: "kood/Jõhvi",
            date: "2025",
            description: "Full-stack style training featuring Go/JavaScript, Node.js, React, and modern web technologies",
            imageUrl: "/certs/Paul Martin Korp Batch 4 Graduation Diploma.webp",
            pdfUrl: "/certs/Paul Martin Korp Batch 4 Graduation Diploma.pdf",
            tags: [">"],
            theme: {
                gradientFrom: "amber-500",
                gradientVia: "yellow-500",
                gradientTo: "amber-600",
                borderColor: "amber-300",
                badgeTextColor: "amber-900",
                textPrimaryColor: "amber-100",
                textSecondaryColor: "amber-50",
                accentColor: "amber-200"
            }
        }
    ],

    projectsPage: [
        {
            name: "Homelab Infrastructure (WIP)",
            description: "Enterprise-grade homelab featuring OPNSense router and K3s cluster on Proxmox VE9 across 3 nodes. Implements GitOps principles, orchestration and provisioning. Cluster uses Helm charts and ArgoCD as a foundation.",
            imageUrl: "/projects/homelab-diagram.png",
            liveUrl: "https://status.vilde.dev/status/general",
            //liveUrl: "https://status.vilde.dev", 
            githubUrl: "null",
            //githubUrl: "https://github.com/pakorp/vilde-homelab",
            tags: ["Kubernetes", "Terraform", "Ansible", "Proxmox", "OPNSense"],
            theme: {
                gradientFrom: "cyan-600",
                gradientVia: "teal-600",
                gradientTo: "green-600",
                borderColor: "cyan-300",
                badgeTextColor: "cyan-900",
                textPrimaryColor: "cyan-100",
                textSecondaryColor: "cyan-50",
                accentColor: "cyan-200"
            }
        },
        {
            name: "Portfolio Website",
            description: "Responsive portfolio. Features dynamic routing, component-based architecture, and optimized performance with static site generation.",
            imageUrl: "/projects/favicon.svg",
            liveUrl: "https://pakorp.github.io",
            githubUrl: "https://github.com/pakorp/pakorp.github.io",
            tags: ["SvelteKit", "TypeScript", "TailwindCSS", "Responsive Design"],
            theme: {
                gradientFrom: "blue-600",
                gradientVia: "indigo-600",
                gradientTo: "purple-600",
                borderColor: "blue-300",
                badgeTextColor: "blue-900",
                textPrimaryColor: "blue-100",
                textSecondaryColor: "blue-50",
                accentColor: "blue-200"
            }
        },
    ],
};