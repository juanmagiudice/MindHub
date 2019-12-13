function documentShowAtAGlance(idNOfReps, nOfReps, idAvrgVotes, avrgVotes){
    document.getElementById(idNOfReps).innerHTML = statistics[nOfReps];
    document.getElementById(idAvrgVotes).innerHTML = statistics[avrgVotes];
}

documentShowAtAGlance('numOfDem', 'numOfDem', 'avrgVotesWPartyDem', 'avrgVotesWPartyDem')
documentShowAtAGlance('numOfRep', 'numOfRep', 'avrgVotesWPartyRep', 'avrgVotesWPartyRep')


let votesWPartyPctList = []
dataHouse.results[0].members.forEach(miembros =>{
    votesWPartyPctList.push(miembros)
})
function sortMembersByVotesWParty(){
    votesWPartyPctList.sort(function(a,b){
        return (a.votes_with_party_pct - b.votes_with_party_pct)
    })
}
sortMembersByVotesWParty()

let leastLoyal10Pct = []
let mostLoyal10Pct = []
let tenPct = votesWPartyPctList.length * 10 / 100;

leastLoyal10Pct = votesWPartyPctList.slice(0, tenPct)
mostLoyal10Pct = votesWPartyPctList.slice(votesWPartyPctList.length - tenPct, votesWPartyPctList.length).reverse()

statistics.leastLoyal10Pct = leastLoyal10Pct
statistics.mostLoyal10Pct = mostLoyal10Pct



function createTableData(list, id){
    let createTable = ''
    statistics[list].forEach(miembros =>{
        createTable += 

        '<tr>' + 
        '<td>' + miembros.first_name + ' ' + (miembros.middle_name || '') + ' ' + miembros.last_name + '</td>' + 
        '<td>' + miembros.votes_against_party_pct + '</td>' +
        '<td>' + miembros.votes_with_party_pct + '</td>'
        '</tr>'
    })
    document.getElementById(id).innerHTML = createTable
}

createTableData('leastLoyal10Pct','leastLoyal')
createTableData('mostLoyal10Pct', 'mostLoyal')
