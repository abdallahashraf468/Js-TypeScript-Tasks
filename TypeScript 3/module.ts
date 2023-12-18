import {hello} from "./index.js";
import { Shape } from "./index";

var mo = new hello()
mo.helloWorld();

class Rec extends Shape{
    // width: number;
    // height: number;
    zindx: number;

    constructor(w:number,h:number,z:number){
       super(w,h)
        this.zindx = z

    }
    displayRec(){
      console.log(this.width,this.height,this.zindx)
    }

    }

var x = new Rec(1,8,9)
console.log(x)
