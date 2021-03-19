<template>
  <v-app>
    <v-card>
      <v-tabs fixed-tabs>
        <v-tab @click="activeComponent('bandas-cargadas')">
          Bandas cargadas
        </v-tab>
        <v-tab @click="activeComponent('bandas-registro')">
          Registrar bandas
        </v-tab>
      </v-tabs>
      <keep-alive>
        <component :is="selectedComponent"></component>
      </keep-alive>
    </v-card>
  </v-app>
</template>

<script>
import BandasRegistro from "./components/BandasRegistro.vue";
import BandasCargadas from "./components/BandasCargadas.vue";
export default {
  components: {
    BandasRegistro,
    BandasCargadas,
  },
  data() {
    return {
      selectedComponent: "bandas-cargadas",
    };
  },
  methods: {
    activeComponent(active) {
      this.selectedComponent = active;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.v-card{
  margin: 0 10vw;
}
</style>