<template>
    <div class="nav">
            <router-link class="city" tag="div" to="/city">
            <span>{{$store.state.city.name||$store.state.city}}</span>
            <i></i>
            </router-link>

            <router-link tag="div" class="gotshowing" active-class="active" to="/movies/hotshowing">正在热映</router-link>
            <router-link tag="div" class="comingsoon" active-class="active" to="/movies/comingsoon">即将上映</router-link>
        
            <div class="search" @click="$router.push('/search')"></div>
        </div>
</template>

<style lang="scss" scoped>
@import '../../assets/common.scss'; 
    .nav{
        height: 44px;
        display: flex;
        line-height: 44px;
        text-align: center;
        @include border-1px(#e6e6e6);

        .city{
            flex:2.5;
            span{
                font-size: 15px;
                color: #666;
                font-family: PingFangSC-Regular,Hiragino Sans GB,sans-serif;
            }
            i{
                border: solid 3px;
                border-color: #272525 transparent transparent transparent;
                display: inline-block; 
            }
        }
        .gotshowing{
            flex:4;
            font-weight: 700;
            font-size: 15px;
            color: #666;
            font-family: PingFangSC-Regular,Hiragino Sans GB,sans-serif;
        }
       
        .comingsoon{
            flex:4;
            font-weight: 700;
            font-size: 15px;
            color: #666;
             font-family: PingFangSC-Regular,Hiragino Sans GB,sans-serif;
        }
         .search{
            flex:2.5;
            background: url("../../assets/images/search.png");
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: 22px;
        }
       
    }

    .active{
        font-weight: 700;
        color: #ef4238;
        position: relative;
    }
    .active::before{
        content: "";
        border-bottom: 1.5px solid #ef4238;
        position: absolute;
        width: 80%;
        bottom: 1px;
        left: 10%;
        
    }

</style>