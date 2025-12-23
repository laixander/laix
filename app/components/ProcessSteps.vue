<template>
    <div class="relative">
        <!-- Line behind icons -->
        <div class="hidden lg:block absolute top-12 left-0 right-0 h-0.5 
             bg-elevated 
             -z-0 mx-20"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div v-for="(step, index) in props.steps" :key="index"
                class="relative z-10 flex flex-col items-center text-center group">
                <!-- Icon container -->
                <div class="w-24 h-24 rounded-2xl 
                 bg-elevated ring ring-default
                 flex items-center justify-center mb-6 
                 group-hover:bg-indigo-600 
                 group-hover:border-indigo-500 
                 transition-colors duration-300 shadow-lg">
                    <div class="text-indigo-500 dark:text-indigo-400 
                   group-hover:text-white transition-colors">
                        <UIcon :name="step.icon" class="size-6 flex" />
                    </div>
                </div>

                <!-- Number, title, description -->
                <div class="flex flex-col items-center">
                    <span class="w-8 h-8 rounded-full 
                   bg-elevated/50 ring ring-default
                   text-gray-600 dark:text-gray-400 
                   font-bold text-sm flex items-center justify-center mb-3">
                        {{ index + 1 }}
                    </span>

                    <h3 class="text-lg font-bold mb-2 text-highlighted">
                        {{ step.title }}
                    </h3>

                    <p class="leading-relaxed text-toned">
                        {{ step.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
export interface Step {
    icon: string
    title: string
    description: string
}

const props = defineProps<{
    steps: Step[]
}>()
</script>