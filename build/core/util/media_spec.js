"use strict";
var testing_1 = require('@angular/core/testing');
var media_1 = require('./media');
function main() {
    describe('MediaService', function () {
        var smallQuery = media_1.Media.getQuery('sm');
        var largeQuery = media_1.Media.getQuery('lg');
        var m = null;
        describe('listen', function () {
            beforeEach(testing_1.inject([media_1.Media], function (media) {
                m = media;
            }));
            it('should return a listener with the given query', function () {
                var listener = m.listen(smallQuery);
                expect(listener.query).toBe(smallQuery);
                listener.destroy();
            });
            it('should reference count and share matchMedia listeners with the same query', function () {
                expect(m.cache[largeQuery]).toBe(undefined);
                var listener = m.listen(largeQuery);
                expect(m.cache[largeQuery].references).toBe(1);
                var another = m.listen(largeQuery);
                expect(m.cache[largeQuery].references).toBe(2);
                listener.destroy();
                expect(m.cache[largeQuery].references).toBe(1);
                another.destroy();
                expect(m.cache[largeQuery]).toBe(undefined);
            });
        });
    });
}
exports.main = main;
//# sourceMappingURL=media_spec.js.map