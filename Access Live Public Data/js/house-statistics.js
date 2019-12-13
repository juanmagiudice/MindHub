let statistics =
    {     }

let dem = []
let rep = []
let ind = []

function listOfMembersByParty(lista, letra){
    dataHouse.results[0].members.forEach(miembros =>{
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
getVotesWPartyAvrg(dem, 'avrgVotesWPartyDem')
getVotesWPartyAvrg(rep, 'avrgVotesWPartyRep')
getNumOfMembers(dem, 'numOfDem')
getNumOfMembers(rep, 'numOfRep')


console.log(statistics)