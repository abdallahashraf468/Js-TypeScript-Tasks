// destructuring

let x = 10;
let y = 30;

[x,y] = [y,x]
console.log(x, y);



// rest parameter

function sum(...z){
    var max = 0
    var min = 0
       max = Math.max(...z) 
       min = Math.min(...z)
    console.log(max, min);
}

sum(10,80,90,70,500,700)  





var fruits = ["apple", "orange", "strawberry", "banana", "mango"]

function check(fruit) {
   return typeof(fruit) == "string" ;  
       }

       console.log(fruits.every(check));


       function som(fruit){
        return fruit.startsWith("a")
       }
        console.log(fruits.some(som)) 


   var fil = fruits.filter((item) => {
   return item.startsWith("b") || item.startsWith ("s")

     })
     console.log(fil);


     var fil = fruits.map((e) => {
        return `I like ${e}`
     
          })

          console.log(...fil);



          var fori = fil.forEach((ele) =>{
                      console.log(ele)
          })


          var arr = [50,80,"abdullah0" , 900, "amany" , 400,"Bable" , "badeea",7095, ]
          arr.push("reham")
          arr.unshift("hamada")
          arr.unshift(80)
         var fill = arr.filter(function(e){
         return typeof e == "number" 
 
        })
        var arrfor = [];
       var arrfoR =  fill.forEach(function(e){
           
        arrfor.push()
       
           
        })
        console.log(fill)












         var mmap = arr.map(function(e) {
            if(typeof e == "string" || typeof e == "number")
            return  e
          })
          console.log(mmap)

         var fil = arr.filter(function(ele){
         return typeof ele == "string" 
         
          })
         console.log(fil)


        var fill = fil.map(function(e){
           return e.toUpperCase(); 
         })
         console.log(fill)

      