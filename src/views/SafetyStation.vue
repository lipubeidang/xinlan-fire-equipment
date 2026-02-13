<template>
  <div class="safety-station-page">
    <div class="page-banner">
      <div class="container">
        <h1>安全驿站</h1>
        <p>Safety Station</p>
      </div>
    </div>

    <div class="container">
      <div class="intro-text">
        <p>安全驿站为您提供消防安全知识普及、应急避险指导和消防安全培训服务，助力全民消防安全意识提升。</p>
      </div>

      <div class="station-grid">
        <div v-for="(item, index) in stationItems" :key="index" class="station-card" @click="viewImage(item.image)">
          <div class="station-image">
            <img :src="item.image" :alt="item.title">
            <div class="station-overlay">
              <i class="fas fa-search-plus"></i>
              <p>点击查看大图</p>
            </div>
          </div>
          <div class="station-info">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>

      <!-- 图片预览模态框 -->
      <div v-if="showModal" class="modal-overlay" @click="closeModal">
        <div class="modal-content">
          <button class="close-btn" @click="closeModal">
            <i class="fas fa-times"></i>
          </button>
          <img :src="currentImage" alt="预览">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SafetyStation',
  data() {
    return {
      showModal: false,
      currentImage: '',
      stationItems: [
        {
          title: '安全驿站',
          description: '消防安全知识普及与应急服务',
          image: require('@/assets/images/safety-station/安全驿站.jpg')
        },
        {
          title: '安全驿站',
          description: '消防安全知识普及与应急服务',
          image: require('@/assets/images/safety-station/安全驿站1.jpg')
        },
        {
          title: '安全驿站',
          description: '消防安全知识普及与应急服务',
          image: require('@/assets/images/safety-station/安全驿站2.jpg')
        },
        {
          title: '安全驿站',
          description: '消防安全知识普及与应急服务',
          image: require('@/assets/images/safety-station/安全驿站3.jpg')
        },
        {
          title: '安全驿站',
          description: '消防安全知识普及与应急服务',
          image: require('@/assets/images/safety-station/安全驿站4.jpg')
        },
        {
          title: '安全驿站',
          description: '消防安全知识普及与应急服务',
          image: require('@/assets/images/safety-station/安全驿站5.jpg')
        }
      ]
    }
  },
  methods: {
    viewImage(image) {
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
.safety-station-page {
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

.station-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  padding-bottom: 60px;
}

.station-card {
  background: var(--white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  cursor: pointer;
}

.station-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.2);
}

.station-image {
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

.station-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: var(--transition);
}

.station-overlay {
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

.station-card:hover .station-overlay {
  opacity: 1;
}

.station-overlay i {
  font-size: 48px;
  color: var(--white);
  margin-bottom: 15px;
}

.station-overlay p {
  color: var(--white);
  font-size: 16px;
}

.station-info {
  padding: 20px;
  text-align: center;
}

.station-info h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: var(--text-dark);
}

.station-info p {
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
  .safety-station-page {
    padding-top: 120px;
  }

  .page-banner h1 {
    font-size: 32px;
  }

  .station-grid {
    grid-template-columns: 1fr;
  }
}
</style>
