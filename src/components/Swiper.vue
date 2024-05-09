<template>
  <swiper
    :slides-per-view="1"
    :space-between="0"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :modules="modules"
    :navigation="{ prevEl: '.prev', nextEl: '.next' }"
    :pagination="{ type: 'fraction', el: '.pagination' }"
    :class="getClassAndStyle(props.height).class"
    :style="getClassAndStyle(props.height).style"
  >
    <swiper-slide v-for="(item, index) in items" :key="index">
      <slot :item="item">
        <div
          class="bg-image"
          :style="{ backgroundImage: `url(${item.image})` }"
        >
          <Container class="h-full">
            <div class="flex flex-col justify-center items-start">
              <p class="text-xl sm:text-4xl text-4xl font-bold text-white">
                {{ item.title }}
              </p>
              <p class="text-sm sm:text-xl text-gray-100 pt-4">
                {{ item.subTitle }}
              </p>
            </div>
          </Container>
        </div>
      </slot>
    </swiper-slide>
    <div
      class="flex items-center justify-center absolute right-0 bottom-0 bg-white opacity-60 text-dark-300 w-40 h-12 z-20"
    >
      <div class="pagination w-unset! font-bold mr-4"></div>
      <div class="prev i-mdi-arrow-left-thin" style="font-size: 1.5rem"></div>
      <div class="next i-mdi-arrow-right-thin" style="font-size: 1.5rem"></div>
    </div>
  </swiper>
</template>

<script setup lang="ts">
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'
import type { SwiperItemType } from './types'
// import { register } from 'swiper/element/bundle'

// register()

const props = defineProps({
  height: {
    type: String,
    default: () => 'h-80'
  },
  items: {
    type: Array<SwiperItemType>,
    default: () => []
  }
})

const emits = defineEmits(['change'])
function getClassAndStyle(str: string) {
  // props.height
  // 如果height的值包含rem，px，em这返回{string:str,class: ''}
  // 如果height的值包含h-，这返回{string:'',class:str}
  return {
    style: /(rem|em|px)/.test(props.height) ? { height: str } : {},
    class: /h-/.test(props.height) ? str : ''
  }
}

const onSwiper = (swiper: SwiperType) => {
  console.log(swiper)
}
const onSlideChange = (e) => {
  console.log('slide change', e)
  emits('change', e)
}

const modules = [Navigation, Pagination]
</script>

<style lang="scss">
.swiper-button-disabled {
  color: '#000';
  opacity: 0.3;
}
</style>
