<template>
  <div class="bg-coolgray-700 text-coolgray-400 text-sm py-4">
    <Container class="flex-col">
      <!-- 菜单 -->
      <ul class="flex justify-start w-full flex-1 border-b-1">
        <li><router-link class="item" to="/">产品</router-link></li>
        <li><router-link class="item" to="/community">社区</router-link></li>
        <li><router-link class="item" to="/study">学习</router-link></li>
        <li><router-link class="item" to="/about">关于</router-link></li>
      </ul>
      <div class="border-b-1"></div>
      <!-- 介绍，联系信息，媒体信息，外链 -->
      <!-- ICP备案信息 -->
      <div class="flex w-full items-center justify-center">
        Copyright © {{ new Date().getFullYear() }}
        <a href="http://www.beian.gov.cn" class="flex items-center pl-2">
          <i class="w-5 h-5 bg-contain inline-block mr-2 bg-center mr-2"></i>
          {{ icp }}
        </a>
      </div>
      <!-- http://www.beian.gov.cn -->
    </Container>
  </div>
</template>

<script setup lang="ts">
defineProps({
  icp: {
    type: String,
    default: 'hello'
  }
})
</script>

<style lang="scss" scoped>
i {
  background-image: url('@/assets/icons/beianicon.png');
}
.item {
  @apply px-4 text-gray-400;
}
</style>
