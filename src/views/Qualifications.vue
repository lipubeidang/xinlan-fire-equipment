<template>
  <div class="qualifications-page">
    <div class="page-banner">
      <div class="container">
        <h1>公司资质</h1>
        <p>Company Qualifications</p>
      </div>
    </div>

    <div class="container">
      <div class="intro-section">
        <h2>资质认证</h2>
        <p>山东安捷瑞消防检测有限公司与烟台市鑫澜消防器材有限公司拥有完善的资质认证体系，所有业务均符合国家相关标准和要求。</p>
      </div>

      <div class="qualifications-grid">
        <div class="qualification-card">
          <i class="fas fa-certificate"></i>
          <h3>消防产品销售资质</h3>
          <p>具备完整的消防产品销售资质认证，所有产品均通过国家消防认证</p>
        </div>
        <div class="qualification-card">
          <i class="fas fa-award"></i>
          <h3>质量管理体系认证</h3>
          <p>通过ISO9001质量管理体系认证，确保产品和服务质量</p>
        </div>
        <div class="qualification-card">
          <i class="fas fa-shield-alt"></i>
          <h3>安全生产许可证</h3>
          <p>持有安全生产许可证资质，确保施工安全</p>
        </div>
        <div class="qualification-card">
          <i class="fas fa-handshake"></i>
          <h3>合作伙伴认证</h3>
          <p>多家知名品牌授权经销商，产品质量有保障</p>
        </div>
        <div class="qualification-card">
          <i class="fas fa-tools"></i>
          <h3>维修保养资质</h3>
          <p>拥有各类灭火器维修、换粉检测资质</p>
        </div>
        <div class="qualification-card">
          <i class="fas fa-check-circle"></i>
          <h3>消防设施检测资质</h3>
          <p>消防设施维护保养检测资质，通过国家计量认证</p>
        </div>
      </div>

      <div class="certificates-section">
        <h2>资质证书</h2>
        <div class="certs-grid">
          <div v-for="(cert, index) in qualificationCerts" :key="index" class="cert-item" @click="viewCertificate(cert.image)">
            <div class="cert-thumbnail">
              <img :src="cert.image" :alt="cert.title">
              <div class="cert-overlay">
                <i class="fas fa-search-plus"></i>
              </div>
            </div>
            <p>{{ cert.title }}</p>
          </div>
        </div>
      </div>

      <!-- 图片预览模态框 -->
      <div v-if="showModal" class="modal-overlay" @click="closeModal">
        <div class="modal-content">
          <button class="close-btn" @click="closeModal">
            <i class="fas fa-times"></i>
          </button>
          <img :src="currentImage" alt="资质预览">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Qualifications',
  data() {
    return {
      showModal: false,
      currentImage: '',
      qualificationCerts: [
        {
          title: '山东安捷瑞消防检测有限公司营业执照',
          image: require('@/assets/images/qualifications/安捷瑞营业执照.jpg')
        },
        {
          title: '营业执照及资质证明',
          image: require('@/assets/images/qualifications/烟台市鑫澜消防器材有限公司营业执照及资质证明.png')
        },
        {
          title: '营业执照及资质证明',
          image: require('@/assets/images/qualifications/烟台市鑫澜消防器材有限公司营业执照及资质证明2.png')
        },
        {
          title: '社会消防技术服务信息系统',
          image: require('@/assets/images/qualifications/社会消防技术服务信息系统.png')
        },
        {
          title: '企业信用等级证书',
          image: require('@/assets/images/qualifications/企业信用等级.png')
        },
        {
          title: '资信等级证书',
          image: require('@/assets/images/qualifications/资信等级.png')
        },
        {
          title: '荣誉证书',
          image: require('@/assets/images/qualifications/荣誉证书.png')
        },
        {
          title: '行业诚信单位',
          image: require('@/assets/images/qualifications/行业诚信单位.png')
        },
        {
          title: '诚信供应商',
          image: require('@/assets/images/qualifications/诚信供应商.png')
        },
        {
          title: '诚信经营示范单位',
          image: require('@/assets/images/qualifications/诚信经营示范单位.png')
        },
        {
          title: '质量服务诚信单位',
          image: require('@/assets/images/qualifications/质量服务诚信单位.png')
        },
        {
          title: '重合同守信用企业',
          image: require('@/assets/images/qualifications/重合同守信用.png')
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
.qualifications-page {
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

.intro-section {
  text-align: center;
  padding: 40px;
  background: var(--white);
  border-radius: 10px;
  box-shadow: var(--shadow);
  margin-bottom: 50px;
}

.intro-section h2 {
  font-size: 32px;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.intro-section p {
  font-size: 18px;
  line-height: 2;
  color: var(--text-dark);
}

.qualifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.qualification-card {
  background: var(--white);
  padding: 40px;
  border-radius: 10px;
  box-shadow: var(--shadow);
  text-align: center;
  transition: var(--transition);
}

.qualification-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.2);
  background: var(--primary-color);
  color: var(--white);
}

.qualification-card i {
  font-size: 48px;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.qualification-card:hover i {
  color: var(--white);
}

.qualification-card h3 {
  font-size: 20px;
  margin-bottom: 15px;
  color: var(--text-dark);
}

.qualification-card:hover h3,
.qualification-card:hover p {
  color: var(--white);
}

.qualification-card p {
  font-size: 14px;
  color: var(--text-light);
  line-height: 1.8;
}

.certificates-section {
  background: var(--white);
  padding: 40px;
  border-radius: 10px;
  box-shadow: var(--shadow);
  margin-bottom: 60px;
}

.certificates-section h2 {
  font-size: 32px;
  color: var(--primary-color);
  margin-bottom: 30px;
  text-align: center;
}

.certs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
}

.cert-item {
  cursor: pointer;
  text-align: center;
}

.cert-thumbnail {
  position: relative;
  width: 100%;
  height: 350px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow);
  background: var(--bg-light);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.cert-thumbnail img {
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
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: var(--transition);
}

.cert-item:hover .cert-overlay {
  opacity: 1;
}

.cert-overlay i {
  font-size: 48px;
  color: var(--white);
}

.cert-item p {
  margin-top: 15px;
  font-size: 16px;
  color: var(--text-dark);
  font-weight: 500;
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
  .qualifications-page {
    padding-top: 120px;
  }

  .page-banner h1 {
    font-size: 32px;
  }

  .qualifications-grid {
    grid-template-columns: 1fr;
  }

  .certs-grid {
    grid-template-columns: 1fr;
  }
}
</style>

