<template>
  <div id="app">
    <mt-header v-if="$route.name!='home'" :title="title">
      <mt-button icon="back" slot="left" @click="$router.back()" v-if="!isshow"></mt-button>
    </mt-header>
    <router-view/>
    <tabbar v-if="isshow"></tabbar>

  </div>
</template>

<script>
  import tabbar from '@/components/tabar'
export default {
  name: 'App',
  components:{
    tabbar
  },
  computed:{
    title(){
      // console.log(this.$route.meta.title)
      return this.$route.meta.title
    },
    isshow(){
      if(this.$route.name === 'myapp' || this.$route.name === 'sayEarly'||this.$route.name ==='home'){
        return true
      }else {
        return false
      }
    }
  }
}
</script>

<style>
  .container{
    padding-top: 0.88rem;
    padding-bottom: 0.98rem;
  }
  .mint-header{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 0.88rem;
    z-index: 998;
    background: #c50206;
    margin: auto;
    line-height: 0.88rem;
  }
  .mint-header-title {
    height: 0.88rem;
    font-size: 16px;
    font-weight: 400;
  }
  .mint-header-button{
    height: 100%;
  }
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
    color:#666;
  }

</style>
