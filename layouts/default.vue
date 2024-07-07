<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">NDDB</NuxtLink>
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/">home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">about</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/assets">assets</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/search" class="btn">search</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <!--- contents -->
    <div class="container mx-auto p-4">
      <slot/>
    </div>
  </div>
</template>
<style scoped>


</style>