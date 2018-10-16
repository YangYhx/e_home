<template>
    <div>
      <div class="header">
          要闻早知道
      </div>
      <div class="content">
        <div v-if="isshow"><img src="../../../static/images/Spin-1s-200px.gif" alt=""></div>
        <router-link to="/"  v-for="(item,index) in newdata" :key="index" v-else>
          <div class="newlist">
            <div class="listleft">
              <img src="../../../static/images/iconfont_gonggaotongzhi.png">
            </div>
            <div class="listright">
              <div class="title">
                {{item.title}}
              </div>
              <div class="time">
                {{item.currentTime}}
              </div>
            </div>
          </div>
        </router-link>
        <div class="nothing">
          没有更多信息了
        </div>

      </div>
      <tabar></tabar>
    </div>
</template>

<script>
  import Vue from 'vue'
  import { Header } from 'mint-ui';

  Vue.component(Header.name, Header);
  import tabar from '../../components/tabar'
    export default {
        name: "index",
      components:{
          tabar
      },
      data(){
          return {
            newdata:[],
            isshow:true
          }
      },
      methods:{
          getNewdata(){
            this.$axios.get('/hhdj/news/newsList.do?page=1&rows=10&type=2').then( res => {
              if(res.data.code === 1){
                this.newdata = res.data.rows
                this.isshow = false
                console.log(this.newdata)
              }
            })
          }
      },
      created(){
          this.getNewdata()
      }
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

  .newlist{
    width: 100%;
    height: 1.4rem;
    display: flex;
    justify-content: flex-start;
    font-size: 14px;
    color: #333333;
    padding-bottom: 20px;
    padding-top: 20px;
    border-bottom: 1px solid #676767;

    .listleft{
      width:1.4rem;
      height: 1.4rem;
      text-align: center;

      img{
        width: 0.6rem;
        height: 0.6rem;
      }
    }
    .listright{
      width: 5rem;
      height: 1.4rem;
      line-height: 1.5;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .title{
        height: 1rem;
        width: 5rem;
      }
      .time{
        height: 0.4rem;
        width: 4rem;
      }
    }
  }
  .nothing{
    margin: 20px auto;
    text-align: center;
    color: #676767;
    font-size: 14px;
  }

</style>
