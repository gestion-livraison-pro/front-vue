import{bN as i}from"./index-3afa6c13.js";function o(r,e){if(i(r)!=="object"||r===null)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var n=t.call(r,e||"default");if(i(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function u(r){var e=o(r,"string");return i(e)==="symbol"?e:String(e)}function f(r,e,t){return e=u(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}export{u as _,f as a};
