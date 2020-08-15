//Coucou Diane ! ♥
var characterName = "Lorem" ;

var funFacts = [] ;

var strengh = -1 ;

var agility = -1 ;

var stamina = -1 ;

var charisma = -1 ;

var luck = -1 ;

var intelligence = -1 ;

var gender = "enby";

const MALE_NAME = ["Pierre", "Marceau", "Yvan", "Léopold", "Carmin"];

const FEMALE_NAME = ["Alice", "Marie", "Yélinda", "Thérèse", "Lucie"];

const GENDERS = ["Male", "Female"];

const HAIR_COLORS = ["red", "dark", "blond"];

const EYES_COLORS = ["blue", "green", "brown"];

const MALE_LAYERS= [
	[//Back Hair 0
		[4, "/HairBack/"]
	],
	[//Face 1
		[10, "/Face/face"]
	],
	[//Eyes 2
		[4, "/Eyes/"]
	],
	[//Clothes 3
		[3, "/Clothes/farmer"],
		[3, "/Clothes/homeless"],
		[3, "/Clothes/noble"],
	],  
	[//Front Hair 4
		[12, "/HairFront/"]
	],
	[//Accessory 5
	]
];

const FEMALE_LAYERS= [
	[//Back Hair 0
		[13, "/HairBack/"]
	],
	[//Face 1
		[10, "/Face/face"]
	],
	[//Eyes 2
		[4, "/Eyes/"]
	],
 
	[//Clothes 3
		[3, "/Clothes/farmer"],
		[3, "/Clothes/homeless"],
		[3, "/Clothes/noble"],
	],  
	[//Front Hair 4
		[9, "/HairFront/"]
	],
	[//Accessory 5
	]
];

const SKINS_LAYERS = [
	"images/skin1.png",
	"images/skin2.png",
	"images/skin3.png",
	"images/skin4.png"
];

/*
const HAT_PATH = new Map();
HAT_PATH.set("farmer1", "path");
HAT_PATH.set("noble1", "path");*/

/**
 * Fonction qui créer un personnage aléatoirement
 * @param layers : Tableau qui contient les layers de base d'un genre 
 * @returns : un tableau qui contient les chemin relatif aux images dans l'ordre de superposition de l'arrière vers l'avant
 */
function getRandomCharacterFromLayer(layers){
	var paths = [];
	var hairColor = getRandomElement(HAIR_COLORS);
	var eyesColor = getRandomElement(EYES_COLORS);

	paths.push("images/background.png");
	layers.forEach((layer, index, array) => {
		var newPath = "images";

		if(gender == "Male"){
			newPath += "/Homme";
		} else {
			newPath += "/Femme";
		}
		var randomRow = getRandomElement(layer);

		switch (index) {
			case 0:
				newPath += randomRow[1] + hairColor + "Back" + getRandomIntInRange(1, randomRow[0]) + ".png";
				paths.push(newPath);
				break;
			case 4:
				newPath += randomRow[1] + hairColor + "hair" + getRandomIntInRange(1, randomRow[0]) + ".png";
				paths.push(newPath);
				break;
			case 5:
				/* accessoire
				if(paths[4].includes("farmer1.png") && getRandomInt(2) == 1){
					//console.log("add");
					paths.push(HAT_PATH.get("farmer1"));
				} else if (paths[4].includes("noble1.png") && getRandomInt(2) == 1){
					//console.log("add");
					paths.push(HAT_PATH.get("noble1"));
				} else {
					var indexRandomAccessory = getRandomIntInRange(0, randomRow.length);
					if ( indexRandomAccessory != randomRow.length ){
						newPath += randomRow[indexRandomAccessory] + ".png";
					}
				}*/
				break;
			case 2:
				newPath += randomRow[1] + eyesColor + "eyes" + getRandomIntInRange(1, randomRow[0]) + ".png";
				paths.push(newPath);
				break;
			case 1:
				paths.push(getRandomElement(SKINS_LAYERS));
			default:
				newPath += randomRow[1] + getRandomIntInRange(1, randomRow[0]) + ".png";
				paths.push(newPath);
				break;
		}
	});
	paths.push("images/cadre.png");
	return paths;
	
}

