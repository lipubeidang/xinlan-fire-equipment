<template>
  <div class="about-us-page">
    <div class="page-header">
      <div class="container">
        <h1>关于我们</h1>
        <p>About Us</p>
      </div>
    </div>

    <div class="container">
      <!-- 公司简介 -->
      <section v-for="(company, index) in companyInfo.companies" :key="index" class="company-intro">
        <h2>{{ company.name }}</h2>
        <div class="intro-content">
          <p v-for="(paragraph, pIndex) in company.introduction" :key="pIndex">
            {{ paragraph }}
          </p>
        </div>
      </section>

      <!-- 经营范围 -->
      <section class="business-scope">
        <h2>经营范围</h2>
        <div class="scope-content">
          <p>{{ companyInfo.businessScope }}</p>
        </div>
      </section>

      <!-- 企业宗旨 -->
      <section class="company-mission">
        <h2>企业宗旨</h2>
        <div class="mission-content">
          <p>{{ companyInfo.mission }}</p>
        </div>
      </section>

      <!-- 服务客户 -->
      <section class="clients">
        <h2>服务客户</h2>
        <div class="clients-grid">
          <div v-for="(category, index) in companyInfo.clients" :key="index" class="client-category">
            <h3>{{ category.type }}</h3>
            <p>{{ category.names }}</p>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
import { companyInfo } from '../data/siteData'

export default {
  name: 'AboutUs',
  data() {
    return {
      companyInfo
    }
  }
}
</script>

<style scoped>
.about-us-page {
  padding-top: 160px;
  min-height: 100vh;
}

.page-header {
  background: linear-gradient(135deg, var(--primary-color), #2980b9);
  color: var(--white);
  padding: 60px 0;
  margin-bottom: 60px;
  text-align: center;
}

.page-header h1 {
  font-size: 42px;
  margin-bottom: 10px;
}

.page-header p {
  font-size: 18px;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 3px;
}

section {
  margin-bottom: 60px;
  padding: 40px;
  background: var(--white);
  border-radius: 10px;
  box-shadow: var(--shadow);
}

section h2 {
  font-size: 32px;
  color: var(--primary-color);
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 3px solid var(--primary-color);
}

section h3 {
  font-size: 20px;
  color: var(--text-dark);
  margin-bottom: 15px;
}

.intro-content p,
.scope-content p,
.mission-content p {
  font-size: 16px;
  line-height: 2;
  color: var(--text-dark);
  margin-bottom: 20px;
  text-align: justify;
  text-indent: 2em;
}

.clients-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.client-category {
  padding: 20px;
  background: var(--bg-light);
  border-radius: 8px;
  border-left: 4px solid var(--primary-color);
}

.client-category h3 {
  color: var(--primary-color);
  font-size: 18px;
  margin-bottom: 15px;
}

.client-category p {
  font-size: 15px;
  line-height: 1.8;
  color: var(--text-light);
}

.qualifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.qual-card {
  padding: 30px;
  background: var(--bg-light);
  border-radius: 10px;
  text-align: center;
  transition: var(--transition);
}

.qual-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.qual-card i {
  font-size: 48px;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.qual-card h3 {
  font-size: 18px;
  color: var(--text-dark);
  margin-bottom: 10px;
}

.qual-card p {
  font-size: 14px;
  color: var(--text-light);
  line-height: 1.6;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.contact-item {
  padding: 30px;
  background: var(--bg-light);
  border-radius: 10px;
  text-align: center;
  transition: var(--transition);
}

.contact-item:hover {
  background: var(--primary-color);
  color: var(--white);
  transform: translateY(-5px);
}

.contact-item i {
  font-size: 36px;
  color: var(--primary-color);
  margin-bottom: 15px;
}

.contact-item:hover i {
  color: var(--white);
}

.contact-item h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.contact-item:hover h3,
.contact-item:hover p {
  color: var(--white);
}

.contact-item p {
  font-size: 15px;
  color: var(--text-light);
}

@media (max-width: 768px) {
  .about-us-page {
    padding-top: 140px;
  }

  .page-header h1 {
    font-size: 32px;
  }

  section {
    padding: 25px;
  }

  section h2 {
    font-size: 26px;
  }

  .clients-grid,
  .qualifications-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>

