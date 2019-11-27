<template>

<div  id="slider_wrapper">
    <div class="slider_wrapper">
        <div>
            <p class="title">
            最近最受期待
        </p>
        
        <div id="slider_scroll">
            <ul :style="{width:ulwidth}">
               <MostExpectItem v-for="item in expectlist.dataview.coming" :key="item.id" :item="item"></MostExpectItem>
            </ul>
        </div>

        <div id="coming_wrapper"  class="coming_wrapper">  
            <div v-for="(value,name,index) in cominglistByDay" :key="index">
                <h3>{{name}}</h3>
                <ComingItem v-for="i in value" :key="i.id" :item="i"></ComingItem>
            </div>
        </div>
     </div>
        
        
    </div>
</div>
    

    
</template>

<script>
import MostExpectItem from "./MostExpectItem";
import ComingItem from "./ComingItem";
import {getMostExpectlist,getComingList,getMoreComingList} from "../../api/movie.js";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import { Toast,Indicator } from "mint-ui";

BScroll.use(Pullup)

export default {
    data () {
        return {
            finsh:true,
            expectlist:{
                ci:"50",
                limit:"10",
                offset:0,
                dataview:{
                    coming:[],
                    paging:{}
                }
            },
            cominglist:{
                pageno:1,
                pagesize:10,
                limit:"10",
                coming:[],
                movieIds:[]
            }
        }
    },
    components: {
        MostExpectItem,
        ComingItem
    },
    computed: {
        ulwidth(){
            return this.expectlist.dataview.coming.length*98+"px";
        },
        //根据日期进行分类
        cominglistByDay(){
            var date = {}
            this.cominglist.coming.forEach((item,index)=>{
                //如果有当前日期,放入当前日期下面的数组里
                if(date[item.comingTitle]){
                    date[item.comingTitle].push(item)
                }else{
                    //如果没有当前日期，创建一个数组,把item放进去
                    date[item.comingTitle] = [];
                    date[item.comingTitle].push(item)
                }
            })
            return date
        }
    },
    methods: {
        //获取最受期待
        query(){
            //参数传递,每次进行获取数据，参数都会变动
            return new Promise(async(resolve,reject)=>{
                let params = {
                    ci:this.expectlist.ci,
                    limit:this.expectlist.limit,
                    offset:this.expectlist.offset,
                    token:""
                }
                Indicator.open()
                let rs = await getMostExpectlist(params)
                
                //把请求到的数据放进expextlist的里面
                this.expectlist.dataview.coming.push(...rs.data.coming)
                this.expectlist.dataview.paging = rs.data.paging;
                Indicator.close()
                resolve()
            })
        },
        //首次加载
        async queryCominglist(){
            var params = {
                ci: 50,
                token: "",
                limit: 10
            }
            let rs = await getComingList(params)
            this.cominglist.coming.push(...rs.data.coming)
            this.cominglist.movieIds = rs.data.movieIds
           
        },
        //获取下半部分的内容，加载更多
        async queryMoreCominglist(){

         if(this.cominglist.movieIds.length == this.cominglist.coming.length){
                Toast({
                     message: "已经加载完了",
                    position: "bottom",
                    duration: 2000
                })
                //关闭pullup事件
                this.scroll2.finishPullUp()
                return
            }

            //起始的第一条信息的下标，从第二页第一条开始
            let startIndex = this.cominglist.pageno*this.cominglist.pagesize;
            let endIndex = startIndex + this.cominglist.pagesize;
            
            var params = {
                ci:76,
                token:"",
                limit:10,
                movieIds:this.cominglist.movieIds.slice(startIndex,endIndex).join(",")

            }
            Indicator.open()
            let rs = await getMoreComingList(params)
            this.cominglist.coming.push(...rs.data.coming)
            //this.cominglist.movieIds = rs.data.movieIds
            this.$nextTick(()=>{
                this.scroll2.finishPullUp()
                this.scroll2.refresh()
                Indicator.close()
                this.cominglist.pageno++
            })
            
        }
    },
    async mounted () {
        let rs = await this.query()
        var self = this;
        this.$nextTick(()=>{
            self.scroll = new BScroll("#slider_scroll",{
                scrollX:true
            })
            self.scroll.on("scrollEnd",async function(){
                //finsh查询是否完成，每次发送请求的次数限制
                 // maxScrollX - self.scroll.x 是否到达最右侧
                if(!self.finsh||self.scroll.maxScrollX - self.scroll.x<0){
                    return
                }
                if(!self.expectlist.dataview.paging.hasMore){
                    
                    Toast({
                        message:"没有更多了",
                        position:"top",
                        duration:2000
                    })
                    
                    return;
                }
                //finsh初始值是false
                self.finsh = false;
                //滑动到底加载时更新offset
                self.expectlist.offset += self.expectlist.limit
                //更新完expectlist再发出一次请求
                await self.query()
                self.$nextTick(()=>{
                    self.scroll.refresh()
                    //刷新完数据finsh为true
                    self.finsh = true;
                })

            })

        })

    Indicator.open()
     await this.queryCominglist()
        //请求下半部分数据
       this.$nextTick(()=>{
           this.scroll2 = new BScroll("#slider_wrapper",{
            scrollY:true,
            pullUpLoad:true
        })
        this.scroll2.on("pullingUp",()=>{
            //console.log(1);
            this.queryMoreCominglist()
            
        })
         //手指离开
            this.scroll2.on("touchEnd",(e)=>{
                if(e.y<-45){
                    this.$store.commit("UPDATE_SHOW_DOWNLOAD",{dl:false,app:true})
                }else{
                    this.$store.commit("UPDATE_SHOW_DOWNLOAD",{dl:true,app:false})
                }
            })

         Indicator.close()
       }) 
      
    }
    
}
</script>

<style lang="scss" scoped>
#slider_wrapper{
    height: 100%;
    overflow: hidden;
}
#slider_scroll {
  height: 160px;
  overflow: hidden;
}
.slider{
    background-color: #f5f5f5;
    height: auto;
}

.slider_wrapper {
  
  padding: 12px 16px;
  background: #fff;
  margin-bottom: 3px;

  .title {
    font-size: 14px;
    color: #333;
    margin-bottom: 12px;
  }
  ul li {
    display: inline-block;
    margin: 0 6px;
  }
}

.coming_wrapper {
    height: 100%;
    overflow: hidden;
    padding: 6px;
    h3 {
      padding: 6px;
  }
}
</style>