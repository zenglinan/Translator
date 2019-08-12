<template>
  <i class='iconfont' :class="icon"></i>
</template>

<script>
  export default {
    name: "icon",
    props: {
      icon: {
        type: String,
        default: ""
      },
      class:{
        type: String
      }
    }

  }
</script>

<style scoped>
  @import "../../../asset/svg.css";
</style>