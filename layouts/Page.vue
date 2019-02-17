<template>
  <div>
    <Nav />
    <div class="cute-content">
      <div class="cute-page-header">
        <div class="cute-page-title">{{ $page.frontmatter.title }}</div>
        <div class="cute-page-subtitle">
          <span class="cute-page-date">{{ $page.frontmatter.date ? formatPostTime($page.frontmatter.date) : '' }}</span>
          <span v-for="(i, index) in $page.frontmatter.coffee" :key="index">☕️</span>
          <span v-if="$page.frontmatter.time">{{ $page.frontmatter.time }} read</span>
        </div>
      </div>
      <div class="cute-page-markdown">
        <Content slot="default" class="markdown-body"/>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue';
import { format } from 'date-fns'
import Nav from '../components/nav';
import Footer from '../components/footer';
import '../styles/markdown.css';

export default {
  components: {
    Nav,
    Footer
  },

  methods: {
    formatPostTime(date) {
      return format(date, 'MM/DD YYYY');
    },
  }
}
</script>


<style lang="stylus">
.cute-page-title
  font-size: 35px

.cute-page-subtitle
  font-size: 14px
  font-weight: 300

.cute-page-date
  margin-right: 5px

.cute-page-header
  margin-bottom: 20px
</style>
