$(document).ready(function() {

	// Street Fighter Characters
	var fighters = {

		ryu: {
			nickname: "Ryu",
			value: "ryu",
			health: 1000,
			attack: 30,
			counterAttack: 45,
			selected: false,
			active: false,
			image: "ryu.png",
			sound: "ryu.wav"
		},

		ken: {
			nickname: "Ken",
			value: "ken",
			health: 1000,
			attack: 25,
			counterAttack: 45,
			selected: false,
			active: false,
			image: "ken.png",
			sound: "ken.wav"
		},

		akuma: {
			nickname: "Akuma",
			value: "akuma",
			health: 950,
			attack: 30,
			counterAttack: 45,
			selected: false,
			active: false,
			image: "akuma.png",
			sound: "akuma.wav"
		},

		dan: {
			nickname: "Dan",
			value: "dan",
			health: 1200,
			attack: 20,
			counterAttack: 35,
			selected: false,
			active: false,
			image: "dan.png",
			sound: "dan.wav"
		},

		dhalsim: {
			nickname: "Dhalsim",
			value: "dhalsim",
			health: 1100,
			attack: 25,
			counterAttack: 40,
			selected: false,
			active: false,
			image: "dhalsim.png",
			sound: "dhalsim.wav"
		},

		chunLi: {
			nickname: "Chun-Li",
			value: "chunLi",
			health: 950,
			attack: 35,
			counterAttack: 35,
			selected: false,
			active: false,
			image: "chunLi.png",
			sound: "chunLi.wav"
		},

		sakura: {
			nickname: "Sakura",
			value: "sakura",
			health: 950,
			attack: 35,
			counterAttack: 30,
			selected: false,
			active: false,
			image: "sakura.png",
			sound: "sakura.wav"
		},

		guile: {
			nickname: "Guile",
			value: "guile",
			health: 950,
			attack: 30,
			counterAttack: 40,
			selected: false,
			active: false,
			image: "guile.png",
			sound: "guile.wav"
		},

		elFuerte: {
			nickname: "El Fuerte",
			value: "elFuerte",
			health: 900,
			attack: 30,
			counterAttack: 35,
			selected: false,
			active: false,
			image: "elFuerte.png",
			sound: "elFuerte.wav"
		},

		feiLong: {
			nickname: "Fei Long",
			value: "feiLong",
			health: 950,
			attack: 30,
			counterAttack: 40,
			selected: false,
			active: false,
			image: "feiLong.png",
			sound: "feiLong.wav"
		}
	};

	//declare variables
	var fightersArray = [];
	var imagesPath = "assets/images/";
	var soundPath = "assets/sound/";
	var player;
	var challenger;
	var defaultAttackPoint;
	var isPlayerSelected = false;
	var isChallengerSelected = false;

	$("#attack").attr("disabled","disabled");

	//push fighters objects into fightersArray
	$.each(fighters, function(key) {
		fightersArray.push(key);
	});

	//function to populate the characters' row
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

	//function to update the fighters stats (HP, Attack, Counter-Attack)
	var fighterStats = function (obj, element) {
		var health = $("<p>").text("Health: " + obj.health);
		var attack = $("<p>").text("Attack: " + obj.attack);
		var counterAttack = $("<p>").text("Counter Attack: " + obj.counterAttack);

		$(element).append(health);
		$(element).append(attack);
		$(element).append(counterAttack);
	};

	//function to create fighter's portrait and slide animation
	var fighterSlide = function(obj, fighter) {

		if ( $("#" + fighter + " img").length ) {
			$("#" + fighter + " img").remove();
			$("." + fighter + "Stats").empty();
		}

		var fighterImage = $("<img>");
		fighterImage.addClass("img-fluid");
		fighterImage.attr("src", imagesPath + obj.image);
		fighterImage.attr("alt", obj.nickname);

		$("#"+fighter + " .fighterNickname").before(fighterImage);
		$("#"+fighter + " .fighterNickname").text(obj.nickname);
		fighterStats(obj, "."+fighter+"Stats");
	}

	//function for mouseIn fighter
	var onHover = function () {
		if (!isPlayerSelected && !fighters[$(this).attr("value")].selected) {			
			player = fighters[$(this).attr("value")];
			$(this).addClass("playerHover");
			fighterSlide(player, "player");

		} else if (!isChallengerSelected && !fighters[$(this).attr("value")].selected) {
			challenger = fighters[$(this).attr("value")];
			$(this).addClass("challengerHover");
			fighterSlide(challenger, "challenger");
		}
	};

	//function for mouseOut fighter
	var outHover = function () {
		if (!isPlayerSelected) {
			$(this).removeClass("playerHover");
		} else if (!isChallengerSelected) {
			$(this).removeClass("challengerHover");
		}
	};

	//function to hover state
	$(".fighterSelect").hover( onHover, outHover );

	//different scenarios for character selection
	$(".fighterSelect").on("click", function () {
		if (!isPlayerSelected && !isChallengerSelected && !fighters[$(this).attr("value")].selected) {
			player = fighters[$(this).attr("value")];
			defaultAttackPoint = player.attack;
			player.selected = true;
			isPlayerSelected = true;		
			$(this).addClass("playerHover noCursor");
			var audio = new Audio(soundPath + player.sound);
			audio.play();
		}
		else if (isPlayerSelected && !isChallengerSelected && !fighters[$(this).attr("value")].selected) {
			challenger = fighters[$(this).attr("value")];
			challenger.selected = true;
			isChallengerSelected = true;
			$(this).addClass("challengerHover noCursor");
			$(".characters").addClass("noCursor");
			$("#result").empty();
			$("#attack").removeAttr("disabled","disabled");
			var audio = new Audio(soundPath + challenger.sound);
			audio.play();
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
			$("#attack").attr("disabled","disabled");
		}
	});

	//function used when character is defeated 
	var updateFightersInfo = function(obj, fighter) {
		$("div[value=" + obj.value + "]").addClass("defeated");
		$("div[value=" + obj.value + "]").removeClass(fighter+"Hover");
		$(".characters").removeClass("noCursor");
		obj.defeated = true;
		$("#attack").attr("disabled","disabled");
	}

	//for attack button
	$("#attack").on("click", function() {

		$(".playerStats").empty();
		$(".challengerStats").empty();

		player.active = true;
		challenger.active = true;

		challenger.health -= player.attack;
		player.attack += defaultAttackPoint;
		player.health -= challenger.counterAttack;

		fighterStats(player, ".playerStats");
		fighterStats(challenger, ".challengerStats");

		if (player.health > 0 && challenger.health > 0) {
			$("#result").addClass("normal-text");
			var fightStatus = "<p>You attacked " + challenger.nickname + " for " + player.attack + " damage.</p>"
			+ "<p>" + challenger.nickname + " attacked you back for " + challenger.counterAttack + " damage.</p>";
			$("#result").html(fightStatus);
		}

		if (player.health <= 0 && challenger.health <= 0) {
			$("#result").removeClass("normal-text");
			updateFightersInfo(player,"player");
			updateFightersInfo(challenger,"challenger");
			$("#result").html("<h1>You <span>L</span>ose</h1>");
			$(".characters").addClass("noCursor");
		}
		else if (player.health <= 0) {
			$("#result").removeClass("normal-text");
			updateFightersInfo(player,"player");
			$("#result").html("<h1>You <span>L</span>ose</h1>");
			$(".characters").addClass("noCursor");
		}
		else if (challenger.health <= 0) {
			$("#result").removeClass("normal-text");
			updateFightersInfo(challenger,"challenger");
			isChallengerSelected = false;
			$("#result").html("<h1>You <span>W</span>in</h1>");			
		}
	});

	//resets the game
	$('#reset').click(function() {
		location.reload();
	});

});