<template>
  <div class="contact-page">
    <div class="page-banner">
      <div class="container">
        <h1>联系我们</h1>
        <p>Contact Us</p>
      </div>
    </div>

    <div class="container">
      <div class="contact-info-section">
        <h2>联系方式</h2>
        <div class="info-items">
          <div v-for="(info, index) in contactInfo" :key="index" class="info-item">
            <div class="icon-box">
              <i :class="info.icon"></i>
            </div>
            <div class="info-content">
              <h3>{{ info.title }}</h3>
              <p>{{ info.content }}</p>
            </div>
          </div>
        </div>

        <div class="social-links">
          <h3>关注我们</h3>
          <div class="qrcode-row">
            <div class="qrcode-section">
              <img src="@/assets/images/contact/个人二维码.jpg" alt="个人二维码" class="qrcode-img">
            </div>
            <div class="qrcode-section">
              <img src="@/assets/images/contact/个人二维码2.jpg" alt="个人二维码" class="qrcode-img">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { contactInfo } from '../data/siteData'

export default {
  name: 'Contact',
  data() {
    return {
      contactInfo
    }
  }
}
</script>

<style scoped>
.contact-page {
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

.contact-info-section {
  background: var(--white);
  padding: 40px;
  border-radius: 10px;
  box-shadow: var(--shadow);
  margin-bottom: 60px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

h2 {
  font-size: 28px;
  color: var(--primary-color);
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 3px solid var(--primary-color);
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 40px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  background: var(--bg-light);
  border-radius: 8px;
  transition: var(--transition);
}

.info-item:hover {
  transform: translateX(10px);
  box-shadow: var(--shadow);
}

.icon-box {
  width: 50px;
  height: 50px;
  background: var(--primary-color);
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}

.info-content h3 {
  font-size: 16px;
  color: var(--text-dark);
  margin-bottom: 5px;
}

.info-content p {
  font-size: 16px;
  color: var(--text-light);
}

.social-links {
  padding: 30px;
  background: var(--bg-light);
  border-radius: 8px;
  text-align: center;
}

.social-links h3 {
  font-size: 18px;
  color: var(--text-dark);
  margin-bottom: 20px;
}

.qrcode-row {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.qrcode-section {
  margin-bottom: 0;
}

.qrcode-img {
  width: 180px;
  height: 180px;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: var(--shadow);
}

.map-section {
  background: var(--white);
  padding: 40px;
  border-radius: 10px;
  box-shadow: var(--shadow);
  margin-bottom: 60px;
}

.map-container {
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
}

.map-placeholder {
  width: 100%;
  height: 100%;
  background: var(--bg-light);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
}

.map-placeholder i {
  font-size: 64px;
  margin-bottom: 20px;
}

.map-placeholder p {
  font-size: 18px;
}

@media (max-width: 768px) {
  .contact-page {
    padding-top: 120px;
  }

  .page-banner h1 {
    font-size: 32px;
  }

  .contact-info-section {
    padding: 25px;
  }
}
</style>

