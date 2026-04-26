<script setup lang="ts">
import { projects } from '~/constants/projects'

useHead({
    title: 'Projects | Laix - Full-Stack UI/UX Designer',
    meta: [
        { name: 'description', content: 'A gallery of my recent work in UI/UX design and full-stack development.' }
    ]
})

const ui = {
    UPageHero: {
        description: 'text-lg font-space text-muted'
    },
    UPageSection: {
        description: 'text-lg font-space text-muted'
    }
}
</script>

<template>
    <div>
        <!-- Hero Section -->
        <UPageHero title="Projects Gallery"
            description="A curated collection of digital experiences, design systems, and full-stack applications I've built over the years."
            :ui="ui.UPageHero">
            <template #headline>
                <UBadge label="Portfolio" variant="subtle"
                    class="font-semibold uppercase tracking-wide py-2 px-4 rounded-full" />
            </template>
        </UPageHero>

        <!-- Projects Grid -->
        <UPageSection>
            <template #body>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
                    <ProjectCard v-for="(project, index) in projects" :key="index" v-bind="project"
                        class="animate-fade-in-up" :style="{ animationDelay: `${index * 100}ms` }" />
                </div>
            </template>
        </UPageSection>

        <!-- Contact CTA -->
        <UPageSection>
            <UPageCTA title="Have a project in mind?"
                description="I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions."
                variant="subtle">
                <template #links>
                    <UButton label="Get in Touch" to="mailto:laixander@gmail.com" size="xl"
                        class="rounded-full px-8 py-4 font-semibold" />
                </template>
            </UPageCTA>
        </UPageSection>
    </div>
</template>

<style scoped>
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
    opacity: 0;
}
</style>
