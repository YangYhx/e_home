import axios from 'axios'
import store from '../store/index'

const baseURL = '/api'
const fe = axios.create({
  baseURL,
  timeout:20000
})


const xhr = {
  get(url,data,config={}){
    let mytoken = store.state.token;
    if(mytoken){
      let headers = {
        'token':mytoken
      }
      config.headers = {...config.headers,...headers}
    }
    return new Promise((resolve ,reject) => {
      fe.get(url,{params:data,...config}).then( res => {
          resolve(res)
      }).catch( err => {
        reject(err)
      } )
    })
  },
  post(url,data,config={}){
    let mytoken = store.state.token;
    if(mytoken){
      let headers = {
        'token':mytoken
      }
      config.headers = {...config.headers,...headers}
    }
    return new Promise((resolve,reject) => {
      fe.post(url,data,config).then( res => {
          resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
export default  xhr
