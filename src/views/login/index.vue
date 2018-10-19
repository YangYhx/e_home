<template>
    <div class="container">
      <div>
        <div class="logo">
          <img src="../../../static/images/logo.png" alt="">
        </div>
        <div class="info-wrap">
          <form @submit.prevent class="form">
            <input type="text" placeholder="身份证号" v-model="formdata.id_card">
            <input type="password" placeholder="密码" v-model="formdata.password">
            <button class="submit" @click="login">登录</button>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return {
            formdata:{
              id_card:'',
              password:''
            }
          }
      },
      methods:{
        login(){
            console.log(this.formdata)
          let formdata = new FormData()
          formdata.append('id_card',this.formdata.id_card)
          formdata.append('password',this.formdata.password)
          this.$axios.post('/hhdj/user/userLogin.do',formdata).then( res => {
              if(res.code === 1){
                this.$store.commit('ADD_TOKEN',res.token)
                this.$router.push('/myapp')
              }
            })
          }
      }
    }
</script>

<style scoped lang="less">
  .container{
    background: #c50206;
    width: 100vw;
    height: 100vh;
  }

  .logo{
    height: 0.98rem;
    width: 4.1rem;
    margin: 0.5rem auto;

    img{
      width: 100%;
      height: 100%;
    }
  }

  .info-wrap{
    height: 4.75rem;
    width: 5rem;
    margin: 0.4rem auto;
    text-align: center;


    input{
      height: 0.8rem;
      width: 5rem;
      background: #c50206;
      border: 1px solid #ff0;
    }
    input::-webkit-input-placeholder { /* WebKit browsers */
      color: white;
    }
    input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      color: white;
    }
    input::-moz-placeholder { /* Mozilla Firefox 19+ */
      color: white;
    }
    input:-ms-input-placeholder { /* Internet Explorer 10+ */
      color: white;
    }

    .submit{
      margin-top: 1rem;
      font-size: 16px;
      font-weight: 400;
      height: 0.8rem;
      line-height: 0.8rem;
      width: 100%;
      background: #e3574f;
      color: #fff;
      border-radius: 5px;
    }
  }

</style>
