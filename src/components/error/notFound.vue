<template>
  <div>
    <h2>Pagina no encontrada</h2>
    <div id="link">
      <p>Ir hacia la </p>
      <router-link to="/bandas">Página principal</router-link>
    </div>
  </div>
</template>
<style>
h2 {
  padding: 2%;
}
#link {
  display: flex;
  justify-content: center;
  margin: 3%;
}
#link p {
  margin: 0%;
}
#link a {
  margin: 0% 5px;
}
</style>