!function(){function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},a=n.parcelRequiree062;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},n.parcelRequiree062=a),a.register("iE7OH",(function(t,n){var o,r;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var a={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},r=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("aNJCr",(function(t,n){var o;e(t.exports,"getBundleURL",(function(){return o}),(function(e){return o=e}));var r={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var t=r[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),r[e]=t),t}})),a("iE7OH").register(JSON.parse('{"EVgbq":"index.b9a34247.js","3qpq5":"icon-x-close.0d6025fe.svg","eePMM":"amazon-link_2x.fad82e15.png","gdfoP":"book-link_2x.cdd3fb2c.png","3sPTe":"shopinglist.6fa14f6c.js"}'));var c=a("bpxeT"),s=a("2TvXO"),i=a("7a6b6");c=a("bpxeT"),s=a("2TvXO");var l=function(e,t){for(var n="",o=0;o<t;o+=1){var r=e[o],a=r._id,c=r.book_image,s=r.title,i=r.author;n+='\n      <li class="item-category-book js-book-modal" data-book-id="'.concat(a,'">\n        <a class="link-books-render" href="#">  \n      <div class="card-book">\n            <div class="img-card-book">\n            <img src="').concat(c,'" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">').concat(s,'</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">').concat(i,"</p>\n                  </div>\n                </div>\n          </div>\n        </a>\n          </li>\n  ")}return n};function u(){return(u=t(c)(t(s).mark((function e(n){var o,r,a,c,i,u,p,b,f,v,m,g,h,k,_,y,w,x,E;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(o=document.querySelector(".top-books")).innerHTML='<li><h2 class="main-title">Best Sellers<span class="color-accent"> Books</span></h2></li>';try{if(window.screen.width<767.8)for(r=0;r<4;r+=1)1,a=n[r],c=a.books,i=a.list_name,u=l(c,1),p=d(u,i),o.insertAdjacentHTML("beforeend",p);else if(window.screen.width>767.8&&window.screen.width<1439.98)for(b=0;b<4;b+=1)3,f=n[b],v=f.books,m=f.list_name,g=l(v,3),h=d(g,m),o.insertAdjacentHTML("beforeend",h);else if(window.screen.width>=1440)for(k=0;k<4;k+=1)5,_=n[k],y=_.books,w=_.list_name,x=l(y,5),E=d(x,w),o.insertAdjacentHTML("beforeend",E);else console.error("ops... something went wrong, contact us via email")}catch(e){console.log(e)}case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t){return'\n  <li class="top-books-containers ">\n  <h3 class="item-category">'.concat(t,'</h3>\n  <ul class="box-category">\n  ').concat(e,'\n  </ul>\n  <button type="button" data-cat-name=\'').concat(t,'\' aria-label="Show more" class="see-more">See more</button>\n  </li>\n  ')}var p=function(e){return u.apply(this,arguments)},b=new(0,i.FetchBooks);function f(){return v.apply(this,arguments)}function v(){return(v=t(c)(t(s).mark((function e(){var n;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.fetchTopBooks();case 3:n=e.sent,p(n.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}f();var m=f,g=(c=a("bpxeT"),s=a("2TvXO"),i=a("7a6b6"),document.querySelector(".categories-select-wrapper"));var h=function(e){var t=document.createElement("ul");t.classList.add("categories-list");var n=document.createElement("li"),o=document.createElement("button");o.setAttribute("type","button"),o.setAttribute("data-cat-name","All categories"),o.classList.add("categories-active","categories-list-el"),o.textContent="All categories",n.appendChild(o),t.appendChild(n),e.forEach((function(n,o){var r=document.createElement("li"),a=document.createElement("button");a.setAttribute("type","button"),a.setAttribute("data-cat-name","".concat(e[o].list_name)),a.classList.add("categories-list-el"),a.textContent="".concat(n.list_name),r.appendChild(a),t.appendChild(r)})),g.appendChild(t)};c=a("bpxeT"),s=a("2TvXO"),c=a("bpxeT"),s=a("2TvXO");function k(){return(k=t(c)(t(s).mark((function e(n){var o,r,a;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.category,e.prev=1,e.next=4,n.fetchCategoryOfBooks().then((function(e){return e.data}));case 4:return(r=e.sent).length,a=l(r,r.length),e.next=9,_(o,a);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function _(e,t){var n=function(e){var t=e.split(" ");if(t.length>1){var n=t.pop();return{string:t.join(" "),lastWord:n}}return console.log(error)}(e),o=(document.querySelector(".books-content"),'<li><h2 class="main-title">'.concat(n.string,' <span class="color-accent">').concat(n.lastWord,"</span></h2></li>"));document.querySelector(".top-books").innerHTML="".concat(o,'<div class="cat-books-container">').concat(t,"</div>")}var y=function(e){return k.apply(this,arguments)};function w(){return(w=t(c)(t(s).mark((function e(n,o){return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("BUTTON"===n.target.nodeName){e.next=2;break}return e.abrupt("return");case 2:if(e.prev=2,"All categories"!==n.target.dataset.catName){e.next=9;break}return m(),document.querySelector(".categories-active").classList.remove("categories-active"),n.target.classList.add("categories-active"),e.abrupt("return");case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0);case 14:return document.querySelector(".categories-active").classList.remove("categories-active"),x(n),e.prev=17,o.category=n.srcElement.dataset.catName,e.next=21,y(o);case 21:e.next=26;break;case 23:e.prev=23,e.t1=e.catch(17),console.log(e.t1);case 26:case"end":return e.stop()}}),e,null,[[2,11],[17,23]])})))).apply(this,arguments)}function x(e){categoryName=e.srcElement.dataset.catName,catSelector=document.querySelectorAll(".categories-list li");var t=!0,n=!1,o=void 0;try{for(var r,a=catSelector[Symbol.iterator]();!(t=(r=a.next()).done);t=!0){var c=r.value.querySelector("button[data-cat-name='".concat(categoryName,"']"));if(c){c.classList.add("categories-active");break}console.log(1)}}catch(e){n=!0,o=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw o}}}var E=function(e,t){return w.apply(this,arguments)},S=document.querySelector(".base-wrapper"),L=new(0,i.FetchBooks);function T(){return(T=t(c)(t(s).mark((function e(){var n;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.fetchCategoryList();case 3:return n=e.sent,e.next=6,h(n.data);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){T.apply(this,arguments)}(),S.addEventListener("click",(function(e){return E(e,L)})),a("4BL5A"),a("aJ3d0"),a("d9852");c=a("bpxeT"),s=a("2TvXO"),i=a("7a6b6");a("7a6b6");var O;O=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("3qpq5");var q;q=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("eePMM");var C;function A(){var e,t;e=window.scrollY||document.documentElement.scrollTop,t=window.scrollX||document.documentElement.scrollLeft,document.body.classList.add("blockScroll"),window.onscroll=function(){window.scrollTo(t,e)}}function H(){window.onscroll=function(){},document.body.classList.remove("blockScroll")}C=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("gdfoP");var N,B=document.querySelector(".top-books");B&&B.addEventListener("click",(N=t(c)(t(s).mark((function e(n){var o,r,a,c,l,u,d,p,b,f,v,m,g,h,k,_,y,w;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m=function(e){document.body.removeChild(f),document.removeEventListener("keyup",v),e.stopPropagation(),H()},h=function(e){e.target===g&&(document.body.removeChild(f),document.removeEventListener("keyup",v),e.stopPropagation(),H())},k=function(e){var t=localStorage.getItem(b);return t||(t="[]"),void 0!==JSON.parse(t).find((function(t){return t._id===e}))},y=function(e){console.log("adding",e);var t=localStorage.getItem(b);t||(t="[]");var n=JSON.parse(t);n.push(e),localStorage.setItem(b,JSON.stringify(n))},w=function(e){console.log("removing",e);var t=localStorage.getItem(b);if(null!==t){var n=JSON.parse(t);n=n.filter((function(t){return t._id!==e._id})),localStorage.setItem(b,JSON.stringify(n))}},a=n.target.closest("li.js-book-modal")){e.next=9;break}return e.abrupt("return");case 9:return A(),c=a.getAttribute("data-book-id"),(l=new(0,i.FetchBooks)).bookId=c,e.next=15,l.fetchBookId();case 15:u=e.sent,d=u.data,p={book_image:d.book_image,title:d.title,description:d.description,author:d.author,amazon_link:null===(o=d.buy_links.find((function(e){return"Amazon"===e.name})))||void 0===o?void 0:o.url,apple_link:null===(r=d.buy_links.find((function(e){return"Apple Books"===e.name})))||void 0===r?void 0:r.url},b="books",(f=document.createElement("div")).innerHTML=(t=p,s=k(c),x=void 0,x=s?'<button class="card__btn add-card__bnt btn">remove from shop list</button> <p class = "congrat-text">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.!</p>':'<button class="card__btn add-card__bnt btn">add to shop list</button> <p class = "congrat-text"></p>','<div class="backdrop backdrop__modal js-book-modal">\n  <div class="modal book-card__modal scrollable">\n\n    <button class="modal-close__btn js-book-close">\n           <img class="close__icon"src='.concat(new URL(O),' alt="close_icon" />\n    </button>\n    <div class="book-card">\n      <div class="book-card__thumb">\n        <img class="book-card__img" src="').concat(t.book_image,'" alt="book_image" loading="lazy" />\n      </div>\n      <div class="book-info">\n        <h2 class="book-title">').concat(t.title,'</h2>\n        <h3 class="book-author">').concat(t.author,'</h3>\n        <p class="book-description">').concat(t.description,'</p>\n        <ul class="shops-list list">\n          <li class="shops-item">\n            <a\n              class="buy-links"\n              href="').concat(t.amazon_link,'"\n              aria-label="amazon-shop icon"\n              target="_blank"\n              rel="noopener noreferrer"\n            >\n              <img\n                class="amazon-shop__icon book-shop__icons"\n                src="').concat(new URL(q),'"\n                alt="amazon-shop icon"\n                loading="lazy"\n              />\n            </a>\n          </li>\n          <li class="shops-item">\n            <a\n              class="buy-links"\n              href="').concat(t.apple_link,'"\n              aria-label="apple-book icon"\n              target="_blank"\n              rel="noopener noreferrer"\n            >\n              <img\n                class="apple-book__icon book-shop__icons"\n                src="').concat(new URL(C),'"\n                alt="apple-book icon"\n                loading="lazy"\n              />\n            </a>\n          </li>\n         \n        </ul>\n      </div>\n      \n    </div>\n    <div class="book-card__btn">').concat(x,"</div>")),document.body.appendChild(f),v=function(e){"Escape"===e.key&&(document.body.removeChild(f),document.removeEventListener("keyup",v),H())},document.addEventListener("keyup",v),f.querySelector(".modal-close__btn").addEventListener("click",m),(g=f.querySelector(".backdrop__modal")).addEventListener("click",h),_=document.querySelector(".congrat-text"),f.querySelector(".add-card__bnt").addEventListener("click",(function(e){k(c)?(w(d),e.target.innerText="add to shopping list",_.textContent=""):(y(d),e.target.innerText="remove from the shopping list",_.textContent="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.")}));case 35:case"end":return e.stop()}var t,s,x}),e)}))),function(e){return N.apply(this,arguments)})),a("ixJrK"),a("4BL5A"),a("aJ3d0"),a("d9852"),a("kvC6y"),a("6slwO")}();
//# sourceMappingURL=index.b9a34247.js.map
