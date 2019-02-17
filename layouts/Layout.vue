<template>
  <div>
    <Nav />
    <div class="cute-container">
      <div class="cute-list-item" v-for="(item, index) in $pagination.posts" :key="index">
        <router-link :to="item.path">
          <h2 class="cute-list-title">
            {{ item.title }}
          </h2>
          <h3 class="cute-list-subtitle">
            <span class="cute-list-date">{{ formatPostTime(item.frontmatter.date) }}</span>
            <template v-if="item.frontmatter.coffee">
              <span v-for="(i, index) in item.frontmatter.coffee" :key="index">☕️</span>
            </template>
            <span v-if="item.frontmatter.time">{{ item.frontmatter.time }} read</span>
          </h3>
          <div class="cute-list-spoiler">
            {{ item.frontmatter.spoiler }}
          </div>
        </router-link>
      </div>
      <Pagination />
    </div>
    <div class="cute-index-footer">
      <div class="cute-index-hills cute-index-svg" />
      <div class="cute-index-clouds cute-index-svg" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { format } from 'date-fns'
import Nav from '../components/nav';
import Pagination from '../components/pagination';

export default {
  components: {
    Nav,
    Pagination
  },

  mounted() {
    this.startAnimation();
  },

  methods: {
    formatPostTime(date) {
      return format(date, 'MM/DD YYYY');
    },

    startAnimation() {
      const hills = document.getElementsByClassName('cute-index-hills')[0];
      const clouds = document.getElementsByClassName('cute-index-clouds')[0];
      const speedRange = [0.1, 0.2, 0.3];
      const speed = speedRange[window.innerWidth > 950 ? 2 : window.innerWidth > 500 ? 1 : 0];
      let hillsPos = 0, cloudsPos = 0;
      const animate = () => {
        cloudsPos += speed;
        hillsPos -= speed;
        clouds.style.backgroundPositionX = `${cloudsPos}px`;
        hills.style.backgroundPositionX = `${hillsPos}px`;
        window.requestAnimationFrame(animate);
      };
      window.requestAnimationFrame(animate);
    }
  }
}
</script>

<style lang="stylus">
.cute-list-item
  margin-bottom: 20px
  padding-bottom: 20px
  border-bottom: 1px solid #eee
  a
    color: #333
    &:hover
      color: #999
  h2
    margin: 0
  h3
    margin-top: 0
    margin-bottom: 10px

.cute-list-title
  font-size: 26px

.cute-list-subtitle
  font-size: 14px
  font-weight: 300
  margin-bottom: 10px

.cute-list-date
  margin-right: 5px

.cute-list-spoiler
  font-size: 14px

.cute-index-footer
  width: 100%
  height: 240px
  overflow: hidden

.cute-index-svg
  height: 200px
  width: 100%
  position: absolute
  left: 0px
        
.cute-index-hills
  background: transparent url('http://pmwi2c40m.bkt.clouddn.com/hills.svg') 0px 80px repeat-x
  background-size: 859px 75px

.cute-index-clouds
  background: transparent url('http://pmwi2c40m.bkt.clouddn.com/clouds.svg') 0px 100px repeat-x;
  background-size: 944px 61px

@media (max-width: 500px)
  .cute-index-footer
    height: 100px

  .cute-index-hills
    background-size: 428px 40px
    background-position: 0 30px
    height: 100px

  .cute-index-clouds
    background-size: 318px 23px
    background-position: 0 40px
    height: 100px

@media (min-width: 500px) and (max-width: 950px)
  .cute-index-footer
    height: 180px

  .cute-index-hills
    background-size: 700px 61px
    background-position: 0 30px
    height: 100px

  .cute-index-clouds
    background-size: 600px 39px
    background-position: 0 50px
    height: 100px
</style>
