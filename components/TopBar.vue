<template>
  <header class="h-fit">
    <div class="mx-6 flex h-full max-w-7xl items-center justify-between gap-3 lg:mx-auto">
      <img
        src="~/assets/images/logo.png"
        alt="logo"
        width="132"
        class="cursor-pointer"
        @click="navigateTo($localePath('/'))"
      />
      <TopBarNavigationMenu />
      <TopBarLocaleButton />
    </div>
  </header>
</template>
