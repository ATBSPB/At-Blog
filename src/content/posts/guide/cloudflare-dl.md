---
title: Cloudflare 免费代理搭建教程
published: 2026-05-01
description: 永久可用+免费域名｜10分钟搭建｜详细教程
tags: [Cloudflare, 代理, 开源]
category: 技术分享
draft: false
---

<a id="github"></a>

## Cloudflare 免费代理搭建！永久可用+免费域名｜10分钟搭建｜详细教程

#### 这是一个名为 edgetunnel，由 [cmliu大佬](https://github.com/cmliu) 开发并开源的 github项目，可通过 Cloudflare Workers 部署 vless协议的 V2ray代理

::github{repo="cmliu/edgetunnel"}

- ### 域名托管
  首先我们需要一个域名，暂时没有域名的同学们可以使用 DigitalPlat 和 DNSHE 提供的免费域名。

  > - [DigitalPlat](https://digitalplat.org/)
  > - [DNSHE](https://www.dnshe.com/)

  具体注册与获取流程我就不在这里赘述了，同学们可以自行摸索或者去B站等平台搜索了解一下。

  在获取了域名后，我们需要将域名托管到 Cloudflare上。

  > - [Cloudflare](https://www.cloudflare.com/)

  当然，我们也可以选择其他 如阿里云与腾讯云 等DNS服务。

  在注册并登录 Cloudflare 后，在账户主页点击添加按钮，选择 连接域 选项。

  输入我们的域名，点击继续，然后选择Free计划。

  到下一个界面后，如果已经有解析记录，可以全部删除掉，也可以先不用理会，直接点击 继续前往激活。

  最后，Cloudflare 会提供两个 DNS名称服务器地址 ，我们需要将这两个地址添加到域名提供商的 DNS名称服务器设置 处，由于各家的设置方法不同，就不在这里赘述了，同学们可以自行了解一下。

  然后等待名称服务器的更新，也可以手动点击 "我已更新名称服务器" 按钮来确认更新。

  这样就成功将域名托管到了 Cloudflare 上。

- ### 项目搭建
  首先创建一个 KV 空间，在 Cloudflare 导航栏找到：存储和数据库 – Worker KV。

  创建 KV 空间，空间名称可以随意填写，点击创建。

  然后创建Pages,在Cloudflare侧边导航栏找到：计算 - Workers 和 Pages，点击"创建应用程序"。

  点击下方的 "开始使用"。

  项目名称可以随意填写，然后上传 edgetunnel 的源码。源码可以在文章开头的 github 项目中找到。也可以在这里直接下载，但由于文章不实时更新，所以尽量保证是最新版本。

  > - [github](#github)
  > - [点击下载](https://disk.atbspb.online/f/8PI7/edgetunnel-main.zip)

  部署完成后点击"继续处理站点"。

  在"自定义域"中输入一个子域名，例如域名是 `example.com`，就可以输入 `edgetunnel.example.com`，若域名是 `www.example.com`，就可以输入 `edgetunnel.www.example.com`。当然 这个`edgetunnel`可以更改成你喜欢的任何名称。

  点击 继续 - 激活域，若你已经将域名托管到了 Cloudflare 上，Cloudflare 会自动添加DNS解析记录。

  设置环境变量，在设置中选择变量和机密，点击添加，类型选择文本，变量名输入 `ADMIN`，要大写的，变量值就是你的管理员密码，可以自行设置，但最好是复杂一点。

  绑定 KV空间，在设置中选择绑定，点击添加，选择 KV命名空间。

  变量名称输入为`KV`，同样要大写的，再选择之前创建的KV空间，点击保存。

  全部设置完后，我们需要点击`创建部署`按钮将 edgetunnel 的源码再上传一次到 Cloudflare 上。

- ### 面板设置
  在项目搭建完成后，就可以通过设置的子域名来访问我们的网站了。但是要进入管理面板，需要在网址后加上/admin，密码则是之前设置的环境变量 `ADMIN`的变量值。

  接着把上方的节点链接格式或者自适应订阅地址，导入到你的代理软件里，支持 VLESS、Trojan 等主流协议，深度集成加密传输，确保你的隐私安全。

  当然如果你需要自定义更多的选项，比如优选订阅地址，指定ProxyIP订阅，那么可以点击顶部的：我是高手！我就是要折腾！

  #### 优选订阅地址：

  ```
  Cm.Soso.Edu.Kg
  Sub.Cmliussss.Net
  Owo.O00o.Ooo
  ```

  #### PROXYIP 订阅:

  ```
  Cm.Soso.Edu.Kg
  Sub.Cmliussss.Net
  Owo.O00o.Ooo
  ```

  #### 常用代理软件:

  > ##### Windows
  >
  > [V2rayN](https://disk.atbspb.online/f/KEfw/v2rayN-windows-64.zip) /
  > [Clash.Verge](https://disk.atbspb.online/f/NNuO/Clash.Verge_2.4.7_x64-setup.exe)

  > ##### Android
  >
  > [V2rayNG](https://disk.atbspb.online/f/EWc5/v2rayNG_2.1.4_x86_64.apk) /
  > [NekoBox](https://disk.atbspb.online/f/2mUW/NekoBox-1.4.2-x86_64.apk)
