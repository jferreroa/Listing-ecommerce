<template>
    <div class="contenedor">
        <Cabecera1/>
        <ListingContenedor/>
        <footer>hola pepito</footer>
    </div>
</template>
  
<script>

import Cabecera1 from '../Cabecera/Cabecera.vue';
import ListingContenedor from '../Buscador/ListingContenedor.vue';

export default {
    name: 'ContenedorC',
    components: {
    Cabecera1,
    ListingContenedor
}
}
</script>
  
<style>
.contenedor{
    width: 100vw;
    position: relative;
    margin-left: -50vw;
    left: 51%;
}
.contenedor>div{
    width: inherit;
    height: inherit;
}
</style>
  