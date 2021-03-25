<template>
  <div id="inputs">
    <v-list>
      <info-bandas
        v-for="comp in bandasAgregadas"
        :key="comp.nombre"
        :nombre="comp.nombre"
        :genero="comp.genero"
        :integrantes="comp.integrantes"
      ></info-bandas>
      <v-btn id="cargarBandas" @click.prevent="bandas"
        >Cargar todas las bandas</v-btn>
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
      this.bandasAgregadas = resultadoBandas;
    },
  },
};
</script>

<style scoped>
#cargarBandas {
  margin-top: 3%;
}
#inputs {
  margin: 7vh 0;
}
</style>