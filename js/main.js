
 var MyName;
 var MyAge;
 var MyJourney;
 var MyTicket;
 var ramoElse;

 MyName = prompt('Come ti chiami?');
 console.log(MyName);
 MyJourney = prompt('Quanti chilometri devi percorrere?');
 console.log(MyJourney);
 MyAge = prompt('Quanti anni hai?');
 console.log(MyAge);
 

 //Verifica input
 if (isNaN(MyJourney)) {
    alert("Rispondi utilizzando esclusivamente valori numerici");
    
    if (isNaN(MyJourney))
    document.getElementById("MyTicket").innerHTML = ("Indicare la lunghezza del percorso esclusivamente in valori numerici ");
}
 else {
     console.log(ramoElse);

     //Categorie biglietti
     const bigliettostandard = Math.round((( 0.21 * MyJourney) + Number.EPSILON) * 100 / 100);
     const bigliettoYoung = Math.round((( 0.21 * MyJourney * 0.8) + Number.EPSILON) * 100 / 100);
     const bigliettoSenior = Math.round((( 0.21 * MyJourney * 0.6) + Number.EPSILON) * 100 / 100);


     //Prezzo Bilgietto
     if ((MyAge < 18)) {
         document.getElementById("MyTicket").innerHTML = ("Il prezzo del biglietto è di €" + bigliettostandard);
     }
     
     else if ((MyAge >= 18) && (MyAge <= 65)) {
        document.getElementById("MyTicket").innerHTML = ("Il prezzo del biglietto è di € " + bigliettoYoung);
     }

     else ((MyAge > 65)) 
        document.getElementById("MyTicket").innerHTML = ("Il prezzo del biglietto è di € " + bigliettoSenior);
     
 }

 if (isNaN(MyAge)) {
    alert("Rispondi utilizzando esclusivamente valori numerici");
    
    if (isNaN(MyAge))
    document.getElementById("MyTicket").innerHTML = ("Indicare l'età in valori numerici ");
}