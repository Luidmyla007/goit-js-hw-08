!function(){function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,d=c||l||Function("return this")(),s=Object.prototype.toString,v=Math.max,m=Math.min,p=function(){return d.Date.now()};function g(t,e,n){var o,i,a,u,f,c,l=0,d=!1,s=!1,g=!0;if("function"!=typeof t)throw new TypeError(r);function j(e){var n=o,r=i;return o=i=void 0,l=e,u=t.apply(r,n)}function x(t){return l=t,f=setTimeout(T,e),d?j(t):u}function S(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-l>=a}function T(){var t=p();if(S(t))return h(t);f=setTimeout(T,function(t){var n=e-(t-c);return s?m(n,a-(t-l)):n}(t))}function h(t){return f=void 0,g&&o?j(t):(o=i=void 0,u)}function w(){var t=p(),n=S(t);if(o=arguments,i=this,c=t,n){if(void 0===f)return x(c);if(s)return f=setTimeout(T,e),j(c)}return void 0===f&&(f=setTimeout(T,e)),u}return e=y(e)||0,b(n)&&(d=!!n.leading,a=(s="maxWait"in n)?v(y(n.maxWait)||0,e):a,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=i=f=void 0},w.flush=function(){return void 0===f?u:h(p())},w}function b(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=a.test(t);return n||u.test(t)?f(t.slice(2),n?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var o=!0,i=!0;if("function"!=typeof t)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(t,e,{leading:o,maxWait:e,trailing:i})};const j={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")},x="feedback-form-state",S={};j.form.addEventListener("submit",(function(t){t.preventDefault(),t.currentTarget.reset(),localStorage.removeItem(x)})),j.input.addEventListener("input",t(e)((function(t){const e=t.target.value;localStorage.setItem(x,e);const n=localStorage.getItem(x);n&&(j.input.value=n)}),500)),j.textarea.addEventListener("input",t(e)((function(t){const e=t.target.value;localStorage.setItem(x,e);const n=localStorage.getItem(x);n&&(j.textarea.value=n)}),500)),j.form.addEventListener("input",(t=>{S[t.target.name]=t.target.value,console.log(S)}))}();
//# sourceMappingURL=03-feedback.7d7c4bad.js.map
