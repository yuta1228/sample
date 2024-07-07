<script setup lang="ts">
definePageMeta({
  layout: 'test'
})
import {BasicShadowMap, SRGBColorSpace, NoToneMapping} from 'three';
import {TresCanvas} from '@tresjs/core';
import {OrbitControls, Text3D} from '@tresjs/cientos';
import { useGLTF } from '@tresjs/cientos'

// Orbit controls by extending
const {width, height} = defineProps(['width', 'height'])

const gl = {
  clearColor: '#82DBC5',
  shadows: true,
  alpha: false,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
};

const { scene } = await useLoader(GLTFLoader, '/models/AkuAku.gltf')

</script>

<template>
  <div id="view">
    <TresCanvas v-bind="gl">
      <TresPerspectiveCamera :position="[4, 3, 9]"/>
      <OrbitControls/>
      <Suspense>
        <Model />
      </Suspense>
      <TresDirectionalLight :position="[0, 2, 4]" :intensity="1.2" cast-shadow/>
      <TresGridHelper/>
    </TresCanvas>
  </div>
</template>

<style>

#view {
  width: 400px;
  height: 300px;
  background-color: #000;
}
</style>