// Tipo de datos set
//COnjunto de datos

const set = new Set([1,2,3,4,3, true, false, true, {}, {}, 'hola', 'HOLA']);
console.log(set);
console.log(`Longitud ${set.size}`);

const set2 = new Set();

set2.add(1);
set2.add(2);
set2.add(4);
set2.add(1);
set2.add(true);
set2.add(false);
set2.add(true);

console.log(set2);

//iterar set
for (const iterator of set) {
    console.log(iterator);
}
//iterar set2
set2.forEach((el) => console.log(el));

// 
console.log(set[0]); //undefined no aplica para set

console.log(Array.from(set)); // set to array

console.log(Array.from(set)[0]); // posicion

console.log([...set]) // spread operator

// borrar 

set.delete('HOLA');
console.log(set);

// contiene un elemento

console.log(set.has('hola'));

console.log(set.has(19));

// borrar set
set2.clear();
console.log(set2);

//MDN

let mySet = new Set()

mySet.add(1)           // Set [ 1 ]
mySet.add(5)           // Set [ 1, 5 ]
mySet.add(5)           // Set [ 1, 5 ]
mySet.add('some text') // Set [ 1, 5, 'some text' ]
let o = {a: 1, b: 2}
mySet.add(o)

mySet.add({a: 1, b: 2})   // o is referencing a different object, so this is okay

mySet.has(1)              // true
mySet.has(3)              // false, since 3 has not been added to the set
mySet.has(5)              // true
mySet.has(Math.sqrt(25))  // true
mySet.has('Some Text'.toLowerCase()) // true
mySet.has(o)       // true

mySet.size         // 5

mySet.delete(5)    // removes 5 from the set
mySet.has(5)       // false, 5 has been removed

mySet.size         // 4, since we just removed one value

console.log(mySet)
// logs Set(4) [ 1, "some text", {…}, {…} ] in Firefox
// logs Set(4) { 1, "some text", {…}, {…} } in Chrome

// iterate over items in set
// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet) console.log(item)

// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet.keys()) console.log(item)

// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet.values()) console.log(item)

// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
// (key and value are the same here)
for (let [key, value] of mySet.entries()) console.log(key)

// convert Set object to an Array object, with Array.from
let myArr = Array.from(mySet) // [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}]

// the following will also work if run in an HTML document
mySet.add(document.body)
mySet.has(document.querySelector('body')) // true

// converting between Set and Array
mySet2 = new Set([1, 2, 3, 4])
mySet2.size                    // 4
let set3 = [...mySet2];                 // [1, 2, 3, 4]

// intersect can be simulated via
let intersection = new Set([...set1].filter(x => set2.has(x)))

// difference can be simulated via
let difference = new Set([...set1].filter(x => !set2.has(x)))

// Iterate set entries with forEach()
mySet.forEach(function(value) {
  console.log(value)
})

// 1
// 2
// 3
// 4

//Implementing basic set operations

function isSuperset(set, subset) {
    for (let elem of subset) {
        if (!set.has(elem)) {
            return false
        }
    }
    return true
}

function union(setA, setB) {
    let _union = new Set(setA)
    for (let elem of setB) {
        _union.add(elem)
    }
    return _union
}

function intersection(setA, setB) {
    let _intersection = new Set()
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem)
        }
    }
    return _intersection
}

function symmetricDifference(setA, setB) {
    let _difference = new Set(setA)
    for (let elem of setB) {
        if (_difference.has(elem)) {
            _difference.delete(elem)
        } else {
            _difference.add(elem)
        }
    }
    return _difference
}

function difference(setA, setB) {
    let _difference = new Set(setA)
    for (let elem of setB) {
        _difference.delete(elem)
    }
    return _difference
}

// Examples
let setA = new Set([1, 2, 3, 4])
let setB = new Set([2, 3])
let setC = new Set([3, 4, 5, 6])

isSuperset(setA, setB)          // => true
union(setA, setC)               // => Set [1, 2, 3, 4, 5, 6]
intersection(setA, setC)        // => Set [3, 4]
symmetricDifference(setA, setC) // => Set [1, 2, 5, 6]
difference(setA, setC)          // => Set [1, 2]


let text = 'India'

let mySet = new Set(text)  // Set ['I', 'n', 'd', 'i', 'a']
mySet.size  // 5

//case sensitive & duplicate ommision
new Set("Firefox")  // Set(7) [ "F", "i", "r", "e", "f", "o", "x" ]
new Set("firefox")  // Set(6) [ "f", "i", "r", "e", "o", "x" ]
