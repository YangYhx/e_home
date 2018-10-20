<template>
  <div class="container">
    <div ref="scroll" class="r-scroll">
      <router-link  class="new-list" v-for="(item,index) in newlist" :key="index" :to="{path:'/newdetail',query:{id:item.newsId}}">
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
      </router-link>
    </div>
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
        type:0,
        newlist:[],
        isshow:false,
        scroll:null,
        scrollWrap:null
      }
    },
    methods:{
      getdata(){
        this.$axios.get(`/hhdj/news/newsList.do?page=${this.pn}&rows=${this.size}&type=${this.type}`)
          .then( res => {
            console.log(res)
            if(res.data.code === 1){
              this.newlist = this.newlist.concat(res.data.rows)
              this.pn = this.pn + 1
              if(this.newlist.length >= res.data.total){
                this.isshow = false
                window.removeEventListener('scroll', this.scrollBottom)
              }
              console.log(this.newlist.length)
              console.log(this.pn)
            }
          })
      },
      scrollBottom(){
        //变量scrollTop是滚动条滚动时，距离顶部的距离
        let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
        //变量windowHeight是可视区的高度
        let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
        //变量scrollHeight是滚动条的总高度
        let scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
        //滚动条到底部的条件
        if(scrollTop+windowHeight==scrollHeight){
          //写后台加载数据的函数
          this.getdata();
        }
      }
    },
    created(){
      this.getdata();
    },
    mounted(){
      this.isshow = true
      window.addEventListener('scroll', this.scrollBottom)
    }
  }
</script>

<style scoped lang="less">

  .r-scroll{
    height: auto;
  }

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
    text-align: center;
    padding-top: 10px;
  }
  .loading{
    height: 1rem;
    text-align: center;

    img{
      height: 1rem;
      width: 1rem;
    }
  }
</style>
