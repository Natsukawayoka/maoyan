<template>
  <header>
    <slot></slot>
    <h1>
      <slot name="title">
        猫眼电影
      </slot>
      
    </h1>
  </header>
</template>

<style lang="scss" scoped>
header {
  background: #e54847;
  line-height: 50.5px;
  h1 {
    font-size: 18px;
    color: white;
    text-align: center;
    font-weight: 200;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  }
}
</style>