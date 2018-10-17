<template>
    <div class="container">

      <div class="avactor-wrap">
        <router-link to="/login">
          <div class="tuxiang">
            <img src="../../../static/images/yuan.png" alt="">
          </div>
          <span class="avactor-title">您还没有登录，请登录</span>
        </router-link>
      </div>

      <div class="list-wrap">
        <router-link to="#">
          <div class="list-content">

            <div class="list-left">
              <img src="../../../static/images/person.png">
            </div>
            <div class="list-right">
              <div class="list-title">
                个人信息
              </div>
              <div class="jiantou">
                <img src="../../../static/images/形状-7-拷贝-5.png" alt="">
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="#">
          <div class="list-content">
            <div class="list-left">
              <img src="../../../static/images/lxjf.png">
            </div>
            <div class="list-right">
              <div class="list-title">
                个人量化积分
              </div>
              <div class="jiantou">
                <img src="../../../static/images/形状-7-拷贝-5.png" alt="">
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="#">
          <div class="list-content">

            <div class="list-left">
              <img src="../../../static/images/xgmm.png">
            </div>
            <div class="list-right">
              <div class="list-title">
                修改密码
              </div>
              <div class="jiantou">
                <img src="../../../static/images/形状-7-拷贝-5.png" alt="">
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="#">
          <div class="list-content">

            <div class="list-left">
              <img src="../../../static/images/icon3.png">
            </div>
            <div class="list-right">
              <div class="list-title">
                党费缴纳
              </div>
              <div class="jiantou">
                <img src="../../../static/images/形状-7-拷贝-5.png" alt="">
              </div>
            </div>
          </div>
        </router-link>

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
    background: #c50206;
    text-align: center;

  }
  .avactor-wrap{
    height: 2.8rem;
    background: #c50206;
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

  .list-wrap{
    .list-content{
      display: flex;
      height: 1rem;
      line-height: 1rem;
      font-size: 16px;
      color: gray;
      border-bottom: 1px solid rgb(221,221,221);


      .list-left{
        width: 1.08rem;
        height: 1.08rem;

        img{
          width: 0.64rem;
          height: 0.64rem;
          margin: 0.2rem;
        }
      }
      .list-right{
        height: 0.4rem;
        width: 6rem;
        display: flex;
        justify-content: space-between;
        .list-title{
          height: 0.4rem;
        }
        .jiantou{
          width: 0.17rem;
          height: 0.3rem;

          img{
            width: 100%;
            height: 100%;
          }
        }
      }

    }

  }

</style>
