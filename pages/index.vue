<template>
  <div class="main-container">
    <div class="navbar">
      <SideNavbar />
    </div>
    <div class="show-container">
      <div class="search-input">
        <img class="search-input__icon" src="../assets/img/search-icon.svg" alt="" />
        <input
          class="search-input__field"
          type="text"
          placeholder="Search for movies or TV series"
        />
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

.navbar {
  flex: 0 1 200px; /* Positive flex-shrink */
}
.show-container {
  flex: 1 1 auto; /* Positive flex-shrink */
}
</style>
