<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <AssetCard :product="p"></AssetCard>
      </div>
    </div>

  </div>
</template>

<script setup>
definePageMeta({
  layout: 'assets'
})

// fetch product from api
const {data: products} = await useFetch('https://fakestoreapi.com/products')
useHead({
  title: "Asset List"
})
</script>

<style scoped>

</style>