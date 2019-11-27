<template>
    <div class="item-wrapper">
        <div class="photo">
            <img :src="item.img|replaceurl" alt="">
        </div>
        <div class="content">
            <div class="desc">
                <div class="title">
                    <h2>
                        {{item.nm}}
                    </h2>
                    <span :class="item.version"></span>
                </div>

                <div>
                    
                    <div v-show="item.globalReleased">观众评<span class="greads">{{item.sc}}</span></div>
                    <div v-show="!item.globalReleased"><span class="greads">{{item.wish}}</span>想看</div>
                </div>

                 <div class="line-ellipsis ">
                   主演: {{ item.star}}
                </div>

                <div>
                     {{item.showInfo}}
                </div>
            </div>
            <div class="buy">
                <button class="red" v-show="item.globalReleased">购票</button>
                <button class="pre" v-show="!item.globalReleased&&item.showst==4">预定</button>
                <button class="want" v-show="!item.globalReleased&&item.showst==1">想看</button>
            </div>
        </div>
    </div>

    
</template>

<script>
export default {
  props: ["item"]
}
</script>

<style lang="scss" scoped>
    @import "../../assets/common.scss";

.item-wrapper{
    height: 104px;
    display: flex;
    padding: 0 12px 12px 12px;

.photo{
    width: 64px;
    img{
        width: 64px;
    }
}
.content{
    display: flex;
    flex: 1;
    overflow: hidden;
    @include border-1px(#e6e6e6);

    .desc{
        flex: 1;
        font-size: 13px;
        line-height: 21px;
        overflow: hidden;
        padding-left: 5px;
        color: #666;
        font-family: PingFangSC-Regular, Hiragino Sans GB, sans-serif;

        .greads{
            margin:0 2px 0 2px;
            font-weight: 700;
            color: #faaf00;
            font-size: 15px;
        }

        h2{
            display: inline-block;
            font-size: 17px;
            color: #333;
            font-weight: 700;
            line-height: 28px;
        }
        .title{
            .v2d.imax{
                background: url("../../assets/images/2d.png");
                background-size:contain;
                width: 43px;
                height: 14px;
                display: inline-block;
                margin-left: 5px;
            }
            .v3d.imax{
                background: url("../../assets/images/imax.png");
                background-size:contain;
                width: 43px;
                height: 14px;
                display: inline-block;
                margin-left: 5px;
            }
        }
    }
    .buy{
        width: 70px;
        line-height: 88px;
        .red{
            margin-left: 15px;
            line-height: 25px;
            background: #f03d37;
            border-radius: 4px;
            width: 47px;
            height: 27px;
            color: white;
            border: 0;
        }
        .pre{
             margin-left: 15px;
            line-height: 25px;
            background: #3c9fe6;
            border-radius: 4px;
            width: 47px;
            height: 27px;
            color: white;
            border: 0;
        }
        .want{
             margin-left: 15px;
            line-height: 25px;
            background: #faaf00;
            border-radius: 4px;
            width: 47px;
            height: 27px;
            color: white;
            border: 0;
        }
    }

}
}

</style>






