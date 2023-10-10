const o=document.querySelector(".support-arrow-container"),e=document.querySelector(".support-list");let t=!0;o.addEventListener("click",(r=>{r.preventDefault(),console.log("first"),t?(t=!t,e.scrollIntoView({block:"end",behavior:"smooth"}),o.classList.add("up")):(t=!0,e.scrollIntoView({block:"start",behavior:"smooth"}),o.classList.remove("up"))}));
//# sourceMappingURL=index.586637db.js.map
