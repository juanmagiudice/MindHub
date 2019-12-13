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
			console.log(dataSenate)
			function listOfMembersByParty(prty, letra) {
				dataSenate.forEach(miembros => {
					if (miembros.party == letra) {
						prty.push(miembros);
					}
				});
			}
			function getPartyLength(prty, letra) {
				listOfMembersByParty(prty, letra);
				return prty.length;
			}

			function getVotesWPartyAvrg(party, key){
				let votes = 0;
				party.forEach(miembros =>{
						 votes += miembros.votes_with_party_pct
				 })
		 statistics[key]= (votes / party.length).toFixed(2)
		} 

			let votesWPartyPctList = [];
			function llenarVotesWParty() {
				dataSenate.forEach(miembros => {
					votesWPartyPctList.push(miembros);
				});
			}
			function sortMembersByVotesWParty() {
				votesWPartyPctList.sort(function(a, b) {
					return a.votes_with_party_pct - b.votes_with_party_pct;
				});
			}
			llenarVotesWParty();
			sortMembersByVotesWParty();
			getVotesWPartyAvrg(party, key)

			let leastLoyal10Pct = []
			let mostLoyal10Pct = []
			let tenPct = votesWPartyPctList.length * 10 / 100;

			leastLoyal10Pct = votesWPartyPctList.slice(0, tenPct)
			mostLoyal10Pct = votesWPartyPctList.slice(votesWPartyPctList.length - tenPct, votesWPartyPctList.length).reverse()

			app.numDem = getPartyLength(dem, 'D');
			app.numRep = getPartyLength(rep, 'R');
			app.numInd = getPartyLength(ind, 'I');
			app.leastLoyal10Pct = leastLoyal10Pct
			app.mostLoyal10Pct = mostLoyal10Pct

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
		leastLoyal10Pct: 0,
		mostLoyal10Pct: 0,
	}
});
