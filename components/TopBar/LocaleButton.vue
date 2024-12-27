<template>
  <div class="flex">
    <div v-for="(item, index) in items" :key="item.label" class="flex">
      <button
        class="transition-all duration-300 ease-in-out"
        :class="{
          'font-bold': item.locale === locale,
          'text-gray-500': item.locale !== locale,
        }"
        @click="item.click"
      >
        {{ item.label }}
      </button>
      <UDivider
        v-if="index < items.length - 1"
        :ui="{
          wrapper: {
            base: 'mx-4',
          },
          border: {
            base: 'border-white dark:border-white',
          },
        }"
        orientation="vertical"
        size="xs"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { locale } = useI18n()

const switchLocalePath = useSwitchLocalePath()

const onLocaleChanged = (selectedLocale: 'en' | 'zh') =>
  navigateTo(switchLocalePath(selectedLocale))

const items = [
  {
    label: 'EN',
    locale: 'en',
    click: () => onLocaleChanged('en'),
  },
  {
    label: '中文',
    locale: 'zh',
    click: () => onLocaleChanged('zh'),
  },
]
</script>
