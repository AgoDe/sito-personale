<template>
    <div class="cv-box">
        <div class="border">
            <h4>Esperienza</h4>


        </div>
    </div>
</template>

<script>
export default {
    data() {
       return {
        esperienza: [
          { // ballsystem
            logo:'ballsystem.png',
            azienda: 'Ballsystem - paintless dent repair',
            data_inizio: '2018-10',
            data_fine:'2021-10',
            ruoli:[ 
                {
                    ruolo: 'Booking Assistant',
                    orario: 'A tempo Pieno',
                    data_inizio:'2018-10',
                    data_fine:'2019-07',
                    descrizione:''
                },
                {
                    ruolo: 'Operations Officer',
                    orario: 'A tempo Pieno',
                    data_inizio:'2019-07',
                    data_fine:'2021-10',
                    descrizione:'Ballsystem opera nel settore Automotive, punto di riferimento nel ripristino delle vetture grandinate a livello europeo. Nel mio ruolo sono responsabile della gestione integrata del processo dalla prima interazione con il cliente fino alla riconsegna del mezzo.',
                },
            ]
          }, 
          { // caritas
            logo:'caritas.jpeg',
            azienda: 'Caritas Diocesana di Perugia',
            data_inizio: '2017-11',
            data_fine:'2018-10',
            ruoli: [
                {
                ruolo: 'Supply Chain Manager',
                orario: 'A tempo Pieno',
                data_inizio:'2017-11',
                data_fine:'2018-10',
                descrizione:'Il progetto "Civis Mei" è finalizzato a mettere in contatto le aziende che incorrono in eccedenze alimentari con le persone che si rivolgono agli Empori della Solidarietà per usufruire gratuitamente di generi alimentari. Nel mio ruolo gestivo la ricerca ed acquisizione di nuove aziende da introdurre nella rete di donazioni, effettuavo la comparazione di preventivi e la gestione degli acquisti delle forniture per la rete degli Empori della Solidarietà.'
                }
            ],
          }, 
          { // bellini foto
            logo:' null.svg',
            azienda: 'Bellini Foto',
            data_inizio: '2017-04',
            data_fine:'2017-07',
            ruoli: [
                {
                ruolo: 'Supply Chain Assistant',
                orario: 'A tempo Pieno',
                data_inizio:'2017-04',
                data_fine:'2017-07',
                descrizione:'Bellini Foto opera nel settore della chimica fotografica in ambito professionale ed amatoriale. Nel mio ruolo effettuavo la programmazione della produzione e la rendicontazione degli ordini ai fornitori esterni in base alle disponibilità di magazzino materie prime & prodotti finiti.'
                }
            ],
          }, 
          { // ferrini
            logo:'null.svg',
            azienda: 'Ferrini',
            data_inizio: '2014-04',
            data_fine:'2017-07',
            ruoli: [
                {
                ruolo: 'Quality Control Supervisor',
                orario: 'A tempo Pieno',
                data_inizio:'2014-07',
                data_fine:'2017-07',
                descrizione:'Ferrini opera nel settore tessile, con specializzazione nella nobilitazione dei tessuti e dei filati pregiati. Nel ruolo di supervisor nel reparto di controllo qualità, assistevo il Direttore della produzione nelle varie fasi del processo di analisi necessario per le certificazioni ISO e l’esportazione dei prodotti. Inoltre portavo avanti la ricerca lo sviluppo di nuove tecniche di nobilitazione dei tessuti e filati pregiati.'
                }
            ],
          }, 
        ], // end of esperienza
       }
    }
}
</script>

<style lang="scss" scoped>
@import '/src/styles/main.scss';




</style>