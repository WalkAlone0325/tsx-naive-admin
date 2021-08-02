import { Component } from 'vue'
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
    // 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
    // 若你想不管路由下面的 children 声明的个数都显示你的根路由
    // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
    alwaysShow?: boolean
    // 是否隐藏菜单 默认为false
    hidden?: boolean
    // 设置该路由进入的权限，支持多个权限叠加
    roles?: string[]
    // 设置该路由在侧边栏和面包屑中展示的名字
    title?: string
    // 设置该路由的图标
    icon?: Component
    // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
    noCache?: boolean
    // 如果设置为false，则不会在breadcrumb面包屑中显示(默认 true)
    breadcrumb?: boolean
    // 如果设置为true，它则会固定在tags-view中(默认 false)
    affix?: boolean
    // 当路由设置了该属性，则会高亮相对应的侧边栏
    // 这在某些场景非常有用，比如：一个文章的列表页路由为：/article/list
    //  点击文章进入文章详情页，这时候路由为/article/1，但你想在侧边栏高亮文章列表的路由，就可以进行如下设置
    activeMenu?: string
  }
}
