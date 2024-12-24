<template>
  <button v-for="item in items" :key="item.label" @click="item.click">{{ item.label }}</button>
</template>

<script lang="ts" setup>
const { t } = useI18n()

const switchLocalePath = useSwitchLocalePath()

const onLocaleChanged = (selectedLocale: 'en' | 'zh') =>
  navigateTo(switchLocalePath(selectedLocale))

const items = [
  {
    label: t('common.english'),

    click: () => onLocaleChanged('en'),
  },
  {
    label: t('common.chinese'),

    click: () => onLocaleChanged('zh'),
  },
]
</script>
