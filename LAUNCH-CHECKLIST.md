# PDFSnip 上线 & SEO 操作清单

站点已完整做好（纯前端，零服务器成本）。下面是按哥飞流程走的上线步骤，照着做即可。

## 站点结构

| 文件 | 瞄准关键词 | 说明 |
|------|-----------|------|
| `index.html` | extract pages from pdf | 主词，首页工具 |
| `delete-pages-from-pdf.html` | delete pages from pdf | 长尾内页 |
| `rotate-pdf.html` | rotate pdf pages | 长尾内页 |
| `merge-pdf.html` | merge pdf files | 长尾内页 |
| `split-pdf.html` | split pdf online | 长尾内页 |
| `privacy.html` | — | 接 AdSense 前必须有 |
| `assets/` + `robots.txt` + `sitemap.xml` | — | 静态资源与 SEO 文件 |

差异化卖点：**所有处理 100% 在浏览器完成，文件永不上传**——这是竞品（iLovePDF/Smallpdf 等）给不了的信任感，页面文案和隐私页都围绕它写。

## 第 1 步：买域名（当天完成）

- 域名建议按顺序查：`pdfsnip.com` → `pdfsnip.app` → `pdfsnip.io`。购买商推荐 **Cloudflare**（成本价、自带 CDN）或 Spaceship。
- 全站目前用的是占位域名 `www.pdfsnip.app`。确定域名后全局替换一次即可：
  ```
  grep -rl "pdfsnip.app" . | xargs sed -i '' 's/www.pdfsnip.app/你的域名/g'
  ```
- 后缀 `.com` > `.app` > `.io`。

## 第 2 步：部署（推荐 Cloudflare Pages，免费）

1. Cloudflare 控制台 → Workers & Pages → Create → Pages → Upload assets，把整个 `pdfsnip/` 文件夹拖进去。
2. 部署后 `xxx.pages.dev` 立即可访问；绑定自己的域名（Custom domains）。
3. 注意：页面内链接用的是 `/merge-pdf` 这种无后缀形式，Cloudflare Pages 会自动把 `/merge-pdf` 映射到 `merge-pdf.html`，无需配置。

## 第 3 步：提交谷歌（上线当天）

1. 注册 [Google Search Console](https://search.google.com/search-console)，验证域名（DNS 记录方式最快）。
2. 提交 sitemap：`https://你的域名/sitemap.xml`。
3. 用 GSC 顶部的「网址检查」逐个请求编入索引 6 个页面。
4. 建议同时加 [Bing Webmaster Tools](https://www.bing.com/webmasters)，可直接从 GSC 导入，五分钟搞定。

## 第 4 步：外链（持续做，占 40% 精力）

免费先铺量：

- **AI 导航站**：Toolify（可免费提交）、There's An AI For That、Futurepedia
- **工具聚合**：Product Hunt、AlternativeTo、SaasHub、free-for.dev
- **社区**：Reddit（r/pdf、r/SideProject 分享时强调 privacy 角度：'Your PDF never leaves your browser'）、V2EX、X/Twitter
- **GitHub**：建一个 awesome 列表或把开源部分拆成仓库带链接

有预算后：买 Toolify 付费推荐、几十条高质量外链。

## 第 5 步：数据验证与变现

1. 上线 2-4 周观察 GSC：曝光 → 点击 → 排名。新词小词通常 2-6 周开始出排名。
2. 日 UV 稳定几百后接 **AdSense**（记得开插屏广告）。
3. 转化思路：主功能免费无限制建立信任 → 后续加增值工具（PDF 加密码保护、页面编号、压缩）做订阅制。变现优先级：订阅 > 广告。
4. 装个轻量统计：[Umami](https://umami.is) 或 Cloudflare Web Analytics（免 cookie 提示）。

## 后续迭代（一边上内页一边搞外链）

候选新内页（每个都是新关键词入口）：
- `pdf-page-numbers`（add page numbers to pdf）
- `reverse-pdf-pages`
- `pdf-to-jpg`（需要加 pdf.js 渲染，工作量中等，搜索量更大）
- 多语言版本（先用谷歌翻译级质量铺 es/de/fr，验证有流量再精修）

## 本地预览

```bash
cd pdfsnip && python3 -m http.server 8080
# 打开 http://localhost:8080
```
（必须用 http 服务打开，直接双击文件会因 file:// 协议部分功能受限）
