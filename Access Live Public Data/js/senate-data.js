$(function() {

	let dataSenate;
	let dem = [];
	let rep = [];
	let ind = [];

fetch('https://api.propublica.org/congress/v1/113/senate/members.json', {
	headers: { 'X-API-Key': 'dRWpqNQPS4OMZ9tTM9YVUMVbmNby7SMMjSL8zl7m' }
})

.then(res => res.json())
.then(data => {
	dataSenate = data.results[0].members;
	app.members = dataSenate;
	
	function listOfMembersByParty(prty, letra) {
		dataSenate.forEach(miembros => {
			if (miembros.party == letra) {
				prty.push(miembros);
			}
		});
	}

	function getPartyLength(prty, letra){
		listOfMembersByParty(prty,letra)
		console.log(prty.length);
		return prty.length;
	}

	app.numDem = getPartyLength(dem, 'D')
	/* listOfMembersByParty(dem, 'D');
	listOfMembersByParty(rep, 'R');
	listOfMembersByParty(ind, 'I');
	app.numDem = dem.length;
	app.numRep = rep.length;
	app.numInd = ind.length;
	console.log(app.numDem);
	console.log(app.numRep);
	console.log(app.numInd); */
	})

	.catch(err => console.log(err));
});



let app = new Vue({
	el: '#app',
	data: {
		members: [],
		 numDem: 0,
	}
});
