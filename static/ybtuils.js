!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ybUtil={})}(this,(function(e){"use strict";var t=new class{constructor(){}thousands(e){return-1===["string","number"].indexOf(typeof e)?null:String(e).replace(/(\d)(?=(?:\d{3})+(?!\d))/g,"$1,")}};var r=new class{constructor(){}queryString(e){const t={};return e.replace(/[?&]+([^=&]+)=([^&]*)/gi,((e,r,n)=>t[r]=n)),t}};var n,i,s,a,o=new class{constructor(){}current(e=window.navigator.userAgent){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)?"Mobile":"Desktop"}};function c(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}n=new WeakMap,i=new WeakMap,s=new WeakMap,a=new WeakMap;var d=new class{constructor(){n.set(this,"[0-9a-zA-Z][0-9a-zA-Z-_.]*"),i.set(this,"[a-zA-Z0-9-.]+\\.[a-zA-Z]+"),s.set(this,/^01([0|1|6|7|8|9]?)([0-9]{3,4})([0-9]{4})$/),a.set(this,/^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/)}birthDate(e){return c(this,a,"f").test(String(e))}emailId(e){return new RegExp(`^${c(this,n,"f")}$`).test(e)}domain(e){return new RegExp(`^${c(this,i,"f")}$`).test(e)}email(e){return new RegExp(`^${c(this,n,"f")}@${c(this,i,"f")}$`).test(e)}mobilePhone(e){return c(this,s,"f").test(String(e))}};e.device=o,e.format=t,e.parse=r,e.validation=d,Object.defineProperty(e,"__esModule",{value:!0})}));