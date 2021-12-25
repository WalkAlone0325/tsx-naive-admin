import { HTMLAttributes } from 'vue'
import { NIcon, NTooltip } from 'naive-ui'
import { Depth } from 'naive-ui/lib/icon/src/Icon'

interface IProps {
  color?: string | undefined
  depth?: Depth
  size?: string | number | undefined
  tipTitle: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
}

const TooltipIcon = (props: IProps & HTMLAttributes) => {
  return (
    <div>
      <NTooltip>
        {{
          trigger: () => (
            <NIcon
              style={{ cursor: 'pointer' }}
              color={props.color}
              depth={props.depth}
              size={props.size || 34}
            >
              {/* {slots.default!()} */}
              <props.icon />
            </NIcon>
          ),
          default: () => <span>{props.tipTitle}</span>
        }}
      </NTooltip>
    </div>
  )
}

export default TooltipIcon
