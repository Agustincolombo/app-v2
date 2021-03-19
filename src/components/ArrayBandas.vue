<template>
<v-card>
  <v-row id='informacion'>
    <v-col>
      <h2>{{id}}</h2>
      <h3>{{genero}}</h3>
    </v-col>
    <v-spacer></v-spacer>
    <v-col>
      <v-list v-for="item in integrantes" :key="item">
        <v-list-item>{{item}}</v-list-item>
      </v-list>
    </v-col>
    <v-col>
      <v-btn @click="borrar(id)" class="mx-2" fab dark color="indigo" small>
        <v-icon dark> mdi-minus </v-icon>
      </v-btn>
    </v-col>
  </v-row>
</v-card>
</template>

<script>
export default {
  props:['id', 'genero', 'integrantes','borrar']
};
</script>

<style>
#informacion{
    display: flex;
    align-items: center;
}
.v-list{
  padding: 0%;
}
</style>