<template>
  <div class="prose dark:prose-invert">
    <ContentDoc :path="localePath('/privacy')" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'privacy',
  layout: 'common',
})

const localePath = useLocalePath()
</script>
