let m = new Map();

m.set("K1", 12);
m.set("K2", 89);
m.set("K3", 54);

console.log(m);

m.set("K1", 47);

console.log(m);

console.log("GET :", m.get("K3"));

console.log("HAS :", m.has("K2"), m.has("K4"));

m.delete("K1")

console.log('After Delete: ', m);

m.set("K4", 97);
m.set("K5", 100);
m.set("K6", 67);


console.log(m.size);


//Iteration over MAP

console.log("Entries Method", m.entries());// converts teh MAP into 2D array
// {
//   [ 'K2', 89 ],
//   [ 'K3', 54 ],
//   [ 'K4', 97 ],
//   [ 'K5', 100 ],
//   [ 'K6', 67 ]
// }


for(let entry of m.entries()){
    let x = entry[0];
    let y = entry[1];
    console.log(x);
    console.log(y);
}

//internally it is using deconstruction of array let [a, b, c] = arr

for(let [key, value] of m){
    console.log(key, value);
}






