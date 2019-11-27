<template>
    <li>
        <img :src="item.img|replaceurl" alt="">
        <p class="name line-ellipsis">{{item.nm}}</p>
        <p class="date line-ellipsis">{{item.comingTitle}}</p>
    </li>
</template>
<script>
export default {
    props: ['item']
}
</script>

<style lang="scss" scoped>
li{
    img{
        width: 85px;
        height: 115px;
    }
    .name{
        font-size: 13px;
        line-height: 30px;
        width: 84px;
    }
    .date{
        font-size: 12px;
        width: 84px;
        color: #999;
    }
}
</style>
