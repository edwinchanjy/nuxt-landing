<template>
  <div>
    <div
      class="via-secondary-400 relative h-full min-h-screen bg-gradient-to-tr from-[#161a25] via-[#34224b]
        to-[#0f172a]"
    >
      <TopBar />
      <NuxtLayout>
        <NuxtPage class="mx-12 max-w-7xl pb-36 pt-12 lg:mx-auto" />
      </NuxtLayout>
      <ScrollToTopButton />
    </div>

    <PageFooter />
    <NuxtRouteAnnouncer />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const { t } = useI18n()

useHead({
  title: computed(
    () => `${route.meta.title ? `${t(route.meta.title as string)} - ` : ''}Nuxt Landing`,
  ),
  meta: [
    {
      name: 'og:title',
      property: 'og:title',
      content: computed(
        () => `${route.meta.title ? `${t(route.meta.title as string)} - ` : ''}Nuxt Landing`,
      ),
    },
  ],
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.2s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
