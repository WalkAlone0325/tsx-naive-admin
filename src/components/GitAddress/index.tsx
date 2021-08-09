import { defineComponent, CSSProperties } from 'vue'
import { NIcon, NTooltip, NElement } from 'naive-ui'
import { GithubFilled } from '@vicons/antd'

export default defineComponent({
  name: 'GitAddress',
  setup() {
    const href = 'https://github.com/WalkAlone0325/tsx-naive-admin'

    const githubStyle: CSSProperties = {
      width: '50px',
      height: '50px',
      // backgroundColor: '#2a2a2e',
      textAlign: 'center',
      lineHeight: '63px',
      cursor: 'pointer',
    }

    return () => (
      <NTooltip placement="bottom" trigger="hover">
        {{
          default: () => <span>GitHub</span>,
          trigger: () => (
            <NElement tag="div" class="hoverClass" style={githubStyle}>
              <a href={href} target="_blank" rel="noopenner noreferrer">
                <NIcon size={26}>
                  <GithubFilled />
                </NIcon>
              </a>
            </NElement>
          ),
        }}
      </NTooltip>
    )
  },
})
