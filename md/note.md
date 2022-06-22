# 构建项目

## 创建项目

`pnpm create vite`

### 配置包管理器

`"preinstall": "npx only-allow pnpm"`

## 约束代码风格

### eslint prettier

#### `pnpm add eslint -D`

#### `pnpx eslint --init`

```sh
√ How would you like to use ESLint? · problems
√ What type of modules does your project use? · esm
√ Which framework does your project use? · vue
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser, node
√ What format do you want your config file to be in? · JavaScript
```

#### `pnpm add eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest -D`

#### `pnpm add eslint-config-typescript -D`

eslint-config-prettier 解决冲突，以 prettier 为准，使 eslint 规范失效
eslint-plugin-prettier prettier

#### 配置 .eslintrc.js 文件

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {},
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  }
}
```

#### 配置 .prettierrc 文件

```json
{
  "semi": false,
  "tabWidth": 2,
  "singleQuote": true,
  "printWidth": 100,
  "bracketSpacing": true,
  "trailingComma": "none",
  "arrowParens": "always"
}
```

#### 配置启动命令 package.json

```json
"format": "prettier --write .",
"lint": "eslint src --fix --ext .ts,.tsx,.vue,.js,.jsx",
```

### 配置 husky + lint-staged

1. 安装 mrm (pnpm add mrm -D)
2. 使用 mrm 安装 lint-staged (pnpx mrm lint-staged)
3. 生成 .husky 文件，并生成 `"prepare": "husky install"` 命令
4. 修改 commit 提交规范，结合 prettier 代码格式化，修改配置

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "*.{js,jsx,vue,ts,tsx}": [
    "pnpm lint",
    "prettier --write",
    "git add"
  ]
}
```

## 打包规范相关

`pnpm add vite-plugin-compression -D`

```js
base: './',
  plugins: [
    vue(),
    vueJsx(),
    // prod generator .gz files
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    https: false,
    proxy: {}
  },
  build: {
    terserOptions: {
      // prod clear console debugger
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
```
