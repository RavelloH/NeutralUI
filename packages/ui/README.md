# @ravelloh/neutral-ui

一个基于 React 和 Tailwind CSS 的现代化 UI 组件库。

## 安装

```bash
npm install @ravelloh/neutral-ui
yarn add @ravelloh/neutral-ui
pnpm add @ravelloh/neutral-ui
```

## 快速开始

```bash
pnpm install -D tailwindcss postcss autoprefixer
pnpm dlx tailwindcss init -p
```

### 配置 Tailwind

在 `tailwind.config.js` 中包含组件库的路径：

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // 添加下面这一行来包含组件库
    './node_modules/@ravelloh/neutral-ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 导入基础样式

在您的应用入口文件中导入 Tailwind 样式：

**React (Vite/CRA)**

```diff
// main.tsx 或 index.tsx
+ import '@ravelloh/neutral-ui/styles'
import './index.css'
```

**Next.js**

```diff
// pages/_app.tsx 或 app/layout.tsx
+ import '@ravelloh/neutral-ui/styles'
import './globals.css'
```

### 使用

```tsx
import { Button } from '@ravelloh/neutral-ui';

function App() {
  return (
    <div className='p-8'>
      <Button>Submit</Button>
    </div>
  );
}
```
