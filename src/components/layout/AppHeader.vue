<script setup lang="ts">
import {isCollapse} from './isCollapse'
const handleCollapse = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<template>
  <el-header>
      <el-icon :size="40" v-show="isCollapse" @click="handleCollapse"><IEpFold /></el-icon>
      <el-icon :size="40" v-show="!isCollapse" @click="handleCollapse"><IEpExpand /></el-icon>
  </el-header>
</template>

<style scoped lang="scss"></style>
