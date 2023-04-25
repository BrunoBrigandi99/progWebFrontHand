import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  tipo_annuncio = 'ANNUNCI RECENTI'

  persone = [
    {nome: "Luca", cognome:"rossi", isOnline: true, color: 'blue'},
    {nome: "Marco", cognome:"verdi", isOnline: false, color: 'red'},
    {nome: "Anna", cognome:"neri", isOnline: false, color: 'yellow'},
    {nome: "Leonardo", cognome:"qwerty", isOnline: true, color: 'green'},
    {nome: "Pannocchia", cognome:"babbo", isOnline: false, color: 'purple'},
  ]

  case = [
    {nome: "Luca", tipo: "monolocale", regione:"Calabria", descrizione: "Monolocale situato a Reggio Calabria", immagine: "https://www.dire.it/wp-content/uploads/2020/06/palazzi-colorati_casa_case_Sigma-Coatings-5-scaled.jpg"},
    {nome: "Marco", tipo: "appartamento", regione:"Liguria", descrizione: "Appartamento situato in Liguria vicino Genova", immagine: "https://www.pozzicase.it/sites/default/files/styles/immagine_teaser_casa/public/casa/thumb%20.jpg?itok=ff8V817r"},
    {nome: "Anna", tipo: "bilocale", regione:"Campania", descrizione: "Bilocale a Napoli centro", immagine: "https://blog.gruppocapital.it/wp-content/uploads/2020/04/bilocale.jpg"},
    {nome: "Leonardo", tipo: "terrazza", regione:"Basilicata", descrizione: "Affittasi terrazza in Basilicata", immagine: "https://www.ferramentavanoli.com/content/images/magazinePosts/899/dt_567.jpeg"},
    {nome: "Goffredo", tipo: "palazzo", regione:"Sicilia", descrizione: "Vendesi Palazzo nel centro storico di Palermo", immagine: "https://upload.wikimedia.org/wikipedia/commons/5/58/Palazzo_Bonaparte_%28Rome%29.jpg"},
  ]

}
