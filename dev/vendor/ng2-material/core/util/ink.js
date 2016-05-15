"use strict";
var animate_1 = require("./animate");
var Ink = (function () {
    function Ink() {
    }
    Ink.canApply = function (element) {
        return !element.hasAttribute('md-no-ink');
    };
    Ink.getSize = function (fit, width, height) {
        return fit
            ? Math.max(width, height)
            : Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
    };
    Ink.ripple = function (element, left, top) {
        var fit = !!element.getAttribute('md-fab');
        var container = element.querySelector('.md-ripple-container');
        if (!container) {
            container = document.createElement('div');
            container.classList.add('md-ripple-container');
            element.appendChild(container);
        }
        var ripple = document.createElement('div');
        ripple.classList.add('md-ripple');
        var getInitialStyles = function () {
            var color = window.getComputedStyle(element).color || 'rgb(0,0,0)';
            var size = Ink.getSize(fit, element.clientWidth, element.clientHeight);
            return {
                'background-color': color,
                left: left + "px",
                top: top + "px",
                width: size + "px",
                height: size + "px"
            };
        };
        return animate_1.Animate.setStyles(ripple, getInitialStyles())
            .then(function () { return container.appendChild(ripple); })
            .then(function () { return ripple.classList.add('md-ripple-placed'); })
            .then(function () { return animate_1.Animate.wait(); })
            .then(function () { return ripple.classList.add('md-ripple-scaled'); })
            .then(function () { return ripple.classList.add('md-ripple-active'); })
            .then(function () { return animate_1.Animate.wait(450); })
            .then(function () { return ripple.classList.remove('md-ripple-placed'); })
            .then(function () { return animate_1.Animate.wait(650); })
            .then(function () { return container.removeChild(ripple); });
    };
    Ink.rippleEvent = function (element, event) {
        var rippleX = event.offsetX;
        var rippleY = event.offsetY;
        if (element !== event.srcElement) {
            var rect = element.getBoundingClientRect();
            rippleX = event.clientX - rect.left;
            rippleY = event.clientY - rect.top;
        }
        return Ink.ripple(element, rippleX, rippleY);
    };
    return Ink;
}());
exports.Ink = Ink;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5rLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvcmUvdXRpbC9pbmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFzQixXQUFXLENBQUMsQ0FBQTtBQUtsQztJQUFBO0lBd0ZBLENBQUM7SUFsRlEsWUFBUSxHQUFmLFVBQWdCLE9BQW9CO1FBQ2xDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQVdNLFdBQU8sR0FBZCxVQUFlLEdBQVksRUFBRSxLQUFhLEVBQUUsTUFBYztRQUN4RCxNQUFNLENBQUMsR0FBRztjQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQztjQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQVVNLFVBQU0sR0FBYixVQUFjLE9BQW9CLEVBQUUsSUFBWSxFQUFFLEdBQVc7UUFDM0QsSUFBSSxHQUFHLEdBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFcEQsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQzlELEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNmLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDL0MsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBRUQsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFD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