"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require("@angular/core");
var button_1 = require("./components/button/button");
var content_1 = require("./components/content/content");
var data_table_1 = require("./components/data_table/data_table");
var dialog_1 = require("./components/dialog/dialog");
var divider_1 = require("./components/divider/divider");
var icon_1 = require("./components/icon/icon");
var ink_1 = require("./components/ink/ink");
var validators_1 = require("./components/form/validators");
var messages_1 = require("./components/form/messages");
var list_1 = require("./components/list/list");
var peekaboo_1 = require("./components/peekaboo/peekaboo");
var switch_1 = require("./components/switch/switch");
var subheader_1 = require("./components/subheader/subheader");
var tabs_1 = require("./components/tabs/tabs");
var media_1 = require("./core/util/media");
var viewport_1 = require("./core/util/viewport");
var overlay_1 = require("@angular2-material/core/overlay/overlay");
var backdrop_1 = require("./components/backdrop/backdrop");
__export(require('./components/button/button'));
__export(require('./components/backdrop/backdrop'));
__export(require('./components/content/content'));
__export(require('./components/data_table/data_table'));
__export(require('./components/dialog/dialog'));
__export(require('./components/divider/divider'));
__export(require('./components/icon/icon'));
__export(require('./components/ink/ink'));
__export(require('./components/form/validators'));
__export(require('./components/form/messages'));
__export(require('./components/list/list'));
__export(require('./components/peekaboo/peekaboo'));
__export(require('./components/switch/switch'));
__export(require('./components/subheader/subheader'));
__export(require('./components/tabs/tabs'));
__export(require('./core/util/media'));
__export(require('./core/util/ink'));
__export(require('./core/util/viewport'));
__export(require('./core/util/animate'));
exports.MATERIAL_DIRECTIVES = [
    button_1.MdAnchor, button_1.MdButton,
    content_1.MdContent,
    data_table_1.MdDataTable, data_table_1.MdDataTableHeaderSelectableRow, data_table_1.MdDataTableSelectableRow,
    divider_1.MdDivider,
    backdrop_1.MdBackdrop,
    dialog_1.MdDialog, dialog_1.MdDialogActions, dialog_1.MdDialogTitle,
    icon_1.MdIcon,
    ink_1.MdInk,
    validators_1.MdPatternValidator, validators_1.MdMaxLengthValidator,
    validators_1.MdMinValueValidator, validators_1.MdMaxValueValidator,
    validators_1.MdNumberRequiredValidator,
    messages_1.MdMessage, messages_1.MdMessages,
    list_1.MdList, list_1.MdListItem,
    peekaboo_1.MdPeekaboo,
    subheader_1.MdSubheader,
    switch_1.MdSwitch,
    tabs_1.MdTab, tabs_1.MdTabs
];
exports.MATERIAL_NODE_PROVIDERS = [
    core_1.provide(viewport_1.ViewportHelper, { useClass: viewport_1.NodeViewportHelper }),
    media_1.Media
].concat(validators_1.INPUT_VALIDATORS);
exports.MATERIAL_BROWSER_PROVIDERS = exports.MATERIAL_NODE_PROVIDERS.concat([
    core_1.provide(viewport_1.ViewportHelper, { useClass: viewport_1.BrowserViewportHelper }),
    core_1.provide(overlay_1.OVERLAY_CONTAINER_TOKEN, { useValue: overlay_1.createOverlayContainer() }),
]);
exports.MATERIAL_PROVIDERS = exports.MATERIAL_BROWSER_PROVIDERS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFCQUFzQixlQUFlLENBQUMsQ0FBQTtBQUN0Qyx1QkFBaUMsNEJBQTRCLENBQUMsQ0FBQTtBQUM5RCx3QkFBd0IsOEJBQThCLENBQUMsQ0FBQTtBQUN2RCwyQkFJTyxvQ0FBb0MsQ0FBQyxDQUFBO0FBQzVDLHVCQUF1RCw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3BGLHdCQUF3Qiw4QkFBOEIsQ0FBQyxDQUFBO0FBQ3ZELHFCQUFxQix3QkFBd0IsQ0FBQyxDQUFBO0FBQzlDLG9CQUFvQixzQkFBc0IsQ0FBQyxDQUFBO0FBQzNDLDJCQU9PLDhCQUE4QixDQUFDLENBQUE7QUFDdEMseUJBQW9DLDRCQUE0QixDQUFDLENBQUE7QUFDakUscUJBQWlDLHdCQUF3QixDQUFDLENBQUE7QUFDMUQseUJBQXlCLGdDQUFnQyxDQUFDLENBQUE7QUFDMUQsdUJBQXVCLDRCQUE0QixDQUFDLENBQUE7QUFDcEQsMEJBQTBCLGtDQUFrQyxDQUFDLENBQUE7QUFDN0QscUJBQTRCLHdCQUF3QixDQUFDLENBQUE7QUFDckQsc0JBQW9CLG1CQUFtQixDQUFDLENBQUE7QUFDeEMseUJBQXdFLHNCQUFzQixDQUFDLENBQUE7QUFDL0Ysd0JBQThELHlDQUF5QyxDQUFDLENBQUE7QUFDeEcseUJBQXlCLGdDQUFnQyxDQUFDLENBQUE7QUFDMUQsaUJBQWMsNEJBQTRCLENBQUMsRUFBQTtBQUMzQyxpQkFBYyxnQ0FBZ0MsQ0FBQyxFQUFBO0FBRS9DLGlCQUFjLDhCQUE4QixDQUFDLEVBQUE7QUFFN0MsaUJBQWMsb0NBQW9DLENBQUMsRUFBQTtBQUVuRCxpQkFBYyw0QkFBNEIsQ0FBQyxFQUFBO0FBQzNDLGlCQUFjLDhCQUE4QixDQUFDLEVBQUE7QUFFN0MsaUJBQWMsd0JBQXdCLENBQUMsRUFBQTtBQUV2QyxpQkFBYyxzQkFBc0IsQ0FBQyxFQUFBO0FBRXJDLGlCQUFjLDhCQUE4QixDQUFDLEVBQUE7QUFDN0MsaUJBQWMsNEJBQTRCLENBQUMsRUFBQTtBQUUzQyxpQkFBYyx3QkFBd0IsQ0FBQyxFQUFBO0FBRXZDLGlCQUFjLGdDQUFnQyxDQUFDLEVBQUE7QUFFL0MsaUJBQWMsNEJBQTRCLENBQUMsRUFBQTtBQUUzQyxpQkFBYyxrQ0FBa0MsQ0FBQyxFQUFBO0FBRWpELGlCQUFjLHdCQUF3QixDQUFDLEVBQUE7QUFFdkMsaUJBQWMsbUJBQW1CLENBQUMsRUFBQTtBQUNsQyxpQkFBYyxpQkFBaUIsQ0FBQyxFQUFBO0FBRWhDLGlCQUFjLHNCQUFzQixDQUFDLEVBQUE7QUFDckMsaUJBQWMscUJBQXFCLENBQUMsRUFBQTtBQUt2QiwyQkFBbUIsR0FBVTtJQUN4QyxpQkFBUSxFQUFFLGlCQUFRO0lBQ2xCLG1CQUFTO0lBQ1Qsd0JBQVcsRUFBRSwyQ0FBOEIsRUFBRSxxQ0FBd0I7SUFDckUsbUJBQVM7SUFDVCxxQkFBVTtJQUNWLGlCQUFRLEVBQUUsd0JBQWUsRUFBRSxzQkFBYTtJQUN4QyxhQUFNO0lBQ04sV0FBSztJQUNMLCtCQUFrQixFQUFFLGlDQUFvQjtJQUN4QyxnQ0FBbUIsRUFBRSxnQ0FBbUI7SUFDeEMsc0NBQXlCO0lBQ3pCLG9CQUFTLEVBQUUscUJBQVU7SUFDckIsYUFBTSxFQUFFLGlCQUFVO0lBQ2xCLHFCQUFVO0lBQ1YsdUJBQVc7SUFDWCxpQkFBUTtJQUNSLFlBQUssRUFBRSxhQUFNO0NBQ2QsQ0FBQztBQUtXLCtCQUF1QixHQUFVO0lBQzVDLGNBQU8sQ0FBQyx5QkFBYyxFQUFFLEVBQUMsUUFBUSxFQUFFLDZCQUFrQixFQUFDLENBQUM7SUFDdkQsYUFBSztTQUNGLDZCQUFnQixDQUNwQixDQUFDO0FBS1csa0NBQTBCLEdBQ2xDLCtCQUF1QjtJQUMxQixjQUFPLENBQUMseUJBQWMsRUFBRSxFQUFDLFFBQVEsRUFBRSxnQ0FBcUIsRUFBQyxDQUFDO0lBRTFELGNBQU8sQ0FBQyxpQ0FBdUIsRUFBRSxFQUFDLFFBQVEsRUFBRSxnQ0FBc0IsRUFBRSxFQUFDLENBQUM7RUFDdkUsQ0FBQztBQVNXLDBCQUFrQixHQUFHLGtDQUEwQixDQUFDIn0=