<template>
  <div class="home-page">
    <!-- Banner轮播 -->
    <section class="hero-banner">
      <div class="banner-content">
        <h1>山东安捷瑞消防检测有限公司</h1>
        <h2 class="banner-sub-title">烟台市鑫澜消防器材有限公司</h2>
        <p>专业消防设备供应商 · 为您提供全方位的消防安全解决方案</p>
        <div class="banner-buttons">
          <router-link to="/products" class="btn-primary">查看产品</router-link>
          <router-link to="/about" class="btn-secondary">了解更多</router-link>
        </div>
      </div>
    </section>

    <!-- 公司简介 -->
    <section class="about-brief">
      <div class="container">
        <div class="section-header">
          <h2>公司简介</h2>
          <div class="underline"></div>
        </div>
        <div class="about-content">
          <!-- 安捷瑞公司简介 -->
          <div class="company-block">
            <h3 class="company-name">山东安捷瑞消防检测有限公司</h3>
            <p class="lead-text">
              山东安捷瑞消防检测有限公司位于美丽的海滨城市烟台，下设有第一分公司，
              拥有雄厚的技术实力、先进的技术检测设备和装备，现有国家注册一级消防工程师5名，取得中华人民共和国人力资源和社会保障部、公安部核发的中级四级以上职业资格证书14名，维护保养检测设备全部经过经验校准认证符合国家标准。
            </p>
            <div class="stats-grid">
              <div class="stat-item">
                <h3>2020年</h3>
                <p>公司成立</p>
              </div>
              <div class="stat-item">
                <h3>600万</h3>
                <p>注册资金</p>
              </div>
              <div class="stat-item">
                <h3>5名</h3>
                <p>一级消防工程师</p>
              </div>
            </div>
          </div>

          <!-- 鑫澜公司简介 -->
          <div class="company-block">
            <h3 class="company-name">烟台市鑫澜消防器材有限公司</h3>
            <p class="lead-text">
              烟台市鑫澜消防器材有限公司成立于2016年，是一家集安装、维修、销售为一体的综合性公司。
              拥有各类灭火器维修、换粉检测资质，消防设施维护保养检测资质，承接各类消防设施的维修、保养、
              销售业务以及消防设备配件，消防检测、评估等消防类产品。
            </p>
            <div class="stats-grid">
              <div class="stat-item">
                <h3>2016年</h3>
                <p>公司成立</p>
              </div>
              <div class="stat-item">
                <h3>300万</h3>
                <p>注册资本</p>
              </div>
              <div class="stat-item">
                <h3>800㎡</h3>
                <p>经营场所</p>
              </div>
            </div>
          </div>

          <div class="action-center">
            <router-link to="/about" class="link-more">查看详情 <i class="fas fa-arrow-right"></i></router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品展示 -->
    <section class="products-showcase">
      <div class="container">
        <div class="section-header">
          <h2>产品展示</h2>
          <div class="underline"></div>
        </div>
        <div class="products-grid">
          <div v-for="product in featuredProducts" :key="product.id" class="product-item">
            <div class="product-img">
              <img :src="product.image" :alt="product.name">
              <div class="product-overlay">
                <span class="view-btn">查看详情</span>
              </div>
            </div>
            <div class="product-info">
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
            </div>
          </div>
        </div>
        <div class="action-center">
          <router-link to="/products" class="link-more">查看更多产品 <i class="fas fa-arrow-right"></i></router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import { products } from '../data/siteData'

export default {
  name: 'Home',
  computed: {
    featuredProducts() {
      // 展示前6个产品
      return products.slice(0, 6)
    }
  }
}
</script>

<style scoped>
.home-page {
  padding-top: 140px;
}

/* Banner */
.hero-banner {
  height: 500px;
  background: linear-gradient(135deg, rgba(30, 91, 168, 0.9), rgba(41, 128, 185, 0.9)),
              url('https://images.unsplash.com/photo-1527156231393-7023794f363c?w=1920') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  text-align: center;
}

.banner-content h1 {
  font-size: 48px;
  margin-bottom: 10px;
  font-weight: bold;
}

.banner-sub-title {
  font-size: 32px;
  margin-bottom: 20px;
  font-weight: 500;
  opacity: 0.9;
}

.banner-content p {
  font-size: 20px;
  margin-bottom: 40px;
  opacity: 0.95;
}

.banner-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.btn-primary, .btn-secondary {
  padding: 15px 40px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: var(--transition);
}

.btn-primary {
  background: var(--secondary-color);
  color: var(--white);
}

.btn-primary:hover {
  background: #c0392b;
  transform: translateY(-2px);
}

.btn-secondary {
  background: var(--white);
  color: var(--primary-color);
}

.btn-secondary:hover {
  background: var(--bg-light);
  transform: translateY(-2px);
}

/* 通用Section样式 */
section {
  padding: 80px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header h2 {
  font-size: 36px;
  color: var(--text-dark);
  margin-bottom: 15px;
}

.underline {
  width: 60px;
  height: 4px;
  background: var(--primary-color);
  margin: 0 auto;
}

/* 公司简介 */
.about-brief {
  background: var(--white);
}

.company-block {
  margin-bottom: 50px;
  padding: 40px;
  background: var(--bg-light);
  border-radius: 10px;
}

.company-name {
  font-size: 26px;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 25px;
  font-weight: bold;
}

.lead-text {
  font-size: 18px;
  line-height: 2;
  color: var(--text-dark);
  text-align: center;
  max-width: 900px;
  margin: 0 auto 30px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.stat-item {
  text-align: center;
  padding: 30px;
  background: var(--bg-light);
  border-radius: 10px;
  transition: var(--transition);
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow);
}

.stat-item h3 {
  font-size: 42px;
  color: var(--primary-color);
  margin-bottom: 10px;
  font-weight: bold;
}

.stat-item p {
  color: var(--text-light);
  font-size: 16px;
}

/* 产品展示 */
.products-showcase {
  background: var(--bg-light);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.product-item {
  background: var(--white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.product-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.2);
}

.product-img {
  position: relative;
  height: 250px;
  overflow: hidden;
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.product-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: var(--transition);
}

.product-item:hover .product-img img {
  transform: scale(1.1);
}

.product-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 91, 168, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: var(--transition);
}

.product-item:hover .product-overlay {
  opacity: 1;
}

.view-btn {
  color: var(--white);
  font-size: 18px;
  padding: 10px 30px;
  border: 2px solid var(--white);
  border-radius: 5px;
}

.product-info {
  padding: 25px;
}

.product-info h3 {
  font-size: 18px;
  color: var(--text-dark);
  margin-bottom: 10px;
}

.product-info p {
  font-size: 14px;
  color: var(--text-light);
}

/* 通用样式 */
.action-center {
  text-align: center;
  margin-top: 40px;
}

.link-more {
  display: inline-block;
  color: var(--primary-color);
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  padding: 15px 40px;
  border: 2px solid var(--primary-color);
  border-radius: 5px;
  transition: var(--transition);
}

.link-more:hover {
  background: var(--primary-color);
  color: var(--white);
}

.link-more i {
  margin-left: 10px;
}

@media (max-width: 768px) {
  .home-page {
    padding-top: 120px;
  }

  .hero-banner {
    height: 400px;
  }

  .banner-content h1 {
    font-size: 28px;
  }

  .banner-sub-title {
    font-size: 20px;
  }

  .banner-content p {
    font-size: 16px;
  }

  .banner-buttons {
    flex-direction: column;
    align-items: center;
  }

  .section-header h2 {
    font-size: 28px;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>

