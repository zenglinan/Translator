<template>
  <div @click="clickHandle">
    <lang-bar></lang-bar>
    <c-icon icon="i-down"></c-icon>
    <inputarea></inputarea>

  </div>
</template>

<script>

  import langBar from '@/components/langBar/langBar'
  import icon from '@/components/icon/icon'
  import inputArea from '@/components/inputArea/inputArea'
  import {translateText} from '@/utils/api'

  export default {
    data() {
      return {
        motto: 'Hello miniprograme',
        userInfo: {
          nickName: 'mpvue',
          avatarUrl: 'http://mpvue.com/assets/logo.png'
        }
      }
    },

    components: {
      'c-icon': icon,
      'lang-bar': langBar,
      'inputarea': inputArea
    },

    methods: {
      bindViewTap() {
        const url = '../logs/main'
        if (mpvuePlatform === 'wx') {
          mpvue.switchTab({url})
        } else {
          mpvue.navigateTo({url})
        }
      },
      clickHandle(ev) {
        console.log('clickHandle:', ev)
        // throw {message: 'custom test'}
      }
    },

    created() {
      translateText().then(res=>{
        console.log(res);
      })
    }
  }
</script>

<style scoped>
  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .userinfo-avatar {
    width: 128 rpx;
    height: 128 rpx;
    margin: 20 rpx;
    border-radius: 50%;
  }

  .userinfo-nickname {
    color: #aaa;
  }

  .usermotto {
    margin-top: 150px;
  }

  .form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
  }

  .all {
    width: 7.5rem;
    height: 1rem;
    background-color: blue;
  }

  .all:after {
    display: block;
    content: '';
    clear: both;
  }

  .left {
    float: left;
    width: 3rem;
    height: 1rem;
    background-color: red;
  }

  .right {
    float: left;
    width: 4.5rem;
    height: 1rem;
    background-color: green;
  }
</style>
