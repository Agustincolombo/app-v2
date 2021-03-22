<template>
  <div id="inputs">
    <v-list>
      <info-bandas></info-bandas>
    </v-list>
  </div>
</template>

<script>
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
    };
  },
  components: {
    InfoBandas,
  },
};
</script>

<style scoped>
#inputs {
  margin: 7vh 0;
}
</style>