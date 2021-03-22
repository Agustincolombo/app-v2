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
    <v-btn @click.prevent="enviarBanda" type="submit">Registrar</v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      generos: ["Rock", "Pop", "Indie", "Metal"],
      integranteNuevo: "",
      integrantesBanda: [],
      bandGender: "",
      bandName: "",
    };
  },
  methods: {
    agregarBanda(){
    const nuevaBanda = {
    id : id,
    genero : genero,
    integrantes : integrantes
    }},
    async enviarBanda(){
      this.limpiarCampos();
      console.log(nuevaBanda);
    },
    limpiarCampos(){      
      this.bandGender = '';
      this.bandName = '';
      this.integranteNuevo = '';
      this.integrantesBanda = [];
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