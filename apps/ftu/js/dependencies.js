const kDeps = [
  {
    name: "intro",
    kind: "virtual",
    deps: [
      "shoelace-button",
      "shoelace-drawer",
      "shoelace-light-theme",
      "shoelace-setup",
      "content manager",
    ],
  },
  {
    name: "language-panel",
    kind: "virtual",
    deps: [
      "shoelace-menu",
      "shoelace-menu-item",
      "shoelace-icon",
      "language-module",
    ],
  },
  { name: "language-module", kind: "module", param: "js/language_panel.js" },
  {
    name: "wifi-panel",
    kind: "virtual",
    deps: [
      "shoelace-menu",
      "shoelace-menu-item",
      "shoelace-icon",
      "shoelace-switch",
      "shoelace-divider",
      "shoelace-dialog",
      "shoelace-input",
      "wifi-module",
    ],
  },
  {
    name: "display-panel",
    kind: "virtual",
    deps: ["shoelace-icon", "shoelace-switch", "display-module"],
  },
  {
    name: "datetime-panel",
    kind: "virtual",
    deps: [
      "shoelace-alert",
      "shoelace-icon",
      "shoelace-switch",
      "shoelace-details",
      "shoelace-button",
      "shoelace-input",
      "shoelace-menu",
      "shoelace-menu-item",
      "datetime-module",
    ],
  },
  {
    name: "search-panel",
    kind: "virtual",
    deps: [
      "shoelace-alert",
      "shoelace-icon",
      "shoelace-menu",
      "shoelace-menu-item",
      "content manager",
      "search-module",
    ],
  },
  {
    name: "webext-panel",
    kind: "virtual",
    deps: [
      "shoelace-alert",
      "shoelace-icon",
      "shoelace-menu",
      "shoelace-menu-item",
      "webext-module",
    ],
  },
  {
    name: "identity-panel",
    kind: "virtual",
    deps: [
      "shoelace-alert",
      "shoelace-icon",
      "shoelace-input",
      "shoelace-menu",
      "shoelace-menu-item",
      "identity-module",
    ],
  },
  {
    name: "content manager",
    kind: "sharedWindowModule",
    param: ["js/content_manager.js", "contentManager", "ContentManager"],
    deps: ["shared-api-daemon"],
  },
  {
    name: "privacy-panel",
    kind: "virtual",
    deps: ["shoelace-icon", "shoelace-switch", "privacy-module"],
  },
  { name: "display-module", kind: "module", param: "js/display_panel.js" },
  { name: "wifi-module", kind: "module", param: "js/wifi_panel.js" },
  {
    name: "datetime-module",
    kind: "module",
    param: "js/datetime_panel.js",
    deps: ["switch-setting"],
  },
  {
    name: "privacy-module",
    kind: "module",
    param: "js/privacy_panel.js",
    deps: ["switch-setting"],
  },
  { name: "search-module", kind: "module", param: "js/search_panel.js" },
  { name: "webext-module", kind: "module", param: "js/webext_panel.js" },
  { name: "identity-module", kind: "module", param: "js/identity_panel.js" },
  {
    name: "switch-setting",
    kind: "module",
    param: ["js/switch_setting.js", "SwitchAndSetting"],
  },
];
