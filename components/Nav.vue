<template>
  <div class="cute-nav">
    <div class="cute-nav-left">
      <a href="/">{{ $site.themeConfig.home }}</a>
    </div>
    <div class="cute-nav-right">
      <div :class="`cute-nav-item ${index === activeIndex ? 'cute-nav-active' : ''}`" v-for="(item, index) in $site.themeConfig.nav" :key="item.link">
        <a v-if="item.link" :href="`${item.link}`">{{ item.text }}</a>
      </div>
    </div>
  </div>
</template>

<script>
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
