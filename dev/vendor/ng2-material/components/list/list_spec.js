"use strict";
var util_1 = require("../../platform/testing/util");
function main() {
    var template = "\n    <md-list>\n      <md-list-item class=\"md-2-line\">\n        <img/>\n        <div class=\"md-list-item-text\">\n          <h3>Title</h3>\n          <p>Secondary text</p>\n        </div>\n      </md-list-item>\n    </md-list>\n  ";
    util_1.componentSanityCheck('List', 'md-list', template);
    util_1.componentSanityCheck('List Item', 'md-list-item', template);
}
exports.main = main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdF9zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0X3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFtQyw2QkFBNkIsQ0FBQyxDQUFBO0FBRWpFO0lBQ0UsSUFBSSxRQUFRLEdBQUcsNE9BVWQsQ0FBQztJQUNGLDJCQUFvQixDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEQsMkJBQW9CLENBQUMsV0FBVyxFQUFFLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUM5RCxDQUFDO0FBZGUsWUFBSSxPQWNuQixDQUFBIn0=