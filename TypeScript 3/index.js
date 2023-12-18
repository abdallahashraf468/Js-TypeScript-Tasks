// typess
var myName = "Alice";
var obj = { x: 0 };
obj.bar = 100;
obj = "hello";
var n = 1;
var b = false;
var arr = [];
// union typee 
var code;
code = 123;
code = "ABC";
// code = false; 
var coode;
coode = 123;
coode = "ABC";
coode = false;
// enum type
var category;
(function (category) {
    category[category["drama"] = 1] = "drama";
    category[category["action"] = 2] = "action";
    category[category["romantic"] = 3] = "romantic";
    category[category["loves"] = 4] = "loves";
})(category || (category = {}));
var movies = [
    { name: "Movies 1", category: category.drama },
    { name: "Movies 2", category: category.action },
    { name: "Movies 3", category: category.romantic },
    { name: "Movies 4", category: category.loves }
];
console.log(movies);
// function
function test(a, b) {
    console.log(a);
    console.log(b);
}
test("abdullah", 7);
// cenerats 
// الل هيعمل call لل function هو الل يحدد
function identity(arg) {
    return arg;
}
console.log(identity("abdullah Ashraf"));
var hello = /** @class */ (function () {
    function hello() {
    }
    hello.prototype.helloWorld = function () {
        console.log("Abdullah &%@#%");
        ;
    };
    return hello;
}());
export { hello };
var Shape = /** @class */ (function () {
    function Shape(w, h) {
        this.width = w;
        this.height = h;
    }
    Shape.prototype.displayIShape = function () {
        // console.log( this.width , this.height)
    };
    return Shape;
}());
export { Shape };
var IShap = new Shape(141, 343);
console.log(IShap);
