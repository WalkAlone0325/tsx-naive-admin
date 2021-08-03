import { defineComponent, CSSProperties } from 'vue'
import { NIcon, NTooltip } from 'naive-ui'
import { GithubFilled } from '@vicons/antd'

export default defineComponent({
  name: 'GitAddress',
  setup() {
    const href = 'http://www.baidu.com'

    const githubStyle: CSSProperties = {
      width: '50px',
      height: '50px',
      // backgroundColor: '#2a2a2e',
      textAlign: 'center',
      lineHeight: '63px',
      cursor: 'pointer',
    }

    return () => (
      <div style={githubStyle}>
        <NTooltip placement="bottom" trigger="hover">
          {{
            default: () => <span>GitHub</span>,
            trigger: () => (
              <a href={href} target="_blank" rel="noopenner noreferrer">
                <NIcon size={26}>
                  <GithubFilled />
                </NIcon>
              </a>
            ),
          }}
        </NTooltip>
      </div>
    )
  },
})
