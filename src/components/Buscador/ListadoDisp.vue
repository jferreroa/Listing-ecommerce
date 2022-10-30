<template>
    <main class="contenedorDispositovs">
        <div v-if="arrayDispositivos" class="results">Resultados:{{arrayDispositivos.length}}</div>
        <div v-if="arrayDispositivos.length > 0" class="dispositivos-contenedor">
            <div class="dispositvo" v-for="dispositivo in arrayDispositivos" :key="dispositivo.Name">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <div>
                                <img class="imgDisp" v-bind:src="dispositivo.image" height="20%" width="80" />
                            </div>
                            <div class="modelo">
                                <h6>{{dispositivo.brand}}</h6>
                                <div>{{dispositivo.model}}</div>
                            </div>
                        </div>
                        <div class="flip-card-back">
                            <h5>Características</h5>
                            <p>Camara: {{dispositivo.camara}}</p>
                            <p>Batería: {{dispositivo.battery}}</p>
                        </div>
                    </div>
                </div>
                <div class="buy">Precio</div>
            </div>
        </div>
    </main>
</template>
  
<script>
import algoliasearch from 'algoliasearch/lite';
export default {
    name: 'ListadoDisp',
    data: () => {
        return {
            queryParaUsar: '',
            arrayDispositivos: [],
            client: algoliasearch(process.env.VUE_APP_CLIENT_ID, process.env.VUE_APP_CLIENT_TOKEN),
        }
    },
    props: {
        queryBuscada: {
            type: String,
            default() {
                return ''
            }
        }
    },
    created() {
        if (localStorage.getItem('query'))
            this.queryParaUsar = localStorage.getItem('query')
        this.getDispositivos()

        console.log(process.env.VUE_APP_CLIENT_ID)
        //prubea api devices
        // fetch('http://phonedb.info/models')
        //     .then(response => response.json())
        //     .then(data => console.log(data))


    },
    methods: {
        getDispositivos: function () {
            const index = this.client.initIndex('osp-portales-dispositivos');
            index.search(this.queryParaUsar).then(({ hits }) => {
                this.arrayDispositivos = hits
            });
        }
    },
    watch: {
        queryBuscada: function (nuevo, viejo) { //cada vez que cambien las props
            console.log("query anterior y posterior: ", viejo, " ", nuevo)
            this.queryParaUsar = nuevo
            localStorage.setItem('query', nuevo)
            this.getDispositivos()
        }
    },

    //watch de la queryBuscada y cuando cambie llamar a la api
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dispositivos-contenedor {
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
    justify-content: space-between;
}


.dispositvo {
    display: flex;
    flex-direction: column;
    box-shadow: -2px 0px 16px -3px #000000;
    width: 200px;
    margin-left:80px;
    margin-right:80px;
    margin-top:50px;
    /* flex: 20% */
    
    /* margin-left: 250px;
    margin-top: 50px; */

}

.imgDisp {
    margin-left: 30%;
}

.results{
    margin-right: 53px;
}

.imgDisp {
    display: flex;
    margin-top: 10%;
}

.modelo {
    margin-top: 10px;
}

.modelo>* {
    text-overflow: ellipsis;
}



.flip-card {
    

    background-color: transparent;
     width: 200px; 
    height: 195px;
    perspective: 500px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
    transition-delay: 700ms;
    cursor:zoom-in;
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-front {
    background-color: rgba(238, 238, 238, 0.837);

}

.flip-card-back {
    background-color: rgba(238, 238, 238, 0.837);
    color: black;
    transform: rotateY(180deg);
}


.buy {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    background-color: rgb(203, 51, 51);
    cursor: pointer;
    color: white;
}

.contenedorDispositovs{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
  