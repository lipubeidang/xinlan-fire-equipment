<template>
  <header class="header">
    <div class="top-bar">
      <div class="container">
        <div class="logo-section">
          <div class="logo">
            <i class="fas fa-fire-extinguisher"></i>
            <div>
              <h1>山东安捷瑞消防检测有限公司</h1>
              <h1 class="sub-company">烟台市鑫澜消防器材有限公司</h1>
            </div>
          </div>
        </div>
        <div class="contact-info">
          <span><i class="fas fa-phone"></i> 联系电话：0535-6280119 / 18105451666</span>
          <span><i class="fas fa-envelope"></i> Email: sdajr119@163.com</span>
        </div>
      </div>
    </div>

    <nav class="navbar">
      <div class="container nav-container">
        <button class="menu-toggle" @click="menuOpen = !menuOpen" aria-label="菜单">
          <i :class="menuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
        </button>
        <ul class="nav-menu" :class="{ open: menuOpen }">
          <li v-for="item in navItems" :key="item.id">
            <router-link :to="item.href" @click="menuOpen = false">
              <i v-if="item.icon" :class="item.icon"></i> {{ item.text }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    navItems: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      menuOpen: false
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--white);
  box-shadow: var(--shadow);
  z-index: 1000;
}

.top-bar {
  background: linear-gradient(135deg, var(--primary-color), #2980b9);
  color: var(--white);
  padding: 15px 0;
}

.top-bar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.logo {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo i {
  font-size: 48px;
  color: var(--white);
}

.logo h1 {
  font-size: 24px;
  margin-bottom: 2px;
}

.logo .sub-company {
  font-size: 18px;
  font-weight: 400;
  opacity: 0.9;
}

.contact-info {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}

.contact-info span {
  display: flex;
  align-items: center;
  gap: 8px;
}

.navbar {
  background: var(--white);
  padding: 0;
}

.nav-container {
  position: relative;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  color: var(--text-dark);
  cursor: pointer;
  padding: 12px 0;
}

.nav-menu {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 5px;
  flex-wrap: wrap;
}

.nav-menu li a,
.nav-menu li .router-link-active {
  display: block;
  padding: 18px 25px;
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 500;
  transition: var(--transition);
  position: relative;
}

.nav-menu li a:hover,
.nav-menu li a.active,
.nav-menu li .router-link-active {
  color: var(--primary-color);
  background: var(--bg-light);
}

.nav-menu li a.qr-btn {
  color: var(--secondary-color);
}

.nav-menu li a.qr-btn:hover {
  background: var(--secondary-color);
  color: var(--white);
}

@media (max-width: 768px) {
  .top-bar .container {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }

  .contact-info {
    display: none;
  }

  .logo h1 {
    font-size: 16px;
  }

  .logo .sub-company {
    font-size: 13px;
  }

  .logo i {
    font-size: 32px;
  }

  .menu-toggle {
    display: block;
  }

  .nav-menu {
    display: none;
    flex-direction: column;
    gap: 0;
    background: var(--white);
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }

  .nav-menu.open {
    display: flex;
  }

  .nav-menu li a,
  .nav-menu li .router-link-active {
    padding: 14px 20px;
    border-bottom: 1px solid var(--bg-light);
    text-align: left;
  }
}
</style>

