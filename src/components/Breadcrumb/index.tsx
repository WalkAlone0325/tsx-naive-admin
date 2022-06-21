import { NBreadcrumb, NBreadcrumbItem, NIcon } from 'naive-ui'

const Breadcrumb = defineComponent({
  name: 'Breadcrumb',
  setup() {
    const route = useRoute()
    
    const breadList = $computed(() => {
      return route.matched.map(i => {
        return {
          title: i.meta.title,
          icon: i.meta.icon,
          href: i.path,
          clickable: !!i.redirect && !!i.children.length
        }
      })
    })

    return () => (
      <NBreadcrumb separator="/">
        {breadList.map((i) => (
          <NBreadcrumbItem
            href={i.clickable ? i.href : undefined}
            clickable={i.clickable}
            key={i.href}
          >
            <NIcon
              component={typeof i.icon === 'string' ? h(i.icon) : i.icon}
            />
            {i.title}
          </NBreadcrumbItem>
        ))}
      </NBreadcrumb>
    )
  }
})

export default Breadcrumb