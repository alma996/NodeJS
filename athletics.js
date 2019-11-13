//prvi primjer kako se moze eksportovati u drugi fajl
/*
function relay(){
	console.log("This is relay function");
}

function longjump(){
	console.log("This is longjump function");
}

module.exports.relay = relay; //koristi se kako bi de povezao sa glavinim fajlom
module.exports.longjump = longjump;
*/

module.exports = {
	relay: function(){
		console.log("This is the relay function");
	},
	longjump: function(){
		console.log("This is the longjump function");
	}
}