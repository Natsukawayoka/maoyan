<template>
<div id="scroll-wrapper">
    <div>
       <movieItem v-for=" i in dataview.movieList" :key="i.id" :item="i"></movieItem>
    </div>
</div>
    
</template>

<script>
import movieItem from "./movieItem";
import { getMovieList ,getMoreMovieList } from "../../api/movie";
//滚动
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import { Toast,Indicator } from "mint-ui";
import "mint-ui/lib/style.css"

BScroll.use(Pullup)

export default {
    data () {
        return {
            //页码
            pageno:1,
            //每页显示个数
            pagesize:12,
            dataview:{
                movieIds:[],
                movieList:[],
                total:0
            }      
        }
    },
     async created() {

  },
    components: {
        movieItem
    },
    methods: {
        async getMorelist(){
            //如果当前页的数量和获取的当前页码的信息相等
            if(this.dataview.total === this.dataview.movieList.length){
                Toast({
                    message:"没有更多了",
                    position:"bottom",
                    duration:2000
                })
                //关闭pullup事件
                this.scroll.finishPullUp()
                return
            }
            //起始的第一条信息的下标，从第二页第一条开始
            let startIndex = this.pageno*this.pagesize;
            let endIndex = startIndex+this.pagesize;
            let params = {
                token:"",
                movieIds:this.dataview.movieIds.slice(startIndex,endIndex).join(",")
            }
            
            Indicator.open();
            //滑倒底层获取更多
            let rs = await getMoreMovieList(params)
            //把获取到的coming里的新数据渲染到页面
            this.dataview.movieList.push(...rs.data.coming)
            
            
            
            this.$nextTick(()=>{
                //当下拉刷新数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载
                this.scroll.finishPullUp()
                //重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
                 this.scroll.refresh()
            })
           Indicator.close();
            this.pageno++;
            

        }

    },
    async mounted(){
        Indicator.open();
       let rs = await getMovieList()
        this.dataview = rs.data
        this.$nextTick(()=>{
            this.scroll = new BScroll("#scroll-wrapper",{
                scrollY:true,
                pullUpLoad:true
            })

            //滑动到最下方触发事件
            this.scroll.on("pullingUp",()=>{
                console.log("pullingUp")
                this.getMorelist()
            })

            //手指离开
            this.scroll.on("touchEnd",(e)=>{
                if(e.y<-45){
                    this.$store.commit("UPDATE_SHOW_DOWNLOAD",{dl:false,app:true})
                }else{
                    this.$store.commit("UPDATE_SHOW_DOWNLOAD",{dl:true,app:false})
                }
            })

            Indicator.close();
        })
    }
    
}
</script>
<style lang="scss" scoped>
 #scroll-wrapper{
     height: 100%;
     overflow: hidden;
     padding-top: 10px;
 }
</style>