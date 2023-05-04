<script setup lang="ts">
import { RouterView } from 'vue-router'
//引入请求方法
import Request from '@/utils/request'

Request.get('/front/ad/getAdList').then((res:any) => {
  console.log(res,'@')
})
</script>

<template><RouterView /></template>

<style scoped></style>
