<template>
  <div id="app">
    <router-view/>
    <footer-guide></footer-guide>
  </div>
</template>

<script>
import FooterGuide from './components/footerGuide/footerGuide.vue'
export default {
  data () {
    return {
    }
  },

  components: {
    FooterGuide
  },

  computed: {},
    

  mounted() {},

  methods: {}
}

</script>
<style lang='stylus' ref="stylesheet/stylus">
</style>