import { FormRules, NButton, NCol, NForm, NFormItem, NInput, NRow, useMessage } from 'naive-ui'
import './index.scss'

const Login = () => {
  const message = useMessage()
  const loginForm = reactive({
    username: '',
    password: ''
  })
  const rules: FormRules = reactive({
    username: [{ required: true, message: '用户账号必须输入', trigger: ['blur'] }],
    password: [{ required: true, message: '请输入密码' }]
  })

  // InstanceType<typeof NForm>
  const loginFormRef = ref<HTMLFormElement | null>(null)

  const handleLogin = (e: MouseEvent) => {
    e.preventDefault()
    loginFormRef.value!.validate((errors: Error | boolean) => {
      if (!errors) {
        message.success('验证成功！')
      } else {
        message.error('验证失败')
      }
    })
  }

  return (
    <div class="login-page">
      <div class="form-container">
        <h2 class="login-title">登录</h2>

        <NForm
          model={loginForm}
          size="large"
          ref={loginFormRef}
          rules={rules}
          labelPlacement="left"
        >
          <NFormItem path="username" label="账号">
            <NInput v-model:value={loginForm.username} />
          </NFormItem>
          <NFormItem path="password" label="密码">
            <NInput v-model:value={loginForm.password} type="password" />
          </NFormItem>
          <NRow gutter={[0, 24]}>
            <NCol span={24}>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <NButton onClick={handleLogin} type="primary">
                  登录
                </NButton>
              </div>
            </NCol>
          </NRow>
        </NForm>
      </div>
    </div>
  )
}

export default Login
