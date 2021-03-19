<template>
  <div id="inputs">
    <v-list>
      <info-bandas v-for="comp in bandasAgregadas"
      :key="comp.id"
      :id="comp.id"
      :genero="comp.genero"
      :integrantes="comp.integrantes"
      :borrar="borrar"
      ></info-bandas>
    </v-list>
  </div>
</template>

<script>
import { eventBus } from "../main";
import InfoBandas from "./ArrayBandas";
export default {
  data() {
    return {
      bandasAgregadas: [
        {
          id: "Callejeros",
          genero: "Rock",
          integrantes: [
            "Patricio Santos Fontanet",
            "Christián Torrejón",
            "Eduardo Vázquez",
            "Elio Delgado",
          ],
        },
      ],
      bandaNueva:{}
    };
  },
  components: {
    InfoBandas,
  },
  created() {
    eventBus.$on("agregarBanda", (data) => {
      this.bandasAgregadas.push(data);
    });
  },
  methods: {
    borrar(bandaId){
      const bandaIndex = this.bandasAgregadas.findIndex(banda => banda.id == bandaId);
      this.bandasAgregadas.splice(bandaIndex, 1)
    }
  },
};
</script>

<style scoped>
#inputs {
  margin: 7vh 0;
}
</style>