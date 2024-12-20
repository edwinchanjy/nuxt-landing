<template>
  <div class="scroll-container mx-auto" :style="`width: ${images.length * 156}px`">
    <div
      class="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
      <ul
        class="flex h-32 animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-24 [&_img]:rounded-lg [&_li]:mx-8"
      >
        <li
          v-for="(logo, index) in images"
          :key="index"
          @mouseenter="(_) => onMouseEnter(index)"
          @mouseleave="onMouseLeave"
        >
          <img
            :src="logo"
            :alt="logo"
            :class="{
              'blur-sm': isFocused && index !== selectedIndex,
            }"
          />
        </li>
      </ul>
      <ul
        class="flex h-32 animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-24 [&_img]:rounded-lg [&_li]:mx-8"
        aria-hidden="true"
      >
        <li
          v-for="(logo, index) in images"
          :key="index"
          @mouseenter="(_) => onMouseEnter(index)"
          @mouseleave="onMouseLeave"
        >
          <img
            :src="logo"
            :alt="logo"
            :class="{
              'blur-sm': isFocused && index !== selectedIndex,
            }"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  images: string[]
}>()

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
