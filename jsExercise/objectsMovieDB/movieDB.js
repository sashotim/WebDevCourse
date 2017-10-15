var movies = [
	{
		name: "In Bruges",
		rating: 5,
		seen: true
	},
	{
		name: "Frozen",
		rating: 4.5,
		seen: false
	},
	{
		name: "Mad Max Fury Road",
		rating: 5,
		seen: true
	},
	{
		name: "Les Miserables",
		rating: 3.5,
		seen: false
	}

]

movies.forEach(function(element){
	if (element.seen) {
		console.log("You have seen \"" + element.name + "\" -" + element.rating + " stars");	
	} else {
		console.log("You have not seen \"" + element.name + "\" -" + element.rating + " stars");
	}

})