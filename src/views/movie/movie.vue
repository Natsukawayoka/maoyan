<template>
    <div>
        <Download v-show="$store.state.isShowDownload"></Download>
        <Nav></Nav>
        <a v-show="$store.state.isAppDown" href="" class="dw-app"></a>
        <!-- <transition :name="transitionname"> -->
            <router-view></router-view>
        <!-- </transition> -->
        
    </div>
</template>

<script>
import Nav from "./Nav";
import Download from "./Download";

export default {
    data () {
        return {
            // transitionname:"s-left"
        }
    },
    components: {
        Nav,
        Download
    },
    watch: {
        $route(to,from){
            
            if(to.meta>from.meta){
                this.transitionname="s-left";
            }else{
                this.transitionname="s-right"
            }
        }
        
    }
}
</script>
<style lang="scss" scoped>
 .dw-app{
    display: block;
    position: fixed;
    right: 16px;
    bottom: 93px;
    width: 60px;
    height: 86px;
    background: url("../../assets/images/app.png") no-repeat;
    background-size: contain;
    z-index: 10;
 }
//  .s-left-enter{
//      transform: translateX(100%);
//  }
//  .s-left-enter-active,
//  .s-left-leave-active,
//  .s-right-enter-active,
//  .s-right-leave-active{
//      transition: all 0.3s;
//  }

//  .s-left-leave-to{
//      transform: translateX(-100%);
//  }

//   .s-right-enter{
//      transform: translateX(-100%);
//  }

//   .s-right-leave-to{
//      transform: translateX(100%);
//  }
</style>

