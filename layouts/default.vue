<template>
  <div class="main">
    <Header :active="scrolled" />
    <nuxt />
   
   
  </div>
</template>

<script>
import Header from '@/components/header.vue'




export default {
  name: 'DefaultLayout',
  components: {
    Header,
        
  },
  computed:{
    router_path(){
      return this.$route.path
    }
  },
  data() {
    return {
      scrolled: false,
    }
  },

  beforeMount() {
    // let nav_bar = document.querySelector('.header');
    window.onscroll = () => {
      if (scrollY > 80) {
        this.scrolled = true
        // nav_bar.classList.add('scrolled_nav')
      } else {
        this.scrolled = false
        // nav_bar.classList.remove('scrolled_nav')
      }
    }
  },
}
</script>

<style>
</style>