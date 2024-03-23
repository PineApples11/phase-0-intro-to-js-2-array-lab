// Write your solution here!
const cats =[ "Milo","Otis","Garfield"]

function destructivelyAppendCat(){
    return cats.push("Ralph")
}

function destructivelyPrependCat(){
    return cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    return cats.pop("Ralph")
}

function destructivelyRemoveFirstCat(){
    return cats.shift("Bob")
}

const secondCats = [...cats,"Broom"]
function appendCat(){
    return secondCats
}

const thirdCats = ["Arnold",...cats]
function prependCat(){
    return thirdCats
}

function removeLastCat(){
    return cats.slice(0,-1)
}

function removeFirstCat(){
    return cats.slice(1)
}