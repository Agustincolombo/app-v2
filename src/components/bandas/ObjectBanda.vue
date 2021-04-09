<template>
  <v-card>
    <v-row id="informacion">
      <v-col>
        <h2>{{ nombre }}</h2>
        <h3>{{ genero }}</h3>
      </v-col>
      <v-spacer></v-spacer>
      <v-col>
        <v-list v-for="item in integrantes" :key="item">
          <v-list-item>{{ item }}</v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: ["nombre", "genero", "integrantes"],
};
</script>

<style>
#informacion {
  display: flex;
  align-items: center;
}
.v-list {
  padding: 0%;
}
</style>