<template>
  <section class="footer">
    <div class="mx-auto h-52">hahaha</div>
    <div class="bg-secondary-700 500 border-t px-6 py-1.5">
      <div class="mx-auto flex items-center justify-between">
        <span class="text-white">{{ t('copyright', { year: new Date().getFullYear() }) }}</span>
        <div class="flex space-x-8">
          <button
            v-for="menuItem in Constant.FOOTER_MENU"
            :key="menuItem.title"
            class="transition-all duration-300 ease-in-out hover:font-semibold"
            @click="() => navigateTo(localePath(menuItem.path))"
          >
            <span> {{ t(menuItem.title) }}</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Constant } from '~/constants'

const { t } = useI18n()
const localePath = useLocalePath()
</script>

<style scoped>
.footer {
  border-style: solid;
  border-width: 1px 0px 0px 0px;
  border-color: #e019f99c;
  box-shadow: 0px -5px 50px 0px rgba(224.0000000000001, 25.000000000000007, 249, 0.35);
}
</style>
