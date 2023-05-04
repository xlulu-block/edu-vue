<script setup lang="ts">
import AppAside from './AppAside.vue'
import AppHeader from './AppHeader.vue'
import AppContent from './AppContent.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <AppAside />

      <el-container>
        <AppHeader />
        <AppContent />
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss"></style>
