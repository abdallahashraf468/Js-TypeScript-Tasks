var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { hello } from "./index";
import { Shape } from "./index";
var mo = new hello();
mo.helloWorld();
var Rec = /** @class */ (function (_super) {
    __extends(Rec, _super);
    function Rec(w, h, z) {
        var _this = _super.call(this, w, h) || this;
        _this.zindx = z;
        return _this;
    }
    Rec.prototype.displayRec = function () {
        console.log(this.width, this.height, this.zindx);
    };
    return Rec;
}(Shape));
var x = new Rec(1, 8, 9);
console.log(x);
