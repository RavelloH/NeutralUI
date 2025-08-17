# NeutralUI

个人自用的React组件库，基于 `TypeScript` 和 `Tailwind CSS` 构建。  
集成了 `Storybook` 作为文档和组件开发环境。  
使用 `Turborepo` 进行包管理和构建。

## 项目结构

```
NeutralUI                  # 根目录
├── apps/
│   └── storybook/         # 文档应用
├── packages/
│   ├── ui/                # UI 组件库
│   ├── eslint-config/     # ESLint 配置
│   └── typescript-config/ # TypeScript 配置
├── package.json           # 根配置和统一脚本
└── turbo.json             # Turborepo 配置
```

## 使用

详见 [packages/ui/README.md](packages/ui/README.md)

## 开发

```bash
git clone https://github.com/RavelloH/NeutralUI
cd NeutralUI

pnpm install
```

```bash
pnpm dev # 文档&组件开发
pnpm dev:storybook # 只启动文档
pnpm dev:ui # 只Tailwind监听
```

```bash
pnpm lint # 运行 ESLint 检查
```

```bash
pnpm build # 构建UI组件库和文档
pnpm preview:storybook # 预览构建的 Storybook 静态站点
pnpm clean # 清理构建产物
```

```bash
pnpm format # 格式化代码
```
