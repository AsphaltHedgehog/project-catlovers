function e(e,n,t,o){Object.defineProperty(e,n,{get:t,set:o,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequiree062;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){o[e]=n},n.parcelRequiree062=r),r.register("kyEFX",(function(n,t){var o,r;e(n.exports,"register",(function(){return o}),(function(e){return o=e})),e(n.exports,"resolve",(function(){return r}),(function(e){return r=e}));var s={};o=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)s[n[t]]=e[n[t]]},r=function(e){var n=s[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),r("kyEFX").register(JSON.parse('{"lz7nD":"shopinglist.9e4cfb22.js","dUcaX":"amazon-link_2x.fad82e15.png","8BG5f":"book-link_2x.cdd3fb2c.png","2jCLY":"empty-shop-list-bgr.4abada78.png","eYuym":"shopinglist.219adc58.js"}')),r("OrxsF"),r("ghhZM"),r("kB3cp"),r("9h4Q6"),r("g3WOS");const s=new(0,r("ju4sA").FetchBooks),i=document.querySelector(".shop-list");let a,l="";var c;a=null!==(c=JSON.parse(localStorage.getItem("books")))&&void 0!==c?c:[];var p;p=new URL(r("kyEFX").resolve("dUcaX"),import.meta.url).toString();var d;function u({_id:e,book_image:n,title:t,list_name:o,description:r,author:s,buy_links:i}){l=`\n  <li class="shop-item" data-idcard="${e}">\n        <button type="button" class="delate-btn" data-id="${e}">\n          \n        </button>\n        <img class="img-shop-list" src="${n}" alt="${t}" width="100" height="145" loading="lazy"/>\n        <div class="card-shopplist">\n          <h2 class="card-title-shoplist">${t}</h2>\n          <p class="card-category-shoplist">${o}</p>\n          <p class="card-description-shoplist">${r}</p>\n          <div class="wrapper-card-shoplist">\n            <p class="card-author-shoplist">${s}</p>\n            <ul class="shop-list-card">\n            <li class="shops-item">\n            <a\n              class="buy-links"\n              href="${i[0].url}"\n              aria-label="amazon-shop icon"\n              target="_blank"\n              rel="noopener noreferrer"\n            >\n              <img\n                // class="amazon-shop-icon-shoplist"\n                src="${new URL(p)}"\n                alt="amazon-shop icon"\n                loading="lazy"\n              />\n            </a>\n            </li>\n            <li class="shops-item">\n            <a\n              class="buy-links"\n              href="${i[1].url}"\n              aria-label="amazon-shop icon"\n              target="_blank"\n              rel="noopener noreferrer"\n            >\n              <img\n                class="apple-book-shoplist "\n                src="${new URL(d)}"\n                alt="amazon-shop icon"\n                loading="lazy"\n              />\n            </a>\n            </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n  `}d=new URL(r("kyEFX").resolve("8BG5f"),import.meta.url).toString();var h;h=new URL(r("kyEFX").resolve("2jCLY"),import.meta.url).toString(),async function(e){if(!e.length>0)return void(i.innerHTML=`<li><p class="text-empty-shop-list">This page is empty, add some books and proceed to order.</p></li><li><img src=${new URL(h)} width="265"\n      height="198" alt="falling books"/></li>`);const n=[];for(const t of e){s.bookId=t._id;u(await s.fetchBookId().then((e=>e.data))),n.push(l)}await async function(e){i.innerHTML=e}(n.join(""))}(a),r("gjiCh");document.querySelector(".shop-list").addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;e.target.parentElement.classList.add("deleted-book");const n=e.target.dataset.id,t=JSON.parse(localStorage.getItem("books"));for(let e=0;e<t.length;e+=1)if(t[e]._id===n){t.splice(e,1),localStorage.setItem("books",JSON.stringify(t));break}}));
//# sourceMappingURL=shopinglist.9e4cfb22.js.map