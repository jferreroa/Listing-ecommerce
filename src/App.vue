<template>
  <div class="App">
   
    <ContenedorGlobal1 />
  </div>
</template>

<script>

import ContenedorGlobal1 from './components/Contenedor/ContenedorGlobal.vue'

export default {
  name: 'App',
  components: {
    ContenedorGlobal1
  }
}
</script>

<style>


body {
width: auto;
  display: flex;
  justify-content: center;
  height: auto;
  max-width: 1500px;
  width: 100%;
  
}

body>div {
  width: inherit;
}
</style>
