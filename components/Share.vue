<template>
  <div v-if="$site.themeConfig.sharePlatforms" class="cute-share">
    Share via
    <div
      v-for="platform in $site.themeConfig.sharePlatforms"
      :key="platform"
      class="cute-share-icon"
      @click="onShareClick(platform)"
    >
      <i :class="`iconfont icon-${platform}`"/>
    </div>
    <van-overlay :show="showQrcode" @click="toggleQrcode">
      <div class="cute-qrcode-container">
        <div class="cute-qrcode-inner">
          <div class="cute-qrcode-title">微信扫一扫，右上角分享</div>
          <qrcode-vue :value="qrcode" size="200" />
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue';
import { Overlay } from 'vant';
import 'vant/lib/overlay/index.css';

export default {
  components: {
    QrcodeVue,
    [Overlay.name]: Overlay,
  },

  data() {
    return {
      showQrcode: false,
      qrcode: ''
    }
  },

  mounted() {  
    import('html2canvas').then(html2canvas => this.html2canvas = html2canvas);
  },

  methods: {
    onShareClick(platform) {
      const title = encodeURIComponent(document.title);
      const shareUrl = window.location.href;
      if (platform === 'weibo') {
        window.open(`http://service.weibo.com/share/share.php?url=${window.location.href}&title=${title}&content=utf8`, '_blank');
      }

      if (platform === 'wechat') {
        this.qrcode = shareUrl;
        this.showQrcode = true;
      }

      if (platform === 'twitter') {
        window.open(`https://twitter.com/intent/tweet?text=${title}&url=${window.location.href}`, '_blank');
      }

      if (platform === 'download') {
        this.html2canvas.default(document.body, {
          windowWidth: 375,
          width: 375,
          useCORS: true,
          ignoreElements: ele => typeof ele.className === 'string' && (ele.className.indexOf('cute-nav') > -1 || ele.className.indexOf('cute-share') > -1)
        }).then((canvas) => {
          canvas.id = 'download'
          canvas.toBlob((blob) => {
            const downloadLink = document.createElement('a');
            downloadLink.download = document.title;
            downloadLink.href = URL.createObjectURL(blob)
            downloadLink.dataset.downloadurl = ['image/png', downloadLink.download, downloadLink.href].join(':');
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
          },'image/png', 1);
        });
      }
    },

    toggleQrcode() {
      this.showQrcode = !this.showQrcode;
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
  .icon-wechat
    position: relative

.cute-qrcode-container
  display: flex
  align-items: center
  justify-content: center
  height: 100%

.cute-qrcode-title
  color: #fff
  text-align: center
  margin-bottom: 20px
  font-size: 18px
</style>