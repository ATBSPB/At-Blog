import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

/**
 * 站点配置
 * 包含网站的基本信息和全局设置
 */
export const siteConfig: SiteConfig = {
	// 网站标题
	title: "At - Blog",
	// 网站副标题
	subtitle: "ATBSPB个人博客",
	// 网站语言代码，例如 'en', 'zh_CN', 'ja' 等
	lang: "zh_CN",
	// 主题颜色设置
	themeColor: {
		// 主题颜色的默认色相值，范围从 0 到 360
		// 例如：红色: 0, 青色: 200, 蓝绿色: 250, 粉色: 345
		hue: 275,
		// 是否固定主题颜色，隐藏主题颜色选择器
		fixed: false,
	},
	// 网站横幅设置
	banner: {
		// 是否启用横幅
		enable: true,
		// 横幅图片路径
		// 相对于 /src 目录，以 '/' 开头则相对于 /public 目录
		src: "assets/images/demo-banner.png",
		// 横幅图片位置，支持 'top', 'center', 'bottom'
		position: "bottom",
		// 横幅图片 credits
		credit: {
			// 是否显示 credits
			enable: true,
			// credits 文本
			text: "相册",
			// (可选) 原始作品或艺术家页面的 URL 链接
			url: "https://photo.atbspb.online",
		},
	},
	// 目录设置
	toc: {
		// 是否在文章右侧显示目录
		enable: true,
		// 目录显示的最大标题深度，范围从 1 到 3
		depth: 2,
	},
	// 网站图标设置
	// 留空数组使用默认图标
	favicon: [
		{
			src: "/favicon/logo.png",
			sizes: "any",
		},
	],
};

/**
 * 导航栏配置
 * 定义网站导航菜单的链接
 */
export const navBarConfig: NavBarConfig = {
	links: [
		// 使用预设的首页链接
		LinkPreset.Home,
		// 使用预设的归档链接
		LinkPreset.Archive,
		// 使用预设的关于页面链接
		LinkPreset.About,
		// 自定义外部链接
		{
			// 链接名称
			name: "GitHub",
			// 链接 URL
			// 内部链接不应包含基础路径，会自动添加
			url: "https://github.com/ATBSPB",
			// 是否为外部链接（显示外部链接图标并在新标签页打开）
			external: true,
		},
	],
};

/**
 * 个人资料配置
 * 定义网站个人资料相关信息
 */
export const profileConfig: ProfileConfig = {
	// 头像图片路径
	// 相对于 /src 目录，以 '/' 开头则相对于 /public 目录
	avatar: "assets/images/demo-avatar.png",
	// 姓名
	name: "ATBSPB",
	// 个人简介
	bio: "整天半吊子和不学无术的坏孩子 梦想成为一个好人.....",
	// 社交链接
	links: [
		{
			// 链接名称
			name: "邮箱",
			// 图标代码，访问 https://icones.js.org/ 获取
			// 需要安装相应的图标集：`pnpm add @iconify-json/<icon-set-name>`
			icon: "mdi:email-outline",
			// 链接 URL
			url: "mailto:atbspb@qq.com",
		},
		{
			name: "Steam",
			icon: "fa7-brands:steam-symbol",
			url: "https://steamcommunity.com/id/atbspb/",
		},
		{
			name: "抖音",
			icon: "line-md:tiktok",
			url: "https://v.douyin.com/4AZ_D6aojl0/",
		},
		{
			name: "bilibili",
			icon: "tabler:brand-bilibili",
			url: "https://space.bilibili.com/3493117248407854",
		},
	],
};

/**
 * 许可证配置
 * 定义网站内容的许可证信息
 */
export const licenseConfig: LicenseConfig = {
	// 是否启用许可证显示
	enable: false,
	// 许可证名称
	name: "CC BY-NC-SA 4.0",
	// 许可证 URL
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

/**
 * 代码高亮配置
 * 配置 Expressive Code 的行为
 */
export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 代码主题
	// 注意：部分样式（如背景色）在 astro.config.mjs 文件中被覆盖
	// 请选择深色主题，因为此博客主题目前仅支持深色背景
	theme: "github-dark",
};
