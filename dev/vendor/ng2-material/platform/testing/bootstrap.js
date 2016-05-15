"use strict";
var testing_1 = require("@angular/core/testing");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var testing_2 = require("@angular/platform-browser/testing");
var index_1 = require("../../index");
var test_url_resolver_1 = require("./test_url_resolver");
var compiler_1 = require("@angular/compiler");
var core_1 = require("@angular/core");
testing_1.resetBaseTestProviders();
testing_1.setBaseTestProviders(testing_2.TEST_BROWSER_STATIC_PLATFORM_PROVIDERS, platform_browser_dynamic_1.BROWSER_APP_DYNAMIC_PROVIDERS.concat(testing_2.ADDITIONAL_TEST_BROWSER_PROVIDERS, index_1.MATERIAL_BROWSER_PROVIDERS, [
    core_1.provide(core_1.ApplicationRef, { useClass: testing_1.MockApplicationRef }),
    core_1.provide(compiler_1.UrlResolver, { useValue: new test_url_resolver_1.TestUrlResolver() })
]));
function onlySpecFiles(path) {
    return /_spec\.js$/.test(path);
}
function load(files) {
    console.log('importing test modules: ');
    var error = function (e) {
        console.error(e);
    };
    var myZone = new Zone();
    myZone.fork({
        onError: function (e) {
            console.error("Zone Error:");
            console.error(e);
        }
    });
    var runTests = function (path) {
        return new Promise(function (resolve, reject) {
            myZone.run(function () {
                console.log(" - " + path);
                return System.import(path).then(function (module) {
                    if (module.hasOwnProperty('main')) {
                        try {
                            module.main();
                            resolve();
                        }
                        catch (e) {
                            error(e);
                            reject(e);
                        }
                    }
                    else {
                        console.warn(" - skipping " + path + " which does not implement main() method.");
                        reject('invalid file');
                    }
                });
            });
        });
    };
    var promises = Object
        .keys(files)
        .filter(onlySpecFiles)
        .map(runTests);
    return Promise.all(promises);
}
exports.load = load;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BsYXRmb3JtL3Rlc3RpbmcvYm9vdHN0cmFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFJQSx3QkFBK0UsdUJBQXVCLENBQUMsQ0FBQTtBQUN2Ryx5Q0FBNEMsbUNBQW1DLENBQUMsQ0FBQTtBQUNoRix3QkFHTyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQzNDLHNCQUF5QyxhQUFhLENBQUMsQ0FBQTtBQUN2RCxrQ0FBOEIscUJBQXFCLENBQUMsQ0FBQTtBQUNwRCx5QkFBMEIsbUJBQW1CLENBQUMsQ0FBQTtBQUM5QyxxQkFBc0MsZUFBZSxDQUFDLENBQUE7QUFFdEQsZ0NBQXNCLEVBQUUsQ0FBQztBQUN6Qiw4QkFBb0IsQ0FDbEIsZ0RBQXNDLEVBRWpDLHdEQUE2QixRQUM3QiwyQ0FBaUMsRUFDakMsa0NBQTBCO0lBQzdCLGNBQU8sQ0FBQyxxQkFBYyxFQUFFLEVBQUMsUUFBUSxFQUFFLDRCQUFrQixFQUFDLENBQUM7SUFDdkQsY0FBTyxDQUFDLHNCQUFXLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxtQ0FBZSxFQUFFLEVBQUMsQ0FBQztFQUN4RCxDQUNGLENBQUM7QUFFRix1QkFBdUIsSUFBSTtJQUN6QixNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBRUQsY0FBcUIsS0FBZTtJQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDeEMsSUFBSSxLQUFLLEdBQUcsVUFBQyxDQUFNO1FBQ2pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkIsQ0FBQyxDQUFDO0lBQ0YsSUFBSSxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ1YsT0FBTyxFQUFFLFVBQUMsQ0FBQztZQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDN0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQixDQUFDO0tBQ0YsQ0FBQyxDQUFDO0lBR0gsSUFBSSxRQUFRLEdBQUcsVUFBQyxJQUFZO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBTyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ3ZDLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFNLElBQU0sQ0FBQyxDQUFDO2dCQUMxQixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFXO29CQUMxQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbEMsSUFBSSxDQUFDOzRCQUNILE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQzs0QkFDZCxPQUFPLEVBQUUsQ0FBQzt3QkFDWixDQUNBO3dCQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ1QsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNULE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDWixDQUFDO29CQUNILENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBZSxJQUFJLDZDQUEwQyxDQUFDLENBQUM7d0JBQzVFLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDekIsQ0FBQztnQkFDSCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUwsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7SUFDRixJQUFJLFFBQVEsR0FBRyxNQUFNO1NBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDWCxNQUFNLENBQUMsYUFBYSxDQUFDO1NBQ3JCLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUUvQixDQUFDO0FBM0NlLFlBQUksT0EyQ25CLENBQUEifQ==