<template>
    <div>
        <UPageHero
            description="I'm Alex, a UI/UX Designer & UI Developer crafting clean, user-centric interfaces that blend aesthetics with functionality."
            :links="links" orientation="horizontal">
            <template #headline>
                <UBadge label="Available for work" variant="subtle"
                    class="font-semibold uppercase tracking-wide py-2 px-4 rounded-full" />
            </template>
            <template #title>
                <h1 class="text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-highlighted">
                    Designing Digital
                    <span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
                        Experiences
                    </span> That Matter.
                </h1>
            </template>

            <div class="relative">
                <div
                    class="relative z-10 rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 ease-out">
                    <img src="https://images.unsplash.com/photo-1680055196833-c2965de0caec?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMDNkJTIwc2hhcGVzJTIwbWluaW1hbCUyMGRlc2lnbiUyMHZpb2xldHxlbnwxfHx8fDE3NjUyNDY5NDB8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                        alt="Abstract Design Layout" class="w-full h-auto object-cover">
                </div>
                <div
                    class="absolute -top-10 -right-10 w-32 h-32 bg-indigo-400/20 dark:bg-indigo-500/10 rounded-full blur-2xl">
                </div>
                <div
                    class="absolute -bottom-10 -left-10 w-40 h-40 bg-violet-400/20 dark:bg-violet-500/10 rounded-full blur-2xl">
                </div>
                <div
                    class="absolute -bottom-6 -left-6 z-10 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl dark:shadow-2xl dark:border dark:border-slate-700 hidden md:block animate-bounce-slow">
                    <div class="flex items-center gap-3">
                        <div
                            class="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                            <span class="font-bold">✓</span>
                        </div>
                        <div>
                            <p class="text-xs text-muted font-medium">Project Status</p>
                            <p class="text-sm font-bold text-highlighted">Completed</p>
                        </div>
                    </div>
                </div>
            </div>

        </UPageHero>

        <UPageSection headline="About Me" title="Bridging the gap between design and development"
            description="I am a passionate UI/UX Designer and UI Developer with over 5 years of experience in creating digital products. My unique background allows me to design with implementation in mind, ensuring that beautiful interfaces are also feasible, accessible, and performant. I thrive in collaborative environments and love solving complex problems through clean, minimal design."
            orientation="horizontal" reverse>
            <template #body>
                <div class="grid lg:grid-cols-2 gap-8">
                    <UPageCard v-for="(aboutCard, index) in aboutCards" :key="index" v-bind="aboutCard"
                        variant="subtle" spotlight />
                </div>
            </template>
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f" class="rounded-xl h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out" />
            <!-- <Placeholder /> -->
        </UPageSection>

        <UPageSection title="Skills & Tools"
            description="My technical proficiency and design toolkit that I use to bring ideas to life.">
            <template #body>
                <div class="grid lg:grid-cols-3 gap-8">
                    <UPageCard v-for="(skillCard, index) in skillCards" :key="index" v-bind="skillCard" variant="subtle" spotlight>
                        <template #description>
                            <div class="mt-4 flex flex-wrap gap-2">
                                <UBadge v-for="(item, i) in skillCard.items" :key="i" :label="item" variant="outline"
                                    color="neutral" size="lg" class="rounded-lg px-3 py-2" />
                            </div>
                        </template>
                    </UPageCard>
                </div>
            </template>
        </UPageSection>

        <UPageSection title="My Creative Process"
            description="A structured approach ensures that every project is delivered with quality and purpose.">
            <template #body>
                <ProcessSteps :steps="steps" />
            </template>
        </UPageSection>

        <!-- <UPageSection>
            <p class="mb-4">
                Over the years, I've had the privilege of working with diverse clients, from startups to established brands, helping them bring their visions to life. My expertise spans across various industries, allowing me to adapt and tailor my approach to meet unique project requirements.
            </p>
            <p class="mb-4">
                As a designer and developer, I believe in the power of collaboration and open communication. I work closely with clients to understand their goals, target audience, and brand identity, ensuring that every design decision aligns with their overall vision.
            </p>
            <p>
                Whether it's crafting wireframes, designing user interfaces, or developing responsive websites, I am committed to delivering high-quality work that exceeds expectations. Let's work together to create digital experiences that leave a lasting impact.
            </p>
        </UPageSection> -->

        <!-- <UPageSection id="features" title="Everything you need to build modern Nuxt apps"
            description="Start with a solid foundation. This template includes all the essentials for building production-ready applications with Nuxt UI's powerful component system."
            :features="[{
                icon: 'i-lucide-rocket',
                title: 'Production-ready from day one',
                description: 'Pre-configured with TypeScript, ESLint, Tailwind CSS, and all the best practices. Focus on building features, not setting up tooling.'
            }, {
                icon: 'i-lucide-palette',
                title: 'Beautiful by default',
                description: 'Leveraging Nuxt UI\'s design system with automatic dark mode, consistent spacing, and polished components that look great out of the box.'
            }, {
                icon: 'i-lucide-zap',
                title: 'Lightning fast',
                description: 'Optimized for performance with SSR/SSG support, automatic code splitting, and edge-ready deployment. Your users will love the speed.'
            }, {
                icon: 'i-lucide-blocks',
                title: '100+ components included',
                description: 'Access Nuxt UI\'s comprehensive component library. From forms to navigation, everything is accessible, responsive, and customizable.'
            }, {
                icon: 'i-lucide-code-2',
                title: 'Developer experience first',
                description: 'Auto-imports, hot module replacement, and TypeScript support. Write less boilerplate and ship more features.'
            }, {
                icon: 'i-lucide-shield-check',
                title: 'Built for scale',
                description: 'Enterprise-ready architecture with proper error handling, SEO optimization, and security best practices built-in.'
            }]" /> -->

        <UPageSection>
            <UPageCTA title="Let's work together!"
                description="Have a project in mind or just want to say hi? I'm currently open to new opportunities and collaborations."
                variant="subtle">
                <template #body>
                    <div class="flex justify-center gap-12">
                        <!-- Email -->
                        <div class="flex items-center gap-4">
                            <div class="p-2 rounded-lg bg-primary-50 dark:bg-primary-500/10">
                                <UIcon name="i-lucide-mail" class="text-primary-500 size-6 flex" />
                            </div>
                            <div>
                                <h4 class="font-semibold text-highlighted">
                                    Email Me
                                </h4>
                                <p class="text-muted">
                                    laixander@gmail.com
                                </p>
                            </div>
                        </div>

                        <!-- Location -->
                        <div class="flex items-center gap-4">
                            <div class="p-2 rounded-lg bg-primary-50 dark:bg-primary-500/10">
                                <UIcon name="i-lucide-map-pin" class="text-primary-500 size-6 flex" />
                            </div>
                            <div>
                                <h4 class="font-semibold text-highlighted">
                                    Location
                                </h4>
                                <p class="text-muted">
                                    Manila, Philippines (Remote)
                                </p>
                            </div>
                        </div>
                    </div>
                </template>
            </UPageCTA>
        </UPageSection>
    </div>
