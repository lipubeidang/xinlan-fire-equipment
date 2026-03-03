<template>
  <div class="products-page">
    <div class="page-banner">
      <div class="container">
        <h1>产品中心</h1>
        <p>Products Center</p>
      </div>
    </div>

    <div class="container">
      <!-- 产品分类 -->
      <div class="categories-section">
        <button 
          v-for="cat in categories" 
          :key="cat.id"
          class="category-btn" 
          :class="{ active: selectedCategory === cat.id }"
          @click="filterProducts(cat.id)">
          {{ cat.name }}
        </button>
      </div>

      <!-- PDF下载 -->
      <div class="pdf-download-section">
        <div class="pdf-download-card">
          <i class="fas fa-file-pdf pdf-icon"></i>
          <div class="pdf-info">
            <h3>居安特2026年产品价格表</h3>
            <p>下载完整产品价格表，了解全部产品详情及报价</p>
          </div>
          <a href="./居安特2026年价格表1.pdf" download class="pdf-download-btn">
            <i class="fas fa-download"></i> 下载PDF
          </a>
        </div>
      </div>

      <!-- 产品列表 -->
      <div class="products-grid">
        <div 
          v-for="product in filteredProducts" 
          :key="product.id"
          class="product-card">
          <div class="product-image">
            <img :src="product.image" :alt="product.name">
            <span v-if="product.tag" class="product-tag">{{ product.tag }}</span>
          </div>
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
          </div>
        </div>
      </div>

      <div v-if="filteredProducts.length === 0" class="no-products">
        <i class="fas fa-inbox"></i>
        <p>暂无产品</p>
      </div>
    </div>
  </div>
</template>

<script>
import { categories, products } from '../data/siteData'

export default {
  name: 'Products',
  data() {
    return {
      categories,
      products,
      selectedCategory: 'all'
    }
  },
  computed: {
    filteredProducts() {
      if (this.selectedCategory === 'all') {
        return this.products
      }
      return this.products.filter(product => product.category === this.selectedCategory)
    }
  },
  methods: {
    filterProducts(categoryId) {
      this.selectedCategory = categoryId
    }
  }
}
</script>

<style scoped>
.products-page {
  padding-top: 140px;
  min-height: 100vh;
  background: var(--bg-light);
}

.page-banner {
  background: linear-gradient(135deg, var(--primary-color), #2980b9);
  color: var(--white);
  padding: 60px 0;
  margin-bottom: 60px;
  text-align: center;
}

.page-banner h1 {
  font-size: 42px;
  margin-bottom: 10px;
}

.page-banner p {
  font-size: 18px;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.categories-section {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 50px;
  flex-wrap: wrap;
  padding: 30px;
  background: var(--white);
  border-radius: 10px;
  box-shadow: var(--shadow);
}

.category-btn {
  padding: 12px 30px;
  border: 2px solid var(--primary-color);
  background: var(--white);
  color: var(--primary-color);
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: var(--transition);
}

.category-btn:hover,
.category-btn.active {
  background: var(--primary-color);
  color: var(--white);
  transform: translateY(-2px);
}

.pdf-download-section {
  margin-bottom: 40px;
}

.pdf-download-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 25px 30px;
  background: linear-gradient(135deg, #fff5f5, #fff);
  border: 2px solid #e74c3c;
  border-radius: 10px;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.pdf-download-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(231, 76, 60, 0.15);
}

.pdf-icon {
  font-size: 42px;
  color: #e74c3c;
  flex-shrink: 0;
}

.pdf-info {
  flex: 1;
}

.pdf-info h3 {
  font-size: 18px;
  color: var(--text-dark);
  margin-bottom: 5px;
}

.pdf-info p {
  font-size: 14px;
  color: var(--text-light);
}

.pdf-download-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: #e74c3c;
  color: #fff;
  border-radius: 25px;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  white-space: nowrap;
  transition: var(--transition);
}

.pdf-download-btn:hover {
  background: #c0392b;
  transform: translateY(-2px);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  padding-bottom: 60px;
}

.product-card {
  background: var(--white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.2);
}

.product-image {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: var(--transition);
}

.product-card:hover .product-image img {
  transform: scale(1.1);
}

.product-tag {
  position: absolute;
  top: 15px;
  right: 15px;
  background: var(--secondary-color);
  color: var(--white);
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
}

.product-info {
  padding: 20px;
}

.product-info h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: var(--text-dark);
}

.product-info p {
  font-size: 14px;
  color: var(--text-light);
  line-height: 1.6;
}

.no-products {
  text-align: center;
  padding: 80px 20px;
}

.no-products i {
  font-size: 64px;
  color: var(--text-light);
  margin-bottom: 20px;
}

.no-products p {
  font-size: 18px;
  color: var(--text-light);
}

@media (max-width: 768px) {
  .products-page {
    padding-top: 120px;
  }

  .page-banner h1 {
    font-size: 32px;
  }

  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }

  .categories-section {
    padding: 20px;
  }

  .pdf-download-card {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }

  .pdf-icon {
    font-size: 36px;
  }
}

@media (max-width: 480px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>


