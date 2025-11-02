export const personalInfo = {
    basic: {
        name: "Paul Korp",
        title: "DevOps Enthusiast",
        subtitle: "Full-Stack Developer & DevOps Enthusiast",
        email: "paul.m.korp@gmail.com",
        phone: "+372 53264707",
        location: "Tallinn, Estonia",
        github: "github.com/pakorp",
        linkedin: "linkedin.com/in/paul-korp-6b5709167/",
        dob: "15 March 1999"
    },

    summary : "I am a hard-working and versatile enthusiast with years of experience. My aptitude and willpower allow me to excel in demanding situations. Passionate about building reliable, scalable systems. Seeking a place to call home and develop my skills further.",

    coreCompetencies: [
        {
            icon: '☸️',
            title: 'Kubernetes & Orchestration',
            skills: [
                { name: 'Kubernetes (K8s)', color: 'bg-blue-600 text-white' },
                { name: 'K3s', color: 'bg-blue-500 text-white' },
                { name: 'ArgoCD', color: 'bg-orange-600 text-white' },
                { name: 'Docker', color: 'bg-sky-600 text-white' },
                { name: 'High Availability Design', color: 'bg-purple-600 text-white' }
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
            icon: '🚀',
            title: 'CI/CD & Automation',
            skills: [
                { name: 'GitHub Actions', color: 'bg-blue-600 text-white' },
                { name: 'ArgoCD', color: 'bg-orange-600 text-white' },
                { name: 'GitOps', color: 'bg-teal-600 text-white' },
                { name: 'Automated Deployments', color: 'bg-green-600 text-white' }
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
            title: "Quality Technician",
            company: "Stoneridge Electronics",
            location: "Estonia",
            period: "April 2025 - Present",
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
        "DevOps & Orchestration": {
            bgColor: "bg-gradient-to-r from-blue-500 to-blue-800",
            borderColor: "border-blue-300/30",
            skills: [
            { name: "Docker", color: "bg-blue-600 text-white" },
            { name: "Kubernetes", color: "bg-blue-600 text-white" },
            { name: "Terraform", color: "bg-blue-700 text-white" },
            { name: "Ansible", color: "bg-blue-700 text-white" },
            ]
        },
        "CI/CD & Version Control": {
            bgColor: "bg-gradient-to-r from-amber-200 to-yellow-400",
            borderColor: "bg-gradient-to-r from-slate-300 to-slate-500",
            skills: [
                { name: "GitHub", color: "bg-gray-800 text-white" },
                { name: "GitHub Actions", color: "bg-blue-600 text-white" },
                { name: "GitOps Workflows", color: "bg-teal-600 text-white" }
            ]
        },
        "Cloud & Virtualization": {
            bgColor: "bg-gradient-to-r from-blue-200 to-cyan-200",
            borderColor: "border-indigo-300/30",
            skills: [
                { name: "GCP", color: "bg-blue-500 text-white" },
                { name: "Proxmox VE9", color: "bg-orange-600 text-white" },
                { name: "KVM/QEMU", color: "bg-red-600 text-white" },
                { name: "Xen", color: "bg-blue-700 text-white" },
                { name: "VirtualBox", color: "bg-sky-600 text-white" }
            ]
        },
        "Operating Systems": {
            bgStyle: "background: linear-gradient(to right, rgba(163, 230, 53, 0.2), rgba(132, 204, 22, 0.3))",
            bgColor: "bg-gradient-to-r from-slate-500 to-slate-800",
            borderColor: "border-lime-300/30",
            skills: [
                { name: "Linux (Debian, Ubuntu Server)", color: "bg-yellow-500 text-gray-900" },
                { name: "Windows 7/10", color: "bg-blue-600 text-white" }
            ]
        },
        "Design Patterns": {
            bgColor: "bg-gradient-to-r from-teal-200 to-teal-500",
            borderColor: "border-rose-300/30",
            skills: [
                { name: "RESTful APIs", color: "bg-green-600 text-white" },
                { name: "OOP", color: "bg-purple-600 text-white" },
                { name: "IaC", color: "bg-indigo-600 text-white" },
                { name: "Containerization", color: "bg-cyan-600 text-white" },
                { name: "HA Systems", color: "bg-red-600 text-white" },
                { name: "DRY", color: "bg-indigo-600 text-white" },
            ]
        },
        "Databases & Diagramming Tools": {
            bgColor: "bg-gradient-to-r from-amber-200 to-yellow-400",
            borderColor: "border-rose-300/30",
            skills: [
                { name: "PostGreSQL", color: "bg-green-600 text-white" },
                { name: "MermaidJS", color: "bg-purple-600 text-white" },
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

};