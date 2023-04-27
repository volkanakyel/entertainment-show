<template>
  <div class="main-container">
    <div class="navbar">
      <SideNavbar />
    </div>
    <div class="show-container">
      <div class="log-container">
        <p><nuxt-link to="/secret">Go to secret PAge</nuxt-link></p>
        <button @click="signIn" v-if="!firebaseUser">Sign In</button>
        <button @click="signOut">Sign Out</button>
        <client-only>
          <pre v-if="credentials">
            {{ firebaseUser }}
          </pre>
          <p v-else>User is Signed out</p>
        </client-only>
      </div>
      <div class="search-input">
        <img class="search-input__icon" src="/img/search-icon.svg" alt="" />
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

<script lang="ts" setup>
import { ref, onMounted } from "vue";
definePageMeta({
  middleware: ["auth"],
});
const { $auth } = useNuxtApp();
const credentials = ref();
const firebaseUser = useFirebaseUser();
const signIn = async () => {
  const email = "volkan_akyel@yahoo.fr";
  const password = "123456";
  credentials.value = await signInUser(email, password);
  console.log(firebaseUser);
};
const signOut = async () => {
  credentials.value = await signOutUser();
};
onMounted(async () => {
  await signOut();
  console.log($auth);
});
</script>

<style scoped lang="scss">
.main-container {
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
  }
}

.show-container {
  flex: 1 1 auto; /* Positive flex-shrink */
  @media (max-width: 800px) {
    margin: 32px;
  }
}
.log-container {
  color: $primary-white;
}
</style>
