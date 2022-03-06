// Write your solution here!

var cats=['Milo', 'Otis', 'Garfield'];
function destructivelyAppendCat(name){
    return cats.push(name);
}
destructivelyAppendCat('Ralph');

function destructivelyPrependCat(name){
    return cats.unshift(name)
}

destructivelyPrependCat('Bob');

function destructivelyRemoveLastCat() {
    cats.pop();
}
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat(){
    cats.shift();
}
destructivelyRemoveFirstCat();

function appendCat(name){
    var newArray=[...cats,name];
    console.log(newArray);
    return newArray;
}
appendCat("Broom");

function prependCat(name){
    var newArray=[name,...cats];
    console.log(newArray);
    return newArray;
}
appendCat("Arnold");

function removeLastCat(){
    var newArray=[...cats];
    newArray.pop();
    return newArray;

}
removeLastCat();
function removeFirstCat(){
    var newArray=[...cats];
    newArray.shift();
    return newArray;

}
removeFirstCat();