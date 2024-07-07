<script setup lang="ts">
definePageMeta({
  layout: 'test'
})
import {TresCanvas} from '@tresjs/core';
import {OrbitControls} from '@tresjs/cientos';
const {width, height} = defineProps(['width', 'height'])

const { scene } = await useGLTF('https://raw.githubusercontent.com/yuta1228/sample/main/sample/shiba/scene.gltf')
// scene.children[0].geometry.center();
</script>

<template>
  <div id="view">
    <TresCanvas clear-color="#F78B3D">
      <TresPerspectiveCamera :position="[4, 3, 9]"/>
      <OrbitControls/>
      <Suspense>
        <primitive :object="scene" />
      </Suspense>
      <TresDirectionalLight :position="[0, 2, 4]" :intensity="1.2" cast-shadow/>
      <TresGridHelper/>
    </TresCanvas>
  </div>
</template>

<style>

#view {
  width: 600px;
  height: 600px;
  background-color: #000;
}
</style>