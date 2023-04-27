<template>
  <div>
    <div>secret</div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
</script>

<style lang="scss" scoped></style>
