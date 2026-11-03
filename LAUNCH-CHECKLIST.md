# PDFSnip 上线 & SEO 操作清单（Next.js 版）

站点已从纯静态 HTML 重构为 **Next.js 16（App Router）+ React 19 + TypeScript**，零后端、零数据库，
PDF 处理仍 100% 在浏览器内用 pdf-lib 完成（npm 打包，不再依赖 CDN）。差异化卖点不变：
**文件永不上传**——这是 iLovePDF / Smallpdf 等竞品给不了的信任感。

## 技术栈

- Next.js 16（App Router）+ React 19 + TypeScript 5
- 样式：`app/globals.css`（原生 CSS，无 Tailwind）
- PDF 引擎：`pdf-lib`（npm 依赖，浏览器内运行，`lib/pdfTools.ts` 封装纯函数）
- 广告：Google AdSense 自动广告（见下「第 2.5 步」）
- 部署目标：Vercel（零配置）或任意 Node 平台

## 站点结构（app/ 路由 → 关键词）

| 路由 | 文件 | 瞄准关键词 |
|------|------|-----------|
| `/` | `app/page.tsx` | extract pages from pdf（主词 + 首页工具） |
| `/delete-pages-from-pdf` | `app/delete-pages-from-pdf/page.tsx` | delete pages from pdf |
| `/rotate-pdf` | `app/rotate-pdf/page.tsx` | rotate pdf pages |
| `/merge-pdf` | `app/merge-pdf/page.tsx` | merge pdf files |
| `/split-pdf` | `app/split-pdf/page.tsx` | split pdf online |
| `/extract-pages-from-pdf-in-chrome` | `app/extract-pages-from-pdf-in-chrome/page.tsx` | 指南长尾 |
| `/extract-pages-from-pdf-on-mac` | `app/extract-pages-from-pdf-on-mac/page.tsx` | 指南长尾 |
| `/extract-vs-split-vs-delete-pages` | `app/extract-vs-split-vs-delete-pages/page.tsx` | 对比长尾 |
| `/about` | `app/about/page.tsx` | — |
| `/privacy` | `app/privacy/page.tsx` | 接 AdSense 前必须有（已含广告披露） |

所有公开 URL 集中在 `lib/site.ts` 的 `routes` 数组，`app/sitemap.ts` / `app/robots.ts` 自动生成。
**换域名只改 `lib/site.ts` 里的 `SITE_URL` 一处即可。**

## 第 1 步：买域名（当天完成）

- 建议顺序查：`pdfsnip.com` → `pdfsnip.app` → `pdfsnip.io`。购买商推荐 **Cloudflare**（成本价、自带 CDN）或 Spaceship。
- 确定域名后，改 `lib/site.ts` 的 `SITE_URL = "https://你的域名"`，重新构建即可（旧占位域名 `www.pdfsnip.app` 已不存在）。

## 第 2 步：部署（推荐 Vercel，免费）

1. 把仓库推到 GitHub（已完成：`github.com:xushoulin/pdfsnip`）。
2. Vercel 控制台 → New Project → Import 该仓库 → Framework 选 Next.js → Deploy。零配置。
3. 部署后 `xxx.vercel.app` 立即可访问；在 Settings → Domains 绑定自己的域名。
4. 也可部署到 Cloudflare Pages / Netlify（都支持 Next.js 构建）。

## 第 2.5 步：AdSense（已在代码层接好）

- 自动广告已在 `app/layout.tsx` 用 `next/script` 加载（`adsbygoogle.js?client=pub-2622415797490761`）。
- `lib/site.ts` 的 `ADSENSE_CLIENT` 就是你的发布商 ID，换账号只改这一处。
- 隐私页 `app/privacy/page.tsx` 已含 **Advertising** 披露段落（Google 个性化广告 + 退出链接），满足审核要求。
- 你需要做的：登录 [AdSense](https://www.google.com/adsense) → 站点 → 添加 `pdfsnip.app.workbuddy.host`（或你的真实域名）→
  等审核通过。审核通过后自动广告即开始展示，无需改代码。
- 想放**固定广告位**（非自动）：用 `components/AdUnit.tsx`，在页面 JSX 里 `<AdUnit slot="你的slotID" />`，
  slot 在 AdSense 后台「按广告单元」创建后获得。

## 第 3 步：提交谷歌（上线当天）

1. 注册 [Google Search Console](https://search.google.com/search-console)，验证域名（DNS 记录最快）。
   验证标签已在 `lib/site.ts` 的 `GSC_VERIFICATION` 注入 `metadata.verification`。
2. 提交 sitemap：`https://你的域名/sitemap.xml`（由 `app/sitemap.ts` 自动生成，无需手写文件）。
3. 用 GSC「网址检查」逐个请求编入索引。
4. 建议同时加 [Bing Webmaster Tools](https://www.bing.com/webmasters)（可从 GSC 导入）。

## 第 4 步：外链（持续做，占 40% 精力）

免费先铺量：

- **AI 导航站**：Toolify（可免费提交）、There's An AI For That、Futurepedia
- **工具聚合**：Product Hunt、AlternativeTo、SaasHub、free-for.dev
- **社区**：Reddit（r/pdf、r/SideProject 强调隐私：'Your PDF never leaves your browser'）、V2EX、X/Twitter
- **GitHub**：把开源部分拆成仓库带链接

有预算后：买 Toolify 付费推荐、几十条高质量外链。

## 第 5 步：数据验证与变现

1. 上线 2-4 周观察 GSC：曝光 → 点击 → 排名。新词小词通常 2-6 周开始出排名。
2. AdSense 审核通过即产生收益（自动广告）。日 UV 稳定几百后可开启更多广告格式。
3. 转化思路：主功能免费无限制建立信任 → 后续加增值工具（PDF 加密码、页面编号、压缩）做订阅制。
   变现优先级：订阅 > 广告。
4. 统计：可加 [Umami](https://umami.is) 或 Vercel Web Analytics（免 cookie 提示）。

## 后续迭代

候选新内页（每个都是新关键词入口）：

- `pdf-page-numbers`（add page numbers to pdf）
- `reverse-pdf-pages`
- `pdf-to-jpg`（需加 pdf.js 渲染，工作量中等，搜索量更大）
- 多语言版本（es/de/fr 先铺量验证，有流量再精修）

## 本地预览 / 构建

```bash
cd pdfsnip
npm install        # 已装好，换机时执行
npm run dev        # http://localhost:3000 实测各工具
npm run build      # 上线前构建，确认无错误
npm run lint       # 代码检查
```
