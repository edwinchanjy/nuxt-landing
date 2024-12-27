<template>
  <div>
    <div class="flex h-64 w-full items-center justify-center bg-black bg-opacity-30 py-4">
      <img class="h-full scale-75 brightness-0 invert" :src="game?.image" />
    </div>
    <img
      :src="game?.backgroundImage"
      :alt="game?.title"
      class="pointer-events-none fixed left-0 top-0 h-screen w-screen object-cover opacity-0 blur-sm
        transition-opacity duration-100 ease-in-out"
      onload="this.style.opacity=0.1"
    />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { Constant } from '~/constants'
import type { CarouselItem } from '~/data/interfaces'

const route = useRoute()

const game = computed(() =>
  Constant.GAMES_CAROUSEL_ITEMS.find(
    (item: CarouselItem) => item.id === String(route.params.id ?? ''),
  ),
)
</script>
