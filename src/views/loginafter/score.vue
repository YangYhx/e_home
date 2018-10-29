<template>
    <div class="container">
      <div class="score">
        界面就不渲染了，分数为 {{score}},下面是一个跳转


      </div>
      <router-link to="/scoredetail">
        <div class="list-content">
          <div class="list-left">
            <img src="/static/images/lxjf.png">
          </div>
          <div class="list-right">
            <div class="list-title">
              积分明细
            </div>
            <div class="jiantou">
              <img src="/static/images/形状-7-拷贝-5.png" alt="">
            </div>
          </div>
        </div>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "score",
      data(){
          return {
            pn:1,
            score:''
          }
      },
      methods:{
          getdata(){
            this.$axios.get('/hhdj/user/userInfo.do').then( res => {
              if(res.data.code === 1){
                this.score = res.data.data.totalScore
                console.log(this.score)
              }
            })
          }
      },
      created(){
          this.getdata()
      }
    }
</script>

<style scoped lang="less">

  .score{
    height: 3rem;
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    background: #363636;
  }
    .list-content{
      display: flex;
      height: 1rem;
      width: 100%;
      line-height: 1rem;
      font-size: 16px;
      color: gray;
      border-bottom: 1px solid rgb(221,221,221);


      .list-left{
        width: 1rem;
        height: 1rem;

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


</style>
