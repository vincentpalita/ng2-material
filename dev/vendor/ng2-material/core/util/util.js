"use strict";
function debounce(func, wait, scope) {
    var timer = null;
    return function debounced() {
        var context = scope, args = Array.prototype.slice.call(arguments);
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            timer = undefined;
            func.apply(context, args);
        }, wait || 10);
    };
}
exports.debounce = debounce;
function throttle(func, delay, scope) {
    var recent;
    return function throttled() {
        var context = scope;
        var args = arguments;
        var now = new Date().getTime();
        if (!recent || (now - recent > delay)) {
            func.apply(context, args);
            recent = now;
        }
    };
}
exports.throttle = throttle;
function parseTabIndexAttribute(attr) {
    return !!attr ? parseInt(attr, 10) : 0;
}
exports.parseTabIndexAttribute = parseTabIndexAttribute;
function isNumber(value) {
    return Object.prototype.toString.call(value) === '[object Number]';
}
exports.isNumber = isNumber;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL3V0aWwvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBT0Esa0JBQXlCLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSztJQUN4QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7SUFFakIsTUFBTSxDQUFDO1FBQ0wsSUFBSSxPQUFPLEdBQUcsS0FBSyxFQUNmLElBQUksR0FBTSxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFcEQsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNULFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixDQUFDO1FBQ0QsS0FBSyxHQUFHLFVBQVUsQ0FBQztZQUVqQixLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTVCLENBQUMsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7SUFDakIsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQWpCZSxnQkFBUSxXQWlCdkIsQ0FBQTtBQVFELGtCQUF5QixJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDekMsSUFBSSxNQUFNLENBQUM7SUFDWCxNQUFNLENBQUM7UUFDTCxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ3JCLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFL0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMxQixNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2YsQ0FBQztJQUNILENBQUMsQ0FBQztBQUNKLENBQUM7QUFaZSxnQkFBUSxXQVl2QixDQUFBO0FBR0QsZ0NBQXVDLElBQVM7SUFDOUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUZlLDhCQUFzQix5QkFFckMsQ0FBQTtBQUdELGtCQUF5QixLQUFVO0lBQ2pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssaUJBQWlCLENBQUM7QUFDckUsQ0FBQztBQUZlLGdCQUFRLFdBRXZCLENBQUEifQ==