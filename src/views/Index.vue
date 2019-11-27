<template>
    <div class="index-container">
        <Header/>
        <main>
            <transition name="fade">
                <router-view class="scroll"></router-view>
            </transition>
            
        </main>
      
       <nav>
           <ul>

            <router-link tag="li" active-class="active" to="/movies">
            <svg  width="25px" height="25px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <title>电影</title>
              <g fill="#333333" fill-rule="evenodd">
                <path d="M488 416c-57.6 0-104-46.4-104-104s46.4-104 104-104 104 46.4 104 104-46.4 104-104 104z m0-144c-22.4 0-40 17.6-40 40s17.6 40 40 40 40-17.6 40-40-17.6-40-40-40zM312 640c-57.6 0-104-46.4-104-104s46.4-104 104-104 104 46.4 104 104-46.4 104-104 104z m0-144c-22.4 0-40 17.6-40 40s17.6 40 40 40 40-17.6 40-40-17.6-40-40-40z m224 320c-57.6 0-104-46.4-104-104s46.4-104 104-104 104 46.4 104 104-46.4 104-104 104z m0-144c-22.4 0-40 17.6-40 40s17.6 40 40 40 40-17.6 40-40-17.6-40-40-40z m176-80c-57.6 0-104-46.4-104-104s46.4-104 104-104 104 46.4 104 104-46.4 104-104 104z m0-144c-22.4 0-40 17.6-40 40s17.6 40 40 40 40-17.6 40-40-17.6-40-40-40z m216 512H512C265.6 960 64 758.4 64 512S265.6 64 512 64s448 201.6 448 448c0 121.6-48 235.2-134.4 320-12.8 12.8-33.6 12.8-44.8 0-12.8-12.8-12.8-33.6 0-44.8C854.4 713.6 896 616 896 512c0-211.2-172.8-384-384-384S128 300.8 128 512s172.8 384 384 384h416c17.6 0 32 14.4 32 32s-14.4 32-32 32z" />
              </g> 
            </svg>
            
            <p>电影</p>
            </router-link>


            <router-link tag="li" active-class="active" to="/theater">
            <svg width="25px" height="25px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g fill="#333333" fill-rule="evenodd">
                    <path d="M864 853.333333a32 32 0 0 1 0 64H160a32 32 0 0 1 0-64z m-42.666667-746.666666c64.8 0 117.333333 52.533333 117.333334 117.333333v540.309333a42.666667 42.666667 0 0 1-78.336 23.402667L672.405333 501.344C628.48 522.816 574.912 533.333333 512 533.333333s-116.48-10.517333-160.405333-31.989333L163.669333 787.712A42.666667 42.666667 0 0 1 85.333333 764.309333V224c0-64.8 52.533333-117.333333 117.333334-117.333333h618.666666z m0 64H202.666667a53.333333 53.333333 0 0 0-53.333334 53.333333v468.906667l165.248-251.797334a32 32 0 0 1 44.501334-9.066666C395.978667 456.64 446.762667 469.333333 512 469.333333s116.021333-12.693333 152.917333-37.290666a32 32 0 0 1 44.501334 9.066666L874.666667 692.917333V224a53.333333 53.333333 0 0 0-53.333334-53.333333z" />
                </g> 
            </svg>
             <p>电影院</p>
            </router-link>


            <router-link tag="li" active-class="active" to="/profile">
            <svg width="25px" height="25px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g fill="#333333">
                    <path d="M512 704c-176 0-320-144-320-320S336 64 512 64s320 144 320 320-144 320-320 320z m0-576c-140.8 0-256 115.2-256 256s115.2 256 256 256 256-115.2 256-256-115.2-256-256-256z m371.2 832c-8 0-17.6-3.2-24-9.6C768 852.8 644.8 800 512 800s-256 52.8-348.8 150.4c-12.8 12.8-32 12.8-44.8 1.6-12.8-12.8-12.8-32-1.6-44.8C220.8 796.8 361.6 736 512 736s291.2 60.8 395.2 169.6c12.8 12.8 11.2 33.6-1.6 44.8-6.4 6.4-14.4 9.6-22.4 9.6z" />
                </g> 
            </svg>
            <p> 我的</p>
            </router-link>


        </ul>
        </nav>
       
    </div>
</template>

<script>
import Header from "../components/Header"
export default {
    // data () {
    //     return {
    //         transitionname:"fade"      
    //     }
    // },
    components: {
        Header
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/common.scss";

    .index-container{
        height: 100%;
        display: flex;
        flex-direction: column;
        width: 100%;

        .header{
            height: 50.5px;
            background: #e54847;
            line-height:50.5px;
            
            h1{
                font-size: 18px;
                color: white;
                text-align: center;
                font-weight: 200;
                font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
            }
        }
        main{
            flex: 1;
            @include border-1px(#d8d8d8);
            overflow-y: scroll;
        }
        nav{
            height: 48.5px;
            ul{
                margin-top: 5px;
                display: flex;
                font-family:  PingFangSC-Regular, Hiragino Sans GB, sans-serif;
                
                li{
                    
                    text-align: center;
                    flex: 1;
                    font-size: 10px;
                    p{
                        margin-top: 3px;
                    }
                }
            }
        }
    }

    .active{
        color: #f03d37;
        g{
            fill: #f03d37;
        }
    }

    .scroll{
        height: 100%;
        display:flex;
        flex-direction: column;
    }

    .fade-enter{
        opacity: 0;
    }
    .fade-enter-active,
    .fade-leave-active{
        transition: all .3s;
    }
    .fade-enter-to{
        opacity: 1;
    }
    .fade-leave{
        opacity: 1;
    }
    .fade-leave-to{
        opacity: 0;
    }
</style>
