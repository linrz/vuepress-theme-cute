<template>
  <div class="cute-nav">
    <div class="cute-nav-left">
      <a href="/">{{ $site.themeConfig.home }}</a>
    </div>
    <div class="cute-nav-right">
      <div :class="`cute-nav-item ${index === activeIndex ? 'cute-nav-active' : ''}`" v-for="(item, index) in $site.themeConfig.nav" :key="item.link">
        <a v-if="item.link" :href="`${item.link}`">{{ item.text }}</a>
      </div>
      <div @click="exportImage">导出</div>
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';

export default {
  data() {
    return {
      activeIndex: 0,
    }
  },

  mounted() {
    this.getActiveIndex();
  },

  methods: {
    getActiveIndex() {
      if (this.$site.themeConfig.nav && this.$site.themeConfig.nav.length) {
        for (let i = 0; i < this.$site.themeConfig.nav.length; i++) {
          const activeRegexp = new RegExp('\^' + this.$site.themeConfig.nav[i].link + '$');
          if (activeRegexp.test(window.location.pathname)) {
            this.activeIndex = i;
            break;
          }
        }
      }
    },

    exportImage() {
      html2canvas(document.body).then(function(canvas) {
        canvas.id = 'test'
        document.body.appendChild(canvas);
        const target = document.getElementById('test');
        const image = new Image();
        image.onload = () => {
          image.src = canvas.toDataURL('image/png')
          document.body.appendChild(dataImg)
        }
        const downloadLink = document.createElement('a');
        downloadLink.download = 'test';
        downloadLink.href = canvas.toDataURL('image/png');
        downloadLink.dataset.downloadurl = ['image/png', downloadLink.download, downloadLink.href].join(':');

        document.body.appendChild(downloadLink);
        downloadLink.click();
      });
    }
  }
}
</script>


<style lang="stylus">
.cute-nav
  height: 40px
  margin-bottom: 20px

  a 
    color: #333
    &:hover
      color: #999

.cute-nav-left
  float: left
  line-height: 40px
  height: 40px
  padding: 0 15px

.cute-nav-right
  float: right

.cute-nav-item
  float: left
  line-height: 40px
  height: 40px
  padding: 0 15px

</style>
