<template>
  <div>
    {{ state.text }}
    <HaDemo />
    <HaImagePreview :data="state.images"></HaImagePreview>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import image1 from './assets/image1.png'
import image2 from './assets/image2.jpg'
export default defineComponent({
  setup() {
    const state = reactive({
      text: '测试页面',
      images: [image1, image2]
    })
    return {
      state
    }
  }
})
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
