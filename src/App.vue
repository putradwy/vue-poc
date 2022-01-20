<template>
  <v-app>
    <vheader/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import vheader from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    vheader
  },
};
</script>

<style>
body {
  height: 100vh;
  overflow: hidden;
}
</style>