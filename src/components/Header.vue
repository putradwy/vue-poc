<template>
    <v-app-bar
      app
      color="rgba(0, 0, 0, 0.5)"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://img.icons8.com/doodle/48/000000/documentary.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="150"
          src="../assets/logo_name.png"
          width="100"
        />
      </div>

      <v-tabs
        centered
        class="ml-n9"
        color="white darken-1"
      >
        <v-tab
          v-for="tab in tabs"
          :key="tab.id"
          :to="tab.path"
        >
          {{ tab.name }}
        </v-tab>
      </v-tabs>

      <v-spacer></v-spacer>

      <v-btn
        href="#"
        target="_blank"
        text
      >
        <span class="mr-2">Search</span>
        <v-icon>mdi-magnify-expand</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: "Header",
    data: () => ({
    tabs: [
        // { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Movies", path: "/" },
        { id: 3, name: "Movie Table", path: "/movies" },
        { id: 4, name: "Upcoming", path: "/upcoming" },
      ]
  }),
}
</script>

<style scoped>

</style>