'use strict';

var index_vue_rollupPluginVue_script = require('./index.vue_rollup-plugin-vue_script.js');
var normalizeComponent = require('../../node_modules/vue-runtime-helpers/dist/normalize-component.js');

/* script */
const __vue_script__ = index_vue_rollupPluginVue_script;

/* template */
var __vue_render__ = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { attrs: { id: "app" } }, [
    _vm._ssrNode(
      '<input type="search"' +
        _vm._ssrAttr("value", _vm.term) +
        "> <button>Search</button> " +
        (_vm.results
          ? "<div><h3>Search Results</h3> <ul>" +
            _vm._ssrList(_vm.results, function (result) {
              return (
                "<li><a" +
                _vm._ssrAttr("href", result.url) +
                ">" +
                _vm._ssrEscape(
                  " {% raw %}" + _vm._s(result.title) + "{% endraw %}"
                ) +
                "</a></li>"
              )
            }) +
            "</ul> " +
            (_vm.noResults
              ? "<p>\n    Sorry, no results were found.\n    </p>"
              : "<!---->") +
            "</div>"
          : "<!---->")
    ),
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = "data-v-74eaa9d9";
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

module.exports = __vue_component__;
