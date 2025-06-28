let arr = [1, 2, 3, 4, 5, 6, 6, 6, 7, 7, 8]

let mySet = new Set();

for (let e of arr) {
    mySet.add(e);
}

console.log(`mySet`, mySet);

mySet.delete(8)

console.log(`after delete`, mySet);

console.log(`has`, mySet.has(3));
console.log(`size`, mySet.size);


let arrFromSet = Array.from(mySet)

console.log(`arrFromSet`, arrFromSet);


let mySet2 = new Set(arr);

console.log(`mySet2`, mySet2);

console.log(` iteration || mySet2`);
for (let val of mySet2.values()) {
    console.log(val);
}

mySet2.clear();

console.log(`mySet2 after CLEAR`, mySet2);

