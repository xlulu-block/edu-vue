<script setup lang="ts">
import type { FormRules } from 'element-plus';


const form = reactive({
  phone: '',
  password: ''
})
const rules=reactive<FormRules>({
  // 请输入正确的手机号
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    {
      pattern: /^1[3456789]\d{9}$/,
      message: '请输入正确的手机号',
      trigger: 'blur'
    }
  ],
  // 密码必填
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ]
})
const onSubmit = () => {

}
</script>

<template>
  <el-form :model="form" label-width="120px" :rules="rules">
    <el-form-item label="手机号" prop="phone">
      <el-input v-model="form.phone" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="form.password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped lang="scss"></style>
