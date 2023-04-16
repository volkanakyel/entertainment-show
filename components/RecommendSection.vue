<template>
  <div class="trending-section">
    <h2 class="section-title">Recommended for you</h2>
    <div class="trending-section__card-list">
      <div class="trending-section-card">
        <img
          class="trending-section-card__image"
          src="../assets/img/thumbnails/the-great-lands/regular/small.jpg"
          alt=""
        />
        <div class="trending-section-card__description">
          <p>2019</p>
          <div class="trending-section-card__section">
            <img src="../assets/img/movie-icon.svg" alt="" />
            <p>Movie</p>
          </div>
          <p>Movie</p>
          <p>PG</p>
        </div>
        <p class="trending-section-card__title">The Great Lands</p>
      </div>
      <div class="trending-section-card">
        <img
          class="trending-section-card__image"
          src="../assets/img/thumbnails/the-great-lands/regular/small.jpg"
          alt=""
        />
        <div class="trending-section-card__description">
          <p>2019</p>
          <div class="trending-section-card__section">
            <img src="../assets/img/movie-icon.svg" alt="" />
            <p>Movie</p>
          </div>
          <p>PG</p>
        </div>
        <p class="trending-section-card__title">The Great Lands</p>
      </div>
      <div class="trending-section-card">
        <img
          class="trending-section-card__image"
          src="../assets/img/thumbnails/the-great-lands/regular/small.jpg"
          alt=""
        />
        <div class="trending-section-card__description">
          <p>2019</p>
          <div class="trending-section-card__section">
            <img src="../assets/img/movie-icon.svg" alt="" />
            <p>Movie</p>
          </div>
          <p>Movie</p>
          <p>PG</p>
        </div>
        <p class="trending-section-card__title">The Great Lands</p>
      </div>
      <div class="trending-section-card">
        <img
          class="trending-section-card__image"
          src="../assets/img/thumbnails/the-great-lands/regular/small.jpg"
          alt=""
        />
        <div class="trending-section-card__description">
          <p>2019</p>
          <div class="trending-section-card__section">
            <img src="../assets/img/movie-icon.svg" alt="" />
            <p>Movie</p>
          </div>
          <p>Movie</p>
          <p>PG</p>
        </div>
        <p class="trending-section-card__title">The Great Lands</p>
      </div>
      <div class="trending-section-card">
        <img
          class="trending-section-card__image"
          src="../assets/img/thumbnails/the-great-lands/regular/small.jpg"
          alt=""
        />
        <div class="trending-section-card__description">
          <p>2019</p>
          <div class="trending-section-card__section">
            <img src="../assets/img/movie-icon.svg" alt="" />
            <p>Movie</p>
          </div>
          <p>Movie</p>
          <p>PG</p>
        </div>
        <p class="trending-section-card__title">The Great Lands</p>
      </div>
      <div class="trending-section-card">
        <img
          class="trending-section-card__image"
          src="../assets/img/thumbnails/the-great-lands/regular/small.jpg"
          alt=""
        />
        <div class="trending-section-card__description">
          <p>2019</p>
          <div class="trending-section-card__section">
            <img src="../assets/img/movie-icon.svg" alt="" />
            <p>Movie</p>
          </div>
          <p>Movie</p>
          <p>PG</p>
        </div>
        <p class="trending-section-card__title">The Great Lands</p>
      </div>
      <div class="trending-section-card">
        <img
          class="trending-section-card__image"
          src="../assets/img/thumbnails/the-great-lands/regular/small.jpg"
          alt=""
        />
        <div class="trending-section-card__description">
          <p>2019</p>
          <div class="trending-section-card__section">
            <img src="../assets/img/movie-icon.svg" alt="" />
            <p>Movie</p>
          </div>
          <p>Movie</p>
          <p>PG</p>
        </div>
        <p class="trending-section-card__title">The Great Lands</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.trending-section {
  margin-block: 32px;
  &__card-list {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    overflow: auto;
    white-space: nowrap;
    overflow-x: hidden;
    cursor: grabbing;
  }
}
.trending-section-card {
  &__image {
    border-radius: 20px;
  }
  &__description {
    display: flex;
    gap: 12px;
    margin-block: 5px;
    font-weight: 300;
    opacity: 0.75;
  }
  &__title {
    font-size: 18px;
    font-weight: 500;
  }
  &__section {
    display: flex;
    align-items: center;
    gap: 6px;
  }
}
.section-title {
  margin-bottom: 32px;
  font-weight: 300;
}
</style>
