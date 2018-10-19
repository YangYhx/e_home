<template>
  <div class="container">

    <div class="info-content">
      <div class="info-list">
        <div class="left">头像</div>
        <div class="reight"><img :src="this.infodata.header"></div>
      </div>
      <div class="info-list">
        <div class="left">姓名</div>

        <div class="reight">{{infodata.username}}</div>
      </div>
      <div class="info-list">
        <div class="left">身份证</div>
        <div class="reight">{{infodata.idCard}}</div>
      </div>
      <div class="info-list">
        <div class="left">家庭住址</div>

        <div class="reight">{{infodata.hometown}}</div>
      </div>
      <div class="info-list">
        <div class="left">工作地址</div>

        <div class="reight">{{infodata.address}}</div>
      </div>
      <div class="info-list">
        <div class="left">民族</div>
        <div></div>
        <div class="reight">{{infodata.nation}}</div>
      </div>
      <div class="info-list">
        <div class="left">微信号</div>

        <div class="reight">{{infodata.wxNum}}</div>
      </div>
      <div class="info-list">
        <div class="left">qq号</div>

        <div class="reight">{{infodata.qqNum}}</div>
      </div>
      <div class="info-list">
        <div class="left">性别</div>
        <div class="reight">{{infodata.sex == 1 ? '男' : '女'}}</div>
      </div>
      <div class="info-list">
        <div class="left">最高学历</div>
        <div></div>
        <div class="reight">{{infodata.education}}</div>
      </div>
      <div class="info-list">
        <div class="left">职称</div>

        <div class="reight">{{infodata.jobRank}}</div>
      </div>
      <div class="info-list">
        <div class="left">薪资水平</div>
        <div class="reight">{{infodata.salary}}</div>
      </div>
      <div class="info-list">
        <div class="left">入党时间</div>
        <div class="reight">{{infodata.joinPartyTime}}</div>
      </div>
      <div class="info-list">
        <div class="left">党费最后缴纳时间</div>
        <div class="reight">{{infodata.lastPayTime}}</div>
      </div>
      <div class="info-list">
        <div class="left">当前身份</div>
        <div class="reight">{{infodata.partyIdentity}}</div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "personinfo",
      data(){
          return {
            infodata:{},
            token:''
          }
      },
      methods:{
          getdata(){
            this.$axios.get('/hhdj/user/userInfo.do').then( res => {
              if(res.data.code === 1){
                this.infodata = res.data.data
              }
            })
          }
      },
      created(){
        this.token = this.$store.state.token;
        this.getdata()
      }
    }
</script>

<style scoped lang="less">
  .info-content{
    height: auto;
    .info-list{
      height: 0.56rem;
      line-height: 0.5rem;
      padding: 10px;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;

      .left{
        height: 0.56rem;
        width: 3.5rem;
        font-size: 14px;
        font-weight: 400;
      }

      .reight{
        height: 0.56rem;
        width: 3.5rem;
        font-size: 14px;
        font-weight: 400;
        line-height: 0.56rem;
        text-align: right;
        img{
          width: 0.5rem;
          height: 0.5rem;
        }
      }
    }
  }

</style>
