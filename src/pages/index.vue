<template>
  <Swiper :items="items" :height="store.rate * 36 + 'rem'"> </Swiper>
  <div class="flex w-full justify-between mt-4">
    <Card :image="bg" :image-type="'avatar'" title="title" subTitle="subTitle" borded></Card>
    <Card :image="bg" :image-type="'default'" title="title" subTitle="subTitle" borded></Card>
    <Card :image="bg" :image-type="'rounded'" title="title" subTitle="subTitle" borded></Card>
  </div>
</template>
<script setup lang="tsx">
// import { RouterLink } from 'vue-router/auto'
import type { SwiperItemType } from '@/components/types'
import { registerSW } from 'virtual:pwa-register'
import bg from '@/assets/images/bg.png'
import { useThemeStore } from '@/store/useThemeStore'
const store = useThemeStore()
const items: SwiperItemType[] = [
  {
    image: bg,
    title: '传播技术的种子',
    subTitle: '让技术没有门槛，让沟通没有障碍'
  },
  {
    image: bg,
    title: '传播技术的种子',
    subTitle: '让技术没有门槛，让沟通没有障碍'
  },
  {
    image: bg,
    title: '传播技术的种子',
    subTitle: '让技术没有门槛，让沟通没有障碍'
  },
  {
    image: bg,
    title: '传播技术的种子',
    subTitle: '让技术没有门槛，让沟通没有障碍'
  }
]

onMounted(() => {
  registerSW({
    immediate: true,
    onRegisteredSW(url, registration) {
      setInterval(() => {
        registration && registration.update()
      }, 3600000)
      console.log(url, registration)
    }
  })
})
</script>
<style></style>

<!-- <script lang="ts">
export default defineComponent({
  name: 'HomeIndex'
})
</script> -->
