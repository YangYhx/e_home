<template>
    <div class="container">
      <div class="list-wrap">
        <div class="list-item" v-for="(item,index) in listdata" :key="index">
          <div class="left">
            <div class="title">{{item.typeName}}</div>
            <div class="time">{{item.timeFormat}}</div>
          </div>
          <div class="reight">
            <div class="list-score">+{{item.singleDesc}}</div>
          </div>

        </div>

      </div>

    </div>
</template>

<script>
    export default {
        name: "scoredetail",
      data(){
          return {
            listdata:[],
            pn:1
          }
      },
      methods:{
          getdata(){
            this.$axios.get(`/hhdj/integral/integralList.do?page=${this.pn}&rows=10`).then( res => {
              console.log(res)
              if( res.data.code === 1){
                this.listdata = res.data.rows
                this.listdata = [...this.listdata,...res.data.rows]
                this.pn += 1
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
.list-wrap{
  height: auto;


  .list-item{
    height: 1rem;
    display: flex;
    padding: 10px;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;


    .left{
      .title{
        height: 0.5rem;
        font-size: 16px;
      }
      .time{
        font-size: 14px;
        color: gray;
      }
    }

    .reight{
      font-size: 16px;
      color: red;
      text-align: center;
    }
  }
}
</style>
