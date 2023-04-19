<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
onMounted(async () => {
  const email = "volkan_akyel@yahoo.fr";
  const password = "123456";
  // const credentials = await createUser(email, password);
  //const credentials = await signInUser(email, password);
  const credentials = await signOutUser();
  console.log(credentials);
});
</script>
