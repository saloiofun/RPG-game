// Fighter Constructor
function Fighter(name, nickname, health, attack, defense, sound, image) {
	this.name = name;
	this.nickname = nickname;
	this.health = health;
	this.attack = attack;
	this.defense = defense;
	this.sound = sound;
	this.image = image;
}

// Street Fighter Characters
var akuma = new Fighter(
	"Akuma",
	"Akuma",
	850,
	30,
	40,
	"https://www.youtube.com/embed/hTD3LhS7TXE?",
	"akuma.png"
	);

var chunLi = new Fighter(
	"Chun-Li",
	"Chun-Li",
	950,
	20,
	40,
	"https://www.youtube.com/embed/EWk3Pm6M3-I?",
	"chunLi.png"
	);

var dan = new Fighter(
	"Dan Hibiki",
	"Dan",
	1000,
	25,
	25,
	"https://www.youtube.com/embed/lmSYC2N8sbs?",
	"dan.png"
	);

var dhalsim = new Fighter(
	"Dhalsim",
	"Dhalsim",
	900,
	30,
	30,
	"https://www.youtube.com/embed/P8zF56ol5Gs?",
	"dhalsim.png"
	);

var ken = new Fighter(
	"Ken Masters",
	"Ken",
	1000,
	30,
	30,
	"https://www.youtube.com/embed/Je7u4onLVC8?",
	"ken.png"
	);

var ryu = new Fighter(
	"Ryu",
	"Ryu",
	1000,
	30,
	30,
	"https://www.youtube.com/embed/swPlzzavzWg?",
	"ryu.png"
	);

var sakura = new Fighter(
	"Sakura Kasugano",
	"Sakura",
	950,
	25,
	25,
	"https://www.youtube.com/embed/2gWGbmGD7r8?",
	"sakura.png"
	);

var elFuerte = new Fighter(
	"El Fuerte",
	"El Fuerte",
	900,
	30,
	30,
	"https://www.youtube.com/embed/FDrBjA9SCPI?",
	"elFuerte.png"
	);

var guile = new Fighter(
	"Guile",
	"Guile",
	950,
	20,
	30,
	"https://www.youtube.com/embed/Q6XM3fDUxLg?",
	"guile.png"
	);

var feiLong = new Fighter(
	"Fei Long",
	"Fei Long",
	1000,
	30,
	30,
	"https://www.youtube.com/embed/kTLwCx6spkU?",
	"feiLong.png"
	);


$(document).ready(function() {

	// Initialize Variables
	var fighters = [akuma, chunLi, dan, dhalsim, ken, ryu, sakura, elFuerte, guile, feiLong];
	var wins = 0;
	var imagesPath = "assets/images/";
	
	// Create fighters

	var fightersRow = $("<div>");
	fightersRow.addClass("row");

	for (var i = 0; i < fighters.length; i++) {
		var fighterCol = $("<div>");
		fighterCol.addClass("col-sm-2 col-md-2");

		var fighterFig = $("<figure>");

		var fighterThumb = $("<img>");
		fighterThumb.addClass("img-responsive fighter-thumb");
		fighterThumb.attr("src", imagesPath + fighters[i].image);

		var fighterCaption = $("<figcaption>");
		fighterCaption.text(fighters[i].nickname);


		fighterFig.append(fighterThumb);
		fighterFig.append(fighterCaption);

		fighterCol.append(fighterFig);
		fightersRow.append(fighterCol);
	}

	$("#characters").append(fightersRow);

	$("figure").on("click", function() {
		$(this).appendTo("#fighter");
	});

});