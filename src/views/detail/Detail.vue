<template>
  <div>
   
    <Header>

      <i class="back" @click="$router.go(-1)"></i>

      <template #title>
        {{$route.query.item.nm}}
      </template>

    </Header>
    {{$route.query.item}}
  </div>
</template>
<script>
import Header from "../../components/Header";
export default {
  
  components: {
    Header
  }
}
</script>
<style lang="scss" scoped>
.back {
  content: "";
  display: block;
  position: absolute;
  top: 16px;
  left: 20px;
  width: 16px;
  height: 16px;
  border-bottom: 2px solid #fff;
  border-left: 2px solid #fff;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>