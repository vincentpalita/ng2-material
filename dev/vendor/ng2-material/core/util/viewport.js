"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ViewportHelper = (function () {
    function ViewportHelper() {
    }
    return ViewportHelper;
}());
exports.ViewportHelper = ViewportHelper;
var BrowserViewportHelper = (function (_super) {
    __extends(BrowserViewportHelper, _super);
    function BrowserViewportHelper() {
        _super.apply(this, arguments);
    }
    BrowserViewportHelper.prototype.getDocumentNativeElement = function () {
        return window.document;
    };
    BrowserViewportHelper.prototype.requestFrame = function (fn) {
        return window.requestAnimationFrame(fn);
    };
    BrowserViewportHelper.prototype.matchMedia = function (query) {
        return window.matchMedia(query);
    };
    BrowserViewportHelper.prototype.scrollTop = function () {
        return window.pageYOffset || document.documentElement.scrollTop;
    };
    return BrowserViewportHelper;
}(ViewportHelper));
exports.BrowserViewportHelper = BrowserViewportHelper;
var NodeViewportMediaMatch = (function () {
    function NodeViewportMediaMatch(matches, media) {
        if (matches === void 0) { matches = false; }
        if (media === void 0) { media = ''; }
        this.matches = matches;
        this.media = media;
    }
    NodeViewportMediaMatch.prototype.addListener = function (listener) {
    };
    NodeViewportMediaMatch.prototype.removeListener = function (listener) {
    };
    return NodeViewportMediaMatch;
}());
exports.NodeViewportMediaMatch = NodeViewportMediaMatch;
var NodeViewportHelper = (function (_super) {
    __extends(NodeViewportHelper, _super);
    function NodeViewportHelper() {
        _super.apply(this, arguments);
    }
    NodeViewportHelper.prototype.getDocumentNativeElement = function () {
        return {};
    };
    NodeViewportHelper.prototype.requestFrame = function (fn) {
        return process.nextTick(fn);
    };
    NodeViewportHelper.prototype.matchMedia = function (query) {
        return new NodeViewportMediaMatch(false, query);
    };
    NodeViewportHelper.prototype.scrollTop = function () {
        return 0;
    };
    return NodeViewportHelper;
}(ViewportHelper));
exports.NodeViewportHelper = NodeViewportHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld3BvcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29yZS91dGlsL3ZpZXdwb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQWVBO0lBQUE7SUFRQSxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQVJxQixzQkFBYyxpQkFRbkMsQ0FBQTtBQUVEO0lBQTJDLHlDQUFjO0lBQXpEO1FBQTJDLDhCQUFjO0lBZ0J6RCxDQUFDO0lBZkMsd0RBQXdCLEdBQXhCO1FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUNELDRDQUFZLEdBQVosVUFBYSxFQUEyQjtRQUN0QyxNQUFNLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCwwQ0FBVSxHQUFWLFVBQVcsS0FBYTtRQUN0QixNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQseUNBQVMsR0FBVDtRQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDO0lBQ2xFLENBQUM7SUFFSCw0QkFBQztBQUFELENBQUMsQUFoQkQsQ0FBMkMsY0FBYyxHQWdCeEQ7QUFoQlksNkJBQXFCLHdCQWdCakMsQ0FBQTtBQUVEO0lBQ0UsZ0NBQW1CLE9BQXdCLEVBQVMsS0FBa0I7UUFBMUQsdUJBQStCLEdBQS9CLGVBQStCO1FBQUUscUJBQXlCLEdBQXpCLFVBQXlCO1FBQW5ELFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBYTtJQUV0RSxDQUFDO0lBRUQsNENBQVcsR0FBWCxVQUFZLFFBQWdDO0lBQzVDLENBQUM7SUFFRCwrQ0FBYyxHQUFkLFVBQWUsUUFBZ0M7SUFDL0MsQ0FBQztJQUVILDZCQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFYWSw4QkFBc0IseUJBV2xDLENBQUE7QUFFRDtJQUF3QyxzQ0FBYztJQUF0RDtRQUF3Qyw4QkFBYztJQWdCdEQsQ0FBQztJQWZDLHFEQUF3QixHQUF4QjtRQUNFLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0QseUNBQVksR0FBWixVQUFhLEVBQTJCO1FBQ3RDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCx1Q0FBVSxHQUFWLFVBQVcsS0FBYTtRQUN0QixNQUFNLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELHNDQUFTLEdBQVQ7UUFDRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVILHlCQUFDO0FBQUQsQ0FBQyxBQWhCRCxDQUF3QyxjQUFjLEdBZ0JyRDtBQWhCWSwwQkFBa0IscUJBZ0I5QixDQUFBIn0=