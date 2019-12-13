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
		return prty.length;
	}

	app.numDem = getPartyLength(dem, 'D')
	app.numRep = getPartyLength(rep, 'R')
	app.numInd = getPartyLength(ind, 'I')

	console.log(app.numDem);
	console.log(app.numRep);
	console.log(app.numInd); 
	})

	.catch(err => console.log(err));
});



let app = new Vue({
	el: '#app',
	data: {
		members: [],
		 numDem: 0,
		 numRep: 0,
		 numInd: 0,
		 avrgVotesWPartyDem: 0,
		 avrgVotesWPartyRep: 0,
		 avrgVotesWPartyInd: 0,
	}
});
