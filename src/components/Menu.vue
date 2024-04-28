<template>
  <div :class="['flex', { 'flex-col': align === 'vertical' }]">
    <router-link class="item" to="/">产品</router-link>
    <router-link class="item" to="/community">社区</router-link>
    <router-link class="item" to="/study">学习</router-link>
    <router-link class="item" to="/about">关于</router-link>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  align: {
    type: String as PropType<'vertical' | 'horizontal'>
  }
})
</script>

<style scoped lang="scss">
// methods-1 使用transfrom
.item {
  @apply relative text-white text-xl px-8 py-2 font-300 cursor-pointer lt-sm:self-start;
  &:hover {
    @apply font-500 shadow-sm;
    &::after {
      content: '';
      @apply absolute bg-gray-100 w-8 h-1 bottom-0 left-[calc(50%-1rem)];
    }
  }
  &.router-link-active {
    @apply font-500 text-main;
  }
}
</style>
