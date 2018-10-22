<template>
    <div class="container">
      <div class="img-card">
        <img src="/static/images/timg.jpg" alt="">
      </div>
      <div class="item-wrap">
        <router-link to="/study" class="item">
          <div class="itemImg">
            <img src="../../../static/images/icon1.png" alt="">
          </div>
          <div class="itemTitle">
            政治学习
          </div>
        </router-link>
        <router-link to="#" class="item">
          <div class="itemImg">
            <img src="../../../static/images/icon2.png" alt="">
          </div>
          <div class="itemTitle">
            思想汇报
          </div>
        </router-link>
        <router-link to="#" class="item">
          <div class="itemImg">
            <img src="../../../static/images/icon3.png" alt="">
          </div>
          <div class="itemTitle">
            心得总结
          </div>
        </router-link>
        <router-link to="#" class="item">
          <div class="itemImg">
            <img src="../../../static/images/icon4.png" alt="">
          </div>
          <div class="itemTitle">
            民主评议
          </div>
        </router-link>
        <router-link to="/findorg" class="item">
          <div class="itemImg">
            <img src="../../../static/images/icon5.png" alt="">
          </div>
          <div class="itemTitle">
            流动党员找组织
          </div>
        </router-link>
        <div class="item"></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "life"
    }
</script>

<style scoped lang="less">

  .img-card{
    height: 3.72rem;

    img{
      width: 100%;
      height: 100%;
    }
  }
  .item-wrap{
    height: 6.2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .item{
      width: 2rem;
      height: 2.9rem;
      text-align: center;
      margin-top: 0.3rem;

      .itemImg{
        width: 2rem;
        height: 2rem;


        img{
          width: 1.8rem;
          height: 1.8rem;
          margin: 0.2rem auto;
        }
      }


      .itemTitle{
        margin-top: 0.3rem;
        font-size: 14px;
        color: #666;
      }

    }

  }

</style>
