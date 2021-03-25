<template>
  <v-form id="inputs">
    <v-text-field type="text" label="Nombre" v-model="nameBand" />
    <v-select
      :items="generos"
      type="text"
      label="Generos"
      v-model="bandGender"
    ></v-select>
    <div id="integrantes">
      <v-text-field
        v-model="integranteNuevo"
        label="Integrantes"
        type="text"
        ref="integrantsBand"
      />
      <v-btn
        @click="agregarIntegrante"
        class="mx-2"
        fab
        dark
        color="indigo"
        small
        ><v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </div>
    <v-list>
      <v-list-item :key="item" v-for="item in integrantesBanda">
        {{ item }}
      </v-list-item>
    </v-list>
    <v-btn @click.prevent="enviarBanda" type="submit">Registrar</v-btn>
  </v-form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      generos: ["Rock", "Pop", "Indie", "Metal"],
      integranteNuevo: "",
      integrantesBanda: [],
      bandGender: "",
      nameBand: "",
      banda: "",
      respuesta: "",
    };
  },
  methods: {
    agregarBanda(name, gender, integrantes) {
      const nuevaBanda = {
        nombre: name,
        genero: gender,
        integrantes: integrantes,
      };
      this.banda = nuevaBanda;
    },
    obtenerBanda() {
      const nameBand = this.nameBand;
      const genderBand = this.bandGender;
      const integrantsBand = this.integrantesBanda;
      this.agregarBanda(nameBand, genderBand, integrantsBand);
      this.limpiarCampos();
    },
    limpiarCampos() {
      this.bandGender = "";
      this.nameBand = "";
      this.integranteNuevo = "";
      this.integrantesBanda = [];
    },
    agregarIntegrante() {
      this.integrantesBanda.push(this.integranteNuevo);
      this.integranteNuevo = "";
    },
    async enviarBanda() {
      this.obtenerBanda();
      const response = await axios.post(
        "https://proyect-vuejs-ac-default-rtdb.firebaseio.com/bandas.json",
        this.banda
      );
      this.respuesta = response.data;
    },
  },
};
</script>

<style scoped>
#inputs {
  margin: 7vh 0;
  padding: 0 10vw;
}
#integrantes {
  display: flex;
}
</style>