<template>
  <div id="inputs">
    <h1>Todas las bandas</h1>
    <v-list>
      <info-bandas
        v-for="comp in bandasAgregadas"
        :key="comp.nombre"
        :nombre="comp.nombre"
        :genero="comp.genero"
        :integrantes="comp.integrantes"
      ></info-bandas>
      <v-btn id="cargarBandas" @click.prevent="bandas"> Cargar bandas </v-btn>
      <v-btn @click.prevent="borrarbandas"> Borrar bandas </v-btn>
      <router-link to="/registro">
        <v-btn> Nueva banda </v-btn>
      </router-link>
      <router-view />
    </v-list>
  </div>
</template>

<script>
import axios from "axios";
import InfoBandas from "./ObjectBanda";
export default {
  data() {
    return {
      bandasAgregadas: [],
    };
  },
  components: {
    InfoBandas,
  },
  methods: {
    async bandas() {
      const response = await axios.get(
        "https://proyect-vuejs-ac-default-rtdb.firebaseio.com/bandas.json"
      );
      const data = response.data;
      const resultadoBandas = [];
      for (const key in data) {
        resultadoBandas.push(data[key]);
      }
      if (resultadoBandas.length === 0){
        alert("No hay bandas cargadas")
      } else{
        this.bandasAgregadas = resultadoBandas;
      }
    },
    async borrarbandas() {
      await axios.delete(
        "https://proyect-vuejs-ac-default-rtdb.firebaseio.com/bandas.json"
      );
      this.bandasAgregadas = []
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 3%;
}
button {
  margin: 3%;
  margin-bottom: 0%;
}
#inputs {
  margin: 7vh 0;
}
</style>