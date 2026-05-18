---
title: 开源 ATBSPB-个人主页
published: 2026-05-17
description: At - Home Page - Vue | 基于 zyyo 主页，使用 Vue 3 + Vite 重构的个人主页项目，支持 Light/Dark 双主题切换
tags: [Vue/Vite, 个人主页, 开源]
category: 技术分享
draft: false 
lang: zh-CN
---

## 项目简介

At - Home Page - Vue | 一个基于 [zyyo主页](https://zyyo.net/44.html)，用 Vue 3 + Vite 重构的个人主页项目。

::github{repo="ATBSPB/at-home-page-vue"}

**演示网站：** [www.atbspb.online](https://www.atbspb.online/)，由 Netlify 提供支持。

## 项目结构

```
www - VUE/
├── public/                     # 静态资源目录
│   └── static/                # 静态文件
│       ├── fonts/              # 字体文件
│       ├── img/                # 图片文件
│       └── svg/                # SVG 图标
├── src/                        # 源代码目录
│   ├── components/             # Vue 组件
│   ├── composables/            # 组合式函数
│   ├── utils/                  # 工具函数
│   ├── App.vue                 # 根组件
│   ├── main.js                 # 入口文件
│   └── style.css               # 全局样式（主题配置）
├── index.html                  # HTML 模板
├── package.json                # 项目依赖配置
├── vite.config.js              # Vite 配置
├── wrangler.toml               # Cloudflare Pages 部署配置
├── LICENSE                     # MIT 许可证
└── README.md                   # 项目说明文档
```

## 技术栈

- **Vue 3** — 渐进式 JavaScript 框架
- **Vite** — 下一代前端构建工具
- **CSS3** — 样式和主题系统

## 主题系统

项目支持 **Light** 和 **Dark** 双主题，通过 `data-theme` 属性切换。

主题配置在 `src/style.css` 中使用 CSS 变量定义，关键变量位置如下：

| 设置项 | 变量名 | Light 行号 | Dark 行号 |
|--------|--------|-----------|----------|
| 主背景颜色 | `--main_bg_color` | 79 | 98 |
| 主文字颜色 | `--main_text_color` | 80 | 99 |
| 模块背景颜色 | `--item_bg_color` | 84 | 103 |
| 背景滤镜模糊 | `--back_filter` | 91 | 110 |
| 背景遮罩颜色 | `--back_filter_color` | 92 | 111 |

### Light 主题（默认）

```css
:root {
  --main_bg_color: url(/static/img/bz-light.jpg);
  --main_text_color: #ffffff;
  --gradient: linear-gradient(120deg, #bd34fe, #e0321b 30%, #41d1ff 60%);
  --purple_text_color: #747bff;
  --text_bg_color: rgba(180, 200, 230, 0.5);
  --item_bg_color: rgba(235, 240, 250, 0.25);
  --item_hover_color: rgba(225, 235, 250, 0.4);
  --item_left_title_color: #ffffff;
  --item_left_text_color: #ffffff;
  --footer_text_color: #ffffff;
  --left_tag_item: rgba(235, 240, 250, 0.35);
  --card_filter: 0px;
  --back_filter: 20px;
  --back_filter_color: rgba(0, 0, 0, 0.17);
  --fill: #ffffff;
}
```

### Dark 主题

```css
[data-theme="Dark"] {
  --main_bg_color: url(/static/img/bz-dark.jpg);
  --main_text_color: #fff;
  --gradient: linear-gradient(120deg, rgb(133, 62, 255), #f76cc6 30%, rgb(255, 255, 255) 60%);
  --purple_text_color: #747bff;
  --text_bg_color: rgba(26, 4, 48, 0.5);
  --item_bg_color: rgba(19, 20, 24, 0.35);
  --item_hover_color: rgba(19, 23, 27, 0.55);
  --item_left_title_color: #ffffff;
  --item_left_text_color: #ffffff;
  --footer_text_color: #ffffff;
  --left_tag_item: rgba(19, 20, 24, 0.35);
  --card_filter: 0px;
  --back_filter: 20px;
  --back_filter_color: rgba(0, 0, 0, 0.55);
  --fill: #ffffff;
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

### 壁纸设置

背景图片样式在 `src/style.css` 中配置：

```css
body {
  background: var(--main_bg_color);
  background-repeat: no-repeat;
  background-size: auto;
  background-position: top center;
  background-attachment: fixed;
  transition: color 0.1s ease;
  color: var(--main_text_color);
}
```

## 模块修改位置

| 模块 | 文件 | 可修改内容 | 行号 |
|------|------|-----------|------|
| 左侧侧边栏 | `LeftSidebar.vue` | 个人描述文字 | 35 |
| 左侧侧边栏 | `LeftSidebar.vue` | 标签列表 | 46-51 |
| 左侧侧边栏 | `LeftSidebar.vue` | 时间线数据 | 54-75 |
| 页面头部 | `PageHeader.vue` | 欢迎语 | 30 |
| 页面头部 | `PageHeader.vue` | 图标链接列表 | 33-54 |
| 页面内容 | `PageContent.vue` | 项目站点数据 | 65-70 |
| 页面底部 | `PageFooter.vue` | 版权信息/底部链接 | 4-8 |
| 页面底部 | `PageFooter.vue` | 滚动渐显效果 | 16-38 |
| 主题切换 | `ThemeToggle.vue` | 切换按钮样式 | 21-38 |
| 根组件 | `App.vue` | 主题切换逻辑 | 48-52 |
| 根组件 | `App.vue` | 控制台输出/彩蛋 | 65-73 |
| 根组件 | `App.vue` | 右键菜单禁用 | 75-77 |
| 根组件 | `App.vue` | FPS 显示 | 79-109 |

## 工具函数

| 文件 | 说明 |
|------|------|
| `src/utils/cookie.js` | Cookie 读写操作 |
| `src/composables/usePopup.js` | 弹窗事件管理 |

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

### Cloudflare 部署

项目已配置 `wrangler.toml`，支持以下部署方式：

**方式一：Cloudflare Pages**

```bash
npm run build
npx wrangler pages deploy dist
```

**方式二：Cloudflare Workers**

```bash
npm run build
npx wrangler deploy
```

## 许可证

MIT License