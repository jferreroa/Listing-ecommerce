<template>
  <main>
    <div class='header'>
      <div class='header-izq'>
        <img src="@/assets/LogoMakr-7LSznB.png" alt="" width="50" height="50">
        <div>Segmento</div>
        <div>Dispositivos</div>
        <div>Tarifas</div>
        <div>Otros servicios</div>
      </div>
      <div class='header-derecha'>
        <div>Cesta</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket"
          viewBox="0 0 16 16">
          <path
            d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
        </svg>
        <div class='inicio-sesion'>
          MiRed
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'CabeceraH',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inicio-sesion {
  border: 2px solid;
  padding: 10px;
}

.header {
  display: flex;
  /*align-items: center; */
  /* height:90px; */
  height: auto;
  background-color: black;
  color: white;
  justify-content: space-between;
  /*separar header izq de derecha*/
  flex-wrap: wrap;
  font-family: "Lucida Console", "Courier New", monospace;
}

.header-izq {
  display: flex;
  align-items: center;
}

.header>div>div {
  margin: 10px;
  cursor: pointer;
}

.inicio-sesion{
  background-color: rgb(203, 51, 51);
}

.header-derecha {
  display: flex;
  align-items: center;

  /*flex end */
}

.header>* {
  margin: 10px;
}


</style>
