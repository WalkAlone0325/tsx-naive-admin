# TSX-NAIVE-ADMIN (还没写完，欢迎大佬提交代码，让小弟观摩)

白嫖部署 `vercel`，具体预览：[https://tsx-naive-admin.vercel.app](https://tsx-naive-admin.vercel.app)

## 用了 纯粹的 TSX + Pinia + Reactivity Transform，感觉更完美了

临时起意，恰好有点时间，就瞎搞了，也遇到不少问题

1. `vite + tsx` 的写法 热更新会有一些问题,所以必须要包裹在 `defineComponent()` 选项当中

2. [naive-ui](http://www.naiveui.com) tsx 的写法，提示真的很爽，也因此发现了几个小问题，也蹭了几个 `PR`

3. 对于 `Reactivity Ttransform`，说说看法，这个玩意不熟属实有点坑，尤其在你做封装导出的再用的时候，不能准确把握数据的类型，就特别容易出 现不在响应式的 `bug`，在 `tsx` 的写法中尤其需要注意

4. 关于 [Suspense](https://vuejs.org/guide/built-ins/suspense.html#suspense)，代码中写到的应该正确的方式。不知道在 `vue` 官网还是在 `vue-router` 官网看的的两一种写法，在 `tsx` 中是会出现 `KeepAlive` 重复性渲染视图的问题

5. 对于 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)，在 `tsx` 中就不要用了吧。我记得好像是能够识别，但是是没有 `ts` 类型提示的，按需导入也挺好用的

6. 还有在 `views` 页面这一块，细心的都可能发现了我文件夹下主文件还是用的和文件名一样的 `.tsx` 文件，如 `/home/home.tsx`，这是为了   `vite` 打包之后生成 `chunk` 的文件名，用 `index.tsx` 命名主文件，打包后都是 `index.[hash].js`

7. **组件二次封装**，这里涉及到 `props` 的类型提示问题，目前想到的办法是直接使用配置项 `extends: NXxx`，具体可查看 [DButton](./src/components/DButton.tsx)，感觉应该是一种比较完美的解决方式

8. `css modules`，使用了 `less`，开启了 `localsConvention: 'camelCase'`，查看 [config](./vite.config.ts)。
   
   本来准备上 [unocss](https://github.com/unocss/unocss) 的，但是吧，`Naive-UI` 组件比较多，大部分布局组件都能够实现，对大量的自定义样式需求不大，而且想要适配主题色，也可能需要一些相关的预设（说实话，我只会写类名，预设不太整明白）

9. 关于 `TS`，我是菜鸡中的菜鸡，代码里面应该写了很多让大佬一看就摇头的 类型标注。没办法，慢慢搞慢慢搞


10. 还有等等，想起来再说吧

## 临时查看：

1. `git clone git@github.com:WalkAlone0325/tsx-naive-admin.git`
2. `cd tsx-naive-admin`
3. `pnpm build` => `pnpm preview`
4. 或者使用 `serve` 等静态服务，如 `serve dist/`

## 如何使用：

1. `git clone git@github.com:WalkAlone0325/tsx-naive-admin.git`
2. `cd tsx-naive-admin`
3. `pnpm i`
4. `pnpm dev`

## TSX + naive-ui + Vue3 + Vite

后台管理系统基本架子

## 包含内容

1. Pinia + Vue-Router + Naive-UI
2. 主题色
3. 全局配置组件
4. 多标签
5. 多级菜单
6. 面包屑
7. 侧边折叠
8. 等吧
