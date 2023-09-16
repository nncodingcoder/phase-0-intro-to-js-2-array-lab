// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"] 
function destructivelyAppendCat(name) {
return name = cats.push("Ralph") 
}


function destructivelyPrependCat(name) {
    return name = cats.unshift("Bob")
 }
function  destructivelyRemoveLastCat() {
    return cats.pop()
}
function destructivelyRemoveFirstCat() {
    return cats.shift()
}
function appendCat(name) {
    return name = [...cats, "Broom"]
}

function prependCat(name) {
    return name = ["Arnold", ...cats]
}

function removeLastCat() {
    return cats.slice(0,2)
}

function removeFirstCat() {
    return cats.slice(1)
}