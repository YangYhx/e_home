<template>
  <div>


  <mt-header :title="title">
    <mt-button icon="back" slot="left" @click="$router.back()"></mt-button>
    <mt-button slot="right" @click="hendleSave"> 保存</mt-button>
  </mt-header>
    <div class="container">
      <div class="info-content">
        <div class="info-list">
          <div class="left">头像</div>
          <div class="reight">
            <upimg v-model="infodata.header" class="updata-img"></upimg>
          </div>
        </div>
        <div class="info-list">
          <div class="left">姓名</div>

          <div class="reight"><input type="text" v-model="infodata.username"></div>
        </div>
        <div class="info-list">
          <div class="left">身份证</div>
          <div class="reight">{{infodata.idCard}}</div>
        </div>
        <div class="info-list">
          <div class="left">家庭住址</div>

          <div class="reight"><input type="text" v-model="infodata.hometown"></div>
        </div>
        <div class="info-list">
          <div class="left">工作地址</div>

          <div class="reight"><input type="text" v-model="infodata.address"></div>
        </div>
        <div class="info-list">
          <div class="left">民族</div>
          <div></div>
          <div class="reight"><input type="text" v-model="infodata.nation"></div>
        </div>
        <div class="info-list">
          <div class="left">微信号</div>

          <div class="reight"><input type="text" v-model="infodata.wxNum"></div>
        </div>
        <div class="info-list">
          <div class="left">qq号</div>

          <div class="reight"><input type="text" v-model="infodata.qqNum"></div>
        </div>
        <div class="info-list">
          <div class="left">性别</div>
          <div class="reight">
            <input type="radio" v-model="infodata.sex" name="sex" value="1" checked="checked">男
            <input type="radio" v-model="infodata.sex" name="sex" value="2">女
          </div>
        </div>
        <div class="info-list">
          <div class="left">最高学历</div>
          <div></div>
          <div class="reight"><input type="text" v-model="infodata.education"></div>
        </div>
        <div class="info-list">
          <div class="left">职称</div>

          <div class="reight"><input type="text" v-model="infodata.jobRank"></div>
        </div>
        <div class="info-list">
          <div class="left">薪资水平</div>
          <div class="reight"><input type="text" v-model="infodata.salary"></div>
        </div>
        <div class="info-list">
          <div class="left">入党时间</div>
          <div class="reight">
            <div @click="openPicker">
              <input type="date" v-model="infodata.joinPartyTime">
            </div>
          </div>
        </div>
        <div class="info-list">
          <div class="left">党费最后缴纳时间</div>
          <div class="reight"><input type="date" v-model="infodata.lastPayTime"></div>
        </div>
        <div class="info-list">
          <div class="left">当前身份</div>
          <div class="reight"><input type="text" v-model="infodata.partyStatus"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import upimg from '@/components/upImg'
  import Vue from 'vue'
  import { Header,DatetimePicker } from 'mint-ui';

  Vue.component(DatetimePicker.name, DatetimePicker);
  Vue.component(Header.name, Header);
    export default {
        name: "Editinfo",
      components:{
        upimg
      },
      data(){
          return {
            infodata:{
              username:'',
              hometown: '',
              address: '',
              nation: '',
              wxNum: '',
              qqNum: '',
              sex: '',
              education: '',
              jobRank: '',
              salary: '',
              joinPartyTime: '',
              lastPayTime: '',
              partyStatus: '',
              header:'',
              idCard:''
            }
          }
      },
      methods:{
        getdata(){
          this.$axios.get('/hhdj/user/userInfo.do').then( res => {
            if(res.data.code === 1){
              this.infodata = res.data.data
            }
          })
        },
        hendleSave(){
          let formdata = new FormData()
          formdata.append('username',this.infodata.username)
          formdata.append('hometown',this.infodata.hometown)
          formdata.append('address',this.infodata.address)
          formdata.append('nation',this.infodata.nation)
          formdata.append('wxNum',this.infodata.wxNum)
          formdata.append('qqNum',this.infodata.qqNum)
          formdata.append('sex',this.infodata.sex)
          formdata.append('education',this.infodata.education)
          formdata.append('jobRank',this.infodata.jobRank)
          formdata.append('salary',this.infodata.salary)
          formdata.append('joinPartyTime',this.infodata.joinPartyTime)
          formdata.append('lastPayTime',this.infodata.lastPayTime)
          formdata.append('partyStatus',this.infodata.partyStatus)
          formdata.append('header',this.$store.state.header)
          console.log(formdata)
            this.$axios.post('/hhdj/user/modifyInfo.do',formdata).then( res => {
              console.log(res)
              if(res.code === 1){
                this.$router.push('/personinfo')
              }
            })
          },
        openPicker() {
          this.$refs.picker.open();
        }
      },
      created(){
          this.getdata()
      },
      computed:{
        title(){
          return this.$route.meta.title
        },
        header(){
          return this.$store.state.header
        }
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
        input{
          border:none;
          outline: none;
          text-align: right;
          height: 0.56rem;
          line-height: 0.56rem;
          width: auto;
        }

        .updata-img{
          height: 0.56rem;
          width: 100%;
          margin-right: 0px;

        }
      }
    }
  }
</style>
