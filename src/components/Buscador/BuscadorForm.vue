<template>
    <main>
        <div class='buscador'>
            <b-form-input :state="validQuery"  size="lg" type='search' class='input-buscador' placeholder="Escribe para buscar" v-model="query" />
            <b-button variant="outline-dark" @click="$emit('queryBuscada',query)">Buscar</b-button>
        </div>
    </main>
</template>
  
<script>
export default {
    name: 'BuscadorFormulario',
    props: {

    },
    data: ()=> {
        return {
            query: "", 
            validQuery :false
        }
    },
    methods:{
        
    },
    watch:{
        query: function (nuevo, viejo) { //cada vez que cambien las props
            console.log(nuevo, viejo)
            if(nuevo.length >= 3){
                this.validQuery = true;
            }else{
                this.validQuery = false;
            }
        } 
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buscador {
    display: flex;
    margin: 10px;
    
}
</style>
  