"use strict";
var Animate = (function () {
    function Animate() {
    }
    Animate.enter = function (el, cssClass) {
        el.classList.remove(cssClass);
        return new Promise(function (resolve) {
            el.classList.add(cssClass + '-add');
            setTimeout(function () {
                var duration = Animate.getTransitionDuration(el, true);
                var removeListener = function () { return done(false); };
                var callTimeout = setTimeout(function () { return done(true); }, duration);
                var done = function (timeout) {
                    if (!removeListener) {
                        return;
                    }
                    el.classList.remove(cssClass + '-add-active');
                    el.classList.remove(cssClass + '-add');
                    if (!timeout) {
                        clearTimeout(callTimeout);
                    }
                    el.removeEventListener(Animate.TRANSITION_EVENT, removeListener);
                    removeListener = null;
                    resolve();
                };
                el.addEventListener(Animate.TRANSITION_EVENT, removeListener);
                el.classList.add(cssClass + '-add-active');
                el.classList.add(cssClass);
            }, 1);
        });
    };
    Animate.leave = function (el, cssClass) {
        return new Promise(function (resolve) {
            el.classList.add(cssClass + '-remove');
            setTimeout(function () {
                var duration = Animate.getTransitionDuration(el, true);
                var callTimeout = setTimeout(function () { return done(true); }, duration);
                var removeListener = function () { return done(false); };
                var done = function (timeout) {
                    if (!removeListener) {
                        return;
                    }
                    el.classList.remove(cssClass + '-remove-active');
                    el.classList.remove(cssClass + '-remove');
                    if (!timeout) {
                        clearTimeout(callTimeout);
                    }
                    el.removeEventListener(Animate.TRANSITION_EVENT, removeListener);
                    removeListener = null;
                    resolve();
                };
                el.addEventListener(Animate.TRANSITION_EVENT, removeListener);
                el.classList.add(cssClass + '-remove-active');
                el.classList.remove(cssClass);
            }, 1);
        });
    };
    Animate.getTransitionDuration = function (element, includeDelay) {
        if (includeDelay === void 0) { includeDelay = false; }
        var prefixes = ['', 'moz', 'webkit', 'ms', 'o', 'khtml'];
        var style = window.getComputedStyle(element);
        for (var i = 0; i < prefixes.length; i++) {
            var durationProperty = (i === 0 ? '' : "-" + prefixes[i] + "-") + "transition-duration";
            var duration = style[durationProperty];
            if (!duration) {
                continue;
            }
            duration = (duration.indexOf('ms') > -1) ? parseFloat(duration) : parseFloat(duration) * 1000;
            if (duration === 0) {
                continue;
            }
            if (includeDelay) {
                var delayProperty = (i === 0 ? '' : "-" + prefixes[i] + "-") + "transition-delay";
                var delay = style[delayProperty];
                if (typeof delay !== 'undefined') {
                    duration += (delay.indexOf('ms') > -1) ? parseFloat(delay) : parseFloat(delay) * 1000;
                }
            }
            return duration;
        }
        return -1;
    };
    Animate.setTransitionDuration = function (element, delayMs) {
        element.style['transition-duration'] = delayMs + "ms";
    };
    Animate.whichTransitionEvent = function () {
        if (typeof document === 'undefined') {
            return 'transitionend';
        }
        var t;
        var el = document.createElement('fakeelement');
        var transitions = {
            'transition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'MozTransition': 'transitionend',
            'WebkitTransition': 'webkitTransitionEnd'
        };
        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    };
    Animate.animateStyles = function (element, styles, durationMs) {
        var saveDuration = Animate.getTransitionDuration(element);
        Animate.setTransitionDuration(element, durationMs);
        return new Promise(function (animResolve, animReject) {
            var callTimeout = setTimeout(function () { return done(true); }, durationMs);
            var removeListener = function () { return done(false); };
            var done = function (timeout) {
                if (!removeListener) {
                    return;
                }
                if (timeout) {
                    clearTimeout(callTimeout);
                }
                element.removeEventListener(Animate.TRANSITION_EVENT, removeListener);
                removeListener = null;
                if (saveDuration !== -1) {
                    Animate.setTransitionDuration(element, saveDuration);
                }
                else {
                    delete element.style['transition-duration'];
                }
                animResolve();
            };
            element.addEventListener(Animate.TRANSITION_EVENT, removeListener);
            Object.keys(styles).forEach(function (key) {
                element.style[key] = "" + styles[key];
            });
        });
    };
    Animate.setStyles = function (element, styles) {
        var saveDuration = Animate.getTransitionDuration(element);
        Animate.setTransitionDuration(element, 0);
        return new Promise(function (resolve, reject) {
            Object.keys(styles).forEach(function (key) {
                element.style[key] = "" + styles[key];
            });
            if (saveDuration !== -1) {
                Animate.setTransitionDuration(element, saveDuration);
            }
            else {
                delete element.style['transition-duration'];
            }
            resolve();
        });
    };
    Animate.wait = function (milliseconds) {
        if (milliseconds === void 0) { milliseconds = 10; }
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(); }, milliseconds);
        });
    };
    Animate.TRANSITION_EVENT = Animate.whichTransitionEvent();
    return Animate;
}());
exports.Animate = Animate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL3V0aWwvYW5pbWF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0E7SUFBQTtJQTBMQSxDQUFDO0lBbkxRLGFBQUssR0FBWixVQUFhLEVBQWUsRUFBRSxRQUFnQjtRQUM1QyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixNQUFNLENBQUMsSUFBSSxPQUFPLENBQU8sVUFBQyxPQUFPO1lBQy9CLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQztZQUNwQyxVQUFVLENBQUM7Z0JBQ1QsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDdkQsSUFBSSxjQUFjLEdBQUcsY0FBTSxPQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBWCxDQUFXLENBQUM7Z0JBQ3ZDLElBQUksV0FBVyxHQUFHLFVBQVUsQ0FBQyxjQUFNLE9BQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFWLENBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDekQsSUFBSSxJQUFJLEdBQUcsVUFBQyxPQUFPO29CQUNqQixFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BCLE1BQU0sQ0FBQztvQkFDVCxDQUFDO29CQUNELEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsQ0FBQztvQkFDOUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDO29CQUN2QyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ2IsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUM1QixDQUFDO29CQUNE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