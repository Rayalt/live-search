"use strict";window.onload=function(){const e=document.querySelector(".input__clear"),t=document.querySelector(".input__search"),n=document.querySelectorAll(".card-header__title"),l=document.querySelectorAll(".courses__section"),o=document.querySelectorAll(".card-courses__item"),r=document.querySelector(".drop-search");e.style.display="none",r.style.display="none",t.addEventListener("input",()=>{o.forEach(e=>e.style.display="none"),l.forEach(e=>e.style.display="none"),r.style.display="block";let s=t.value.trim();function a(e,t){let n=[],l=-1;for(;-1!==(l=e.indexOf(t,l+1));)n.push(l);return n}if(s.length>=3){if(function(){let e;for(let t of n){if(-1!==t.innerHTML.toLowerCase().indexOf(s.toLowerCase()))return e=!1,e;e=!0}return e}())r.innerHTML='\n\t\t\t\t\t<li class="drop-search__item">\n\t\t\t\t\t\t<div class="drop-search__message">Ничего не найдено</div>\n\t\t\t\t\t</li>\n\t\t\t\t';else{r.innerHTML="";for(let e of n)if(-1!==e.innerHTML.toLowerCase().indexOf(s.toLowerCase())){e.parentNode.parentNode.parentNode.style.display="flex",e.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display="block";let t=document.createElement("li"),n=document.createElement("a");r.append(t),t.className="drop-search__item",t.append(n),n.className="drop-search__link",n.href="#";for(let t of a(e.innerHTML.toLowerCase(),s.toLowerCase())){let l=e.innerHTML.slice(t,t+s.length);n.innerHTML=e.innerHTML.split(l).join(`<strong>${l}</strong>`)}}}}else s.length>=1&&s.length<=2||(r.style.display="none",o.forEach(e=>e.style.display="flex"),l.forEach(e=>e.style.display="block"));e.style.display=""!==s?"block":"none"}),e.addEventListener("click",()=>{t.value="",e.style.display="none",r.style.display="none",o.forEach(e=>e.style.display="flex"),l.forEach(e=>e.style.display="block")})};