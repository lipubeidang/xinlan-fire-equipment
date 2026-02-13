# Vercel 部署指南

## 📋 前置步骤：将代码推送到 GitHub

### 1. 创建 GitHub 仓库

1. 访问 https://github.com 并登录（没有账号需要先注册）
2. 点击右上角 **"+"** → **"New repository"**
3. 填写仓库信息：
   - **Repository name**: `xinlan-fire-equipment`（或你喜欢的名字）
   - **Description**: `鑫澜消防器材有限公司官方网站`
   - 选择 **Public**（公开）或 **Private**（私有）
   - ⚠️ **不要勾选** "Initialize this repository with a README"
4. 点击 **"Create repository"**

### 2. 连接本地仓库到 GitHub

创建仓库后，GitHub 会显示推送代码的说明。在项目目录下执行以下命令：

```bash
# 添加远程仓库地址（替换 YOUR_USERNAME 和 YOUR_REPO_NAME）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 例如：如果你的用户名是 zhangsan，仓库名是 xinlan-fire-equipment
# git remote add origin https://github.com/zhangsan/xinlan-fire-equipment.git
```

### 3. 推送代码到 GitHub

```bash
# 推送代码到 GitHub（首次推送）
git push -u origin master

# 如果提示需要认证，GitHub 现在使用 Personal Access Token
# 访问 https://github.com/settings/tokens 创建 token
# 密码处输入 token 而不是 GitHub 密码
```

**如果遇到认证问题：**

1. 访问 https://github.com/settings/tokens
2. 点击 **"Generate new token"** → **"Generate new token (classic)"**
3. 设置权限：勾选 `repo` 权限
4. 生成后复制 token（只显示一次，请保存好）
5. 推送时，用户名输入你的 GitHub 用户名，密码输入刚才生成的 token

---

## 🚀 部署到 Vercel

### 方法一：通过 Vercel 网站（推荐）

1. **访问 Vercel**
   - 打开 https://vercel.com
   - 使用 GitHub 账号登录（点击 "Continue with GitHub"）

2. **导入项目**
   - 登录后点击 **"Add New..."** → **"Project"**
   - 在仓库列表中找到你的 `xinlan-fire-equipment` 仓库
   - 点击 **"Import"**

3. **配置项目**
   - Vercel 会自动检测为 Vue.js 项目
   - 确认以下配置（通常自动识别）：
     - **Framework Preset**: `Vue.js`
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`
   - 项目名称可以保持默认或修改

4. **部署**
   - 点击 **"Deploy"** 按钮
   - 等待构建完成（通常 1-3 分钟）
   - 部署成功后，Vercel 会提供一个 URL，例如：`https://xinlan-fire-equipment.vercel.app`

5. **自动部署**
   - 之后每次你推送代码到 GitHub，Vercel 会自动重新部署
   - 你可以在 Vercel 控制台查看部署历史和状态

### 方法二：使用 Vercel CLI（可选）

如果你更喜欢命令行：

```bash
# 使用 npx 运行 vercel（无需全局安装）
npx vercel

# 首次运行会要求登录，按提示操作
# 然后按提示选择项目配置
```

---

## ✅ 部署后检查

部署成功后，访问 Vercel 提供的 URL，检查：

- ✅ 网站首页是否正常显示
- ✅ 路由跳转是否正常（点击导航菜单）
- ✅ 图片是否正常加载
- ✅ 响应式设计是否正常（用手机访问测试）

---

## 🔧 常见问题

### 问题 1：构建失败

**可能原因：**
- Node.js 版本不兼容
- 依赖安装失败

**解决方法：**
在 Vercel 项目设置中：
1. 进入 **Settings** → **General**
2. 在 **Node.js Version** 中选择 `18.x` 或 `20.x`
3. 重新部署

### 问题 2：路由 404 错误

**解决方法：**
确保项目根目录有 `vercel.json` 文件（已创建），包含路由重写规则。

### 问题 3：图片无法显示

**可能原因：**
- 图片路径问题
- 图片文件过大

**解决方法：**
- 检查图片路径是否正确
- 优化图片大小

---

## 📝 更新网站

每次更新代码后：

```bash
# 1. 修改代码
# 2. 提交更改
git add .
git commit -m "更新说明"

# 3. 推送到 GitHub
git push origin master

# 4. Vercel 会自动检测并重新部署（通常 1-3 分钟）
```

---

## 🎉 完成！

部署成功后，你的网站就可以通过 Vercel 提供的 URL 访问了！

如果需要自定义域名，可以在 Vercel 项目设置中添加你的域名。

