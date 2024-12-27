<template>
  <div class="space-y-36">
    <HomeHeader />
    <CommonInfiniteCarousel :items="items" @on-item-clicked="onImageClick" />
  </div>
</template>

<script setup lang="ts">
import { Constant } from '~/constants'

const localePath = useLocalePath()

const items = [...Constant.GAMES_CAROUSEL_ITEMS]

const onImageClick = (index: number) =>
  navigateTo(localePath(localePath('/game') + `/${items[index].id}`))
</script>

<style scoped></style>
