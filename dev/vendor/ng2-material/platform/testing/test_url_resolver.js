"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var compiler_1 = require("@angular/compiler");
var TestUrlResolver = (function (_super) {
    __extends(TestUrlResolver, _super);
    function TestUrlResolver() {
        _super.call(this);
    }
    TestUrlResolver.prototype.resolve = function (baseUrl, url) {
        return "/base/" + _super.prototype.resolve.call(this, baseUrl, url);
    };
    return TestUrlResolver;
}(compiler_1.UrlResolver));
exports.TestUrlResolver = TestUrlResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdF91cmxfcmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGxhdGZvcm0vdGVzdGluZy90ZXN0X3VybF9yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx5QkFBMEIsbUJBQW1CLENBQUMsQ0FBQTtBQUU5QztJQUFxQyxtQ0FBVztJQUM5QztRQUNFLGlCQUFPLENBQUM7SUFDVixDQUFDO0lBRUQsaUNBQU8sR0FBUCxVQUFRLE9BQWUsRUFBRSxHQUFXO1FBR2xDLE1BQU0sQ0FBQyxXQUFTLGdCQUFLLENBQUMsT0FBTyxZQUFDLE9BQU8sRUFBRSxHQUFHLENBQUcsQ0FBQztJQUNoRCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBcUMsc0JBQVcsR0FVL0M7QUFWWSx1QkFBZSxrQkFVM0IsQ0FBQSJ9