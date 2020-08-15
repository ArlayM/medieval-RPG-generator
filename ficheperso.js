var name = "Lorem" ;

var funFacts = [] ;

var strengh = -1 ;

var agility = -1 ;

var stamina = -1 ;

var charisma = -1 ;

var luck = -1 ;

var intelligence = -1 ;

var male = 0;

const nomMasc = ["Pierre", "Marceau", "Yvan", "Léopold", "Carmin"];

const nomFem = ["Alice", "Marie", "Yélinda", "Thérèse", "Lucie"];

const gender = ["Male", "Female"];


// Déclare une variable "verbes" intialise un tableau [] dont les éléments sont des strings.
//
const verbes = [
	"Aime manger", "Mange", "Tricotte", "Range", "Fouette", "Echange", "Dors sur", "Hurle sur", "Fait des calins à", "Ressemble à", "Vends",
	"Chante avec", "Discute avec", "Lance", "Ecoute", "Juge", "Aide", "Mesure", "Surveille", "Saute sur", "Drague", "A passer une nuit avec", "S'est réveiller avec",
	"Bois avec", "Peint", "Sculpte", "Rêve", "Nage avec", "Cours après", "Souffle sur"
];

const nom = [

	"un chien", "un chat", "un étalon", "des oeufs", "sa soeur", "son frère", "son amant(e)", "une gougandine", "un gourgandin", "des brocolis",
	"des haricots", "une écharpe", "une étable", "une pierre", "une pomme", "une casserole", "une armoire", "une plume", "un sac de blé",
	"de la farine", "des bijoux", "une chope de bierre", "un tabeau", "un seau de bouse", "des vétements", "une musique féstive", "un bandit",
	"un fantôme", "un lion", "une purée"
];

const adjectif = [
	"mou/molle", "dégoutant(e)", "vigoureux/se", "étrange", "barvard(e)", "effrayant(e)", "paresseux(se)",
	"avec rage", "avec joie", "ironiquement", "passionément", "méchament", "en en mettant partout",
	"glissant(e)", "dont l'odeur est bizarre", "dont le calme est impressionant", "dont la rage est au sumum", "bruyant(e)",
	"gluant(e)", "sec/sèche", "volant(e)", "vandale", "hors la loi", "pervers(e)", "idiot(e)", "énervant(e)",
];

const autre = [
	"dans la grange", "dans un lac", "dans une prairie",
	"dans son grenier", "en plein centre ville", "au bar", "à l'auberge", "dans un bordel", "chez sa mère", "chez son père", "dans des ruines", "sur la route",
	"sur une balle de foin", "dans une carrière", "dans une grotte", "sur une flaque de boue", "chez le boulanger", "en prison", "sur un échafaudage", "sur un pont",
	"dans une tour", "par terre", "dans les airs", "à la morgue", "dans un trou", "sur un bateau", "dans un lit", "sur sa chaise préférée",
];
// Affiche dans la console un mot aléatoire du tableau verbe

// Elle retourne un nombre entier aléatoire compris entre 0 et Max exclu
// Max = X
function getRandomInt(max) {
	// Math.floor (x): Elle génere un entier au plus bas a partir de x  ex: 4.7 = 4
	// Math.random Génère un nombre aléatoire entre 0 et 1 exclu    [0 1[
	return Math.floor(Math.random() * Math.floor(max));
}



// Renvois un élement aléatoire du tableau "tab". Tab peut prendre les valeurs de n'importe quel tableau. 
function getRandomElement(tab) {
	// Cherche un élement aléatoire dans la longeur du tableau.
	return tab[getRandomInt(tab.length)];

}


function createSheet() {
	name = getRandomName();

	strengh = getRandomIntInRange(1,12);
	agility = getRandomIntInRange(1,12);
	intelligence = getRandomIntInRange(1,12);
	luck = getRandomIntInRange(1,12);
	stamina = getRandomIntInRange(1,12);
	charisma = getRandomIntInRange(1,12);

	funFacts = [];
	funFacts.push(createFunFact());
	funFacts.push(createFunFact());

	updateElement("Name",name); 

	updateElement("Fact1",funFacts[0]); 
	updateElement("Fact2",funFacts[1]); 

	updateElement("stat1","Force: "+ strengh); 
	updateElement("stat2","Agilité: "+ agility); 

	
}

function updateElement(id, text) {
	var element = document.getElementById(id);
	element.innerHTML = text;
}


function addElement(text) {
	// crée un nouvel élément p
	var newP = document.createElement("p");
	// et lui donne un peu de contenu
	var newContent = document.createTextNode(text);
	// ajoute le nœud texte au nouveau div créé
	newP.appendChild(newContent);

	document.body.appendChild(newP);
}

function addH1(grosTitre) {
	// crée un nouvel élément p
	var newH1 = document.createElement("h1");
	// et lui donne un peu de contenu
	var newContent = document.createTextNode("Leon");
	// ajoute le nœud texte au nouveau div créé
	newH1.appendChild(newContent);

	document.body.appendChild(newH1);
	
}



function createFunFact() {
	var verbeAleatoire = getRandomElement(verbes);
	var nomAleatoire = getRandomElement(nom);
	var adjectifAleatoire = getRandomElement(adjectif);
	var autreAleatoire = getRandomElement(autre);

	return verbeAleatoire + " " + nomAleatoire + " " + adjectifAleatoire + " " + autreAleatoire + ".";

}

 


function getRandomName() {
	var randomGender = getRandomElement(gender);
	if (randomGender == "Male") {
		return getRandomElement(nomMasc);
	} else {
		return getRandomElement(nomFem);
		
	}

}
console.log(getRandomName());



function getRandomIntInRange(min, max) {
	return getRandomInt(max - min + 1) + min;
 
}
console.log (getRandomIntInRange(1,12));





// function getRandomElement(gender)

//Devoirs pour demain:
//Avoir un titre de rang 1 qui donne un prénom aléatoire
// titre de rang 2 "Fun facts"
//2 fun facts
// titre de rang 2 "Statistiques"
//Afficher les statistiques forces et agilité random entre 1 et 12 , chaqune dans un <p>
// Force:(12)
// ++ Faire un tableau HTLM
// ++ Chaque ligne = 1 stat ; 2 colonnes ; 1 Nom de stat 2 Nombre de stat