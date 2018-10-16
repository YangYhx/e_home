<template>
  <div id="app">
    <router-view/>
    <tabbar></tabbar>

  </div>
</template>

<script>
  import tabbar from '@/components/tabar'
export default {
  name: 'App',
  components:{
    tabbar
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  .fll{
    float: left;
  }
  .flr{
    float: right;
  }
  .clerafix{
    content: '';
    display: block;
    clear: both;
  }
  a {
    text-decoration: none;
  }

</style>
