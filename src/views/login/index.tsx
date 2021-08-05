import { NForm, NFormItem, NInput, FormRules, NRow, NCol, NButton } from 'naive-ui'
import { CSSProperties, defineComponent, reactive, toRefs, withModifiers } from 'vue'
import logoBg from '@/assets/images/login-background.jpg'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Login',
  setup() {
    const router = useRouter()

    const state = reactive({
      formRef: null,
      loginModel: {
        username: 'admin',
        password: 'admin123',
      },
      rules: {} as FormRules,
    })

    const loginContainer: CSSProperties = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: `url('${logoBg}')`,
      backgroundSize: 'cover',
    }

    const titleStyle: CSSProperties = {
      marginBottom: '20px',
    }

    const loginForm: CSSProperties = {
      marginTop: '-200px',
      borderRadius: '6px',
      background: '#fff',
      width: '400px',
      padding: '25px 25px 25px 25px',
    }

    const footer: CSSProperties = {
      height: '40px',
      lineHeight: '40px',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      textAlign: 'center',
      color: '#fff',
      // fontFamily: 'Arial',
      fontSize: '12px',
      letterSpacing: '1px',
    }

    // methods
    const login = () => {
      console.log('登录')
      router.push('/')
    }

    return () => {
      const { formRef, loginModel, rules } = toRefs(state)

      return (
        <div style={loginContainer}>
          <NForm style={loginForm} model={loginModel.value} ref={formRef} rules={rules.value}>
            <h3 style={titleStyle}>后台管理系统</h3>
            <NFormItem path="username" label="用户名">
              <NInput
                type="text"
                v-model={[loginModel.value.username, 'value']}
                placeholder="请输入用户名"
                onKeydown={withModifiers(login, ['enter', 'native'])}
              />
            </NFormItem>

            <NFormItem path="password" label="密码">
              <NInput
                type="password"
                v-model={[loginModel.value.password, 'value']}
                placeholder="请输入密码"
                onKeydown={withModifiers(login, ['enter', 'native'])}
              />
              {/* onKeydown_enter_prevent */}
            </NFormItem>

            <NRow gutter={[0, 24]}>
              <NCol span={24}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <NButton onClick={login} round type="primary">
                    登录
                  </NButton>
                </div>
              </NCol>
            </NRow>
          </NForm>

          {/* 底部 */}
          <div class="el-login-footer" style={footer}>
            <span>Copyright © 2018-2021 All Rights Reserved.</span>
          </div>
        </div>
      )
    }
  },
})
