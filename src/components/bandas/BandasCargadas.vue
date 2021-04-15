<template>
  <div>
    <h1>Todas las bandas</h1>
    <!-- <v-data-table
      id="tabla"
      :headers="headers"
      :items="bandasAgregadas"
      item-key="nombre"
      class="elevation-1"
      :expanded.sync="expanded"
      show-expand
    >
      <template v-slot:expanded-items="{headers}">
        <td :colspan="headers.length"> -->
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th>Nombre de banda</th>
                  <th>Genero</th>
                  <th>Integrantes</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in bandasAgregadas" :key="item.nombre">
                  <td>{{ item.nombre }}</td>
                  <td>{{ item.genero }}</td>
                  <td>{{ item.integrantes}}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        <!-- </td>
      </template>
    </v-data-table> -->
    <v-list>
      <v-btn id="cargarBandas" @click.prevent="cargarBandas">
        Cargar bandas
      </v-btn>
      <v-btn @click.prevent="borrarbandas"> Borrar bandas </v-btn>
      <v-dialog v-model="dialog" width="80vw">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on"> Nueva banda </v-btn>
        </template>
        <template>
          <v-card id="card">
            <bandas-registro
              :dialog="true"
              v-on:enviarBanda="cargarBandas"
              v-on:volverAtras="dialog = false"
            ></bandas-registro>
          </v-card>
        </template>
      </v-dialog>
      <router-view />
    </v-list>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import BandasRegistro from "../registro/BandasRegistro.vue";
export default {
  components: {
    BandasRegistro,
  },
  data() {
    return {
      // expanded: [],
      dialog: false,
      // headers: [
      //   {
      //     text: "Nombre de la banda",
      //     align: "left",
      //     sortable: false,
      //     value: "name",
      //   },
      //   {
      //     text: "Genero",
      //     align: "left",
      //     sortable: false,
      //     value: "name",
      //   },
      //   {
      //     text: "Integrantes",
      //     align: "left",
      //     sortable: false,
      //     value: "name",
      //   },
      // ],
    };
  },
  async created() {
    await this.loadBandas();
  },
  computed: {
    ...mapGetters("bandas", ["bandasAgregadas"]),
  },
  methods: {
    ...mapActions({
      loadBandas: "bandas/loadBandas",
      deleteBandas: "bandas/deleteBandas",
    }),
    cargarBandas() {
      this.loadBandas();
      this.dialog = false;
    },
    async borrarbandas() {
      const response = await this.deleteBandas();
      if (response.status === 200) {
        alert("Se borraron todas las bandas");
        this.loadBandas();
        return response;
      }
    },
  },
};
</script>

<style scoped>
td {
  text-align: left;
}
#tabla {
  margin: 0% 8vw;
}
#card {
  margin: 0;
}
h1 {
  margin-bottom: 3%;
}
button {
  margin: 3%;
  margin-bottom: 0%;
}
</style>