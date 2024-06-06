const coding=["java","cpp","c++","python","html"]

//first method
coding.forEach(function(val){
console.log(val);
})


//second method
coding.forEach((val) =>{
    console.log(val);
    })
    
    //third method

    function printme(item){
        console.log(item);
    }

   coding.forEach(printme)


   const newarr=[
    {
        lname:"java",
        lsn:"java"
    },
    {
        lname:"javascript",
        lsn:"js"
    },
    {
        lname:"python",
        lsn:"py"
    }
   ]

   newarr.forEach((item)=>{
    console.log(item.lname)
   })