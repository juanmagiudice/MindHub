//    GLOBAL

function listOfMembersByParty(prty, letra, data) {
	data.forEach(miembros => {
		if (miembros.party == letra) {
			prty.push(miembros);
		}
	});
}
function getPartyLength(prty, letra, data) {
	listOfMembersByParty(prty, letra, data);
	return prty.length;
}

function getVotesWPartyAvrg(prty) {
	let votes = 0;
	prty.forEach(miembros => {
		votes += miembros.votes_with_party_pct;
	});
	return (votes / prty.length).toFixed(2);
}

//    PARTY LOYALTY

let votesWPartyPctList = [];
function llenarVotesWParty(data) {
	data.forEach(miembros => {
		votesWPartyPctList.push(miembros);
	});
	return votesWPartyPctList;
}
function sortMembersByVotesWParty(votesWPartyPctList) {
	votesWPartyPctList.sort(function(a, b) {
		return a.votes_with_party_pct - b.votes_with_party_pct;
	});
}

//    ATENDANCE

let missedVotesPctList = [];

function llenarMissedVotes(data) {
	data.forEach(miembros => {
		missedVotesPctList.push(miembros);
	});
	return missedVotesPctList;
}

function sortMembersByMissedVotes(missedVotesPctList) {
	missedVotesPctList.sort(function(a, b) {
		return a.missed_votes_pct - b.missed_votes_pct;
	});
}
