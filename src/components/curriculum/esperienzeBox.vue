<template>
    <div class="cv-container">
      <div class="border">
        <h4>Esperienza</h4>

        <div class="cv-box"
        v-for="(item, index) in esperienza"
        :key="index"
        >
          <img :src="`/images/icon-cv/${item.logo}`" alt="logo ballsystem">
          <div class="description">
          
            <h4> {{item.ruolo}} </h4>
            <div> {{item.azienda }} </div>
            <div class="subtext">{{item.data_inizio }} - {{item.data_fine}} </div>
            <div class="subtext">Perugia, Umbia, Italy</div>
            <div class="py-3"> {{ item.descrizione }} </div>
            
          </div> <!-- end of title -->

            
              
        </div> <!-- end of cv-box -->
      </div>
    </div> <!-- end of cv-container -->
</template>

<script>
export default {
    data() {
       return {
        esperienza: [
          { // boolean
            logo:'boolean.png',
            azienda: 'Boolean Careers',
            data_inizio: '2021-10',
            data_fine:'2022-04',
            ruolo: 'Studente',
            orario: 'A tempo pieno',
            descrizione:'Boolean è una scuola tech per diventare Full Stack Web Developer interamente on-line. Nei 6 mesi di corso ho appreso varie tecnologie sia front-end che back-end, come html, css, javascript, php e mysql, con i framework Bootstrap, vueJS e laravel',
          }, 
          { // ballsystem
            logo:'ballsystem.png',
            azienda: 'Ballsystem - paintless dent repair',
            data_inizio: '2018-10',
            data_fine:'2021-10',
            ruolo: 'Operations Officer',
            orario: 'A tempo pieno',
            descrizione:'Ballsystem opera nel settore Automotive, punto di riferimento nel ripristino delle vetture grandinate a livello europeo. Nel mio ruolo ero responsabile della gestione integrata del processo dalla prima interazione con il cliente fino alla riconsegna del mezzo.',
          }, 
          { // caritas
            logo:'caritas.jpeg',
            azienda: 'Caritas Diocesana di Perugia',
            data_inizio: '2017-11',
            data_fine:'2018-10',
            ruolo: 'Supply Chain Manager',
            orario: 'A tempo Pieno',
            descrizione:'Il progetto "Civis Mei" è finalizzato a mettere in contatto le aziende che incorrono in eccedenze alimentari con le persone che si rivolgono agli Empori della Solidarietà per usufruire gratuitamente di generi alimentari. Nel mio ruolo gestivo la ricerca ed acquisizione di nuove aziende da introdurre nella rete di donazioni, effettuavo la comparazione di preventivi e la gestione degli acquisti delle forniture per la rete degli Empori della Solidarietà.'
            
          }, 
          { // bellini foto
            logo:'null.svg',
            azienda: 'Bellini Foto',
            data_inizio: '2017-04',
            data_fine:'2017-07',
            ruolo: 'Supply Chain Assistant',
            orario: 'A tempo pieno',
            descrizione:'Bellini Foto opera nel settore della chimica fotografica in ambito professionale ed amatoriale. Nel mio ruolo effettuavo la programmazione della produzione e la rendicontazione degli ordini ai fornitori esterni in base alle disponibilità di magazzino materie prime & prodotti finiti.'
          }, 
          { // ferrini
            logo:'null.svg',
            azienda: 'Ferrini',
            data_inizio: '2014-04',
            data_fine:'2017-07',
            ruolo: 'Quality Control Supervisor',
            orario: 'A tempo pieno',
            descrizione:'Ferrini opera nel settore tessile, con specializzazione nella nobilitazione dei tessuti e dei filati pregiati. Nel ruolo di supervisor nel reparto di controllo qualità, assistevo il Direttore della produzione nelle varie fasi del processo di analisi necessario per le certificazioni ISO e l’esportazione dei prodotti. Inoltre portavo avanti la ricerca lo sviluppo di nuove tecniche di nobilitazione dei tessuti e filati pregiati.'
           
          }, 
          { // sterling
            logo:'sterling.jpeg',
            azienda: 'Sterling Chemical Malta Limited',
            data_inizio: '2014-02',
            data_fine:'2014-05',
            ruolo: 'Operatore di produzione',
            orario: 'A tempo pieno',
            descrizione:'Addetto al reparto produttivo dei principi attivi destinati alla produzione di prodotti farmaceutici.'
           
          }, 
          { // ferrini
            logo:'null.svg',
            azienda: 'Ferrini',
            data_inizio: '2012-11',
            data_fine:'2014-05',
            ruolo: 'Tecnico di laboratorio',
            orario: 'A tempo pieno',
            descrizione:'Addetto di laboratorio per i test pre-lavorazione sulla materia prima al fine di migliorare la qualità del prodotto finito.'
           
          }, 
          { // itis
            logo:'null.svg',
            azienda: 'ITIS "A. Volta',
            data_inizio: '2007-09',
            data_fine:'2012-07',
            ruolo: 'Studente',
            orario: 'a tempo pieno',
            descrizione:'Qualifica di perito capotecnico industriale Chimico'
           
          }, 
        ], // end of esperienza
       }
    }
}
</script>

<style lang="scss" scoped>
@import '/src/styles/main.scss';




</style>