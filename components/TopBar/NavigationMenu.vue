<template>
  <div class="flex space-x-8">
    <button
      v-for="menuItem in Constant.TOP_MENU"
      id="title"
      :key="menuItem.title"
      class="w-16 text-lg"
      @click="() => navigateTo(localePath(menuItem.path))"
    >
      <span> {{ menuItem.title }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { Constant } from '~/constants'

const localePath = useLocalePath()
</script>

<style scoped>
#title {
  position: relative;
  transition: font-weight 0.2s ease-in-out;
  font-weight: 500;
}

#title:hover {
  font-weight: 700;
}

#title::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: #b5a6f1;
  border-radius: 1000px;
  opacity: 0;
  transition:
    opacity 300ms,
    transform 300ms;
}

#title::after {
  opacity: 1;
  transform: scale(0);
  transform-origin: center;
}

#title:hover::after,
#title:focus::after {
  transform: scale(1);
}
</style>
