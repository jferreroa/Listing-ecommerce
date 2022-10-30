<template>
    <main>
     
           
            <div class='listing'>
                <div class='listing-buscador'>
                    <BuscadorForm @queryBuscada="getQueryFromForm" />
                </div>
                <div class='listing-listado'>
                    <ListadoDisp v-bind:queryBuscada="queryContenedor" />
                </div>
            </div>
           

      

    </main>
</template>
  
<script>
import BuscadorForm from './BuscadorForm.vue';
import ListadoDisp from './ListadoDisp.vue';



export default {
    name: 'App',
    components: {
        BuscadorForm,
        ListadoDisp
    },
    data: () => {
        return {
            queryContenedor: ""
        }
    },
    methods: {
        getQueryFromForm: function (value) {
            if (value.length >= 3)
                this.queryContenedor = value;
            else {
                this.queryContenedor = "";
            }
        }
    }
}
</script>
  
<style scoped>
.listing {

    height: auto;
    border: 1px solid black;
}

.listing {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
}

.contenedor-banners{
    display: flex;
}

.banner{
    
    margin: 15%;
}
</style>
  