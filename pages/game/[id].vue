<template>
  <div class="prose dark:prose-invert relative">
    <ContentDoc :path="localePath('/game/' + id)" />
  </div>
</template>

<script setup lang="ts">
import { Constant } from '~/constants'
import type { CarouselItem } from '~/data/interfaces'

const { t } = useI18n()

const route = useRoute()
const localePath = useLocalePath()

const id = computed(() => String(route.params.id ?? ''))

const game = Constant.GAMES_CAROUSEL_ITEMS.find((item: CarouselItem) => item.id === id.value)

if (!game) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  })
}

const bgImage = ref('')

onMounted(() => {
  setTimeout(() => {
    bgImage.value = game.backgroundImage ?? ''
  }, 200) // delay so it looks less clunky
})

definePageMeta({
  layout: 'game',
})

useHead({ title: t(game?.id ?? '') + ' - Nuxt Landing' })
</script>
