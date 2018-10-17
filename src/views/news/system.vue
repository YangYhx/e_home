<template>
  <div class="container">

    <div class="content">
      <router-link  v-for="(item,index) in newdata" :key="index" class="newlist" :to="{path:'/newdetail',query:{id:item.newsId}}">
        <div class="listleft">
          <img :src="item.pic">
        </div>
        <div class="listright">
          <div class="title">
            {{item.title}}
          </div>
          <div class="time">
            {{item.currentTime}}
          </div>
        </div>

      </router-link>
    </div>

    <div class="loading" v-if="isshow"><img src="../../../static/images/Spin-1s-200px.gif"></div>
    <div class="Nothing" v-else>没有更多了</div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Header } from 'mint-ui';

  Vue.component(Header.name, Header);
  export default {
    name: "index",
    components:{
    },
    data(){
      return {
        newdata:[],
        isshow:true
      }
    },
    methods:{
      getNewdata(){
        this.$axios.get('/hhdj/news/newsList.do?page=1&rows=10&type=4').then( res => {
          console.log(res)
          if(res.data.code === 1){
            this.newdata = res.data.rows
            this.isshow = false
          }
        }).catch(err => {
          this.isshow = true
        })
      }
    },
    created(){
      this.getNewdata()
    }
  }
</script>

<style scoped lang="less">


  .content{
    height: auto;
  }
  .newlist{
    width: 100%;
    height: 1.4rem;
    display: flex;
    justify-content: flex-start;
    font-size: 14px;
    color: #333333;
    padding: 0.4rem;
    border-bottom: 1px solid rgb(221,221,221);

    .listleft{
      width:1.4rem;
      height: 1.4rem;
      text-align: center;

      img{
        width: 100%;
        height: 100%;
      }
    }
    .listright{
      width: 5rem;
      height: 1.4rem;
      line-height: 1.5;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 0.1rem;

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
  .Nothing{
    margin-top: 0.8rem;
    height: 1rem;
    font-size: 14px;
    font-weight: 400;
    color: #666;
    text-align: center;
  }
  .loading{
    height: 1rem;
    text-align: center;

    img{
      height: 1rem;
      width: 1rem;
      margin: 0 auto;
    }
  }

</style>
