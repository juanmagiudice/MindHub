function documentShowAtAGlance(idNOfReps, nOfReps, idAvrgVotes, avrgVotes){
    document.getElementById(idNOfReps).innerHTML = statistics[nOfReps];
    document.getElementById(idAvrgVotes).innerHTML = statistics[avrgVotes];
}

documentShowAtAGlance('numOfDem', 'numOfDem', 'avrgVotesWPartyDem', 'avrgVotesWPartyDem')
documentShowAtAGlance('numOfRep', 'numOfRep', 'avrgVotesWPartyRep', 'avrgVotesWPartyRep')
documentShowAtAGlance('numOfInd', 'numOfInd', 'avrgVotesWPartyInd', 'avrgVotesWPartyInd')


let missedVotesPctList = []
dataSenate.results[0].members.forEach(miembros =>{
    missedVotesPctList.push(miembros)
})
function sortMembersByVotesWParty(){
    missedVotesPctList.sort(function(a,b){
        return (a.missed_votes_pct - b.missed_votes_pct)
    })
}
sortMembersByVotesWParty()

let leastEngaged10Pct = []
let mostEngaged10Pct = []
let tenPct = missedVotesPctList.length * 10 / 100;

mostEngaged10Pct = missedVotesPctList.slice(0, tenPct)
leastEngaged10Pct = missedVotesPctList.slice(missedVotesPctList.length - tenPct, missedVotesPctList.length).reverse()

statistics.leastEngaged10Pct = leastEngaged10Pct
statistics.mostEngaged10Pct = mostEngaged10Pct


function createTableData(list, id){
    let createTable = ''
    statistics[list].forEach(miembros =>{
        createTable += 
        '<tr>' + 
        '<td>' + miembros.first_name + ' ' + (miembros.middle_name || '') + ' ' + miembros.last_name + '</td>' + 
        '<td>' + miembros.missed_votes + '</td>' +
        '<td>' + miembros.missed_votes_pct + '</td>'
        '</tr>'
    })
    document.getElementById(id).innerHTML = createTable
    }
    
createTableData('leastEngaged10Pct','mostMissed')
createTableData('mostEngaged10Pct', 'leastMissed')
    