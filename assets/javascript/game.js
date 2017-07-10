$(document).ready(function() {

// Street Fighter Characters
var fighters = {

	akuma: {
		name: "Akuma",
		nickname: "Akuma",
		health: 850,
		attack: 30,
		counterAttack: 40,
		selected: false,
		image: "akuma.png"
	},

	chunLi: {
		name: "Chun-Li",
		nickname: "Chun-Li",
		health: 950,
		attack: 20,
		counterAttack: 40,
		selected: false,
		image: "chunLi.png"
	},

	dan: {
		name: "Dan Hibiki",
		nickname: "Dan",
		health: 1000,
		attack: 25,
		counterAttack: 25,
		selected: false,
		image: "dan.png"
	},

	dhalsim: {
		name: "Dhalsim",
		nickname: "Dhalsim",
		health: 900,
		attack: 30,
		counterAttack: 30,
		selected: false,
		image: "dhalsim.png"
	},

	ken: {
		name: "Ken Masters",
		nickname: "Ken",
		health: 1000,
		attack: 30,
		counterAttack: 30,
		selected: false,
		image: "ken.png"
	},

	ryu: {
		name: "Ryu",
		nickname: "Ryu",
		health: 1000,
		attack: 30,
		counterAttack: 30,
		selected: false,
		image: "ryu.png"
	},

	sakura: {
		name: "Sakura Kasugano",
		nickname: "Sakura",
		health: 950,
		attack: 25,
		counterAttack: 25,
		selected: false,
		image: "sakura.png"
	},

	elFuerte: {
		name: "El Fuerte",
		nickname: "El Fuerte",
		health: 900,
		attack: 30,
		counterAttack: 30,
		selected: false,
		image: "elFuerte.png"
	},

	guile: {
		name: "Guile",
		nickname: "Guile",
		health: 950,
		attack: 20,
		counterAttack: 30,
		selected: false,
		image: "guile.png"
	},

	feiLong: {
		name: "Fei Long",
		nickname: "Fei Long",
		health: 1000,
		attack: 30,
		counterAttack: 30,
		selected: false,
		image: "feiLong.png"
	}
};



	// Initialize Variables
	// var fighters = [akuma, chunLi, dan, dhalsim, ken, ryu, sakura, elFuerte, guile, feiLong];
	var wins = 0;
	var imagesPath = "assets/images/";
	var isPlayerSelected = false;
	var isChallengerSelected = false;
	
	// // Create fighters

	// var fightersRow = $("<div>");
	// fightersRow.addClass("row");

	// for (var i = 0; i < fighters.length; i++) {
	// 	var fighterCol = $("<div>");
	// 	fighterCol.addClass("col-sm-2 col-md-2");

	// 	var fighterFig = $("<figure>");

	// 	var fighterThumb = $("<img>");
	// 	fighterThumb.addClass("img-responsive fighter-thumb");
	// 	fighterThumb.attr("src", imagesPath + fighters[i].image);

	// 	var fighterCaption = $("<figcaption>");
	// 	fighterCaption.text(fighters[i].nickname);


	// 	fighterFig.append(fighterThumb);
	// 	fighterFig.append(fighterCaption);

	// 	fighterCol.append(fighterFig);
	// 	fightersRow.append(fighterCol);
	// }

	// $("#characters").append(fightersRow);

	// $("figure").on("click", function() {
	// 	$(this).appendTo("#fighter");
	// });

	var fighterStats = function (obj) {
		var health = fighters[obj].health;
		var attack = fighters[obj].attack;
		var counterAttack = fighters[obj].counterAttack;
		var printStats = health + "<br>" + attack + "<br>" + counterAttack;

		return printStats;
	};

	var onHover = function () {
		if (!isPlayerSelected && !fighters[$(this).attr("value")].selected) {
			$(this).addClass("playerHover");

			if ( $("#player img").length ) {
				$("#player img").remove();
				$("#player ")
			}

			var playerImage = $("<img>");
			playerImage.addClass("img-fluid float-left playerAnimation");
			playerImage.attr("src", imagesPath + fighters[$(this).attr("value")].image);
			playerImage.attr("alt", fighters[$(this).attr("value")].name);

			$("#player .fighterNickname").before(playerImage);

			$("#player .fighterNickname").text(fighters[$(this).attr("value")].nickname);

			// var row = $("<div>");
			// row.addClass("row");

			// var col = $("<div>");
			// row.addClass("col-2 fighterStats");

			// var stats = $("<p>");
			// stats.text(fighterStats($(this).attr("value")));

			// row.append(col.append(stats));

			// $("#player").append(row);

		} else if (!isChallengerSelected && !fighters[$(this).attr("value")].selected) {
			$(this).addClass("challengerHover");

			if ( $("#challenger img").length ) {
				$("#challenger img").remove();
			}

			var challengerImage = $("<img>");
			challengerImage.addClass("img-fluid float-right challengerAnimation");
			challengerImage.attr("src", imagesPath + fighters[$(this).attr("value")].image);
			challengerImage.attr("alt", fighters[$(this).attr("value")].name);

			$("#challenger .fighterNickname").before(challengerImage);

			$("#challenger .fighterNickname").text(fighters[$(this).attr("value")].nickname);
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
		if (!isPlayerSelected && !isChallengerSelected) {
			isPlayerSelected = true;
			fighters[$(this).attr("value")].selected = true;
			$(this).addClass("playerHover");
		}
		else {
			isChallengerSelected = true;
			$(this).addClass("challengerHover");
		} 
	});

});