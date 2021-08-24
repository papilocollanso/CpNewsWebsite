<template>
  <div class="home">
    <HomeNews/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeNews from '@/components/HomeNews.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  components: {
    HomeNews,
    Footer,
  }
}
</script>

<style lang="css" scoped>


  
</style>
