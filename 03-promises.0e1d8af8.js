function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=r);var u=r("eWCmQ");const l={delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),submit:document.querySelector(".form button")};function i(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n(`✅ Fulfilled promise ${e} in ${t}ms`):o(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}l.submit.addEventListener("click",(function(t){t.preventDefault();let n=Number(l.delay.value),o=Number(l.step.value),r=Number(l.amount.value);for(let t=1;t<=r;t+=1)n+=o,i(t,n).then((t=>e(u).Notify.failure(t))).catch((t=>e(u).Notify.failure(t)))}));
//# sourceMappingURL=03-promises.0e1d8af8.js.map