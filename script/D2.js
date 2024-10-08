/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let n1 = 47
let n2 = 13
let biggest

if (n1 > n2) {
  biggest = n1
  console.log('Il numero più grande è n1, pari a', biggest)
} else if (n2 > n1) {
  biggest = n2
  console.log('Il numero più grande è n2, pari a', biggest)
} else {
  console.log('n1 e n2 sono uguali')
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let n3 = 5 // applicando valore 5 alla variabile "n3" l'algoritmo ritorna in console la scritta EQUAL

if (n3 === 5) {
  console.log('EQUAL')
} else {
  console.log('NOT EQUAL')
}

n3 = 8 // assegnando nuovo valore diverso da 5 alla variabile "n3" l'algoritmo ritorna in console la scritta NOT EQUAL

if (n3 === 5) {
  console.log('EQUAL')
} else {
  console.log('NOT EQUAL')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let n4 = 45 // applicando valore divisibile per 5 alla variabile "n4" l'algoritmo ritorna in console la scritta "divisibile per 5"

if (n4 % 5 === 0) {
  console.log('n4 è divisibile per 5')
} else {
  console.log('n4 non è divisibile per 5')
}

n4 = 33 // assegnando nuovo valore non divisibile per 5 alla variabile "n4" l'algoritmo ritorna in console la scritta "non divisibile per 5"

if (n4 % 5 === 0) {
  console.log('n4 è divisibile per 5')
} else {
  console.log('n4 non è divisibile per 5')
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let n5 = 23
let n6 = 15

if (n5 === 8 || n6 === 8 || n5 - n6 === 8 || n6 - n5 === 8) {
  console.log(
    'Uno dei numeri ha valore pari a 8 o la loro sottrazione da valore pari a 8'
  )
} else {
  console.log(
    'Nessuno dei numeri ha valore pari a 8 o la loro sottrazione da valore diverso da 8'
  )
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let product1 = 25
let product2 = 13
let product3 = 15

let totalShoppingCart = product1 + product2 + product3

if (totalShoppingCart <= 50) {
  totalShoppingCart = totalShoppingCart + 10
  console.log(
    'Totale checkout:',
    totalShoppingCart,
    '(costo di spedizione pari a 10)'
  )
} else {
  console.log(
    'Totale checkout:',
    totalShoppingCart,
    '(costo di spedizione gratuito per ordine superiore a 50)'
  )
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

totalShoppingCart = (product1 + product2 + product3) * 0.8 // applico un fattore correttivo che, per il Black Friday considera solo l'80% del totale (100% - 20%)

if (totalShoppingCart <= 50) {
  totalShoppingCart = totalShoppingCart + 10
  console.log(
    'Totale checkout:',
    totalShoppingCart,
    '(costo di spedizione pari a 10)'
  )
} else {
  console.log(
    'Totale checkout:',
    totalShoppingCart,
    '(costo di spedizione gratuito per ordine superiore a 50)'
  )
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let a = 55
let b = 85
let c = 13

if (a < b && b < c) {
  console.log(a, b, c)
} else if (a < c && c < b) {
  console.log(a, c, bb)
} else if (b < a && a < c) {
  console.log(b, a, c)
} else if (b < c && c < a) {
  console.log(b, c, a)
} else if (c < a && a < b) {
  console.log(c, a, b)
} else if (c < b && b < a) {
  console.log(c, b, a)
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let x = 'ciao'
if (typeof x === 'number') {
  console.log('La variabile "x" è di tipo number')
} else {
  console.log('La variabile "x" non è di tipo number')
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let y = 33
if (y % 2 === 0) {
  console.log('Il numero "y" è PARI')
} else {
  console.log('Il numero "y" è DISPARI')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
if (val < 5) {
  console.log('Meno di 5')
} else if (val < 10) {
  console.log('Meno di 10')
} else {
  console.log('Uguale a 10 o maggiore')
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
console.log(me) // const normale

me.city = 'Toronto'
console.log(me) // const con l'aggiunta di city

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log(me) // const con la cancellazione di lastName

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop()
console.log(me) // const con la cancellazione del solo ultimo elemento di skills

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const emptyArray = []
emptyArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(emptyArray)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

emptyArray[emptyArray.length - 1] = 100
console.log(emptyArray)