// Déclare une variable "verbes" intialise un tableau [] dont les éléments sont des strings.
//
const VERBES = [
	"Aime manger", "Mange", "Tricotte", "Range", "Fouette", "Echange", "Dors sur", "Hurle sur", "Fait des calins à", "Ressemble à", "Vends",
	"Chante avec", "Discute avec", "Lance", "Ecoute", "Juge", "Aide", "Mesure", "Surveille", "Saute sur", "Drague", "A passer une nuit avec", "S'est réveiller avec",
	"Bois avec", "Peint", "Sculpte", "Rêve", "Nage avec", "Cours après", "Souffle sur"
];

const NOMS = [

	"un chien", "un chat", "un étalon", "des oeufs", "sa soeur", "son frère", "son amant(e)", "une gougandine", "un gourgandin", "des brocolis",
	"des haricots", "une écharpe", "une étable", "une pierre", "une pomme", "une casserole", "une armoire", "une plume", "un sac de blé",
	"de la farine", "des bijoux", "une chope de bierre", "un tabeau", "un seau de bouse", "des vétements", "une musique féstive", "un bandit",
	"un fantôme", "un lion", "une purée"
];

const ADJECTIFS = [
	"mou/molle", "dégoutant(e)", "vigoureux/se", "étrange", "barvard(e)", "effrayant(e)", "paresseux(se)",
	"avec rage", "avec joie", "ironiquement", "passionément", "méchament", "en en mettant partout",
	"glissant(e)", "dont l'odeur est bizarre", "dont le calme est impressionant", "dont la rage est au sumum", "bruyant(e)",
	"gluant(e)", "sec/sèche", "volant(e)", "vandale", "hors la loi", "pervers(e)", "idiot(e)", "énervant(e)",
];

const AUTRES = [
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

	
	gender = getRandomElement(GENDERS);

	characterName = getRandomName(gender);

	strengh = getRandomIntInRange(1,12);
	agility = getRandomIntInRange(1,12);
	intelligence = getRandomIntInRange(1,12);
	luck = getRandomIntInRange(1,12);
	stamina = getRandomIntInRange(1,12);
	charisma = getRandomIntInRange(1,12);

	funFacts = [];
	funFacts.push(createFunFact());
	funFacts.push(createFunFact());

	updateElement("Name", characterName); 

	updateElement("Fact1",funFacts[0]); 
	updateElement("Fact2",funFacts[1]); 

	updateElement("stat1","Force: "+ strengh); 
	updateElement("stat2","Agilité: "+ agility); 

	var pathImages  ;
	if(gender == "Male")
	{ 
		pathImages = getRandomCharacterFromLayer(MALE_LAYERS);
	}
	else
	{ 
		pathImages = getRandomCharacterFromLayer(FEMALE_LAYERS);
	}
	
	var canvas = document.getElementById('photo');
	var ctx = canvas.getContext('2d');

	var areReady = [];
	for(let path of pathImages){
		areReady.push(false);
	}

	var images = [];
	
	pathImages.forEach(function (path, index, array){
		let image = new Image();
		image.addEventListener("load", function () {
			areReady[index] = true;
			let allReady = true;
			for(let check of areReady){
				allReady = allReady && check;
			}
			if(allReady){
				for(let img of images){
					ctx.drawImage(img, 0, 0);
				}
			}
		});
		image.src = path;
		images.push(image);
		
	});

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
	var verbeAleatoire = getRandomElement(VERBES);
	var nomAleatoire = getRandomElement(NOMS);
	var adjectifAleatoire = getRandomElement(ADJECTIFS);
	var autreAleatoire = getRandomElement(AUTRES);

	return verbeAleatoire + " " + nomAleatoire + " " + adjectifAleatoire + " " + autreAleatoire + ".";

}

function getRandomName(randomGender) {
	if (randomGender == "Male") {
		return getRandomElement(MALE_NAME);
	} else {
		return getRandomElement(FEMALE_NAME);
		
	}

}

function getRandomIntInRange(min, max) {
	return getRandomInt(max - min + 1) + min;
 
}

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