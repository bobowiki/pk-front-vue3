<template>
  <div>
    <!-- 关于route.params.di ts报错的解决方式 -->
    <div>id:{{ route.id }}</div>
  </div>
</template>

<script setup lang="ts">
import useParams from '@/hooks/useParams'
type Params = {
  id: string
}

const route = useParams<Params>()
</script>

<style></style>
