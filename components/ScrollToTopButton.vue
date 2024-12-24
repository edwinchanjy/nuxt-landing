<template>
  <UButton
    class="bottom-14 right-14 transition-all duration-300 hover:scale-125"
    :class="{
      'opacity-0': scrollPosition < 100,
      'opacity-100': scrollPosition >= 100,
      fixed: !isScrollToTopButtonInView,
      absolute: isScrollToTopButtonInView,
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

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const isScrollToTopButtonInView = ref(false)

const checkIfInView = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    isScrollToTopButtonInView.value = entry.isIntersecting
  })
}

const observer = ref()

onMounted(() => {
  window.addEventListener('scroll', updateScroll)

  observer.value = new IntersectionObserver(checkIfInView)

  const scrollToTopButton = document.getElementById('footer')

  if (scrollToTopButton) {
    observer.value.observe(scrollToTopButton)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScroll)

  const scrollToTopButton = document.getElementById('footer')

  if (scrollToTopButton) {
    observer.value.unobserve(scrollToTopButton)
  }
})
</script>
