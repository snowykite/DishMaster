module.exports.recommendedDishes = function (req, res, next) {
	var dishList = [
	    {
	    	name: "Shanghai Dumplings",
	    	restaurant: "Bund Shanghai Restaurant"
	    },
	    {
	    	name: "Beef Noodles",
	    	restaurant: "RSA Restaurant"
	    },
	    {
	    	name: "Peking Roast Duck",
	    	restaurant: "Quan Ju De"
	    }
    ];
	res.render("dish_list", {dishList: dishList});
}

module.exports.bookmarkedDishes = function (req, res, next) {
    var dishList = [
	    {
	    	name: "Shaanxi Rice Noodle",
	    	restaurant: "Xi'an Restaurant"
	    },
	    {
	    	name: "Mutton Hot Pot",
	    	restaurant: "Xiao Fei Yang"
	    }
    ];
	res.render("dish_list", {dishList: dishList});
}

module.exports.allDishes = function (req, res, next) {
    var dishList = [
	    {
	    	name: "Shanghai Dumplings",
	    	restaurant: "Bund Shanghai Restaurant"
	    },
	    {
	    	name: "Beef Noodles",
	    	restaurant: "RSA Restaurant"
	    },
	    {
	    	name: "Peking Roast Duck",
	    	restaurant: "Quan Ju De"
	    },
	    {
	    	name: "Shaanxi Rice Noodle",
	    	restaurant: "Xi'an Restaurant"
	    },
	    {
	    	name: "Mutton Hot Pot",
	    	restaurant: "Xiao Fei Yang"
	    }
    ];
	res.render("dish_list", {dishList: dishList});
}
