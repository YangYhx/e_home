<template>
  <div class="container">
    <router-link   v-for="(item,index) in newlist" :key="index" :to="{path:'/newdetail',query:{id:item.newsId}}">
      <div class="new-list">
        <div class="new-img">
          <img :src="item.pic" alt="">
        </div>
        <div class="new-r">
          <div class="new-title">
            {{item.title}}
          </div>
          <div class="new-time">
            <div>
              {{item.currentTime}}
            </div>
            <div class="eye">
              <img src="../../../static/images/12-eye.png">
              {{item.count}}
            </div>
          </div>
        </div>
      </div>
    </router-link>
    <div class="loading" v-if="isshow"><img src="../../../static/images/Spin-1s-200px.gif" alt=""></div>
    <div class="Nothing" v-else>没有更多了</div>
  </div>
</template>

<script>
  export default {
    name: "neweye",
    data(){
      return {
        pn:1,
        size:10,
        type:1,
        newlist:[],
        isshow:false
      }
    },
    methods:{
      getdata(){
        this.$axios.get(`/hhdj/news/newsList.do?page=${this.pn}&rows=${this.size}&type=${this.type}`)
          .then( res => {
            console.log(res)
            if(res.data.code === 1){
              this.newlist = res.data.rows
              this.isshow = false
            }
          }).catch(err => {
          this.isshow = true
        })
      }
    },
    created(){
      this.getdata()
    }
  }
</script>

<style scoped lang="less">
  .new-list{
    height: 2rem;
    padding: 0.2rem;
    display: flex;
    border-bottom: 1px solid #ddd;


    .new-img{
      height: 2rem;
      width: 2rem;

      img{
        width: 100%;
        height: 100%;
      }
    }
    .new-r{
      height: 2rem;
      width: 5rem;
      font-size: 16px;
      color: #000;
      opacity: 0.8;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 0.2rem;
      .new-title{
        height: 1rem;
        line-height: 1.5;
        word-break: break-all;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .new-time{
        height: 0.5rem;
        font-size: 12px;
        display: flex;
        justify-content: space-between;

        .eye{
          img{
            width: 0.3rem;
            height: 0.25rem;
            opacity: 0.6;
          }
        }

      }

    }

  }
  .Nothing{
    height: 1rem;
    font-size: 14px;
    font-weight: 400;
    color: #666;
  }
  .loading{
    height: 1rem;

    img{
      height: 1rem;
      width: 1rem;
    }
  }
</style>
