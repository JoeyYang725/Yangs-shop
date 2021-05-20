import axios from 'axios';
export default function ajax(url,data={},type="GET"){
  return new Promise((resolve,reject)=>{
    let promise
    if(type==='GET'){
      let dataString=``
      Object.keys(data).forEach(key=>{
        dataString.push(`${key}=${data.key}&`)
      })
      if(dataString){
        url+=`?${dataString.substring(0,dataString.lastIndexOf('&'))}`
      }
      promise=axios.get(url)
    }else{
      promise=axios.post(url,data)
    }
    promise.then(function(response){
      resolve(response.data)
    }).catch(function(error){
      reject(error)
    })
  })
}