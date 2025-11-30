# 🚀 Vercel部署快速指南

## 最简单的部署方式（推荐新手）

### 步骤1️⃣：准备GitHub仓库

1. 访问 [GitHub](https://github.com) 并登录
2. 点击右上角 `+` 号，选择 `New repository`
3. 填写仓库信息：
   - Repository name: `ai-portfolio`（或其他名称）
   - Description: `个人AI作品集网站`
   - 选择 `Public`（公开）
   - 点击 `Create repository`

### 步骤2️⃣：上传代码到GitHub

在项目文件夹中打开命令行（Git Bash / CMD / PowerShell），执行：

```bash
# 初始化Git仓库
git init

# 添加所有文件
git add .

# 提交代码
git commit -m "Initial commit: AI portfolio website"

# 连接远程仓库（替换成你的GitHub用户名和仓库名）
git remote add origin https://github.com/你的用户名/ai-portfolio.git

# 推送到GitHub
git branch -M main
git push -u origin main
```

### 步骤3️⃣：部署到Vercel

1. 访问 [Vercel官网](https://vercel.com)
2. 点击 `Sign Up` 注册（建议用GitHub账号登录，方便关联）
3. 登录后，点击 `Add New...` → `Project`
4. 选择 `Import Git Repository`
5. 找到你刚创建的 `ai-portfolio` 仓库，点击 `Import`
6. 保持默认设置，点击 `Deploy`
7. 等待部署完成（通常30秒-1分钟）
8. 部署成功后，Vercel会给你一个网址，比如：`https://ai-portfolio-xxx.vercel.app`

## 🎉 完成！

点击Vercel提供的链接，就可以访问你的网站了！

## 📱 测试响应式效果

- **电脑端**：直接访问Vercel提供的链接
- **手机端**：用手机浏览器访问同样的链接

## 🔄 后续更新网站

当你想修改网站内容时：

```bash
# 修改文件后
git add .
git commit -m "更新网站内容"
git push
```

Vercel会自动检测到GitHub的更新，并重新部署你的网站！

## 🌐 绑定自定义域名（可选）

1. 在Vercel项目页面，点击 `Settings`
2. 选择 `Domains`
3. 输入你的域名
4. 按照提示在域名服务商处添加DNS记录
5. 等待DNS生效（可能需要几分钟到几小时）

## ⚠️ 常见问题

### Q1: 推送到GitHub时要求输入密码？
A: GitHub已不支持密码认证，需要使用Personal Access Token或SSH密钥。
   推荐使用GitHub Desktop客户端，图形化操作更简单。

### Q2: 视频无法播放？
A:
- 检查B站视频是否为公开视频
- 确保网络连接正常
- 某些地区可能需要特殊网络环境访问B站

### Q3: 飞鸟动画不显示？
A:
- 检查浏览器控制台是否有错误
- 确保网络可以访问CDN（Three.js和Vanta.js）
- 尝试刷新页面

### Q4: 移动端显示不正常？
A:
- 清除浏览器缓存
- 强制刷新页面（Ctrl+F5 或 Cmd+Shift+R）
- 检查是否是浏览器兼容性问题

## 📞 需要帮助？

- Vercel官方文档：https://vercel.com/docs
- GitHub官方文档：https://docs.github.com
- Vanta.js文档：https://www.vantajs.com

---

祝你部署顺利！🎊
