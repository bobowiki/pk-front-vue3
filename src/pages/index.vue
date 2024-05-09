<template>
  <Swiper :items="items" :height="store.rate * 36 + 'rem'"> </Swiper>
  <Container>
    <!-- 标题 -->
    <div class="py-4">
      <div class="text-2xl">“</div>
      <div class="text-2xl font-bold pb-4">传播技术的种子让分享带来价值</div>
      <div class="flex justify-between items-center">
        <div class="text-sm text-gray-400 w-2/3">
          多年来，tomic技术不忘出行，以建立行业服务标杆为目标不断提升技术设计服务水
          平，帮助客户在互联网推广自己的产品、服务和品牌，为客户创造价值从而实现自身
          价值！
        </div>
        <div class="flex pl-20 w-1/3 justify-end items-center">
          <div class="w-1/2 h-[1px] bg-gray-500"></div>
          <div class="text-2xl relative ml-2 top-1">＂</div>
        </div>
      </div>
    </div>
  </Container>

  <Container>
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full lt-sm:px-4"
    >
      <a
        v-for="(project, index) in projects"
        :href="project.url"
        :key="index"
        class="flex transition-all hover:(bg-sky-500 shadow-lg text-white transform-translate-y--1)"
        target="_blank"
        ><Card
          class="w-full rounded-0 card"
          :image="project.image"
          image-type="rounded"
          :title="project.title"
          :sub-title="project.subTitle"
          borded
        >
          <template #default>
            <div class="mx-4 flex items-center justify-between text-gray-500">
              查看更多
              <div class="i-mdi:arrow-right-thin text-3xl"></div>
            </div>
          </template> </Card
      ></a>
    </div>
  </Container>
  <Container>
    <Swiper
      :items="items"
      :height="store.rate * 28 + 'rem'"
      class="w-2/3"
      @change="handleSwiperChange"
    >
    </Swiper>
    <div
      class="w-1/3 bg-coolgray-700 self-stretch flex flex-col justify-center px-4 text-gray-100"
    >
      <a :href="selectItem.url" target="_blank">
        <div class="text-2xl font-bold pb-4">
          {{ selectItem.title }}
        </div>
        <div class="text-sm">{{ selectItem.subTitle }}</div>
        <div class="flex items-center justify-between mb-4">查看更多</div>
        <div class="i-mdi:arrow-right-thin text-4xl"></div>
      </a>
    </div>
  </Container>
</template>
<script setup lang="tsx">
// import { RouterLink } from 'vue-router/auto'
import type { SwiperItemType } from '@/components/types'
import { registerSW } from 'virtual:pwa-register'
import bg from '@/assets/images/bg.png'
import { useThemeStore } from '@/store/useThemeStore'
import type Swiper from 'swiper'
const store = useThemeStore()
const items: SwiperItemType[] = [
  {
    image: bg,
    title: '传播技术的种子',
    subTitle: '让技术没有门槛，让沟通没有障碍1',
    url: 'https://www.baidu.com'
  },
  {
    image: bg,
    title: '传播技术的种子1',
    subTitle: '让技术没有门槛，让沟通没有障碍2',
    url: 'https://www.baidu.com'
  },
  {
    image: bg,
    title: '传播技术的种子2',
    subTitle: '让技术没有门槛，让沟通没有障碍3',
    url: 'https://www.baidu.com'
  },
  {
    image: bg,
    title: '传播技术的种子3',
    subTitle: '让技术没有门槛，让沟通没有障碍4',
    url: 'https://www.baidu.com'
  }
]
const selectItem = ref(items[0])

const projects = [
  {
    image: bg,
    title: '传播技术的种子',
    subTitle: '让技术没有门槛，让沟通没有障碍',
    url: 'https://www.baidu.com'
  },
  {
    image: bg,
    title: '传播技术的种子',
    subTitle: '让技术没有门槛，让沟通没有障碍',
    url: 'https://www.baidu.com'
  },
  {
    image: bg,
    title: '传播技术的种子',
    subTitle: '让技术没有门槛，让沟通没有障碍',
    url: 'https://www.baidu.com'
  },
  {
    image: bg,
    title: '传播技术的种子',
    subTitle: '让技术没有门槛，让沟通没有障碍',
    url: 'https://www.baidu.com'
  },
  {
    image: bg,
    title: '传播技术的种子',
    subTitle: '让技术没有门槛，让沟通没有障碍',
    url: 'https://www.baidu.com'
  },
  {
    image: bg,
    title: '传播技术的种子',
    subTitle: '让技术没有门槛，让沟通没有障碍',
    url: 'https://www.baidu.com'
  },
  {
    image: bg,
    title: '传播技术的种子',
    subTitle: '让技术没有门槛，让沟通没有障碍',
    url: 'https://www.baidu.com'
  },
  {
    image: bg,
    title: '传播技术的种子',
    subTitle: '让技术没有门槛，让沟通没有障碍',
    url: 'https://www.baidu.com'
  }
]
function handleSwiperChange(e: Swiper) {
  const index = e.activeIndex
  selectItem.value = items[index]
}
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
<style lang="scss" scoped>
:deep(.card) {
  &:hover {
    p {
      color: white;
    }
  }
}
</style>

<!-- <script lang="ts">
export default defineComponent({
  name: 'HomeIndex'
})
</script> -->
