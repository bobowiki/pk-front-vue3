<template>
  <div class="bg-coolgray-700 text-coolgray-400 text-sm py-4">
    <Container class="flex-col">
      <!-- 菜单 -->
      <div class="w-full flex justify-between items-center">
        <ul class="flex justify-start w-full flex-1">
          <li><router-link class="item" to="/">产品</router-link></li>
          <li><router-link class="item" to="/community">社区</router-link></li>
          <li><router-link class="item" to="/study">学习</router-link></li>
          <li><router-link class="item" to="/about">关于</router-link></li>
        </ul>
        <div class="flex items-center pr-4">
          <div class="group relative">
            <div class="i-ic:baseline-wechat cursor-pointer text-2xl"></div>
            <img
              src="@/assets/images/wechat.jpg"
              class="hidden absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-100%] w-20 h-20 rounded group-hover:block max-w-unset"
              alt=""
            />
          </div>
          <div class="group relative">
            <div class="ml-4 i-bi:sina-weibo cursor-pointer text-2xl"></div>
            <img
              src="@/assets/images/sina.jpg"
              class="hidden absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-100%] w-20 h-20 rounded group-hover:block max-w-unset"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="border-b-1 border-b-coolgray-600 w-full my-4"></div>
      <!-- 介绍，联系信息，媒体信息，外链 -->
      <ul class="flex w-full">
        <li>
          <div class="text-gray-200 font-500 text-lg pb-4 flex">
            <span class="i-bi-phone mr-2"></span>
            <span>联系信息</span>
          </div>
          <P>邮箱：admin@yikai.com</P>
          <p>电话：010-2121212</p>
          <p>地址：北京-xx--xx</p>
        </li>
        <li class="ml-10">
          <div class="text-gray-200 font-500 text-lg pb-4 flex">
            <span class="i-bi-phone mr-2"></span>
            <span>联系信息</span>
          </div>
          <P>邮箱：admin@yikai.com</P>
          <p>电话：010-2121212</p>
          <p>地址：北京-xx--xx</p>
        </li>
      </ul>
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
interface LinkType {
  title: string
  url: string
}
interface ContactsType {
  email: string
  phone: string
  address: string
}
interface FootItem {
  icp?: string
  copyRight?: string
  links?: LinkType[]
  contacts: ContactsType
}
const props = withDefaults(defineProps<FootItem>(), {
  icp: '',
  copyRight: 'yikai',
  links: () => [
    { url: 'http://www.yikai.com', title: 'yikai blog' },
    { url: 'https://www.imooc.com', title: 'mukewang' }
  ],
  contacts: () => {
    return {
      email: 'admin@yikai.com',
      phone: '010-2121212',
      address: '北京-xx--xx'
    }
  }
})
// {
// icp: {
//   type: String,
//   default: 'hello'
// }
// }
</script>

<style lang="scss" scoped>
i {
  background-image: url('@/assets/icons/beianicon.png');
}
.item {
  @apply px-4 text-gray-400;
}
</style>
