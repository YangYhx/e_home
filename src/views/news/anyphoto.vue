<template>
    <div class="container">
      <div class="wrap">
        <router-link  v-for="(item,index) in newlist" :key="index" class="photo-item" :to="{path:'/newdetail',query:{id:item.newsId}}">
          <div class="photo-img">
            <img :src="item.pic" alt="">
          </div>
          <div class="photo-title">
            {{item.title}}
          </div>
        </router-link>
        <div class="photo-item"></div>
        <div class="loading" v-if="isshow"><img src="../../../static/images/Spin-1s-200px.gif" alt=""></div>
        <div class="Nothing" v-else>没有更多了</div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "anyphoto",
      data(){
        return {
          pn:1,
          size:10,
          type:7,
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

  .wrap{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .photo-item{
      height:3.2rem;
      width: 2.6rem;
      font-size: 14px;
      font-weight: 400;
      text-align: center;
      display: flex;
      flex-direction: column;
      padding: 0.4rem;


      .photo-img{
        height: 2.5rem;
        width: 2.5rem;
      }
      img{
        width: 100%;
        height: 100%;
      }

      .photo-title{
        height: 1rem;
        word-break: break-all;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
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
