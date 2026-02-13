<template>
  <div class="certificates-page">
    <div class="page-banner">
      <div class="container">
        <h1>人员证书</h1>
        <p>Staff Certificates</p>
      </div>
    </div>

    <div class="container">
      <div class="intro-text">
        <p>公司现有国家注册一级消防工程师多名，取得中华人民共和国人力资源和社会保障部、公安部核发的中级四级以上职业资格证书10名。</p>
      </div>

      <div class="certificates-grid">
        <div v-for="(cert, index) in certificates" :key="index" class="certificate-card" @click="viewCertificate(cert.image)">
          <div class="cert-image">
            <img :src="cert.image" :alt="cert.title">
            <div class="cert-overlay">
              <i class="fas fa-search-plus"></i>
              <p>点击查看大图</p>
            </div>
          </div>
          <div class="cert-info">
            <h3>{{ cert.title }}</h3>
            <p>{{ cert.description }}</p>
          </div>
        </div>
      </div>

      <!-- 图片预览模态框 -->
      <div v-if="showModal" class="modal-overlay" @click="closeModal">
        <div class="modal-content">
          <button class="close-btn" @click="closeModal">
            <i class="fas fa-times"></i>
          </button>
          <img :src="currentImage" alt="证书预览">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Certificates',
  data() {
    return {
      showModal: false,
      currentImage: '',
      certificates: [
        {
          title: '一级注册消防工程师证书',
          description: '国家注册一级消防工程师',
          image: require('@/assets/images/certificates/一级注册消防工程师1.png')
        },
        {
          title: '一级注册消防工程师证书',
          description: '国家注册一级消防工程师',
          image: require('@/assets/images/certificates/一级注册消防工程师2.png')
        },
        {
          title: '一级注册消防工程师证书',
          description: '国家注册一级消防工程师',
          image: require('@/assets/images/certificates/一级注册消防工程师3.png')
        },
        {
          title: '一级注册消防工程师证书',
          description: '国家注册一级消防工程师',
          image: require('@/assets/images/certificates/一级注册消防工程师4.png')
        },
        {
          title: '建构筑物消防员证书',
          description: '四级建筑消防员',
          image: require('@/assets/images/certificates/四级建筑消防员.png')
        },
        {
          title: '消防设施操作员证书',
          description: '消防设施操作员',
          image: require('@/assets/images/certificates/消防设施操作员.png')
        },
        {
          title: '消防设施操作员证书',
          description: '消防设施操作员',
          image: require('@/assets/images/certificates/消防设施操作员2.png')
        },
        {
          title: '消防设施操作员证书',
          description: '消防设施操作员',
          image: require('@/assets/images/certificates/消防设施操作员3.png')
        },
        {
          title: '消防设施操作员证书',
          description: '消防设施操作员',
          image: require('@/assets/images/certificates/消防设施操作员4.png')
        },
        {
          title: '电工证',
          description: '电工职业资格证书',
          image: require('@/assets/images/certificates/电工证.jpg')
        },
        {
          title: '电工证',
          description: '电工职业资格证书',
          image: require('@/assets/images/certificates/电工证2.jpg')
        },
        {
          title: '电工证',
          description: '电工职业资格证书',
          image: require('@/assets/images/certificates/电工证3.jpg')
        }
      ]
    }
  },
  methods: {
    viewCertificate(image) {
      this.currentImage = image
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
      this.currentImage = ''
    }
  }
}
</script>

<style scoped>
.certificates-page {
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

.intro-text {
  text-align: center;
  padding: 30px;
  background: var(--white);
  border-radius: 10px;
  box-shadow: var(--shadow);
  margin-bottom: 50px;
}

.intro-text p {
  font-size: 18px;
  line-height: 2;
  color: var(--text-dark);
}

.certificates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  padding-bottom: 60px;
}

.certificate-card {
  background: var(--white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  cursor: pointer;
}

.certificate-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.2);
}

.cert-image {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.cert-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: var(--transition);
}

.cert-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 91, 168, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: var(--transition);
}

.certificate-card:hover .cert-overlay {
  opacity: 1;
}

.cert-overlay i {
  font-size: 48px;
  color: var(--white);
  margin-bottom: 15px;
}

.cert-overlay p {
  color: var(--white);
  font-size: 16px;
}

.cert-info {
  padding: 20px;
  text-align: center;
}

.cert-info h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: var(--text-dark);
}

.cert-info p {
  font-size: 14px;
  color: var(--text-light);
}

/* 模态框 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  animation: zoomIn 0.3s ease;
}

.modal-content img {
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 8px;
}

.close-btn {
  position: absolute;
  top: -50px;
  right: 0;
  background: var(--white);
  color: var(--text-dark);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  transition: var(--transition);
}

.close-btn:hover {
  background: var(--secondary-color);
  color: var(--white);
  transform: rotate(90deg);
}

@keyframes zoomIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .certificates-page {
    padding-top: 120px;
  }

  .page-banner h1 {
    font-size: 32px;
  }

  .certificates-grid {
    grid-template-columns: 1fr;
  }
}
</style>

