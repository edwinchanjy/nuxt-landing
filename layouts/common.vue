<template>
  <div>
    <div
      class="flex h-44 w-full items-center justify-center bg-black bg-opacity-10 text-center text-6xl font-bold
        uppercase tracking-wider"
    >
      <h1
        :class="{
          'animate-fade-in ': isTransitioning,
        }"
      >
        {{ t(title.toLowerCase()) }}
      </h1>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const route = useRoute()

const title = computed(() => {
  return route.name ? (route.name as string).split('___')[0] : ''
})

const isTransitioning = ref(false)

watch(
  () => route.name,
  () => {
    isTransitioning.value = true

    setTimeout(() => {
      isTransitioning.value = false
    }, 500)
  },
)
</script>
