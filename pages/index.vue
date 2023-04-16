<template>
  <div class="main-container">
    <SideNavbar />
    <div class="show-container">
      <div class="show-search">
        <img src="../assets/img/search-icon.svg" alt="" />
        <input class="show-search-input" type="text" placeholder="Search for movies or TV series" />
      </div>
      <TrendSection />
      <RecommendSection />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.main-container {
  display: flex;
}
.show-container {
  max-width: 1100px;
}
.show-search {
  margin-top: 32px;
}
</style>
