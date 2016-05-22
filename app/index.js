"use strict";
var button_basic_usage_component_1 = require('./examples/button/button-basic-usage.component');
var card_action_buttons_component_1 = require('./examples/card/card-action-buttons.component');
var card_basic_usage_component_1 = require('./examples/card/card-basic-usage.component');
var card_inline_actions_component_1 = require('./examples/card/card-inline-actions.component');
var checkbox_basic_usage_component_1 = require('./examples/checkbox/checkbox-basic-usage.component');
var data_table_basic_usage_component_1 = require('./examples/data-table/data-table-basic-usage.component');
var data_table_selectable_rows_component_1 = require('./examples/data-table/data-table-selectable-rows.component');
var dialog_basic_usage_component_1 = require('./examples/dialog/dialog-basic-usage.component');
var elevation_basic_usage_component_1 = require('./examples/elevation/elevation-basic-usage.component');
var input_basic_usage_component_1 = require('./examples/input/input-basic-usage.component');
var list_basic_usage_component_1 = require('./examples/list/list-basic-usage.component');
var progress_bar_basic_usage_component_1 = require('./examples/progress-bar/progress-bar-basic-usage.component');
var progress_circle_basic_usage_component_1 = require('./examples/progress-circle/progress-circle-basic-usage.component');
var radio_basic_usage_component_1 = require('./examples/radio/radio-basic-usage.component');
var sidenav_basic_usage_component_1 = require('./examples/sidenav/sidenav-basic-usage.component');
var switch_basic_usage_component_1 = require('./examples/switch/switch-basic-usage.component');
var tabs_dynamic_height_component_1 = require('./examples/tabs/tabs-dynamic-height.component');
var tabs_dynamic_tabs_component_1 = require('./examples/tabs/tabs-dynamic-tabs.component');
var toolbar_basic_usage_component_1 = require('./examples/toolbar/toolbar-basic-usage.component');
var shared_1 = require('./shared');
var environment_1 = require('./environment');
exports.environment = environment_1.environment;
var site_component_1 = require('./site.component');
exports.SiteAppComponent = site_component_1.SiteAppComponent;
/**
 * Collection of Material Design component example directives.
 */
exports.DEMO_DIRECTIVES = [
    elevation_basic_usage_component_1.ElevationBasicUsageComponent, button_basic_usage_component_1.ButtonBasicUsageComponent, card_action_buttons_component_1.CardActionButtonsComponent,
    card_basic_usage_component_1.CardBasicUsageComponent, card_inline_actions_component_1.CardInlineActionsComponent, checkbox_basic_usage_component_1.CheckboxBasicUsageComponent,
    data_table_basic_usage_component_1.DataTableBasicUsageComponent, data_table_selectable_rows_component_1.DataTableSelectableRowsComponent, dialog_basic_usage_component_1.DialogBasicUsageComponent,
    input_basic_usage_component_1.InputBasicUsageComponent, list_basic_usage_component_1.ListBasicUsageComponent, progress_bar_basic_usage_component_1.ProgressBarBasicUsageComponent,
    progress_circle_basic_usage_component_1.ProgressCircleBasicUsageComponent, radio_basic_usage_component_1.RadioBasicUsageComponent, sidenav_basic_usage_component_1.SidenavBasicUsageComponent,
    switch_basic_usage_component_1.SwitchBasicUsageComponent, tabs_dynamic_height_component_1.TabsDynamicHeightComponent, tabs_dynamic_tabs_component_1.TabsDynamicTabsComponent,
    toolbar_basic_usage_component_1.ToolbarBasicUsageComponent
];
/**
 * Collection of providers for example app
 */
exports.DEMO_PROVIDERS = [shared_1.ComponentsService, shared_1.NavigationService, shared_1.VersionService];
//# sourceMappingURL=index.js.map