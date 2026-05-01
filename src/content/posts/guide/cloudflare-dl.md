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
  ![](https://photo.atbspb.online/index.php?mod=io\&op=getStream\&path=UmZ3dHR0aVpaRFluQWV4SzRJUmVWTkRhNTFkTUlRNmlUWUQwYzJJcjhZby0zMUd0aGxZS0pvRk1TdVp6NWh6YlMzQ1RZSGFrRVJWeGN3bVF4S1I0ZWlma1g1RU9iMHJiN1huXzF1Vk81MWxiQ0pCSWNOQ0pILXhJVDNBWk8yQXZhbWcwX0I3STdWTG1fc2ZaNlNz)

  输入我们的域名，点击继续，然后选择Free计划。
  ![](https://photo.atbspb.online/index.php?mod=io\&op=getStream\&path=UmZ3dHR0aVpaRFluQWVCTzVvRllDb1dINFE1QmRBV2xUZFQwYzJJcjhZb1F6eGV0cTJkVU1KSmxFdVp6LWxmUExuUEtZeW1vRndGWWRGU1RuTHd4ZWhuVkE0VUphQmJOdzFQXzF1Vk81MWxiQ0pCSWMtS2tMYmRWVkdaTEYxTjNiVmtjc2tMUTZVanBvT2ZodWl5bDlwa3E)

  到下一个界面后，如果已经有解析记录，可以全部删除掉，也可以先不用理会，直接点击 继续前往激活。
  ![](https://photo.atbspb.online/index.php?mod=io&op=getStream&path=UlBzcXNkNmRZek1pQU9WT3N0QU9COVNGdFE0UUl3NmlRb1gwYzJJcjhZZ1R6eHE2bFdnTk1KRjFGLVZlOGxEWUxuUFBkQ200RVFGZldsQ1FuTHg4ZVFuV1g1SXdld2Jid0ZmXzF1Vk81MWxiQ0pCSWMtSzBJYlZWVkdaTEYxTjNiV2cwX0I3STdWTG1fc2ZaNlNz)

  最后，Cloudflare 会提供两个 DNS名称服务器地址 ，我们需要将这两个地址添加到域名提供商的 DNS名称服务器设置 处，由于各家的设置方法不同，就不在这里赘述了，同学们可以自行了解一下。

  然后等待名称服务器的更新，也可以手动点击 "我已更新名称服务器" 按钮来确认更新。
  ![](https://photo.atbspb.online/index.php?mod=io\&op=getStream\&path=UmZ3dHR0aVpaRFluQWJkTjVJUmVVSVBUNVFvVElnU2pUTkgwYzJJcjhaMEQwQXE1cTFWV0pZRkhGUEZ6OVFuYlBuUE1kRi13RmdGWWJ3NkgtcnNqZURmV1hKRWpaQlhQMDBfXzF1Vk81MWxiQ0pCSWMtS2tMYmRWVkdaTEYxTjNiVmtjc2tMUTZVanBvT2ZodWl5bDlwa3E)

  这样就成功将域名托管到了 Cloudflare 上。

- ### 项目搭建
  首先创建一个 KV 空间，在 Cloudflare 导航栏找到：存储和数据库 – Worker KV。
  ![](https://photo.atbspb.online/index.php?mod=io\&op=getStream\&path=UmZ3dHR0aVpaRFluQWJaRTQ5UURDNGZUdFFwRGRsUHlUTmIwYzJJcjhZbG0xeGU2bGtaSU1ZRjlFLVowNlF6YkZHU1ZZMkd6U3dGaWMwYUg2bzU2ZWhub1hZVWpad2JOdzFfXzF1Vk81MWxiQ0pCSWMtS2tMYmRWVkdaTEYxTjNiVmtjc2tMUTZVanBvT2ZodWl5bDlwa3E)

  创建 KV 空间，空间名称可以随意填写，点击创建。
  ![](https://photo.atbspb.online/index.php?mod=io\&op=getStream\&path=UmZ3dHR0aVpaRFluQWJST3Q0TmRBOVNBNlZwQkoxRHhRSVgwYzJJcjhaNDV3QXU2dTFZTk1ZRjlGT1ZOOGxIWUEyZk1kRi0wRVJWWWQwV1R3NlI4ZUNUdkFvVldjMHpNd0Z2XzF1Vk81MWxiQ0pCSWMtS2tMYmRWVkdaTEYxTjNiVmtjc2tMUTZVanBvT2ZodWl5bDlwa3E)

  然后创建Pages,在Cloudflare侧边导航栏找到：计算 - Workers 和 Pages，点击"创建应用程序"。
  ![](https://photo.atbspb.online/index.php?mod=io\&op=getStream\&path=UlBzcXNkNmRaamNpQkxFWjRJWUxBdGFCc0Z4TWRsQ2pRTlAwYzJJcjhaNHU3Z201cTBsVUpiaDFGUEpqLVFuYVBuT0dkMC04RVFCeFowdVM2cUI2ZVJuc1haSWVjMHZNd0VfXzF1Vk81MWxiQ0pCSWMtSzBJYlZWVkdaTEYxTjNiV2cwX0I3STdWTG1fc2ZaNlNz)

  点击下方的 "开始使用"。
  ![](https://photo.atbspb.online/index.php?mod=io\&op=getStream\&path=UlBzcXNkNmRaamNoQWVSRXM5UU9BWWJXNWw4WElGZjNFdHYwYzJJcjhZZ0EwQXV0NDFWV0pyaDZCdkpPN2xIUEUxNlVkMS1hRWhaUGFGV1MtcVI1ZVNmNFhwRXdkQlhNMDFQXzF1Vk81MWxiQ0pCSWMtSzBJYlZWVkdaTEYxTjNiV2cwX0I3STdWTG1fc2ZaNlNz)

  项目名称可以随意填写，然后上传 edgetunnel 的源码。源码可以在文章开头的 github 项目中找到。也可以在这里直接下载，但由于文章不实时更新，所以尽量保证是最新版本。

  > - [github](#github)
  > - [点击下载](https://disk.atbspb.online/f/8PI7/edgetunnel-main.zip)

  ![](https://photo.atbspb.online/index.php?mod=io\&op=getStream\&path=UmZ3dHR0aVpaRFluQWJBWjQ0UU5Cb2FDNTFjV0lBYjNRdFgwYzJJcjhZb0QxQTJ0aFd0VkpvRkxGZVZOLVF6YVBuUEtZRi1vRWhWeFZVV1QtYUI0YlRmNFdvVXplMF9idzFQXzF1Vk81MWxiQ0pCSWMtS2tMYmRWVkdaTEYxTjNiVmtjc2tMUTZVanBvT2ZodWl5bDlwa3E)

  部署完成后点击"继续处理站点"。

  在"自定义域"中输入一个子域名，例如域名是 `example.com`，就可以输入 `edgetunnel.example.com`，若域名是 `www.example.com`，就可以输入 `edgetunnel.www.example.com`。当然 这个`edgetunnel`可以更改成你喜欢的任何名称。

  ![](https://photo.atbspb.online/index.php?mod=io\&op=getStream\&path=UmZ3dHR0aVpaRFluQWUxTzZOcGFCZFRWNVFvVEtnLWhGb0gwYzJJcjhZZ1F4QXl1dTFaRk1vSnBFdVpOeEJ6WUZIdUhZeW1zRWhaaFZRMlFuTHNpZWhuYVhKRXpiQmZQMDNuXzF1Vk81MWxiQ0pCSWMtS2tMYmRWVkdaTEYxTjNiVmtjc2tMUTZVanBvT2ZodWl5bDlwa3E)

  点击 继续 - 激活域，若你已经将域名托管到了 Cloudflare 上，Cloudflare 会自动添加DNS解析记录。

  ![](https://photo.atbspb.online/index.php?mod=io\&op=getStream\&path=UmZ3dHR0aVpaRFluQWVNZTQ0TU5DdFRSNkE1Q0p3VDNSWUgwYzJJcjhZa1F6MVN0aFVJT01KRmlULVJONGxIWVBYeVNZRS12U1FCaWN3eUVuS0F3ZUNmOFhvUWdSaGJNMDFfXzF1Vk81MWxiQ0pCSWMtS2tMYmRWVkdaTEYxTjNiVmtjc2tMUTZVanBvT2ZodWl5bDlwa3E)

  设置环境变量，在设置中选择变量和机密，点击添加，类型选择文本，变量名输入 `ADMIN`，要大写的，变量值就是你的管理员密码，可以自行设置，但最好是复杂一点。

  ![](https://photo.atbspb.online/index.php?mod=io\&op=getStream\&path=UmZ3dHR0aVpaRFluQWVFZHNvTlpVWTNSNGxoQ0tsVHdSWUwwYzJJcjhaMFR6QXV1dkVwRk1vRmhGZkpqNFE3YkEyeVZkeW16VGdCaFZRaUgtbzU4YmpUc1c1SWVkQlhQMDFQXzF1Vk81MWxiQ0pCSWMtS2tMYmRWVkdaTEYxTjNiVmtjc2tMUTZVanBvT2ZodWl5bDlwa3E)

  绑定 KV空间，在设置中选择绑定，点击添加，选择 KV命名空间。

  ![](https://photo.atbspb.online/index.php?mod=io\&op=getStream\&path=UmZ3dHR0aVpaRFluQWVOSzZOQmZVWVBSNVYxTklBYndUTmYwYzJJcjhaNHU0VkM2cTBvUE1wRm1TdVlyNmhMUEZIaVRkRi1yU2dGeGRGQ0UtcjhsYmxIa1haSXpkMDdNdzNuXzF1Vk81MWxiQ0pCSWMtS2tMYmRWVkdaTEYxTjNiVmtjc2tMUTZVanBvT2ZodWl5bDlwa3E)

  变量名称输入为`KV`，同样要大写的，再选择之前创建的KV空间，点击保存。

  ![](https://photo.atbspb.online/index.php?mod=io\&op=getStream\&path=UmZ3dHR0aVpaRFluQWUwZXRJRUtBb1hSNFZoQ2NRWF9SZFgwYzJJcjhaMFEweGV1bFZGVUpyOTlGdVlyN2xYYlBXX01kRS1vV2dGaGV3MlMtb0l3ZWlUMEY0VU9aQlBOdzFQXzF1Vk81MWxiQ0pCSWMtS2tMYmRWVkdaTEYxTjNiVmtjc2tMUTZVanBvT2ZodWl5bDlwa3E)

  全部设置完后，我们需要点击`创建部署`按钮将 edgetunnel 的源码再上传一次到 Cloudflare 上。

  ![](https://photo.atbspb.online/index.php?mod=io\&op=getStream\&path=UmZ3dHR0aVpaRFluQWVJZDZOVURCZGZWNVYwUkp3THpFZGIwYzJJcjhaMDV3QWk1dkZwR0pyaHFCdkZkOWxIYkZIaVdZRi04V3dJSGV3MlMtcjhpYmpUM0JJVWdTaFBiN1huXzF1Vk81MWxiQ0pCSWMtS2tMYmRWVkdaTEYxTjNiVmtjc2tMUTZVanBvT2ZodWl5bDlwa3E)

- ### 面板设置
  在项目搭建完成后，就可以通过设置的子域名来访问我们的网站了。但是要进入管理面板，需要在网址后加上/admin，密码则是之前设置的环境变量 `ADMIN`的变量值。

  ![](https://photo.atbspb.online/index.php?mod=io\&op=getStream\&path=UmZ3dHR0aVpaRFluQWVORTZkWmRBdGVHdFF3V0pnS2lUSWYwYzJJcjhZZ0F5eGk2aFUxVE1wRjFFLVZOLWxmYkxuaVdZRXlvV3dKZlhVV0h3N3d4Ymhub1dvWU9lMHZNdzBmXzF1Vk81MWxiQ0pCSWMtS2tMYmRWVkdaTEYxTjNiVmtjc2tMUTZVanBvT2ZodWl5bDlwa3E)

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
