<template>
    <div class="container">
      <div class="header">
        <div class="logo"></div>
        <router-link :to="!isshow ? '/login' : '#'">
          <div class="login" v-bind:hidden="isshow">
            登录
          </div>
        </router-link>
      </div>

        <div class="swiper-container">

          <mt-swipe :auto="4000" :showIndicators="true">
              <mt-swipe-item v-for="item in swiperImgs" :key="item.id">
                <router-link :to="{path:'/newdetail',query:{id:item.url}}">
                <div class="wrap">
                  <img :src="item.imgUrl" style="width: 100%;height: 100%;">
                  <div class="swiper_title">
                    {{item.title}}
                  </div>
                </div>
                </router-link>
              </mt-swipe-item>
          </mt-swipe>

        </div>



      <div class="contant-img">

       <div class="row">
         <router-link to="/neweye">
           <div class="imgs-component">
             <img class="img" src="../../../static/images/icon_01.png">
             <div class="imgs-title">信工新闻眼</div>
           </div>
         </router-link>
         <router-link to="/life">
           <div class="imgs-component">
             <img class="img" src="../../../static/images/icon_02.png" alt="">
             <div class="imgs-title">掌上组织生活</div>
           </div>
         </router-link>
         <router-link :to="isshow ?  '/interaction' : '#'">
           <div class="imgs-component">
             <img class="img" src="../../../static/images/icon_03.png" alt="">
             <div class="imgs-title">党员云互动</div>
           </div>
         </router-link>
       </div>

        <div class="row">
          <router-link to="/onechack">
            <div class="imgs-component">
              <img class="img" src="../../../static/images/icon_04.png" alt="">
              <div class="imgs-title">党建一点通</div>
            </div>
          </router-link>
          <router-link to="/showidentity">
            <div class="imgs-component">
              <img class="img" src="../../../static/images/icon_05.png" alt="">
              <div class="imgs-title">党员亮身份</div>
            </div>
          </router-link>
          <router-link to="/today">
            <div class="imgs-component">
              <img class="img" src="../../../static/images/icon_06.png" alt="">
              <div class="imgs-title">党史上的今天</div>
            </div>
          </router-link>
        </div>
      </div>

      <div class="banner1">
        <img src="../../../static/images/banner01.png" alt="">
      </div>

      <div class="tese clearfix">
        <div class="sell">
          <div>
            <router-link to="#"></router-link>
          </div>
        </div>
        <div class="sell two">
            <router-link to="/anystudy"  class="sell_small">
            </router-link>

            <router-link to="/system"  class="sell_small">
            </router-link>

        </div>
        <div class="sell two">
            <router-link to="/anyphoto"  class="sell_small">
            </router-link>
            <router-link to="/activity" class="sell_small">
            </router-link>

        </div>

      </div>


    </div>
</template>

<script>
  // import tabar from '../../components/tabar'
  import Vue from 'vue'
  import { Swipe, SwipeItem } from 'mint-ui';

  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
  export default {
        name: "home",
      data(){
          return {
            swiperImgs:[],
          }
      },
      methods:{
          getImgs(){
            this.$axios.get('/hhdj/carousel/carouselList.do?type=0').then( res => {
              if( res.data.code === 1){
                this.swiperImgs = res.data.rows
                console.log(this.swiperImgs)
              }
            })
          }

      },
    mounted(){
      this.getImgs();
    },
    computed:{
          isshow(){
            return this.$store.state.token

          }
    }
  }
</script>
<style scoped lang="less">
  a {
    text-decoration: none;
  }
  .container{
    .header{
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      display: flex;
      justify-content: space-between;
      height: 0.88rem;
      width: 100%;
      line-height: 0.88rem;
      background: #c50206;
      z-index: 999;

      .logo{
        background: url("../../../static/images/logo.png") no-repeat;
        width: 2.9rem;
        height: 0.88rem;
        background-size: 100%;
      }

      .login{
        color: #fff;
        text-align: center;
        width: 0.88rem;
        height: 0.88rem;
        font-size: 14px;
      }
    }
    .swiper-container{
      height: 3.75rem;

      .wrap{
        position: relative;
        height: 100%;
        color: #fff;
      }

      .swiper_title{
        position: absolute;
        bottom: 0;
        right: 0;
        height: 0.4rem;
        width: 100%;
        background: #000000;
        opacity: 0.4;
        font-size: 12px;

      }
    }

    .contant-img{
      height: 3.94rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      background-image: url('../../../static/images/bt_bg.png');
      background-size:100% 200px ;


      .row{
        display: flex;
        justify-content: space-around;
        height: 1.97rem;
        margin-top: 0.2rem;

        .imgs-component{
          width: 2.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;


          img{
            width: 1rem;
            height: 1rem;
          }

          .imgs-title{
            height: 1rem;
            font-size: 14px;
            color: gray;
          }

      }


      }
    }

    .banner1{
      height: 90px;
      width: 100%;

      img{
        width: 100%;
        height: 100%;
      }
    }

    .tese{
      width: 100%;
      height: 165px;
      background:url("../../../static/images/tese.png") no-repeat;
      background-size: 100% 100%;
      display:flex;
      justify-content: flex-start;
      margin-bottom: 1rem;


      .sell{
        width: 125px;
        height: 165px;
      }

      .two{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .sell_small{
        width: 125px;
        height: 50%;
      }
    }
  }

</style>
