for(let i=0;i<10;i++){
    console.log(`this number is ${i}`)
    console.log(i);
}

const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(`the number is ${num}`);
}

const greetings="hello world"
for (const greet of greetings) {
    console.log(`the word is ${greet}`);
}
//MAPS
const map=new Map()
map.set('IN',"india")
map.set('USA',"united state of america")

console.log(map)

for (const key of map) {
    console.log(key);
}

for (const [key,value] of map) {
    console.log(key,':-',value);
}

const myObj={
    game1:'nfs',
    game2:'lou',
    game3:'gta'
}
for (const key in myObj) {
   console.log(key,':-',myObj[key]);
   console.log(`${key} for the game is ${myObj[key]}`);
        
    }

//forin loop does not iterate in maps

//foror loop dous not iterate in objects 

