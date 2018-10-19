<template>
  <div class="navbar">


    <router-link to="/">
      <div class="navitem" :class="{navitemactive : $route.name === 'home'}">
        <div class="nav-img1" :class="{navimg1active : $route.name === 'home'}">
          <!--<img class="img" src="../../static/images/党_grey.png" alt="">-->
        </div>
        <div class="nav-title">
          <span>首页</span>
        </div>
      </div>
    </router-link>
    <router-link to="/sayEarly">
      <div class="navitem" :class="{navitemactive : $route.name === 'sayEarly'}">
        <div class="nav-img2" :class="{navimg2active : $route.name === 'sayEarly'}">
          <!--<img class="img" src="../../static/images/消息_grey.png" alt="">-->
        </div>
        <div class="nav-title">
          <span>通知早知道</span>
        </div>
      </div>
    </router-link>

    <router-link to="/myapp">
      <div class="navitem"  :class="{navitemactive : $route.name === 'myapp'}">
        <div class="nav-img3"  :class="{navimg3active : $route.name === 'myapp'}">
          <!--<img class="img" src="../../static/images/会员_grey.png" alt="">-->
        </div>
        <div class="nav-title">
          <span>我的党建</span>
        </div>
      </div>
    </router-link>



  </div>

</template>

<script>
    export default {
        name: "tabar"
    }
</script>

<style scoped>
  .navbar{
    height: 0.98rem;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    background: url("../../static/images/底部bg.png") no-repeat;
    background-size: 100% 100%;
    font-size: 14px;
  }
 .navitem{
    height: 0.98rem;
    width: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: gray;
    border: none;
   font-size: 12px;
  }
  .navitemactive{
    height: 0.98rem;
    width: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    color: red;
    border-top: 1px solid red;

  }
  .nav-img1{
    margin-top: 5px;
    height: 0.48rem;
    width: 0.4rem;
    background: url("../../static/images/党_grey.png") no-repeat;
    background-size: 100%;
  }
  .nav-img2{
    margin-top: 5px;
    height: 0.48rem;
    width: 0.4rem;
    background: url("../../static/images/消息_grey.png") no-repeat;
    background-size: 100%;
  }
  .nav-img3{
    margin-top: 5px;
    height: 0.48rem;
    width: 0.4rem;
    background: url("../../static/images/会员_grey.png") no-repeat;
    background-size: 100%;
  }
  .navimg1active{
    margin-top: 5px;
    height: 0.48rem;
    width: 0.4rem;
    background: url("../../static/images/党_red.png") no-repeat;
    background-size: 100%;
  }
  .navimg2active{
    margin-top: 5px;
    height: 0.48rem;
    width: 0.4rem;
    background: url("../../static/images/消息_red.png") no-repeat;
    background-size: 100%;
  }
  .navimg3active{
    margin-top: 5px;
    height: 0.48rem;
    width: 0.4rem;
    background: url("../../static/images/会员_red.png") no-repeat;
    background-size: 100%;
  }
  .nav-title{
    height: 0.28rem;
    line-height: 0.28rem;
    border: none;

  }
</style>
