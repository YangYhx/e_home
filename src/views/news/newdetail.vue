<template>
    <div class="container">
      <div class="new-wrap">
        <div class="newtitle">
          {{data.title}}
        </div>
        <div class="newcontent" v-html="data.content">
          {{data.content}}
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "newdetail",
      data(){
          return {
            data:{}
          }
      },

      methods:{
          getdata(){
            let id = this.$route.query.id;
            this.$axios.get(`/hhdj/news/newsContent.do?newsId=${id}`).then( res => {
              console.log( res )
              if( res.data.code === 1){
                this.data = res.data.data
              }
            })
          }
      },
      created(){
          this.getdata()
      }
    }
</script>

<style scoped>
  .new-wrap{
    padding: 0.2rem;
  }

  .newtitle{
    height: 2rem;
    font-size:24px;
    line-height: 1.5;
    font-weight: 400;
  }

  .newcontent{
    font-size: 12px;
    font-weight: 400;
  }
  .newcontent >>> p{
    height: auto;
    line-height: 2;
  }
  .newcontent >>> img{
    width: 100%;
    height: 100%;
  }
  .newcontent >>> span{
    height: auto;
    font-size: 16px;
    font-weight: 400;
    line-height: 2;
  }
  .newcontent >>> h1,.newcontent >>> h2,.newcontent >>> h3,.newcontent >>> h4,.newcontent >>> h5{
    height: auto;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  }
</style>
