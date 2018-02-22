export function shufflecards(){

return ({
type :'Shuffle',
payload : 'a'
})

}

export function sortcards(){

return ({
type :'Sortcards',
payload : 'a'
})

}

export function deletecards(count){

return ({
type :'DeleteCard',
payload : count
})

}





