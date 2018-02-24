export function shufflecards(a){

return ({
type :'Shuffle',
payload : a
})

}

export function sortcards(a){

return ({
type :'Sortcards',
payload : a
})

}

export function deletecards(count){
return ({
type :'DeleteCard',
payload : count
})

}

export function addDrawnCards(count){
	
return ({
type :'AddDrawnCard',
payload : count
})

}


export function sortDrawnCards(count){
	
return ({
type :'SortDrawnCard',
payload : count
})

}

export function shuffleDrawnCard(count){
	
return ({
type :'ShufflerawnCard',
payload : count
})

}







