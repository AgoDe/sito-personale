<template>
     <div class="cv-container">
        <div class="border">
            <h4>Formazione</h4>


        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formazione: [
            { // boolean
                logo:'ballsystem.png',
                ente: 'Boolean',
                data_inizio: '2021-10',
                data_fine:'2022-04',
                qualifica: 'Full Stack Web Developer',
                orario: 'A tempo Pieno',
                descrizione:'Ballsystem opera nel settore Automotive, punto di riferimento nel ripristino delle vetture grandinate a livello europeo. Nel mio ruolo ero responsabile della gestione integrata del processo dalla prima interazione con il cliente fino alla riconsegna del mezzo.',
            }, 
          
        ], // end of formazione
        }
    }
}
</script>

<style lang="scss" scoped>
@import '/src/styles/main.scss';




</style>