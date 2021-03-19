<template>
  <v-form id="inputs">
    <v-text-field type="text" label="Nombre" v-model="bandName" />
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
    <v-btn @click.prevent="pushearBanda" type="submit">Registrar</v-btn>
  </v-form>
</template>

<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      alert: false,
      generos: ["Rock", "Pop", "Indie", "Metal"],
      integranteNuevo: "",
      integrantesBanda: [],
      bandGender: "",
      bandName: "",
    };
  },
  methods: {
    agregarBanda(name, gender, integrantes) {
      const nuevaBanda = {
        id: name,
        genero: gender,
        integrantes: integrantes,
      };
      eventBus.$emit("agregarBanda", nuevaBanda);
    },
    pushearBanda() {
      const bandName = this.bandName;
      const genderBand = this.bandGender;
      const integrantsBand = this.integrantesBanda;
      this.agregarBanda(bandName, genderBand, integrantsBand);
      this.bandGender = '';
      this.bandName = '';
      this.integranteNuevo = '';
      this.integrantesBanda = [];
      alert("Datos enviados correctamente");
    },
    agregarIntegrante() {
      this.integrantesBanda.push(this.integranteNuevo);
      this.integranteNuevo = "";
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