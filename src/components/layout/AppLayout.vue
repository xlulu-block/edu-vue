<script setup lang="ts">
import AppAside from './AppAside.vue'
import AppHeader from './AppHeader.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <AppAside />

      <el-container class="main">
        <AppHeader />
        <el-main>
            <el-scrollbar >
                <RouterView />
            </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
    .main{
        height: 100vh;
        .el-main{
            padding-right: 0;
        }
    }
    
</style>
