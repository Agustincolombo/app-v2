<template>
  <v-container fluid>
    <v-form id="inputs">
      <h1>Registro de banda</h1>
      <v-text-field type="text" label="Nombre" v-model="nameBand" />
      <v-autocomplete
        :items="generos"
        type="text"
        label="Generos"
        v-model="bandGender"
      ></v-autocomplete>
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
      <v-btn @click.prevent="volverAtras">Cancelar</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["dialog"],
  data() {
    return {
      generos: ["Rock", "Pop", "Indie", "Metal"],
      integranteNuevo: "",
      integrantesBanda: [],
      bandGender: "",
      nameBand: "",
    };
  },
  methods: {
    ...mapActions({
      // modulo/action
      sendBanda: "bandas/sendBanda",
    }),
    agregarIntegrante() {
      this.integrantesBanda.push(this.integranteNuevo);
      this.integranteNuevo = "";
    },
    limpiarCampos() {
      this.bandGender = "";
      this.nameBand = "";
      this.integranteNuevo = "";
      this.integrantesBanda = [];
    },
    volverAtras() {
      if (this.dialog === true) this.$emit("volverAtras");
      else this.$router.push("/bandas");
    },
    async enviarBanda() {
      if (
        this.nameBand.length == 0 ||
        this.bandGender.length == 0 ||
        this.integrantesBanda.length == 0
      ) {
        alert("Porfavor, rellene los campos vacios");
      } else {
        const nuevaBanda = {
          nombre: this.nameBand,
          genero: this.bandGender,
          integrantes: this.integrantesBanda,
        };
        const res = await this.sendBanda(nuevaBanda);
        if (res.status == 200) {
          alert("Registrado con exito");
          this.limpiarCampos();
          if (this.dialog === true) this.$emit("enviarBanda");
          else this.$router.push("/bandas");
        } else {
          alert("Hubo un problema");
        }
      }
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 3%;
}
button {
  margin: 0% 3%;
}
#inputs {
  margin: 7vh 0;
  padding: 0 10vw;
}
#integrantes {
  display: flex;
}
</style>