<template>
  <div v-if="$site.themeConfig.sharePlatforms" class="cute-share">
    Share via
    <div v-for="(platform, index) in $site.themeConfig.sharePlatforms" class="cute-share-icon" @click="onShareClick(platform)">
      <i :class="`iconfont icon-${platform}`"/>
    </div>
    <van-popup v-model="showQrcode">
      <qrcode-vue :value="qrcode" />
    </van-popup>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue';
import Popup from 'vant/lib/popup';
import 'vant/lib/popup/index.css';

export default {
  component: {
    [Popup.name]: Popup,
    [QrcodeVue.name]: QrcodeVue
  },

  data() {
    return {
      showQrcode: false,
      qrcode: ''
    }
  },

  methods: {
    async onShareClick(platform) {
      const title = encodeURIComponent(document.title);
      const shareUrl = window.location.href;
      let url = '';

      if (platform === 'weibo') url = `http://service.weibo.com/share/share.php?url=${window.location.href}&title=${title}&content=utf8`
      if (platform === 'wechat') {
        this.showQrcode = true;
        this.qrcode = shareUrl;
      }
    }
  },
}
</script>

<style lang="stylus">
@import '//at.alicdn.com/t/font_1617073_qc17q894wce.css'

.cute-share
  display: flex
  margin-top: 30px

.cute-share-icon
  margin-left: 10px
  cursor: pointer
  .iconfont
    font-size: 20px
    margin-left: 5px

</style>