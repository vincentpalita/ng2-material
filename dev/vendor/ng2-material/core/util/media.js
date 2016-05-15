"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var viewport_1 = require("./viewport");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
exports.MEDIA = {
    'xs': '(max-width: 599px)',
    'gt-xs': '(min-width: 600px)',
    'sm': '(min-width: 600px) and (max-width: 959px)',
    'gt-sm': '(min-width: 960px)',
    'md': '(min-width: 960px) and (max-width: 1279px)',
    'gt-md': '(min-width: 1280px)',
    'lg': '(min-width: 1280px) and (max-width: 1919px)',
    'gt-lg': '(min-width: 1920px)',
    'xl': '(min-width: 1920px)'
};
exports.MEDIA_PRIORITY = [
    'xl',
    'gt-lg',
    'lg',
    'gt-md',
    'md',
    'gt-sm',
    'sm',
    'gt-xs',
    'xs'
];
var MediaListener = (function () {
    function MediaListener(query, _mql, _media) {
        var _this = this;
        this.query = query;
        this._mql = _mql;
        this._media = _media;
        this.onMatched = new BehaviorSubject_1.BehaviorSubject(this._mql);
        this._destroyed = false;
        this._listener = function (mql) { return _this.onMatched.next(mql); };
        this._mql.addListener(this._listener);
    }
    Object.defineProperty(MediaListener.prototype, "matches", {
        get: function () {
            return !this._destroyed && this._mql.matches;
        },
        enumerable: true,
        configurable: true
    });
    MediaListener.prototype.destroy = function () {
        if (!this._destroyed) {
            this._mql.removeListener(this._listener);
            this._media.unregisterListener(this);
            this._destroyed = true;
            this._listener = null;
            this._mql = null;
        }
    };
    return MediaListener;
}());
exports.MediaListener = MediaListener;
var Media = (function () {
    function Media(viewport) {
        this.viewport = viewport;
        this._cache = {};
    }
    Media.prototype.listen = function (query) {
        var listener = this._cache[query];
        if (!listener) {
            listener = this._cache[query] = {
                mql: this.viewport.matchMedia(query),
                references: 0
            };
        }
        listener.references++;
        return new MediaListener(query, listener.mql, this);
    };
    Media.prototype.unregisterListener = function (listener) {
        var cached = this._cache[listener.query];
        if (cached) {
            cached.references--;
            delete this._cache[listener.query];
        }
    };
    Media.prototype.hasMedia = function (size) {
        var query = Media.getQuery(size);
        if (!query) {
            return false;
        }
        return this.viewport.matchMedia(query).matches;
    };
    Media.getQuery = function (size) {
        var query = exports.MEDIA[size];
        if (!query) {
            console.warn("unknown media query size " + size + ". Expected one of [" + exports.MEDIA_PRIORITY.join(',') + "]");
            return null;
        }
        return query;
    };
    Media = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [viewport_1.ViewportHelper])
    ], Media);
    return Media;
}());
exports.Media = Media;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29yZS91dGlsL21lZGlhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFFekMseUJBQTZCLFlBQVksQ0FBQyxDQUFBO0FBQzFDLGdDQUE4QixzQkFBc0IsQ0FBQyxDQUFBO0FBWXhDLGFBQUssR0FBUTtJQUN4QixJQUFJLEVBQUUsb0JBQW9CO0lBQzFCLE9BQU8sRUFBRSxvQkFBb0I7SUFDN0IsSUFBSSxFQUFFLDJDQUEyQztJQUNqRCxPQUFPLEVBQUUsb0JBQW9CO0lBQzdCLElBQUksRUFBRSw0Q0FBNEM7SUFDbEQsT0FBTyxFQUFFLHFCQUFxQjtJQUM5QixJQUFJLEVBQUUsNkNBQTZDO0lBQ25ELE9BQU8sRUFBRSxxQkFBcUI7SUFDOUIsSUFBSSxFQUFFLHFCQUFxQjtDQUM1QixDQUFDO0FBRVcsc0JBQWMsR0FBUTtJQUNqQyxJQUFJO0lBQ0osT0FBTztJQUNQLElBQUk7SUFDSixPQUFPO0lBQ1AsSUFBSTtJQUNKLE9BQU87SUFDUCxJQUFJO0lBQ0osT0FBTztJQUNQLElBQUk7Q0FDTCxDQUFDO0FBTUY7SUFtQkUsdUJBQW1CLEtBQWEsRUFDWixJQUFvQixFQUNwQixNQUFhO1FBckJuQyxpQkF1Q0M7UUFwQm9CLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDWixTQUFJLEdBQUosSUFBSSxDQUFnQjtRQUNwQixXQUFNLEdBQU4sTUFBTSxDQUFPO1FBaEJqQyxjQUFTLEdBQTRCLElBQUksaUNBQWUsQ0FBaUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBVTVFLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFPbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFDLEdBQW1CLElBQUssT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQztRQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQWJELHNCQUFJLGtDQUFPO2FBQVg7WUFDRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQy9DLENBQUM7OztPQUFBO0lBZ0JELCtCQUFPLEdBQVA7UUFDRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ25CLENBQUM7SUFDSCxDQUFDO0lBRUgsb0JBQUM7QUFBRCxDQUFDLEFBdkNELElBdUNDO0FBdkNZLHFCQUFhLGdCQXVDekIsQ0FBQTtBQVdEO0lBR0UsZUFBbUIsUUFBdUI7UUFBdkIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQUZsQyxXQUFNLEdBQXdDLEVBQUUsQ0FBQztJQUl6RCxDQUFDO0lBRUQsc0JBQU0sR0FBTixVQUFPLEtBQWE7UUFDbEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDZCxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRztnQkFDOUIsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztnQkFDcEMsVUFBVSxFQUFFLENBQUM7YUFDZCxDQUFDO1FBQ0osQ0FBQztRQUNELFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxhQUFhLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELGtDQUFrQixHQUFsQixVQUFtQixRQUF1QjtRQUN4QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ1gsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsQ0FBQztJQUNILENBQUM7SUFFRCx3QkFBUSxHQUFSLFVBQVMsSUFBVztRQUNsQixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNYLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUNqRCxDQUFDO0lBRU0sY0FBUSxHQUFmLFVBQWdCLElBQVk7UUFDMUIsSUFBSSxLQUFLLEdBQUcsYUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsOEJBQTRCLElBQUksMkJBQXNCLHNCQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFHLENBQUMsQ0FBQztZQUNoRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBM0NIO1FBQUMsaUJBQVUsRUFBRTs7YUFBQTtJQTZDYixZQUFDO0FBQUQsQ0FBQyxBQTVDRCxJQTRDQztBQTVDWSxhQUFLLFFBNENqQixDQUFBIn0=