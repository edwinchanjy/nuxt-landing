<template>
  <div class="space-y-36">
    <HomeHeader />
    <CommonInfiniteCarousel :images="images" />
  </div>
</template>

<script setup lang="ts">
import CS2Logo from '~/assets/images/cs2.png'
import DotaLogo from '~/assets/images/dota.png'
import ForniteLogo from '~/assets/images/fortnite.png'
import LOLLogo from '~/assets/images/lol.png'
import OW2Logo from '~/assets/images/ow2.png'
import ValorantLogo from '~/assets/images/valorant.png'

const images = [CS2Logo, DotaLogo, ForniteLogo, LOLLogo, OW2Logo, ValorantLogo]
</script>

<style scoped></style>
