<template>
  <div class="container">
    <div class="listwrap" >
      <div class="listitem" v-for="(item,index) in formdata" :key="index">
        <div class="item-info">
          <div class="item-img">
            <img :src="item.header" alt="">
          </div>
            <div class="userinfo">
              <div class="username">{{item.username}}</div>
              <div class="time">{{item.currentTime}}</div>
            </div>
          <div class="avtivity">
            党员互动
          </div>
        </div>
        <div class="item-content">{{item.content}}</div>

          <div class="item-reply">
            <router-link :to="{path:'/interactiondetail',query:{id:item.forumId,data:item}}">
            <img src="" alt="">
            回复
            </router-link>
          </div>



      </div>
    </div>
    <div @click="clilkshow" class="hiddenbox" v-if="isshow">

    </div>
    <div class="additem" @click="clilkshow">+</div>
    <div class="addbox" v-if="isshow">
      <div class="submitwrap">
        <div class="textarea">
          <textarea v-model="content" cols="30" rows="10">
        </textarea>
        </div>
        <div class="btn">
          <button class="submitbtn" @click="submit">发布</button>
          <button class="exitbtn" @click="clilkshow">取消</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "interaction",
      data(){
          return {
            pn:1,
            size:10,
            cates:0,
            formdata:[],
            isshow: false,
            content:''
          }
      },
      methods:{
          getdata(){
            this.$axios.get(`/hhdj/forum/forumList.do?page=${this.pn}&rows=${this.size}&type=0&cates=${this.cates}`)
              .then( res => {
              console.log(res)
                if( res.data.code === 1){
                this.formdata = [...this.formdata,...res.data.rows]
                  this.pn += 1
                }
            })
          },
        clilkshow(){
          this.isshow = !this.isshow
            if(this.isshow){
              document.documentElement.style.overflow='hidden'
            }else {
              document.documentElement.style.overflow='visible'
            }
          console.log(this.isshow)
        },
        submit(){
            let data = new FormData()
          data.append('content',this.content)
          data.append('type','1')
            this.$axios.post('/hhdj/forum/saveForum.do',data).then( res => {
              if(res.code === 1){
                this.formdata.unshift(res.data)
              } else if(res.code === 0) {

              }
              this.isshow = false
              document.documentElement.style.overflow='visible'
            })
        }
      },
      created(){
          this.getdata()
      }
    }
</script>

<style scoped lang="less">
  .listwrap{
    height: auto;
    background: #ddd;
    padding-bottom: 10px;
    z-index: 1;

    .listitem{
      padding: 10px;
      height: auto;
      margin-bottom: 10px;
      background: #fff;

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
          margin-left: 10px;
          width: 4rem;

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
  }

  .additem{
    height: 1rem;
    width: 1rem;
    border-radius: 0.5rem;
    background: red;
    color: #fff;
    position: fixed;
    bottom: 20px;
    right: 20px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 1rem;

  }
  .addbox{
    height: 3rem;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 333;
    background: #fff;

    .submitwrap{
      display: flex;
      flex-direction: column;

      .textarea{
        height: 2rem;
        width: 100%;
      }

      textarea{
        border: none;
        outline: none;
        border-bottom: 1px solid #ddd;
        width: 100%;
        height: 100%;
      }

      .btn{
        height: 1rem;
        width: 100%;
        line-height: 1rem;
        display: flex;
        justify-content: space-between;

        button{
          width: 1rem;
          height: 0.5rem;
          margin: 12.5px auto;
        }
      }
    }
  }
  .hiddenbox{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    width: 100vw;
    background: #666666;
    z-index: 111;
    opacity: 0.3;
    overflow: hidden;
  }

</style>
