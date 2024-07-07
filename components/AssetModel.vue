<script setup lang="ts">
const { scene } = await useGLTF('/models/AkuAku.gltf', { draco: true })
</script>

<template>
  <primitive :object="scene" />
</template>