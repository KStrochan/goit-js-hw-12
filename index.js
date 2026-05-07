import{a as R,S as v,i as a}from"./assets/vendor-73qhTu8_.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const A="ТВІЙ_PIXABAY_API_KEY",B="https://pixabay.com/api/",M=15;async function g(r,o){return(await R.get(B,{params:{key:A,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:M}})).data}const m=document.querySelector(".gallery"),p=document.querySelector(".loader"),y=document.querySelector(".load-more"),_=new v(".gallery a",{captionsData:"alt",captionDelay:250});function h(r){const o=r.map(({webformatURL:n,largeImageURL:c,tags:e,likes:t,views:s,comments:q,downloads:E})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${c}">
              <img class="gallery-image" src="${n}" alt="${e}" />
            </a>
            <ul class="image-info">
              <li>
                <b>Likes</b>
                <span>${t}</span>
              </li>
              <li>
                <b>Views</b>
                <span>${s}</span>
              </li>
              <li>
                <b>Comments</b>
                <span>${q}</span>
              </li>
              <li>
                <b>Downloads</b>
                <span>${E}</span>
              </li>
            </ul>
          </li>
        `).join("");m.insertAdjacentHTML("beforeend",o),_.refresh()}function $(){m.innerHTML=""}function L(){p.classList.remove("hidden")}function f(){p.classList.add("hidden")}function b(){y.classList.remove("hidden")}function i(){y.classList.add("hidden")}const P=document.querySelector(".form"),O=document.querySelector(".load-more"),x=15;let u="",l=1,d=0;i();f();P.addEventListener("submit",H);O.addEventListener("click",I);async function H(r){r.preventDefault();const o=r.currentTarget.elements["search-text"].value.trim();if(!o){a.warning({message:"Please enter a search query",position:"topRight"});return}u=o,l=1,d=0,$(),i(),L();try{const n=await g(u,l);if(d=n.totalHits,n.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(n.hits),w()?(i(),S()):b()}catch{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{f(),P.reset()}}async function I(){l+=1,i(),L();try{const r=await g(u,l);h(r.hits),C(),w()?(i(),S()):b()}catch{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{f()}}function w(){return l*x>=d}function S(){a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}function C(){const r=document.querySelector(".gallery-item");if(!r)return;const o=r.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
