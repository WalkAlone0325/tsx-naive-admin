<template>
  <div class="login-page">
    <div class="form-container">
      <h2 class="login-title">登录</h2>
      <n-form
        :model="loginForm"
        size="large"
        ref="loginFormRef"
        :rules="rules"
        label-placement="left"
      >
        <n-form-item path="username" label="账号">
          <n-input v-model:value="loginForm.username"></n-input>
        </n-form-item>
        <n-form-item path="password" label="密码">
          <n-input v-model:value="loginForm.password" type="password"></n-input>
        </n-form-item>
        <n-row :gutter="[0, 24]">
          <n-col :span="24">
            <div style="display: flex; justify-content: flex-end">
              <n-button @click="handleLogin" type="primary"> 验证 </n-button>
            </div>
          </n-col>
        </n-row>
      </n-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMessage } from 'naive-ui'
import { Ref } from 'vue'

const loginForm = reactive({
  username: undefined,
  password: undefined
})
const rules = reactive({
  username: [{ required: true, message: '用户账号必须填写', trigger: ['blur'] }],
  password: [{ required: true, message: '请输入密码' }]
})
const loginFormRef: Ref<HTMLFormElement | null> = ref(null)
const message = useMessage()

const handleLogin = (e: MouseEvent) => {
  e.preventDefault()
  loginFormRef.value!.validate((errors) => {
    if (!errors) {
      message.success('验证成功')
    } else {
      message.error('验证失败')
    }
  })
}
</script>

<style lang="scss" scoped>
.login-page {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  // align-items: center;
  background-color: rgb(92, 148, 148);
  .form-container {
    width: 320px;
    margin-top: 20vh;
    .login-title {
      width: 100%;
      // margin: 0 auto;
      text-align: center;
    }
    // border: 1px solid #000;
  }
}
</style>
