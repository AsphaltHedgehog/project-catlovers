var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequiree062;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var c={id:e,exports:{}};return t[e]=c,n.call(c.exports,c,c.exports),c.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},e.parcelRequiree062=n);var c=n("ju4sA");var s=function(e,t){let o="";for(let n=0;n<t;n+=1){const{_id:t,book_image:c,title:s,author:a}=e[n];o+=`\n      <li class="item-category-book js-book-modal" data-book-id="${t}">\n        <a class="link-books-render" href="#">  \n      <div class="card-book">\n            <div class="img-card-book">\n            <img src="${c}" alt="book" class="img-book">\n            </div>\n              <div class="box-text-book-best">\n                <div class="box-title">  \n                  <p class="title-book">${s}</p>\n                </div>\n                  <div class="box-author">  \n                  <p class="author-book">${a}</p>\n                  </div>\n                </div>\n          </div>\n        </a>\n          </li>\n  `}return o};function a(e,t){return`\n  <li>\n  <h3 class="item-category">${t}</h3>\n  <ul class="box-category">\n  ${e}\n  </ul>\n  <button type="button" aria-label="Show more" class="see-more">See more</button>\n  </li>\n  `}var r=async function(e){document.querySelector(".books-content").innerHTML='<ul class="top-books"></ul>';const t=document.querySelector(".top-books");t.insertAdjacentHTML("beforebegin",'<h2 class="main-title">Best Sellers<span class="color-accent">Books</span></h2>'),document.createDocumentFragment();try{if(window.screen.width<767.8)for(let o=0;o<4;o+=1){const n=1,{books:c,list_name:r}=e[o],i=a(s(c,n),r);t.insertAdjacentHTML("beforeend",i)}else if(window.screen.width>767.8&&window.screen.width<1440)for(let o=0;o<4;o+=1){const n=3,{books:c,list_name:r}=e[o],i=a(s(c,n),r);t.insertAdjacentHTML("beforeend",i)}else if(window.screen.width>=1440)for(let o=0;o<4;o+=1){const n=5,{books:c,list_name:r}=e[o],i=a(s(c,n),r);t.insertAdjacentHTML("beforeend",i)}else console.error("ops... something went wrong, contact us via email")}catch(e){console.log(e)}};const i=new(0,c.FetchBooks);async function l(){try{const e=await i.fetchTopBooks();r(e.data)}catch(e){console.error(e)}}l();var d=l;c=n("ju4sA");const u=document.querySelector(".categories-select-wrapper");var g=function(e){const t=document.createElement("ul");t.classList.add("categories-list");const o=document.createElement("li"),n=document.createElement("button");n.setAttribute("type","button"),n.setAttribute("id","All categories"),n.classList.add("categories-active","categories-list-el"),n.textContent="All categories",o.appendChild(n),t.appendChild(o),e.forEach(((o,n)=>{const c=document.createElement("li"),s=document.createElement("button");s.setAttribute("type","button"),s.setAttribute("id",`${e[n].list_name}`),s.classList.add("categories-list-el"),s.textContent=`${o.list_name}`,c.appendChild(s),t.appendChild(c)})),u.appendChild(t)};var m=async function(e){const t=e.category;try{const o=await e.fetchCategoryOfBooks().then((e=>e.data));o.length;const n=s(o,o.length);await function(e,t){const o=function(e){const t=e.split(" ");if(t.length>1){const e=t.pop();return{string:t.join(" "),lastWord:e}}return console.log(error)}(e),n=document.querySelector(".books-content"),c=`<h2 class="main-title">${o.string} <span class="color-accent">${o.lastWord}</span></h2>`;n.innerHTML=`${c} <ul class="top-books">${t}</ul>`}(t,n)}catch(e){console.log(e)}};var f=async function(e,t){if("BUTTON"!==e.target.nodeName)return;try{if("All categories"===e.target.id){d();return document.querySelector(".categories-active").classList.remove("categories-active"),void e.target.classList.add("categories-active")}}catch(e){console.log(e)}document.querySelector(".categories-active").classList.remove("categories-active"),e.target.classList.add("categories-active");try{t.category=e.srcElement.id,await m(t)}catch(e){console.log(e)}};const p=document.querySelector(".categories-select-wrapper"),b=new(0,c.FetchBooks);!async function(){try{const e=await b.fetchCategoryList();await g(e.data)}catch(e){console.error(e)}}(),p.addEventListener("click",(e=>f(e,b))),n("g3WOS"),n("OrxsF"),n("9h4Q6"),n("3PPgz"),n("5UPUm"),function(){const e=document.querySelectorAll(".modal-link-nav");let t=window.location.pathname;e.forEach((function(e){let o=e.getAttribute("href");t===o&&e.classList.add("current-modal")}))}(),n("g3WOS"),n("OrxsF"),n("9h4Q6");const h=document.querySelectorAll(".loader-container");document.querySelector(".categories-select-wrapper");window.addEventListener("load",(function(){h.forEach((e=>{this.setTimeout((()=>{e.style.display="none"}),2e3)}))})),n("kB3cp");
//# sourceMappingURL=index.735110b5.js.map
