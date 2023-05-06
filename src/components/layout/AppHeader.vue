<script setup lang="ts">
import {isCollapse} from './isCollapse'
import {userInfoApi} from '@/api/users'
const handleCollapse = () => {
  isCollapse.value = !isCollapse.value
}

// 获取用户信息
userInfoApi().then(res=>{
  console.log(res,'======');
  
})

</script>

<template>
  <el-header>
      <el-icon :size="40" v-show="isCollapse" @click="handleCollapse"><IEpFold /></el-icon>
      <el-icon :size="40" v-show="!isCollapse" @click="handleCollapse"><IEpExpand /></el-icon>
  </el-header>
</template>

<style scoped lang="scss"></style>
