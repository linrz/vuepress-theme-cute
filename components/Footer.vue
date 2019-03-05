<template>
  <div class="cute-footer cute-content">
    <div class="cute-footer-copyright">
      © {{ $site.themeConfig.copyright && $site.themeConfig.copyright.name || 'linrz' }} Themed By <a target="_blank" href="https://github.com/linrz/vuepress-theme-cute">vuepress-theme-cute</a>
    </div>
    <div class="cute-footer-hills" />
  </div>
</template>

<style lang="stylus">
.cute-footer
  margin-top: 50px
  
.cute-footer-hills
  background: url('http://img.lastwhisper.club/hills.svg') 0px 80px repeat-x
  background-size: 859px 75px
  height: 255px

.cute-footer-copyright
  font-size: 10px

@media (max-width: 500px)
  .cute-footer-hills
    background-size: 428px 40px
    background-position: 0 30px
    height: 100px

@media (min-width: 1490px)
  .cute-footer-hills
    background-position: 10px 80px;
</style>
