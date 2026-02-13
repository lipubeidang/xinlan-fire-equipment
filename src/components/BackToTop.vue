<template>
  <button class="back-to-top" :class="{ show: show }" @click="handleClick">
    <i class="fas fa-arrow-up"></i>
  </button>
</template>

<script>
export default {
  name: 'BackToTop',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick() {
      this.$emit('scroll-top')
    }
  }
}
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--primary-color);
  color: var(--white);
  border: none;
  font-size: 20px;
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: var(--transition);
  opacity: 0;
  visibility: hidden;
  z-index: 998;
}

.back-to-top.show {
  opacity: 1;
  visibility: visible;
}

.back-to-top:hover {
  background: #164175;
  transform: translateY(-5px);
}

@media (max-width: 768px) {
  .back-to-top {
    bottom: 15px;
    right: 15px;
    width: 45px;
    height: 45px;
  }
}
</style>

