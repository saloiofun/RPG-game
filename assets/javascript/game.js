$(document).ready(function() {

// Street Fighter Characters
var fighters = {

	akuma: {
		name: "Akuma",
		nickname: "Akuma",
		health: 850,
		attack: 30,
		defense: 40,
		sound: "https://www.youtube.com/embed/hTD3LhS7TXE?",
		image: "akuma.png"
	},

	chunLi: {
		name: "Chun-Li",
		nickname: "Chun-Li",
		health: 950,
		attack: 20,
		defense: 40,
		sound: "https://www.youtube.com/embed/EWk3Pm6M3-I?",
		image: "chunLi.png"
	},

	dan: {
		name: "Dan Hibiki",
		nickname: "Dan",
		health: 1000,
		attack: 25,
		defense: 25,
		sound: "https://www.youtube.com/embed/lmSYC2N8sbs?",
		image: "dan.png"
	},

	dhalsim: {
		name: "Dhalsim",
		nickname: "Dhalsim",
		health: 900,
		attack: 30,
		defense: 30,
		sound: "https://www.youtube.com/embed/P8zF56ol5Gs?",
		image: "dhalsim.png"
	},

	ken: {
		name: "Ken Masters",
		nickname: "Ken",
		health: 1000,
		attack: 30,
		defense: 30,
		sound: "https://www.youtube.com/embed/Je7u4onLVC8?",
		image: "ken.png"
	},

	ryu: {
		name: "Ryu",
		nickname: "Ryu",
		health: 1000,
		attack: 30,
		defense: 30,
		sound: "https://www.youtube.com/embed/swPlzzavzWg?",
		image: "ryu.png"
	},

	sakura: {
		name: "Sakura Kasugano",
		nickname: "Sakura",
		health: 950,
		attack: 25,
		defense: 25,
		sound: "https://www.youtube.com/embed/2gWGbmGD7r8?",
		image: "sakura.png"
	},

	elFuerte: {
		name: "El Fuerte",
		nickname: "El Fuerte",
		health: 900,
		attack: 30,
		defense: 30,
		sound: "https://www.youtube.com/embed/FDrBjA9SCPI?",
		image: "elFuerte.png"
	},

	guile: {
		name: "Guile",
		nickname: "Guile",
		health: 950,
		attack: 20,
		defense: 30,
		sound: "https://www.youtube.com/embed/Q6XM3fDUxLg?",
		image: "guile.png"
	},

	feiLong: {
		name: "Fei Long",
		nickname: "Fei Long",
		health: 1000,
		attack: 30,
		defense: 30,
		sound: "https://www.youtube.com/embed/kTLwCx6spkU?",
		image: "feiLong.png"
	}
};



	// Initialize Variables
	// var fighters = [akuma, chunLi, dan, dhalsim, ken, ryu, sakura, elFuerte, guile, feiLong];
	var wins = 0;
	var imagesPath = "assets/images/";
	
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

	$(".fighterSelect").hover(
		function () {
			$(this).addClass("playerHover");

			if ( $("#player img").length ) {
				$("#player img").remove();
			}

			var playerImage = $("<img>");
			playerImage.addClass("img-fluid float-left playerAnimation");
			playerImage.attr("src", "assets/images/" + fighters[$(this).attr("value")].image);
			playerImage.attr("alt", fighters[$(this).attr("value")].name);

			$("#player").append(playerImage);

			$("#player .fighterNickname").text(fighters[$(this).attr("value")].nickname);
			
		},

		function () {
			$(this).removeClass("playerHover");
			$("#player img").removeClass("playerAnimation");

		}
		);

	// $(".fighterSelect").on("click", function () {
	// 	console.log($(this).attr("value"));
	// 	});

	// })

});