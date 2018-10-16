<template>
    <div>
      <div class="header">
        我的党建
      </div>
      <div class="avactor-wrap">
        <router-link to="#">
          <div class="tuxiang">
            <img src="../../../static/images/pass.png" alt="">
          </div>
          <span class="avactor-title">您还没有登录，请登录</span>
        </router-link>
      </div>

      <div class="list-wrap">
        <div class="list-content">
          <div class="list-left">
            <img src="" alt="">
          </div>
          <div class="list-right">
            <div class="title">

            </div>
            <div class="jiantou">

            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="less">
  .header{
    width: 100%;
    height: 0.88rem;
    font-size: 18px;
    color: #fff;
    line-height: 1rem;
    background: red;
    text-align: center;

  }
  .avactor-wrap{
    height: 3.75rem;
    background: red;
    text-align: center;

    .tuxiang{
      height: 1.5rem;
      width: 1.5rem;
      margin:auto;
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: -20px;


      img{
        width: 100%;
        height: 100%;

      }
    }
    .avactor-title{
      font-size: 12px;
      color: #fff;
    }
  }

</style>
