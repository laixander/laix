import type { ButtonProps } from '@nuxt/ui'

export const links: ButtonProps[] = [
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

export const aboutCards = [
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
]

export const skillCards = [
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
]

export const steps = [
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
