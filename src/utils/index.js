import axios from 'axios'

const baseURL = 'http://211.67.177.56:8080'
const fe = axios.create({
  baseURL,
  timeout:20000
})

const xhr = {
  get(url,data,config){
    return new Promise((resolve ,reject) => {
      fe.get(url,{params:data},config).then( res => {
        if( res.data.code === 1){
          resolve(res)
        }
        else {
          console.log("请求失败")
        }
      }).catch( err => {
        reject(err)
      } )
    })
  }
}
export default  xhr
