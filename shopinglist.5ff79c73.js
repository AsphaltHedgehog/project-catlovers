!function(){function n(n,e,t,r){Object.defineProperty(n,e,{get:t,set:r,enumerable:!0,configurable:!0})}function e(n){return n&&n.__esModule?n.default:n}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=t.parcelRequiree062;null==a&&((a=function(n){if(n in r)return r[n].exports;if(n in o){var e=o[n];delete o[n];var t={id:n,exports:{}};return r[n]=t,e.call(t.exports,t,t.exports),t.exports}var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(n,e){o[n]=e},t.parcelRequiree062=a),a.register("iE7OH",(function(e,t){var r,o;n(e.exports,"register",(function(){return r}),(function(n){return r=n})),n(e.exports,"resolve",(function(){return o}),(function(n){return o=n}));var a={};r=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)a[e[t]]=n[e[t]]},o=function(n){var e=a[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),a.register("aNJCr",(function(e,t){var r;n(e.exports,"getBundleURL",(function(){return r}),(function(n){return r=n}));var o={};function a(n){return(""+n).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(n){var e=o[n];return e||(e=function(){try{throw new Error}catch(e){var n=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(n)return a(n[2])}return"/"}(),o[n]=e),e}})),a("iE7OH").register(JSON.parse('{"744CZ":"shopinglist.5ff79c73.js","eePMM":"amazon-link_2x.fad82e15.png","gdfoP":"book-link_2x.cdd3fb2c.png","l6y6u":"empty-shop-list-bgr.4abada78.png","3sPTe":"shopinglist.6fa14f6c.js"}')),a("aJ3d0"),a("ixJrK"),a("6slwO"),a("d9852"),a("4BL5A");var s,i,c=a("bpxeT"),l=a("2TvXO"),u=new(0,a("7a6b6").FetchBooks),p=document.querySelector(".shop-list"),d="";s=null!==(i=JSON.parse(localStorage.getItem("books")))&&void 0!==i?i:[];var h;h=a("aNJCr").getBundleURL("744CZ")+a("iE7OH").resolve("eePMM");var f;function g(n){var e=n._id,t=n.book_image,r=n.title,o=n.list_name,a=n.description,s=n.author,i=n.buy_links;d='\n  <li class="shop-item" data-idcard="'.concat(e,'">\n        <button type="button" class="delate-btn" data-id="').concat(e,'">\n          <svg class="delate-svg" width="16" height="16">\n          <use href="./images/icons.svg#icon-delete"></use>\n          </svg>\n        </button>\n        <img class="img-shop-list" src="').concat(t,'" alt="').concat(r,'" width="100" height="116" loading="lazy"/>\n        <div class="card-shopplist">\n          <h2 class="card-title-shoplist">').concat(r,'</h2>\n          <p class="card-category-shoplist">').concat(o,'</p>\n          <p class="card-description-shoplist">').concat(a,'</p>\n          <div class="wrapper-card-shoplist">\n            <p class="card-author-shoplist">').concat(s,'</p>\n            <ul class="shops-list">\n            <li class="shops-item">\n            <a\n              class="buy-links"\n              href="').concat(i[0].url,'"\n              aria-label="amazon-shop icon"\n              target="_blank"\n              rel="noopener noreferrer"\n            >\n              <img\n                class="amazon-shop__icon book-shop__icons"\n                src="').concat(new URL(h),'"\n                alt="amazon-shop icon"\n                loading="lazy"\n                width="32" height="11"\n              />\n            </a>\n            </li>\n            <li class="shops-item">\n            <a\n              class="buy-links"\n              href="').concat(i[1].url,'"\n              aria-label="amazon-shop icon"\n              target="_blank"\n              rel="noopener noreferrer"\n            >\n              <img\n                class="amazon-shop__icon book-shop__icons"\n                src="').concat(new URL(f),'"\n                alt="amazon-shop icon"\n                loading="lazy"\n                width="16" height="16"\n              />\n            </a>\n            </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n  ')}function b(n){return v.apply(this,arguments)}function v(){return(v=e(c)(e(l).mark((function n(t){return e(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:p.innerHTML=t;case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}f=a("aNJCr").getBundleURL("744CZ")+a("iE7OH").resolve("gdfoP");var m;function _(){return(_=e(c)(e(l).mark((function n(t){var r,o,a,s,i,c,h;return e(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(!t.length>0)){n.next=3;break}return p.innerHTML='<li><p class="text-empty-shop-list">This page is empty, add some books and proceed to order.</p></li><li><img src='.concat(new URL(m),' width="265"\n      height="198" alt="falling books"/></li>'),n.abrupt("return");case 3:r=[],o=!0,a=!1,s=void 0,n.prev=5,i=t[Symbol.iterator]();case 7:if(o=(c=i.next()).done){n.next=18;break}return h=c.value,u.bookId=h._id,n.next=12,u.fetchBookId().then((function(n){return n.data}));case 12:g(n.sent),r.push(d);case 15:o=!0,n.next=7;break;case 18:n.next=24;break;case 20:n.prev=20,n.t0=n.catch(5),a=!0,s=n.t0;case 24:n.prev=24,n.prev=25,o||null==i.return||i.return();case 27:if(n.prev=27,!a){n.next=30;break}throw s;case 30:return n.finish(27);case 31:return n.finish(24);case 32:return n.next=34,b(r.join(""));case 34:case"end":return n.stop()}}),n,null,[[5,20,24,32],[25,,27,31]])})))).apply(this,arguments)}m=a("aNJCr").getBundleURL("744CZ")+a("iE7OH").resolve("l6y6u"),function(n){_.apply(this,arguments)}(s),a("kvC6y")}();
//# sourceMappingURL=shopinglist.5ff79c73.js.map
