<script setup lang="ts">
const { scene } = await useGLTF('https://raw.githubusercontent.com/yuta1228/sample/main/sample/shiba/scene.gltf', { draco: true })
</script>

<template>
  <primitive :object="scene" />
</template>