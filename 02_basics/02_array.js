const marvel_heros=["hulk","thor","ironnman"]
const dc_heros=["superman","batman","flask"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_heros=[...dc_heros,...marvel_heros]//Spread opertor

// console.log(all_heros);

const new_num=[1,2,[3,6,4,6,[6,3,94,9]],6,946,164]
const real_new_num=new_num.flat(Infinity)
// console.log(real_new_num);

// console.log(Array.isArray("Prakhar"));
// console.log(Array.from("Prakhar"));
console.log(Array.from({name:"Prakhar"}));//intersting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));