<template>
  <div class="scroll-container mx-auto" :style="`width: ${items.length * 156}px`">
    <div
      class="inline-flex w-full flex-nowrap overflow-hidden
        [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
      <ul
        class="flex h-32 animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-24
          [&_img]:rounded-lg [&_li]:mx-8"
      >
        <li
          v-for="(item, index) in items"
          :key="index"
          @mouseenter="(_) => onMouseEnter(index)"
          @mouseleave="onMouseLeave"
        >
          <img
            :src="item.image"
            :alt="item.title"
            :class="{
              'blur-sm': isFocused && index !== selectedIndex,
            }"
            @click="() => emits('on-item-clicked', index)"
          />
        </li>
      </ul>
      <ul
        class="flex h-32 animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-24
          [&_img]:rounded-lg [&_li]:mx-8"
        aria-hidden="true"
      >
        <li
          v-for="(item, index) in items"
          :key="index"
          @mouseenter="(_) => onMouseEnter(index)"
          @mouseleave="onMouseLeave"
        >
          <img
            :src="item.image"
            :alt="item.title"
            :class="{
              'blur-sm': isFocused && index !== selectedIndex,
            }"
            @click="() => emits('on-item-clicked', index)"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CarouselItem } from '~/data/interfaces'

defineProps<{
  items: CarouselItem[]
}>()

const emits = defineEmits(['on-item-clicked'])

const isFocused = ref(false)
const selectedIndex = ref(-1) // init as -1 to prevent unwanted behavior

const onMouseEnter = (index: number) => {
  isFocused.value = true

  selectedIndex.value = index
}

const onMouseLeave = () => {
  isFocused.value = false

  selectedIndex.value = -1 // reset to -1
}
</script>

<style scoped>
.scroll-container {
  @media screen and (max-width: 768px) {
    width: 100% !important;
  }
}

.scroll-container:hover .animate-infinite-scroll {
  -webkit-animation-play-state: paused;
  -moz-animation-play-state: paused;
  -o-animation-play-state: paused;
  animation-play-state: paused;
}

img {
  transition: all 0.3s ease-in-out;
}

li {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  filter: brightness(0) invert(1);
}

li:hover {
  scale: 1.2;
}
</style>
