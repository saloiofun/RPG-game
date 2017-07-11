$(document).ready(function() {

// Street Fighter Characters
var fighters = {

	ryu: {
		nickname: "Ryu",
		value: "ryu",
		health: 1000,
		attack: 30,
		counterAttack: 40,
		selected: false,
		active: false,
		image: "ryu.png"
	},

	ken: {
		nickname: "Ken",
		value: "ken",
		health: 1000,
		attack: 30,
		counterAttack: 40,
		selected: false,
		active: false,
		image: "ken.png"
	},

	akuma: {
		nickname: "Akuma",
		value: "akuma",
		health: 900,
		attack: 40,
		counterAttack: 40,
		selected: false,
		active: false,
		image: "akuma.png"
	},

	dan: {
		nickname: "Dan",
		value: "dan",
		health: 1000,
		attack: 25,
		counterAttack: 35,
		selected: false,
		active: false,
		image: "dan.png"
	},

	dhalsim: {
		nickname: "Dhalsim",
		value: "dhalsim",
		health: 900,
		attack: 30,
		counterAttack: 35,
		selected: false,
		active: false,
		image: "dhalsim.png"
	},

	chunLi: {
		nickname: "Chun-Li",
		value: "chunLi",
		health: 950,
		attack: 40,
		counterAttack: 30,
		selected: false,
		active: false,
		image: "chunLi.png"
	},

	sakura: {
		nickname: "Sakura",
		value: "sakura",
		health: 950,
		attack: 25,
		counterAttack: 35,
		selected: false,
		active: false,
		image: "sakura.png"
	},

	guile: {
		nickname: "Guile",
		value: "guile",
		health: 950,
		attack: 30,
		counterAttack: 30,
		selected: false,
		active: false,
		image: "guile.png"
	},

	elFuerte: {
		nickname: "El Fuerte",
		value: "elFuerte",
		health: 900,
		attack: 30,
		counterAttack: 40,
		selected: false,
		active: false,
		image: "elFuerte.png"
	},

	feiLong: {
		nickname: "Fei Long",
		value: "feiLong",
		health: 950,
		attack: 30,
		counterAttack: 40,
		selected: false,
		active: false,
		image: "feiLong.png"
	}
};

var fightersArray = [];
var wins = 0;
var imagesPath = "assets/images/";
var player;
var challenger;
var defaultAttackPoint;
var isPlayerSelected = false;
var isChallengerSelected = false;

//push fighters objects into fightersArray
$.each(fighters, function(key) {
	fightersArray.push(key);
});

var populateFightersRow = function(row, numFrom, numTo) {
	for (var i = numFrom; i < numTo; i++) {	
		var fighterContainer = $("<div>");		
		fighterContainer.addClass("col-1 fighterSelect");
		fighterContainer.attr("value", fighters[fightersArray[i]].value);

		var fighterPortrait = $("<img>");
		fighterPortrait.attr("src", imagesPath + fighters[fightersArray[i]].image);
		fighterPortrait.addClass("img-fluid text-center");

		fighterContainer.append(fighterPortrait);
		$(row).append(fighterContainer);
	}
}

populateFightersRow("#firstRow", 0, 5);
populateFightersRow("#secondRow", 5, 10);

var fighterStats = function (obj, element) {
	var health = $("<p>").text("Health: " + obj.health);
	var attack = $("<p>").text("Attack: " + obj.attack);
	var counterAttack = $("<p>").text("Counter Attack: " + obj.counterAttack);

	$(element).append(health);
	$(element).append(attack);
	$(element).append(counterAttack);
};

var onHover = function () {
	if (!isPlayerSelected && !fighters[$(this).attr("value")].selected) {

		player = fighters[$(this).attr("value")];

		$(this).addClass("playerHover");

		if ( $("#player img").length ) {
			$("#player img").remove();
			$(".playerStats").empty();
		}

		var playerImage = $("<img>");
		playerImage.addClass("img-fluid playerAnimation");
		playerImage.attr("src", imagesPath + player.image);
		playerImage.attr("alt", player.name);

		$("#player .fighterNickname").before(playerImage);

		$("#player .fighterNickname").text(player.nickname);

		fighterStats(player, ".playerStats");

	} else if (!isChallengerSelected && !fighters[$(this).attr("value")].selected) {

		challenger = fighters[$(this).attr("value")];

		$(this).addClass("challengerHover");

		if ( $("#challenger img").length ) {
			$("#challenger img").remove();
			$(".challengerStats").empty();
		}

		var challengerImage = $("<img>");
		challengerImage.addClass("img-fluid challengerAnimation");
		challengerImage.attr("src", imagesPath + challenger.image);
		challengerImage.attr("alt", challenger.name);

		$("#challenger .fighterNickname").before(challengerImage);

		$("#challenger .fighterNickname").text(challenger.nickname);

		fighterStats(challenger, ".challengerStats");
	}
};

var outHover = function () {
	if (!isPlayerSelected) {
		$(this).removeClass("playerHover");
	} else if (!isChallengerSelected) {
		$(this).removeClass("challengerHover");
	}
};

$(".fighterSelect").hover( onHover, outHover );

$(".fighterSelect").on("click", function () {
	if (!isPlayerSelected && !isChallengerSelected && !fighters[$(this).attr("value")].selected) {
		player = fighters[$(this).attr("value")];
		defaultAttackPoint = player.attack;
		player.selected = true;
		isPlayerSelected = true;		
		$(this).addClass("playerHover noCursor");
	}
	else if (isPlayerSelected && !isChallengerSelected && !fighters[$(this).attr("value")].selected) {
		challenger = fighters[$(this).attr("value")];
		challenger.selected = true;
		isChallengerSelected = true;
		$(this).addClass("challengerHover noCursor");
		$(".characters").addClass("noCursor");
	} 

	else if (!isChallengerSelected && player === fighters[$(this).attr("value")] && !player.active) {
		player.selected = false;
		isPlayerSelected = false;
		$(this).removeClass("playerHover noCursor");
	}

	else if (isPlayerSelected && isChallengerSelected && challenger === fighters[$(this).attr("value")] && !challenger.active) {
		challenger.selected = false;
		isChallengerSelected = false;
		$(this).removeClass("playerHover noCursor");
		$(".characters").removeClass("noCursor");
	}
});

$("#attack").on("click", function() {

	$(".playerStats").empty();
	$(".challengerStats").empty();

	player.active = true;
	challenger.active = true;

	challenger.health -= player.attack;
	player.attack += defaultAttackPoint;

	if (challenger.health > 0 ) player.health -= challenger.counterAttack;

	fighterStats(player, ".playerStats");
	fighterStats(challenger, ".challengerStats");

	if (challenger.health <= 0) {
		$("div[value=" + challenger.value + "]").addClass("defeated");
		$("div[value=" + challenger.value + "]").removeClass("challengerHover");
		$(".characters").removeClass("noCursor");
		challenger.defeated = true;
		isChallengerSelected = false;
		$("#attack").attr("disabled","disabled");
	}
});

$('#reset').click(function() {
	location.reload();
});

});