<template>
  <v-app>
    <v-card>
      <keep-alive>
        <router-view />
      </keep-alive>
    </v-card>
  </v-app>
</template>

<script>
</script>

<style>
a {
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.v-card {
  margin: 5vh 10vw;
}
</style>