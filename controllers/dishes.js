module.exports.recommendedDishes = function (req, res, next) {
    res.send(JSON.stringify([
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
    ]));
}

module.exports.bookmarkedDishes = function (req, res, next) {
    res.send(JSON.stringify([
	    {
	    	name: "Shaanxi Rice Noodle",
	    	restaurant: "Xi'an Restaurant"
	    },
	    {
	    	name: "Mutton Hot Pot",
	    	restaurant: "Xiao Fei Yang"
	    }
    ]));
}
