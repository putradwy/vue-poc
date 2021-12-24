<template>
  <div id="nav">
    <router-link to="/">Popular Movies</router-link> |
    <router-link to="/contact">Contact</router-link>
  </div>
  <router-view/>
</template>

<style>
body {
  margin: 0px;
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: inherit;
  overflow: hidden;
}

#nav {
  padding: 30px;
  background-color: grey;
  text-align: left;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
