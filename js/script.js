


// Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, 
// che è caratterizzato da: nome, età, colore e sesso.
// Tramite il forEach(), stampare in pagina tutti i gattini, 
// ciascuno con il proprio colore e il proprio nome.




// Milestone 2 Dividere i gatti in due contenitori distinti in base 
// al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, 
// se femmina, o di blu, se maschio. 
// Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.




// Milestone 3 Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, 
// inserendo solamente nome, colore e opacità del fiocco per ogni gatto.




// DEFINIRE UN ARRAY DI OGGETTI CHE RAPPRESENTANO  I GATTI
var gatti = [

    {nome: 'Garfield', eta: 20,  colore: '	#FF1493',  sesso: 'M'},

    {nome: 'Romeo', eta: 6,  colore: '	#FF8C00',  sesso: 'M'},

    {nome: 'Pallina', eta: 3,  colore: '	#FF00FF',  sesso: 'F'},

    {nome: 'Micio', eta: 12,  colore: '	#FFFF00',  sesso: 'M'},

    {nome: 'Luna', eta: 2,  colore: '	#7CFC00',  sesso: 'M'},

    {nome: 'Chicco', eta: 15,  colore: '	#ADD8E6',  sesso: 'F'},

    {nome: 'Leo', eta: 10,  colore: '	#800000',  sesso: 'M'}

];



// TRAMITE IL FOREACH SAMPARE TUTTI I GATTINI CIASCUNO CON IL PROPRIO COLORE E NOME

gatti.forEach((element, index, array) => {

    if (element.eta < 10) {

        console.log('Nome: ' + element.nome + '   ' + 'Colore: ' + element.colore);
    }

});