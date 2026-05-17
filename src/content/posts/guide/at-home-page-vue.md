---
title: 开源 ATBSPB-个人主页
published: 2026-05-17
description: At - Home Page - Vue|基于 zyyo 主页，使用 Vue 3 + Vite 重构的个人主页项目，支持 Light/Dark 双主题切换
tags: [Vue/Vite, 个人主页, 开源]
category: 技术分享
draft: false 
lang: zh-CN
---

## 项目简介

At - Home Page - Vue | 一个基于 [zyyo主页](https://zyyo.net/44.html)，用 Vue 3 + Vite 重构的个人主页项目。

::github{repo="ATBSPB/at-home-page-vue"}

**演示网站：** [www.atbspb.online](https://www.atbspb.online/)

## 项目结构

```
www - VUE/
├── public/                     # 静态资源目录
│   └── static/
│       ├── fonts/              # 字体文件
│       ├── img/                # 图片文件
│       └── svg/                # SVG 图标
├── src/
│   ├── components/             # Vue 组件
│   ├── composables/            # 组合式函数
│   ├── utils/                  # 工具函数
│   ├── App.vue                 # 根组件
│   ├── main.js                 # 入口文件
│   └── style.css               # 全局样式（主题配置）
├── index.html                  # HTML 模板
├── package.json                # 项目依赖
├── vite.config.js              # Vite 配置
└── README.md                   # 项目说明
```

## 技术栈

- **Vue 3** — 渐进式 JavaScript 框架
- **Vite** — 下一代前端构建工具
- **CSS3** — 样式和主题系统

## 主题系统

项目支持 **Light** 和 **Dark** 双主题，通过 `data-theme` 属性切换。

### Light 主题（默认）

```css
:root {
  --main_bg_color: url(/static/img/bz-light.jpg);
  --main_text_color: #ffffff;
  --gradient: linear-gradient(120deg, #bd34fe, #e0321b 30%, #41d1ff 60%);
  --item_bg_color: rgba(235, 240, 250, 0.25);
  --back_filter: 20px;
  --back_filter_color: rgba(0, 0, 0, 0.17);
}
```

### Dark 主题

```css
[data-theme="Dark"] {
  --main_bg_color: url(/static/img/bz-dark.jpg);
  --main_text_color: #fff;
  --gradient: linear-gradient(120deg, rgb(133, 62, 255), #f76cc6 30%, rgb(255, 255, 255) 60%);
  --item_bg_color: rgba(19, 20, 24, 0.35);
  --back_filter: 20px;
  --back_filter_color: rgba(0, 0, 0, 0.55);
}
```

### 主题切换逻辑

```javascript
const theme = ref('Light')

function toggleTheme() {
  theme.value = theme.value === 'Dark' ? 'Light' : 'Dark'
  setCookie('themeState', theme.value, 365)
  document.documentElement.dataset.theme = theme.value
}
```

## 组件架构

| 组件 | 功能 | 自定义内容 |
|------|------|-----------|
| **LeftSidebar** | 左侧侧边栏 | 个人描述、标签列表、时间线 |
| **PageHeader** | 页面头部 | 欢迎语、图标链接列表 |
| **PageContent** | 页面内容 | 项目站点数据 |
| **PageFooter** | 页面底部 | 版权信息、底部链接 |
| **ThemeToggle** | 主题切换按钮 | 切换按钮样式 |

## 自定义配置

### 修改壁纸

替换 `public/static/img/` 目录下的图片：
- `bz-light.jpg` — Light 主题壁纸
- `bz-dark.jpg` — Dark 主题壁纸

### 修改主题颜色

编辑 `src/style.css` 中的 CSS 变量，找到对应的主题区块修改即可。

### 添加新组件

在 `src/components/` 目录下创建 `.vue` 文件，然后在 `App.vue` 中导入使用：

```vue
<template>
  <div>
    <LeftSidebar />
    <div class="at-right">
      <PageHeader />
      <PageContent />
      <NewComponent />
    </div>
  </div>
</template>

<script setup>
import LeftSidebar from './components/LeftSidebar.vue'
import NewComponent from './components/NewComponent.vue'
</script>
```

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

