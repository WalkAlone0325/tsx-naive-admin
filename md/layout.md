## 定位布局 layout

### 始终固定侧边栏，不随整体窗口滚动

```tsx
<NLayout hasSider position="absolute">
  <NLayoutSider bordered>侧边栏</NLayoutSider>
</NLayout>
```

### 全局配置——是否固定头部

1. 抽取配置

   ```ts
   const { fixedHeader } = useSettings()
   ```

2. 当固定时添加 `style={{ marginTop: '84px' }} position="absolute"`，不固定时取消
3. 实现：

   ```ts
   const position = fixedHeader.value ? 'absolute' : 'static'
   const marginStyle: CSSProperties = fixedHeader.value ? { marginTop: '84px' } : {}
   ```

#### 固定

```tsx
<NLayout nativeScrollbar={false}>
  {/* 顶栏部分 */}
  <NLayoutHeader>
    <NavBar />
  </NLayoutHeader>

  {/* 主体内容 */}
  <NLayoutContent
    contentStyle={{ padding: '24px' }}
    nativeScrollbar={false}
    style={{ marginTop: '84px' }}
    position="absolute">
    {/* 路由展示 */}
    <AppMain />

    {/* 底部 */}
    <NLayoutFooter>
      <h2>底部</h2>
    </NLayoutFooter>
  </NLayoutContent>
</NLayout>
```

#### 不固定布局

```tsx
<NLayout nativeScrollbar={false}>
  {/* 顶栏部分 */}
  <NLayoutHeader>
    <NavBar />
  </NLayoutHeader>

  {/* 主体内容 */}
  <NLayoutContent contentStyle={{ padding: '24px' }} nativeScrollbar={false}>
    {/* 路由展示 */}
    <AppMain />

    {/* 底部 */}
    <NLayoutFooter>
      <h2>底部</h2>
    </NLayoutFooter>
  </NLayoutContent>
</NLayout>
```
