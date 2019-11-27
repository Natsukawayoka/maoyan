var maoyanPlugin = {
    install (vue){
        vue.prototype.$cache = {
            add(key,val){
                let ls = localStorage.getItem('search');
                //如果search里有值
                if(ls){
                    //转成数组对象
                    let arr = JSON.parse(ls);
                    arr.push(val);
                    //添加过之后转成字符串放进去
                    localStorage.setItem(key,JSON.stringify(arr))
                }else{
                    //如果缓存里不存在
                    localStorage.setItem(key,JSON.stringify([val]))
                }
            },
            del(key){
                let str = localStorage.getItem('search')
                let arr = JSON.parse(str);
                //删除key
                arr.splice(arr.indexOf(key),1)
                //把删除过的新数组放进localstorage
                localStorage.setItem('search',JSON.stringify(arr))

            },
            //把localstorage的数组拿出来渲染
            get(){
                if(localStorage.getItem('search')){
                    return JSON.parse(localStorage.getItem("search"))
                }
                return[];
            },
            addCity(val){
                let key = "city";
                let ls = localStorage.getItem(key);
                if(ls){
                    let arr = JSON.parse(ls);
                    console.log(arr);
                    
                    //如果数据存在
                    let index = arr.indexOf(val);
                    if(index>-1){
                        //就把重复的数据删掉
                        arr.splice(index,1);
                    }
                    arr.unshift(val)
                    //数据最多显示3条
                    if(arr.length>3){
                        arr.splice(3,1)
                    }
                    localStorage.setItem(key,JSON.stringify(arr))
                }else{
                    localStorage.setItem(key,JSON.stringify([val]))
                }
            }
        }
    }
}

export default maoyanPlugin;