<template>
  <v-navigation-drawer color="primary" rail permanent>
    <v-list-item class="mt-3">
      <img src="../public/icon.png" alt="" />
    </v-list-item>
    <v-list density="compact" nav color="primary">
      <v-list-item value="dashboard">
        <v-icon color="greyblue" icon="mdi-view-dashboard"></v-icon>
      </v-list-item>
      <v-list-item value="messages">
        <v-icon color="greyblue" icon="mdi-filmstrip"></v-icon>
      </v-list-item>
      <v-list-item value="messages">
        <v-icon color="greyblue" icon="mdi-movie"></v-icon>
      </v-list-item>
      <v-list-item value="messages">
        <v-icon color="greyblue" icon="mdi-ribbon"></v-icon>
      </v-list-item>
    </v-list>
    <v-icon color="greyblue" class="avatar-icon" mb-auto icon="mdi-ribbon"></v-icon>
  </v-navigation-drawer>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.v-list {
  background-color: $semi-dark-blue;
}
.avatar-icon {
  position: absolute;
  bottom: 10px;
  left: 25%;
}
</style>
