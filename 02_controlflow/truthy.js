const myuserid = "parva@ai";
const userid=[];
if(myuserid){
    console.log("this is truthy value");
}
if(userid){
    console.log("this is also true");
}

//++++++++++++falsy values++++++++++++++++++++++++
//false,0,"",BigInt 0n,-0,null,undefied,NaN

//++++++++++++++++++truthy value+++++++++++++++++++
//"0",'false'," ", [] , {} , function(){}

const emptyobject={}

if(Object.keys(emptyobject).length === 0){
    console.log("it is empty");
}

//NULLISH COALACING OPERATOR (??) : null,undefined 

let val1;
val1 =5??10;//ans 5
val1=undefined ??15;//ans 15
val1=null??10; //ans 10

//terniary operator

const iceteaprice = 100
iceteaprice <= 80 ?console.log("less then 80") : console.log("more then 80");

