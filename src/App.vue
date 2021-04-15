<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" temporary>
      <header>
        <h1>Navegación</h1>
      </header>
      <v-container>
        <router-link to="/bandas">
          <h3>Bandas cargadas</h3>
        </router-link>
        <router-link to="/registro">
          <h3>Registrar banda</h3>
        </router-link>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <h2>Empresa de ejemplo</h2>
      <v-icon large color="grey darken-2"> mdi-domain </v-icon>
    </v-app-bar>
    <v-main>
      <v-card>
        <v-container fluid>
          <router-view />
        </v-container>
      </v-card>
    </v-main>
    <v-footer app> 
      <span>Versión 2.3.8</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
};
</script>

<style>
.v-footer{
  justify-content: flex-end;
}
header {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
}
div a h3 {
  padding: 3% 0%;
}
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