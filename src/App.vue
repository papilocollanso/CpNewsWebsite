<template>
  <div class="full-width" id="app">
    <div id="nav">
      <Header/><br>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>



<script>
import Header from '@/components/Header.vue'

export default {
  components:{
    Header,
  }
}
</script>



<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-justify: auto;
  text-align: center;
  color: black;
  
}

#nav {

  a {
    font-size: 17px;
    font-weight: bold;
    color: black;

    &.router-link-exact-active {
      color: blue;
    }
  }
}
</style>
