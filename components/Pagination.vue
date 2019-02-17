<template>
  <div v-if="$pagination">
    <router-link class="cute-pagination-link cute-pagination-prev" v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev</router-link>
    <router-link class="cute-pagination-link cute-pagination-next" v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
  </div>
</template>

<style lang="stylus">
.cute-pagination-link
  color: #333
.cute-pagination-link:hover
  color: #999
.cute-pagination-next
  float: right
.cute-pagination-prev
  float: left
</style>


