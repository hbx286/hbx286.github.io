# Repository Guidelines

## 项目结构与模块组织

这是 Vue 3、TypeScript 和 Vite 构建的个人站点。页面位于 `src/views/`，按路由分目录；可复用组件位于 `src/components/`，按 `home`、`layout`、`note`、`project` 分类。路由、Pinia 状态、展示数据、类型与工具函数分别放在 `src/router/`、`src/stores/`、`src/data/`、`src/types/` 和 `src/utils/`。全局样式在 `src/assets/styles/`，静态资源在 `public/`。构建产物 `dist/` 不提交。

## 开发、构建与检查

- `npm ci`：按锁文件安装依赖。
- `npm run dev`：启动本地 Vite 开发服务器。
- `npm run build`：并行运行类型检查和生产构建；提交前执行。
- `npm run preview`：本地预览构建产物。
- `npm run lint`：运行 Oxlint 和 ESLint，并自动修复问题；执行后检查差异。
- `npm run format`：用 Prettier 格式化 `src/`。

只检查而不修改文件时，可运行 `npx eslint .`、`npx oxlint .` 和 `npx prettier --check src/`。

## 编码风格与命名

遵循 `.editorconfig` 和 `.prettierrc.json`：两个空格缩进、LF 换行、单引号、不写分号，Prettier 行宽为 72。Vue 组件使用 PascalCase 文件名，例如 `SkillCard.vue`；页面入口使用 `views/<页面>/index.vue`；TypeScript 工具和数据文件使用小写短横线命名。优先使用明确的类型与小型、单一职责的组件。新增注释使用中文，必要的技术名词可保留英文。

## 测试与验证

仓库目前没有测试框架、`npm test` 脚本或覆盖率门槛。修改后至少运行 `npm run build` 和只读 lint 检查；涉及交互或样式时，在开发服务器中检查相关页面、明暗主题和常见屏宽。若新增自动化测试，应同时配置运行命令，并在相应模块附近使用 `*.spec.ts` 命名。

## 提交与拉取请求

提交信息沿用“Gitmoji 代码 + 中文摘要”，例如 `:bug: 修复导航菜单显示问题`、`:sparkles: 新增笔记展示`。一次提交集中处理一个主题；复杂改动在正文列出要点。拉取请求应说明目的、主要改动和验证命令；界面改动附前后截图，并关联相关 issue。`main` 分支的推送会触发 GitHub Pages 部署，合并前确认构建通过。
