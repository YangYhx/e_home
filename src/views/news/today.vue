<template>
    <div class="container">
      <div class="content" v-html="data">
          {{data}}
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "today",
      data(){
          return {
            data:''

          }
      },
      methods:{
          getdata(){
            axios.get('http://211.67.177.56:8080/hhdj/proxy/proxy.do?url=http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70503%2Findex.html')
              .then( res => {
                console.log(res.data)
                console.log( typeof (res.data))
                this.data=res.data
              })
          }
      },
      created(){
          this.getdata()
      }
    }
</script>

<style scoped>
  .content{
    height: 12.5rem;
    font-size: 16px;
    line-height: 1.5;
    padding: 0.2rem;

  }
  .content >>> p{
    height: auto;
    line-height: 2;
  }
  .content >>> span{
    height: auto;
    font-size: 16px;
    font-weight: 400;
    line-height: 2;
  }
  .content >>> h1,.content >>> h2,.content >>> h3,.content >>> h4,.content >>> h5{
    height: auto;

  }
  .content >>> h4{
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  }



  .content >>> div{
    height: auto;
  }

  .content >>> .top01,.content >>> .top02,.content >>> .top03,.content >>> .p1_01{
    display: none;
  }


</style>
