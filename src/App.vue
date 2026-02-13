<template>
  <div id="app">
    <Header :nav-items="navItems" />
    
    <router-view />
    
    <BackToTop :show="showBackToTop" @scroll-top="scrollToTop" />
    
    <Footer :footer-links="footerLinks" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import BackToTop from './components/BackToTop.vue'
import Footer from './components/Footer.vue'

import { navItems, footerLinks } from './data/siteData'

export default {
  name: 'App',
  components: {
    Header,
    BackToTop,
    Footer
  },
  data() {
    return {
      navItems,
      footerLinks,
      showBackToTop: false
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    handleScroll() {
      this.showBackToTop = window.scrollY > 300
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
/* App级别的样式在 assets/styles/global.css 中 */
</style>

