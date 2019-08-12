<template>
  <section class='outerWrapper'>
    <div class="langWrapper">
      <div class="lang">中文</div>
      <div class="downIcon">
        <c-icon icon="i-down"></c-icon>
      </div>
    </div>
    <div class="translateIcon">
      <c-icon icon="i-translate"></c-icon>
    </div>
    <div class="langWrapper">
      <div class="lang">英文</div>
      <div class="downIcon">
        <c-icon icon="i-down"></c-icon>
      </div>
    </div>
  </section>
</template>

<script>
  import icon from '../icon/icon'

  export default {
    name: "langBar",
    components: {
      'c-icon': icon
    }
  }
</script>

<style scoped lang="scss">
  .outerWrapper {
    display: flex;
    display: inline-flex;
    align-items: center;

    .langWrapper {
      display: flex;
      align-items: center;
      &:first-child {
        margin-right: 30rpx;
      }
      &:last-child {
        margin-left: 30rpx;
      }
      .lang {
        font-size: 32rpx;
        color: rgb(45, 45, 45);
        padding-right: 6rpx;
        font-family: sans-serif;
      }
    }

    .translateIcon {
      display: flex;
      align-items: center;
      border-radius: 20rpx;
      border: 1px solid rgb(242, 242, 242);
      padding: 2rpx 16rpx;
      color: rgb(181, 181, 181);
    }

    .downIcon {
      font-size: 20rpx;
      font-weight: bold;
      color: rgb(51, 51, 51);
    }
  }


</style>