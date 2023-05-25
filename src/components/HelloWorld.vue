<template>
  <div id="map" ref="mapContainer" class="map"></div>
</template>

<script setup lang="ts">
import mapboxgl from 'mapbox-gl'
import { onMounted, ref } from 'vue'
import 'mapbox-gl/dist/mapbox-gl.css'

const mapContainer = ref<HTMLElement>()

mapboxgl.accessToken =
  'pk.eyJ1IjoiaW5zcGVjdG9ydmliZSIsImEiOiJja3RteGJ4ZDcwdjBsMnVtamkyNTJqbHE5In0.fTHYN9fHbfwL529POn_blw'

onMounted(() => {
  const map = new mapboxgl.Map({
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    container: mapContainer.value!,
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [0, 0],
    zoom: 2,
    projection: 'globe',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any)

  map.on('style.load', () => {
    map.setFog({})
  })
})
</script>

<style scoped>
.map {
  width: 100vw;
  height: 100vh;
}
</style>