</template>
<script setup lang="ts">
const links = [
    {
        label: 'View My Work',
        to: '/',
        target: '_blank',
        trailingIcon: 'i-lucide-arrow-right',
        size: 'xl',
        class: 'rounded-full px-6 py-3 shadow-lg shadow-primary-200 dark:shadow-primary-900/30',
    },
    {
        label: 'Download CV',
        to: '/',
        target: '_blank',
        icon: 'i-lucide-download',
        size: 'xl',
        color: 'neutral',
        variant: 'subtle',
        class: 'rounded-full px-6 py-3',
    }
]
const aboutCards = ref([
    {
        title: '5+ Years',
        description: 'Experience in UI/UX design and development, delivering high-quality digital products for various clients.',
        icon: 'i-lucide-briefcase'
    },
    {
        title: '50+ Projects',
        description: 'Completed over 50 projects ranging from web applications to mobile apps for various clients.',
        icon: 'i-lucide-layers-3'
    }
])
const skillCards = ref([
    {
        title: 'UI/UX Design',
        // description: 'Proficient in creating user-centric designs using tools like Figma, Sketch, and Adobe XD.',
        icon: 'i-lucide-pen-tool',
        items: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Interaction Design", "Information Architecture"]
    },
    {
        title: 'Front-end Development',
        // description: 'Skilled in HTML, CSS, JavaScript, and frameworks like Vue.js and Nuxt.js for building responsive web applications.',
        icon: 'i-lucide-code',
        items: ["HTML5 / CSS3", "JavaScript / TypeScript", "Vue / Nuxt.js", "Tailwind CSS", "Responsive Layouts"]
    },
    {
        title: 'Software & Tools',
        // description: 'Experienced in creating interactive prototypes and wireframes to visualize design concepts and user flows.',
        icon: 'i-lucide-terminal',
        items: ["Figma", "Adobe Creative Suite", "VS Code", "Git / GitHub", "Jira / Notion", "Framer", "Webflow"]
    }
])
const steps = [
    {
        icon: 'i-lucide-search',
        title: 'Research',
        description: 'Understanding the problem, user needs, and market landscape.'
    },
    {
        icon: 'i-lucide-panels-top-left',
        title: 'Wireframe',
        description: 'Structuring the layout and flow without visual distractions.'
    },
    {
        icon: 'i-lucide-pen-tool',
        title: 'Design',
        description: 'Crafting the visual identity, typography, and color systems.'
    },
    {
        icon: 'i-lucide-zap',
        title: 'Prototype',
        description: 'Creating interactive mockups to test and validate interactions.'
    },
    {
        icon: 'i-lucide-code',
        title: 'Build',
        description: 'Developing pixel-perfect, responsive code ready for production.'
    }
]
</script>