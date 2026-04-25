<script setup lang="ts">
defineProps<{
    title: string
    description: string
    image: string
    tags: string[]
    to?: string
}>()
</script>

<template>
    <UCard as="a" :href="to"
        class="group overflow-hidden rounded-2xl border-none bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 dark:hover:shadow-primary-400/5"
        :ui="{ header: 'p-0 sm:p-0' }">
        <template #header>
            <div class="relative aspect-[16/10] overflow-hidden">
                <UColorModeImage :light="`/img/${image}-light.png`" :dark="`/img/${image}-dark.png`"
                    class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                <div
                    class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div
                    class="absolute bottom-4 left-4 flex flex-wrap gap-2 transition-transform duration-500 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <UBadge v-for="tag in tags" :key="tag" :label="tag" variant="subtle" size="sm"
                        class="rounded-full bg-white/20 text-white backdrop-blur-md border-none" />
                </div>
            </div>
        </template>

        <div>
            <div class="flex items-center justify-between gap-2 mb-2">
                <h3
                    class="text-xl font-bold text-highlighted group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {{ title }}
                </h3>
                <UIcon name="i-lucide-arrow-up-right"
                    class="size-5 text-muted opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <p class="text-sm text-muted line-clamp-2 font-space">
                {{ description }}
            </p>
        </div>
    </UCard>
</template>

<!-- <style scoped>
.text-highlighted {
    @apply text-slate-900 dark:text-white;
}

.text-muted {
    @apply text-slate-500 dark:text-slate-400;
}
</style> -->
