const myNum=[1,2,3,4,5,6,7,8]


const allnums=myNum.filter((num)=>(num>4))
console.log(allnums)


const newNums =myNum.filter((num)=>{
    return num > 4
})
//we  have to make return in scope in filter

console.log(newNums);


const newnum=[]

myNum.forEach((num)=>{
   if (num>4){
    newnum.push(num)
   }
})


console.log(newnum);

//function.forEach()   it does not support return value

