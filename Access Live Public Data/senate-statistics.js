let statistics =
    {     }

let dem = []
let rep = []
let ind = []


function listOfMembersByParty(lista, letra){
    dataSenate.results[0].members.forEach(miembros =>{
        if (miembros.party == letra){
            lista.push(miembros)
        }
    })
}

function getNumOfMembers(lista, key){
    statistics[key] = lista.length
}


function getVotesWPartyAvrg(party, key){
    let votes = 0;
    party.forEach(miembros =>{
         votes += miembros.votes_with_party_pct
     })
 statistics[key]= (votes / party.length).toFixed(2)
} 

listOfMembersByParty(dem, 'D')
listOfMembersByParty(rep, 'R')
listOfMembersByParty(ind, 'I')
getVotesWPartyAvrg(dem, 'avrgVotesWPartyDem')
getVotesWPartyAvrg(rep, 'avrgVotesWPartyRep')
getVotesWPartyAvrg(ind, 'avrgVotesWPartyInd')
getNumOfMembers(dem, 'numOfDem')
getNumOfMembers(rep, 'numOfRep')
getNumOfMembers(ind, 'numOfInd')

console.log(statistics)

