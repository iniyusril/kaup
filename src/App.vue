<template>
  <div id="app">
      <router-view></router-view>
    <kaki/>
  </div>
</template>
<script>
import kaki from './components/umum/footer.vue'
export default {
  name: 'App',
  components: {
    kaki 
  }
}
</script>
