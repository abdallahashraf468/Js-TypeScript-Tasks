const mydiv = document.getElementById("_mydiv");
const mybody = document.getElementById("_mybody")
fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{

 return res.json()
}).then((data)=>{

   for(let user of data){
    const parent = document.createElement('div');

    mydiv.appendChild(parent);
    parent.innerHTML = user.name

    // console.log(user)


    parent.addEventListener('click',function(){ 
        for(let i = 0; i < 11 ; i++){

         document.getElementsByTagName("div")[i].style.backgroundColor = "cornflowerblue"
         }
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`).then((res)=>{ 
       
   
    parent.style.backgroundColor = "red" 
      
       return res.json()

    
}).then((data)=>{
    mybody.innerHTML = ''

    for(var iid of data){
        const myposts = document.createElement("li")
        mybody.appendChild(myposts)
        myposts.innerHTML = iid.title

    }
    
})
       
    })
   }
}).catch((err)=>{

  console.log(err);
})



var arr=[100,500,800,600,600,100,800,500]

 var mySet=new Set(arr)
 mySet.add(900)
 mySet.delete(100)
console.log(mySet);

//   mySet.clear()

 console.log(mySet.has(10)); 
 console.log(mySet.size);

  var newArr=  Array.from(mySet)
  console.log(newArr);

  



var myMap=new Map(
    [
        ["x",10],
        ["y",20],
        ["o",50]
    ]
);

 myMap.set([50,60],"abdullah")
 myMap.set("zzz",20)
 myMap.set({name:"abdullah"},50)
 console.log(myMap);
