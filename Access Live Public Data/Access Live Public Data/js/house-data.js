$(function() {
	let dataHouse;
	let dem = [];
	let rep = [];

	fetch('https://api.propublica.org/congress/v1/113/house/members.json', {
		headers: { 'X-API-Key': 'dRWpqNQPS4OMZ9tTM9YVUMVbmNby7SMMjSL8zl7m' }
	})
		.then(res => res.json())
		.then(data => {
			dataHouse = data.results[0].members;
			app.members = dataHouse;
			console.log(dataHouse)
		
								
	//    GLOBALES

			app.numDem = getPartyLength(dem, 'D', dataHouse);
			app.numRep = getPartyLength(rep, 'R', dataHouse);
			app.avrgVotesWPartyDem = getVotesWPartyAvrg(dem, dataHouse)
			app.avrgVotesWPartyRep = getVotesWPartyAvrg(rep, dataHouse)

//    PARTY LOYALTY

			llenarVotesWParty(dataHouse);
			sortMembersByVotesWParty(votesWPartyPctList);	

			let leastLoyal10Pct = []
			let mostLoyal10Pct = []
			let tenPctVotesWParty = votesWPartyPctList.length * 10 / 100;

			leastLoyal10Pct = votesWPartyPctList.slice(0, tenPctVotesWParty)
			mostLoyal10Pct = votesWPartyPctList.slice(votesWPartyPctList.length - tenPctVotesWParty, votesWPartyPctList.length).reverse()

			app.leastLoyal10Pct = leastLoyal10Pct
			app.mostLoyal10Pct = mostLoyal10Pct



//		ATENDANCE

			llenarMissedVotes(dataHouse)
			sortMembersByMissedVotes(missedVotesPctList)

			let leastEngaged10Pct = []
			let mostEngaged10Pct = []
			let tenPctMissedVotes = missedVotesPctList.length * 10 / 100;

			mostEngaged10Pct = missedVotesPctList.slice(0, tenPctMissedVotes)
			leastEngaged10Pct = missedVotesPctList.slice(missedVotesPctList.length - tenPctMissedVotes, missedVotesPctList.length).reverse()

			app.leastEngaged10Pct = leastEngaged10Pct
			app.mostEngaged10Pct = mostEngaged10Pct
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
		leastLoyal10Pct: [],
		mostLoyal10Pct: [],
		leastEngaged10Pct: [],
		mostEngaged10Pct: [],
	}
});
