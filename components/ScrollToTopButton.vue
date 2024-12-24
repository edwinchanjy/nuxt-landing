<template>
  <UButton
    class="fixed bottom-14 right-14 transition-all duration-300 hover:scale-125"
    :class="{
      'opacity-0': scrollPosition < 100,
      'opacity-100': scrollPosition >= 100,
    }"
    :ui="{ rounded: 'rounded-full' }"
    icon="i-heroicons-arrow-uturn-up-20-solid"
    size="xl"
    color="primary"
    variant="soft"
    @click="scrollToTop"
  />
</template>

<script setup lang="ts">
const scrollPosition = ref(0)

const updateScroll = () => {
  scrollPosition.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>
