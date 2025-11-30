# AI作品集网站 🎨

一个古风风格的个人AI作品集网站，采用Vanta.js飞鸟动画背景，完美适配移动端和桌面端。

## ✨ 特色功能

- **古风设计**：采用金色、深红等古风配色，楷体字体，营造诗意氛围
- **动态背景**：使用Vanta.js实现酷炫的飞鸟动画效果
- **响应式布局**：完美适配手机、平板和电脑等各种设备
- **B站视频嵌入**：支持在线播放bilibili视频
- **优雅动画**：流畅的页面加载和交互动画效果

## 🚀 部署到Vercel

### 方法一：通过Git部署（推荐）

1. **初始化Git仓库**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AI portfolio website"
   ```

2. **推送到GitHub**
   - 在GitHub创建新仓库
   - 连接远程仓库：
     ```bash
     git remote add origin https://github.com/你的用户名/你的仓库名.git
     git branch -M main
     git push -u origin main
     ```

3. **在Vercel部署**
   - 访问 [vercel.com](https://vercel.com)
   - 点击 "Import Project"
   - 选择你的GitHub仓库
   - 点击 "Deploy" 开始部署
   - 等待部署完成，获取访问链接

### 方法二：通过Vercel CLI部署

1. **安装Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **登录Vercel**
   ```bash
   vercel login
   ```

3. **部署项目**
   ```bash
   vercel
   ```

4. **生产环境部署**
   ```bash
   vercel --prod
   ```

## 📁 项目结构

```
E:\0menina\
├── index.html       # 主页面
├── styles.css       # 样式表
├── script.js        # JavaScript逻辑
├── vercel.json      # Vercel配置
├── package.json     # 项目配置
└── README.md        # 说明文档
```

## 🎨 技术栈

- **HTML5**：页面结构
- **CSS3**：样式和动画
- **JavaScript**：交互逻辑
- **Vanta.js**：3D动画背景
- **Three.js**：3D渲染引擎
- **Vercel**：部署平台

## 📱 响应式断点

- 桌面端：> 768px
- 平板端：768px - 481px
- 移动端：≤ 480px

## 🎯 浏览器兼容性

- Chrome（推荐）
- Firefox
- Safari
- Edge
- 移动端浏览器

## 🛠️ 本地开发

1. **克隆或下载项目**

2. **使用本地服务器运行**
   ```bash
   # 使用 Python
   python -m http.server 8000

   # 或使用 Node.js serve
   npx serve .

   # 或使用 VS Code Live Server 扩展
   ```

3. **访问**
   打开浏览器访问 `http://localhost:8000`

## 📝 自定义内容

### 修改视频链接

在 `index.html` 中找到：
```html
<iframe src="//player.bilibili.com/player.html?bvid=BV1uU4y1E7RD&page=1...">
```
将 `BV1uU4y1E7RD` 替换为你的视频BV号。

### 修改配色

在 `styles.css` 的 `:root` 中修改 CSS 变量：
```css
:root {
    --primary-gold: #d4af37;
    --deep-red: #8b0000;
    /* ... 其他颜色 */
}
```

### 调整飞鸟效果

在 `script.js` 中修改 Vanta.js 配置：
```javascript
VANTA.BIRDS({
    quantity: 3.00,      // 飞鸟数量
    birdSize: 1.2,       // 鸟的大小
    speedLimit: 5.00,    // 速度限制
    // ...
});
```

## 🌟 性能优化

- 使用CDN加载第三方库
- 图片懒加载
- CSS动画硬件加速
- 移动端自动降低飞鸟数量
- 资源缓存策略

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提出建议和改进！

---

💡 **提示**：首次部署后，可以在Vercel仪表板中配置自定义域名。
