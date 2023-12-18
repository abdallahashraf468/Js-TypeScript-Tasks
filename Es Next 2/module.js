import {Shap} from "./index1.js";
import {Req} from "./index2.js";
import {Squ} from "./index3.js";
import {Cic} from "./index4.js";

var shap = new Shap(4, 90)
console.log(shap)

var rec1 = new Req(40,70)
console.log(rec1);

var squ = new Squ(10)
console.log(squ)


let cic = new Cic(10);
console.log(cic.calcWidhei())
