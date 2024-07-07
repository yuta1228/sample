<template>

  <div>
    <head>
      <title>Sample | {{ product.title }}</title>
      <Meta name="description" :content="product.description"></Meta>
    </head>
    <AssetDetail :product="product"></AssetDetail>
  </div>

</template>

<script setup>
const {id} = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

//detch product
const {data: product} = await useFetch(uri, {key: id})
if (!product.value) {
  throw createError({statusCode: 404, statusMessage: "Asset Not Found", fatal: true})
}
definePageMeta({
  layout: 'assets'
})

</script>

<style scoped>

</style>