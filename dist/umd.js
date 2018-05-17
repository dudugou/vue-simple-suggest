!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.VueSimpleSuggest=e()}(this,function(){"use strict";var t={selectionUp:[38],selectionDown:[40],select:[13],hideList:[27],autocomplete:[32,13]},e={input:String,select:Object};function i(t,e){if(t.length<=0)return!1;var i=function(t){return t.some(function(t){return t===e.keyCode})};return Array.isArray(t[0])?t.some(function(t){return i(t)}):i(t)}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function s(t,e){try{var i=t()}catch(t){return e()}return i&&i.then?i.then(e,e):e()}function o(t,e){try{var i=t()}catch(t){return e(t)}return i&&i.then?i.then(void 0,e):i}function r(t,e,i){return i?e?e(t):t:(t=Promise.resolve(t),e?t.then(e):t)}var u=function(){try{if(isNaN.apply(null,{}))return function(t){return function(){try{return Promise.resolve(t.apply(this,arguments))}catch(t){return Promise.reject(t)}}}}catch(t){}return function(t){return function(){try{return Promise.resolve(t.apply(this,Array.prototype.slice.call(arguments)))}catch(t){return Promise.reject(t)}}}}();function l(t,e){var i=t();return i&&i.then?i.then(e):e(i)}function c(){}var h="input",a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vue-simple-suggest",class:{designed:!t.destyled,focus:t.isInFocus},on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"tab",9,e.key,"Tab"))return null;t.isTabbed=!0}}},[i("div",{ref:"inputSlot",staticClass:"input-wrapper"},[t._t("default",[i("input",t._b({staticClass:"default-input",domProps:{value:t.text||""}},"input",t.$attrs,!1))])],2),t._v(" "),t.listShown&&!t.removeList?i("div",{staticClass:"suggestions",on:{mouseenter:function(e){t.hoverList(!0)},mouseleave:function(e){t.hoverList(!1)}}},[t._t("misc-item-above",null,{suggestions:t.suggestions,query:t.text}),t._v(" "),t._l(t.suggestions,function(e,n){return i("div",{key:t.isPlainSuggestion?"suggestion-"+n:t.valueProperty(e),staticClass:"suggest-item",class:{selected:t.selected&&t.valueProperty(e)==t.valueProperty(t.selected),hover:t.hovered&&t.valueProperty(t.hovered)==t.valueProperty(e)},on:{mouseenter:function(i){t.hover(e,i.target)},mouseleave:function(e){t.hover(null,e.target)},click:function(i){t.suggestionClick(e,i)}}},[t._t("suggestion-item",[i("span",[t._v(t._s(t.displayProperty(e)))])],{autocomplete:function(){return t.autocompleteText(t.displayProperty(e))},suggestion:e,query:t.text})],2)}),t._v(" "),t._t("misc-item-below",null,{suggestions:t.suggestions,query:t.text})],2):t._e()])},staticRenderFns:[],name:"vue-simple-suggest",model:{prop:"value",get event(){return h}},props:{controls:{type:Object,default:function(){return t}},minLength:{type:Number,default:1},maxSuggestions:{type:Number,default:10},displayAttribute:{type:String,default:"title"},valueAttribute:{type:String,default:"id"},list:{type:[Function,Array],default:function(){return[]}},removeList:{type:Boolean,default:!1},destyled:{type:Boolean,default:!1},filterByQuery:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e){return!e||~this.displayProperty(t).toLowerCase().indexOf(e.toLowerCase())}},debounce:{type:Number,default:0},value:{},mode:{type:String,default:h,validator:function(t){return!!~Object.keys(e).indexOf(t.toLowerCase())}}},watch:{mode:{handler:function(t,e){h=t},immediate:!0},value:{handler:function(t){this.text=t},immediate:!0}},data:function(){return{selected:null,hovered:null,suggestions:[],listShown:!1,inputElement:null,canSend:!0,timeoutInstance:null,text:this.value,isPlainSuggestion:!1,isClicking:!1,isOverList:!1,isInFocus:!1,isTabbed:!1,controlScheme:{}}},computed:{listIsRequest:function(){return"function"==typeof this.list},inputIsComponent:function(){return this.$slots.default&&this.$slots.default.length>0&&!!this.$slots.default[0].componentInstance},input:function(){return this.inputIsComponent?this.$slots.default[0].componentInstance:this.inputElement},on:function(){return this.inputIsComponent?"$on":"addEventListener"},off:function(){return this.inputIsComponent?"$off":"removeEventListener"},hoveredIndex:function(){var t=this;return this.suggestions.findIndex(function(e){return t.hovered&&t.valueProperty(t.hovered)==t.valueProperty(e)})}},created:function(){this.controlScheme=Object.assign({},t,this.controls)},mounted:function(){this.inputElement=this.$refs.inputSlot.querySelector("input"),this.prepareEventHandlers(!0)},beforeDestroy:function(){this.prepareEventHandlers(!1)},methods:{prepareEventHandlers:function(t){var e=this,i=this[t?"on":"off"],n={keydown:function(t){return e.moveSelection(t),e.onAutocomplete(t)},keyup:this.onListKeyUp},s=Object.assign({blur:this.onBlur,focus:this.onFocus,input:this.onInput,click:this.showSuggestions},n);for(var o in s)this.input[i](o,s[o]);var r=t?"addEventListener":"removeEventListener";for(var u in n)this.inputElement[r](u,n[u])},isScopedSlotEmpty:function(t){if(t){var e=t(this);return!(Array.isArray(e)||e&&(e.tag||e.context||e.text||e.children))}return!0},miscSlotsAreEmpty:function(){var t=this,e=["misc-item-above","misc-item-below"].map(function(e){return t.$scopedSlots[e]});if(e.every(function(t){return!!t}))return e.every(this.isScopedSlotEmpty.bind(this));var i=e.find(function(t){return!!t});return this.isScopedSlotEmpty.call(this,i)},getPropertyByAttribute:function(t,e){return this.isPlainSuggestion?t:void 0!==(void 0===t?"undefined":n(t))?function(t,e){return e.split(".").reduce(function(t,e){return t===Object(t)?t[e]:t},t)}(t,e):t},displayProperty:function(t){return String(this.getPropertyByAttribute(t,this.displayAttribute))},valueProperty:function(t){return this.getPropertyByAttribute(t,this.valueAttribute)},autocompleteText:function(t){this.$emit("input",t),this.inputElement.value=t,this.text=t},select:function(t){this.hovered=null,this.selected=t,this.$emit("select",t),this.autocompleteText(this.displayProperty(t))},hover:function(t,e){this.hovered=t,null!=this.hovered&&this.$emit("hover",t,e)},hoverList:function(t){this.isOverList=t},hideList:function(){this.listShown&&(this.listShown=!1,this.$emit("hide-list"))},showList:function(){this.listShown||(this.text&&this.text.length||0)>=this.minLength&&(this.suggestions.length>0||!this.miscSlotsAreEmpty())&&(this.listShown=!0,this.$emit("show-list"))},showSuggestions:u(function(){var t=this;return l(function(){if(0===t.suggestions.length&&0===t.minLength&&!t.text)return function(t,e){if(!e)return Promise.resolve(t).then(c)}(t.research())},function(){t.showList()})}),moveSelection:function(t){if(i([this.controlScheme.selectionUp,this.controlScheme.selectionDown],t)){t.preventDefault(),this.showSuggestions();var e=i(this.controlScheme.selectionDown,t),n=2*e-1,s=e?0:this.suggestions.length-1,o=e?this.hoveredIndex<this.suggestions.length-1:this.hoveredIndex>0,r=null;r=this.hovered?o?this.suggestions[this.hoveredIndex+n]:this.suggestions[s]:this.selected||this.suggestions[s],this.hover(r)}},onListKeyUp:function(t){var e=this.controlScheme.select;i([e,this.controlScheme.hideList],t)&&(t.preventDefault(),this.listShown?(i(e,t)&&this.hovered&&this.select(this.hovered),this.hideList()):i(e,t)&&this.research())},onAutocomplete:function(t){i(this.controlScheme.autocomplete,t)&&(t.ctrlKey||t.shiftKey)&&this.suggestions.length>0&&this.suggestions[0]&&this.listShown&&(t.preventDefault(),this.hover(this.suggestions[0]),this.autocompleteText(this.displayProperty(this.suggestions[0])))},suggestionClick:function(t,e){this.$emit("suggestion-click",t,e),this.select(t),this.hideList(),this.isClicking=this.isOverList=!1},onBlur:function(t){this.isInFocus?(this.isClicking=this.isOverList&&!this.isTabbed,this.isClicking?t&&t.isTrusted&&!this.isTabbed&&this.inputElement.focus():(this.isInFocus=!1,this.hideList(),this.$emit("blur",t))):(this.inputElement.blur(),console.error("This should never happen!\n          If you encouneterd this error, please report at https://github.com/KazanExpress/vue-simple-suggest/issues")),this.isTabbed=!1},onFocus:function(t){this.isInFocus=!0,t&&t.sourceCapabilities&&this.$emit("focus",t),this.isClicking||this.showList()},onInput:function(t){var e=t.target?t.target.value:t;this.text!==e&&(this.text=e,this.$emit("input",this.text),this.selected&&(this.selected=null,this.$emit("select",null)),this.debounce?(clearTimeout(this.timeoutInstance),this.timeoutInstance=setTimeout(this.research,this.debounce)):this.research())},research:u(function(){var t=this;return s(function(){return o(function(){return function(t){var e=t();if(e&&e.then)return e.then(c)}(function(){if(t.canSend){t.canSend=!1;var e=t.$set;return r(t.getSuggestions(t.text),function(i){e.call(t,t,"suggestions",i),t.canSend=!0})}})},function(e){throw t.clearSuggestions(),e})},function(){return 0===t.suggestions.length&&t.miscSlotsAreEmpty()?t.hideList():t.showList(),t.suggestions})}),getSuggestions:u(function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(t.listShown&&!e&&t.minLength>0)return t.hideList(),[];if(e.length<t.minLength)return t.suggestions;t.selected=null,t.listIsRequest&&(t.$emit("request-start",e),(t.suggestions.length>0||!t.miscSlotsAreEmpty())&&t.showList());var i=[];return s(function(){return o(function(){return l(function(){if(t.listIsRequest)return r(t.list(e),function(t){i=t||[]});i=t.list},function(){Array.isArray(i)||(i=[i]),t.isPlainSuggestion="object"!==n(i[0])||Array.isArray(i[0]),t.filterByQuery&&(i=i.filter(function(i){return t.filter(i,e)})),t.listIsRequest&&t.$emit("request-done",i)})},function(e){if(!t.listIsRequest)throw e;t.$emit("request-failed",e)})},function(){return t.maxSuggestions&&i.splice(t.maxSuggestions),i})}),clearSuggestions:function(){this.suggestions.splice(0)}}};return(Vue||window&&window.Vue)&&(Vue||window.Vue).component("vue-simple-suggest",a),a});
