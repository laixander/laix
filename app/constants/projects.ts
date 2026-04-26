import type { Project } from '~/types'

export const projects: Project[] = [
    {
        title: 'LearnFast for Kids',
        description: 'An educational platform designed for children to learn and explore through interactive lessons and games.',
        image: 'current',
        tags: ['AI', 'Nuxt', 'Vue', 'Tailwind CSS'],
        to: '/',
        featured: true
    },
    {
        title: 'Acumen',
        description: 'An AI-powered learning companion designed to identify knowledge gaps and accelerate mastery through personalized study plans.',
        image: 'acumen',
        tags: ['AI', 'Nuxt', 'Vue', 'Tailwind CSS'],
        to: 'https://app-acumen.vercel.app/',
        featured: true
    },
    {
        title: 'Sanitarium',
        description: 'A comprehensive dual-interface hospital management system featuring a patient queuing kiosk and professional admin dashboard.',
        image: 'sanitarium',
        tags: ['Hospital Management', 'Nuxt', 'Vue', 'Tailwind CSS'],
        to: 'https://app-sanitarium.vercel.app/',
        featured: true
    },
    {
        title: 'Budokan',
        description: 'A specialist martial arts dojo dedicated to authentic combat systems that have largely disappeared from mainstream training.',
        image: 'budokan',
        tags: ['Martial Arts', 'Nuxt', 'Tailwind CSS'],
        to: 'https://web-budokan.vercel.app/',
    },
    {
        title: 'Luta Livre Filipinas',
        description: 'Dedicated to the practice and preservation of Luta Livre as a functional grappling art, focusing on aggressive positional dominance.',
        image: 'lutalivre',
        tags: ['Grappling', 'Nuxt', 'Tailwind CSS'],
        to: 'https://web-lutalivre.vercel.app/',
    },
    {
        title: 'Filipino Fighting Style',
        description: 'The official martial art of the Philippines — blending self-defense, discipline, and cultural heritage into a flowing art of war.',
        image: 'ffs',
        tags: ['Arnis', 'Nuxt', 'Tailwind CSS'],
        to: 'https://web-filipinofightingstyle.vercel.app/',
    },
    {
        title: 'ILSP (Institutional Linkages and Special Projects for Central Bicol State University of Agriculture)',
        description: 'A comprehensive platform for managing institutional partnerships, MOU workflows, and project evaluations.',
        image: 'ilsp',
        tags: ['Partnership', 'Nuxt', 'Tailwind CSS'],
        to: 'https://app-ilsp.vercel.app/dashboard',
    },
    {
        title: 'HKAS (Human Kinetics Analysis System for MSU Marawi Campus)',
        description: 'Professional assessment tools for human kinetics, transforming fitness tracking and analysis.',
        image: 'hkas',
        tags: ['Fitness', 'Nuxt', 'Tailwind CSS'],
        to: 'https://app-kinetics.vercel.app/',
    },
    {
        title: 'ISSP (Automation of Information Systems Strategic Plan for MSU)',
        description: 'AI-powered platform for automating the creation and validation of Information Systems Strategic Plans (ISSP).',
        image: 'aissp',
        tags: ['Automation', 'Nuxt', 'Tailwind CSS'],
        to: 'https://app-aissp.vercel.app/',
    }
]
