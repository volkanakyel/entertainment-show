<template>
  <div class="trending-section">
    <h2 class="section-title">Trending</h2>
    <div class="trending-section__card-list">
      <div class="trending-section-card">
        <img src="../assets/img/thumbnails/1998/trending/small.jpg" alt="" />
      </div>
      <div class="trending-section-card">
        <img src="../assets/img/thumbnails/1998/trending/small.jpg" alt="" />
      </div>
      <div class="trending-section-card">
        <img src="../assets/img/thumbnails/1998/trending/small.jpg" alt="" />
      </div>
      <div class="trending-section-card">
        <img src="../assets/img/thumbnails/1998/trending/small.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.trending-section {
  margin-top: 32px;
  &__card-list {
    display: flex;
    gap: 40px;
    overflow: auto;
    white-space: nowrap;
    overflow-x: scroll;
    cursor: grabbing;
  }
}
.trending-section-card {
  img {
    border-radius: 20px;
  }
}
.section-title {
  margin-bottom: 32px;
  font-weight: 300;
}
</style>
