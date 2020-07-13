// creo un arrei con alcuni cognomi al suo interno
var lastNames = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

// creo una variabile con il cognome scritto dall'utente
var userLastName = prompt('Inserisci il tuo cognome');

// rendo maiuscola la prima lettera e minuscole le altre (del cognome dell'utente)
var big = userLastName.slice(0,1).toUpperCase();
var small = userLastName.slice(1,userLastName.length).toLowerCase();
userLastName = big + small;

// controllo se il cognome inserito dall'utente è già presente nell'array e se non lo è lo inserisco
var x;
var check = true;
for (x in lastNames) {
    if (lastNames[x] == userLastName) {
        check = false;
    }
}
if (check) {
    lastNames.push(userLastName);
}


// ordine l'array alfabeticamente
lastNames.sort();

// calcolo la posizione "umana" del cognome dell'utente all'interno dell'array
var humanPosition = lastNames.indexOf(userLastName) + 1;

// stampo l'array ordinato
var i;
for (i in lastNames) {
    document.getElementById('list').innerHTML += '<li>' + lastNames[i] + '</li>';
}

// stampo la posizione del cognome dell'utente all'interno dell'array
document.getElementById('position').innerHTML = 'Il cognome ' + userLastName + ' si trova alla posizione ' + humanPosition;
