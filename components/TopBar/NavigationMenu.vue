<template>
  <div class="flex space-x-8">
    <button
      v-for="menuItem in Constant.TOP_MENU"
      :key="menuItem.title"
      class="after:contents-[''] relative w-16 text-lg transition-all duration-300 ease-in-out after:absolute
        after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-center after:rounded-full
        after:bg-lavender-500 after:opacity-100 after:transition-all after:duration-300 hover:font-bold
        hover:after:scale-100 focus:after:scale-100"
      :class="{
        'font-bold after:scale-100': isCurrentPage(menuItem.path),
        'font-medium after:scale-0': !isCurrentPage(menuItem.path),
      }"
      @click="() => navigateTo(localePath(menuItem.path))"
    >
      <span> {{ menuItem.title }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { Constant } from '~/constants'

const localePath = useLocalePath()
const route = useRoute()

const isCurrentPage = (path: string) => path === route.path
</script>
