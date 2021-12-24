import { NTooltip } from 'naive-ui'

interface IProps {
  tipTitle: string
}

const TheTooltip = (props: IProps) => {
  const slots = useSlots()

  return (
    <NTooltip placement="top" trigger="hover">
      {{
        trigger: () => slots.default!(),
        default: () => <span>{props.tipTitle}</span>
      }}
    </NTooltip>
  )
}

export default TheTooltip
