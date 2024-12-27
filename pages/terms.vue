<template>
  <div class="prose dark:prose-invert">
    <ContentDoc :path="localePath('/terms')" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'terms',
  layout: 'common',
})

const localePath = useLocalePath()
</script>
