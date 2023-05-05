<script setup lang="ts">
import { loginApi } from '@/api/users'
import type { FormRules, FormInstance } from 'element-plus'
import { useTokenStore } from '@/stores/token'
import { useRouter } from 'vue-router'

const router=useRouter()

// 避免失去效应式
const store = useTokenStore()

const form = reactive({
  phone: '18201288771',
  password: '111111'
})

const ruleFormRef = ref<FormInstance>()

const rules = reactive<FormRules>({
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
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})
const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      loginApi(form).then((res) => {
        if (!res.data.success) {
          ElMessage.error(res.data.message)
          return
        }
        console.log(res.data, '成功')
        store.setToken(res.data.content)
        ElMessage.success('登录成功')
        router.push('/')
      })
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <el-form :model="form" label-width="120px" :rules="rules" ref="ruleFormRef">
    <el-form-item label="手机号" prop="phone">
      <el-input v-model="form.phone" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="form.password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit(ruleFormRef)">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped lang="scss"></style>
