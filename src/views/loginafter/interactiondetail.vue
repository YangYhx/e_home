<template>
    <div class="container">
      <div class="h_auto">
        <div class="listitem ">
          <div class="item-info">
            <div class="item-img">
              <img :src="infodata.header" alt="">
            </div>
            <div class="userinfo">
              <div class="username">{{infodata.username}}</div>
              <div class="time">{{infodata.currentTime}}</div>
            </div>
          </div>
          <div class="item-content">{{infodata.content}}</div>
        </div>
      </div>
     <div class="comment-wrap">
       <div class="listitem" v-for="(item,index) in commentdata" :key="index">
         <div class="item-info">
           <div class="item-img">
             <img :src="item.header" alt="">
           </div>
           <div class="userinfo">
             <div class="username">{{item.username}}</div>
             <div class="time">{{item.timeFormat}}</div>
           </div>
         </div>
         <div class="item-content">{{item.comment}}</div>
       </div>
     </div>

      <div class="comment_skr">
        <input type="text" class="comment_input" v-model="comment">
        <button class="btn" @click="submit">评论</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "interactiondetail",
      data(){
          return {
            infodata:{},
            commentdata:[],
            id:'',
            comment:''
          }
      },
      methods:{
          getdata(){
            let {id,data } = this.$route.query
            this.id = id
            this.infodata = data
            this.$axios.get(`/hhdj/forum/forumCommentList.do?page=1&rows=10&forum_id=${id}`).then( res => {
              console.log( res )
              if( res.data.code === 1){
                this.commentdata = res.data.rows
              }
            })
          },
        submit(){
            let data = new FormData()
          data.append('forum_id',this.id)
          data.append('comment',this.comment)
            this.$axios.post('/hhdj/forum/addComment.do',data).then( res => {
              console.log(res)
              if(res.code === 1){
                this.commentdata.unshift(res.data)
                this.comment = null
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
  .h_auto{
    height: auto;
  }
  .listitem{
    padding: 10px;
    height: auto;
    background: #fff;
    border: 1px solid #ddd;
    margin: 10px;

    .item-info{
      height:1rem;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;

      .item-img{
        height: 1rem;
        width: 1rem;

        img{
          height: 0.7rem;
          width: 0.7rem;
          margin: 12.5px;
        }

      }
      .userinfo{
        height: 1rem;
        display: flex;
        flex-direction: column;
        width: 5rem;

        .username{
          font-size: 16px;
          line-height: 1.5;
          height: 0.5rem;
        }
        .time{
          font-size: 14px;
          line-height: 1.5;
          color: gray;
          height: 0.5rem;
        }
      }

      .avtivity{
        font-size: 14px;
        font-weight: 400;
        color: red;
        height: 0.3rem;
        padding: 5px;
        line-height: 0.3rem;
        border: 1px solid red;
        border-radius: 15px;
      }
    }

    .item-content{
      height: auto;
      font-size: 14px;
      line-height: 1.5;
      margin-bottom: 10px;
      color: #666;
    }

    .item-reply{
      text-align: right;
      height: 0.4rem;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .comment_skr{
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    height: 0.6rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    padding: 10px;

    .comment_input{
      border: 1px solid red;
      border-radius: 5px;
      width: 6rem;
      height: 0.6rem;
    }

    .btn{
      text-align: center;
      line-height: 0.6rem;
      height: 0.6rem;
      width: 1rem;
      font-size: 12px;
      background: red;
      color: #fff;
    }

  }
</style>
