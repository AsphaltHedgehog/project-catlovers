function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},a=t.parcelRequiree062;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return o[e]=a,t.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequiree062=a),a.register("kyEFX",(function(t,o){var n,a;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var s={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)s[t[o]]=e[t[o]]},a=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("kyEFX").register(JSON.parse('{"5ZPII":"index.7977fba5.js","ewt39":"icon-x-close.0d6025fe.svg","dUcaX":"amazon-link_2x.fad82e15.png","8BG5f":"book-link_2x.cdd3fb2c.png","eYuym":"shopinglist.cb3b104f.js"}'));var s=a("ju4sA");var c=function(e,t){let o="";for(let n=0;n<t;n+=1){const{_id:t,book_image:a,title:s,author:c}=e[n];o+=`\n      <li class="item-category-book js-book-modal" data-book-id="${t}">\n        <a class="link-books-render" href="#">  \n      <div class="card-book">\n            <div class="img-card-book">\n            <img src="${a}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${s}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${c}</p>\n                  </div>\n                </div>\n          </div>\n        </a>\n          </li>\n  `}return o};function r(e,t){return`\n  <li class="top-books-containers ">\n  <h3 class="item-category">${t}</h3>\n  <ul class="box-category">\n  ${e}\n  </ul>\n  <button type="button" data-cat-name='${t}' aria-label="Show more" class="see-more">See more</button>\n  </li>\n  `}var l=async function(e){const t=document.querySelector(".top-books");t.innerHTML='<li><h2 class="main-title">Best Sellers<span class="color-accent"> Books</span></h2></li>';try{if(window.screen.width<767.8)for(let o=0;o<4;o+=1){const n=1,{books:a,list_name:s}=e[o],l=r(c(a,n),s);t.insertAdjacentHTML("beforeend",l)}else if(window.screen.width>767.8&&window.screen.width<1440)for(let o=0;o<4;o+=1){const n=3,{books:a,list_name:s}=e[o],l=r(c(a,n),s);t.insertAdjacentHTML("beforeend",l)}else if(window.screen.width>=1440)for(let o=0;o<4;o+=1){const n=5,{books:a,list_name:s}=e[o],l=r(c(a,n),s);t.insertAdjacentHTML("beforeend",l)}else console.error("ops... something went wrong, contact us via email")}catch(e){console.log(e)}};const i=new(0,s.FetchBooks);async function d(){try{const e=await i.fetchTopBooks();l(e.data)}catch(e){console.error(e)}}d();var u=d;s=a("ju4sA");const m=document.querySelector(".categories-select-wrapper");var b=function(e){const t=document.createElement("ul");t.classList.add("categories-list");const o=document.createElement("li"),n=document.createElement("button");n.setAttribute("type","button"),n.setAttribute("data-cat-name","All categories"),n.classList.add("categories-active","categories-list-el"),n.textContent="All categories",o.appendChild(n),t.appendChild(o),e.forEach(((o,n)=>{const a=document.createElement("li"),s=document.createElement("button");s.setAttribute("type","button"),s.setAttribute("data-cat-name",`${e[n].list_name}`),s.classList.add("categories-list-el"),s.textContent=`${o.list_name}`,a.appendChild(s),t.appendChild(a)})),m.appendChild(t)};var p=async function(e){const t=e.category;try{const o=await e.fetchCategoryOfBooks().then((e=>e.data));o.length;const n=c(o,o.length);await function(e,t){const o=function(e){const t=e.split(" ");if(t.length>1){const e=t.pop();return{string:t.join(" "),lastWord:e}}return console.log(error)}(e),n=(document.querySelector(".books-content"),`<li><h2 class="main-title">${o.string} <span class="color-accent">${o.lastWord}</span></h2></li>`);document.querySelector(".top-books").innerHTML=`${n}<div class="cat-books-container">${t}</div>`}(t,n)}catch(e){console.log(e)}};function g(e,t){const o=e.srcElement.dataset.catName;catSelector=document.querySelectorAll(".categories-list li");for(const e of catSelector){const n=e.querySelector(`button[data-cat-name='${o}']`);if(n){t.classList.remove("categories-active"),n.classList.add("categories-active");break}}}var f=async function(e,t){const o=document.querySelector(".categories-active");if("BUTTON"===e.target.nodeName){try{if("All categories"===e.target.dataset.catName)return u(),void g(e,o)}catch(e){console.log(e)}g(e,o);try{t.category=e.srcElement.dataset.catName,await p(t)}catch(e){console.log(e)}}};const h=document.querySelector(".base-wrapper"),k=new(0,s.FetchBooks);!async function(){try{const e=await k.fetchCategoryList();await b(e.data)}catch(e){console.error(e)}}(),h.addEventListener("click",(e=>f(e,k))),a("g3WOS"),a("OrxsF"),a("9h4Q6");s=a("ju4sA");a("ju4sA");var v;v=new URL(a("kyEFX").resolve("ewt39"),import.meta.url).toString();var _;_=new URL(a("kyEFX").resolve("dUcaX"),import.meta.url).toString();var y;function w(e,t){const o=t?'<button class="card__btn add-card__bnt btn">remove from shop list</button> <p class = "congrat-text">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.!</p>':'<button class="card__btn add-card__bnt btn">add to shop list</button> <p class = "congrat-text"></p>';return`<div class="backdrop backdrop__modal js-book-modal">\n  <div class="modal book-card__modal scrollable">\n\n    <button class="modal-close__btn js-book-close">\n           <img class="close__icon"src=${new URL(v)} alt="close_icon" />\n    </button>\n    <div class="book-card">\n      <div class="book-card__thumb">\n        <img class="book-card__img" src="${e.book_image}" alt="book_image" loading="lazy" />\n      </div>\n      <div class="book-info">\n        <h2 class="book-title">${e.title}</h2>\n        <h3 class="book-author">${e.author}</h3>\n        <p class="book-description">${e.description}</p>\n        <ul class="shops-list list">\n          <li class="shops-item">\n            <a\n              class="buy-links"\n              href="${e.amazon_link}"\n              aria-label="amazon-shop icon"\n              target="_blank"\n              rel="noopener noreferrer"\n            >\n              <img\n                class="amazon-shop__icon book-shop__icons"\n                src="${new URL(_)}"\n                alt="amazon-shop icon"\n                loading="lazy"\n              />\n            </a>\n          </li>\n          <li class="shops-item">\n            <a\n              class="buy-links"\n              href="${e.apple_link}"\n              aria-label="apple-book icon"\n              target="_blank"\n              rel="noopener noreferrer"\n            >\n              <img\n                class="apple-book__icon book-shop__icons"\n                src="${new URL(y)}"\n                alt="apple-book icon"\n                loading="lazy"\n              />\n            </a>\n          </li>\n         \n        </ul>\n      </div>\n      \n    </div>\n    <div class="book-card__btn">${o}</div>`}function S(){window.onscroll=function(){},document.body.classList.remove("blockScroll")}y=new URL(a("kyEFX").resolve("8BG5f"),import.meta.url).toString();const E=document.querySelector(".top-books");E&&E.addEventListener("click",(async e=>{var t,o;const n=e.target.closest("li.js-book-modal");if(!n)return;!function(){let e=0,t=0;e=window.scrollY||document.documentElement.scrollTop,t=window.scrollX||document.documentElement.scrollLeft,document.body.classList.add("blockScroll"),window.onscroll=function(){window.scrollTo(t,e)}}();const a=n.getAttribute("data-book-id"),c=new(0,s.FetchBooks);c.bookId=a;const r=(await c.fetchBookId()).data,l={book_image:r.book_image,title:r.title,description:r.description,author:r.author,amazon_link:null===(t=r.buy_links.find((e=>"Amazon"===e.name)))||void 0===t?void 0:t.url,apple_link:null===(o=r.buy_links.find((e=>"Apple Books"===e.name)))||void 0===o?void 0:o.url},i="books",d=document.createElement("div");d.innerHTML=w(l,b(a)),document.body.appendChild(d);const u=e=>{"Escape"===e.key&&(document.body.removeChild(d),document.removeEventListener("keyup",u),S())};document.addEventListener("keyup",u);d.querySelector(".modal-close__btn").addEventListener("click",(function(e){document.body.removeChild(d),document.removeEventListener("keyup",u),e.stopPropagation(),S()}));const m=d.querySelector(".backdrop__modal");function b(e){let t=localStorage.getItem(i);return t||(t="[]"),void 0!==JSON.parse(t).find((t=>t._id===e))}m.addEventListener("click",(function(e){if(e.target!==m)return;document.body.removeChild(d),document.removeEventListener("keyup",u),e.stopPropagation(),S()}));const p=document.querySelector(".congrat-text");d.querySelector(".add-card__bnt").addEventListener("click",(e=>{b(a)?(!function(e){console.log("removing",e);let t=localStorage.getItem(i);if(null===t)return;let o=JSON.parse(t);o=o.filter((t=>t._id!==e._id)),localStorage.setItem(i,JSON.stringify(o))}(r),e.target.innerText="add to shopping list",p.textContent=""):(!function(e){console.log("adding",e);let t=localStorage.getItem(i);t||(t="[]");const o=JSON.parse(t);o.push(e),localStorage.setItem(i,JSON.stringify(o))}(r),e.target.innerText="remove from the shopping list",p.textContent="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.")}))})),a("ghhZM"),a("g3WOS"),a("OrxsF"),a("9h4Q6"),a("gjiCh"),a("kB3cp");
//# sourceMappingURL=index.7977fba5.js.map
