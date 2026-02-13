<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>烟台市鑫澜消防器材有限公司</h3>
          <p>专业的消防设备供应商，为您的安全保驾护航</p>
        </div>
        <div class="footer-section">
          <h3>快速链接</h3>
          <ul>
            <li v-for="link in footerLinks" :key="link.href">
              <a :href="link.href">{{ link.text }}</a>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>联系方式</h3>
          <p><i class="fas fa-phone"></i> 0535-6280119</p>
          <p><i class="fas fa-envelope"></i> sdajr119@163.com</p>
          <p><i class="fas fa-map-marker-alt"></i> 安捷瑞：山东省烟台市福山区北京南路8号东方工业园一期19号楼4001</p>
          <p><i class="fas fa-map-marker-alt"></i> 鑫澜：山东省烟台市芝罘区工业园东岳南路18号</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 烟台市鑫澜消防器材有限公司 版权所有</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    footerLinks: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.footer {
  background: #2c3e50;
  color: var(--white);
  padding: 50px 0 0;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 30px;
}

.footer-section h3 {
  font-size: 20px;
  margin-bottom: 20px;
  color: var(--white);
}

.footer-section p {
  color: rgba(255,255,255,0.8);
  line-height: 1.8;
  margin-bottom: 10px;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  transition: var(--transition);
}

.footer-section ul li a:hover {
  color: var(--white);
  padding-left: 5px;
}

.footer-section i {
  margin-right: 10px;
  color: var(--primary-color);
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding: 20px 0;
  text-align: center;
  color: rgba(255,255,255,0.6);
}
</style>

