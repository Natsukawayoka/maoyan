import axios from 'axios';

export function get({url,params}){
    return axios.get(url,{params})
    .then(function(rs){
        return rs;
    })
    .catch((error)=>{
        console.log(error);
    })
}

export function post({ url, params }) {
    return axios.post(url, {params}).then((rs) => {
      return rs;
    })
  }