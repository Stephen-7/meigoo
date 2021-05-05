<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <cpGlobalLoading v-show="loading"/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    computed: {
      loading: function () {
        return this.$store.state.loading
      },
    },
    mounted() {

    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>
