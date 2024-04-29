<template>
  <div
    class="fixed top-0 flex w-full z-50 transition-all duration-500"
    :class="[{ 'bg-black bg-opacity-30 shadow-lg ': y > 0 }, { 'lt-sm:(bg-black h-full)': show }]"
  >
    <Container>
      <img
        src="/512x512.png"
        :class="['w-14 max-h-14 lt-sm:mx-auto', { 'self-start': show }]"
        alt=""
      />
      <div
        @click="toggle()"
        class="hidden text-gray-300 text-2xl absolute right-3 top-3 cursor-pointer hover:text-white lt-sm:block!"
      >
        <Transition name="rotate-icon" mode="out-in">
          <div class="i-radix-icons:cross-2" v-if="show"></div>
          <div class="i-ic-round-menu" v-else></div>
        </Transition>
      </div>
      <Menu v-if="show" class="lt-sm:(absolute top-14 right-0 w-full flex-col)"></Menu>
    </Container>
  </div>
  <router-view></router-view>
  <div class="h-100"></div>
  <div>
    <div class="mobile-hide">
      <DefaultFooter icp="IP备案信息"></DefaultFooter>
    </div>
    <div class="hidden mobile">
      <Foot></Foot>
    </div>
  </div>
</template>
<script setup lang="ts">
const { y } = useWindowScroll()
const [show, toggle] = useToggle(false)
const flag = ref(false)
useResizeObserver(document.body, () => {
  const width = window.innerWidth
  if (width >= 640) {
    toggle(true)
    flag.value = false
  } else {
    if (flag.value) return
    flag.value = true
    toggle(false)
  }
})
</script>

<style lang="scss" scoped>
.rotate-icon-enter-active {
  animation: scaleYIn 0.2s;
}
.rotate-icon-leave-active {
  animation: scaleYIn 0.2s reverse;
}
@keyframes scaleYIn {
  0% {
    opacity: 0;
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
</style>
