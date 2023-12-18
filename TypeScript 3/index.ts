// typess

let myName: string = "Alice";
let obj: any = { x: 0 };

obj.bar = 100;
obj = "hello";

const n: number = 1;
const b: boolean = false;
const arr:[] = []



// union typee 

let code: (string | number);
code = 123;   
code = "ABC"; 
// code = false; 


let coode: (string | number | boolean);
coode = 123;   
coode = "ABC"; 
coode = false; 


// enum type
enum category{drama=1 , action , romantic , loves}
var movies = [
    {name:"Movies 1" , category:category.drama},
    {name:"Movies 2" , category:category.action},
    {name:"Movies 3" , category:category.romantic},
    {name:"Movies 4" , category:category.loves}


]
console.log(movies)


// function


function test(a: string, b: number) {
    console.log(a);
    console.log(b)
}
test("abdullah" , 7)


// cenerats 
// الل هيعمل call لل function هو الل يحدد

function identity<T>(arg: T) {
    return arg;
  }
 console.log(identity<string>("abdullah Ashraf")) 


export class hello{
    helloWorld() {
    console.log( "Abdullah &%@#%");
    ;
      }
    
    
}


export class Shape{
    width: number
    height: number
    constructor(w:number,h:number){
        this.width = w;
        this.height = h;
    }
    displayIShape(){
        // console.log( this.width , this.height)
    }


}

var IShap = new Shape(141,343)
console.log(IShap)





