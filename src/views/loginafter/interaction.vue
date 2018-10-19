<template>

</template>

<script>
    export default {
        name: "interaction",
      data(){
          return {
            pn:1,
            size:10,
            cates:0,
            formdata:{}
          }
      },
      methods:{
          getdata(){
            this.$axios.get(`/hhdj/forum/forumList.do?page=${this.pn}&rows=${this.size}&type=0&cates=${this.cates}`)
          }
      }
    }
</script>

<style scoped>

</style>
