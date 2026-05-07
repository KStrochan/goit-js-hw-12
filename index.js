import{a as R,S as v,i as s}from"./assets/vendor-73qhTu8_.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const M="55715187-d7e3a09a5a0f1fca23312ca88",$="https://pixabay.com/api/",B=15;async function g(r,o){return(await R.get($,{params:{key:M,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:B}})).data}const m=document.querySelector(".gallery"),p=document.querySelector(".loader"),y=document.querySelector(".load-more"),O=new v(".gallery a",{captionsData:"alt",captionDelay:250});function h(r){const o=r.map(({webformatURL:n,largeImageURL:c,tags:e,likes:t,views:a,comments:q,downloads:E})=>`
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
                <span>${a}</span>
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
        `).join("");m.insertAdjacentHTML("beforeend",o),O.refresh()}function A(){m.innerHTML=""}function L(){p.classList.remove("hidden")}function f(){p.classList.add("hidden")}function b(){y.classList.remove("hidden")}function i(){y.classList.add("hidden")}const w=document.querySelector(".form"),_=document.querySelector(".load-more"),x=15;let u="",l=1,d=0;i();f();w.addEventListener("submit",H);_.addEventListener("click",C);async function H(r){r.preventDefault();const o=r.currentTarget.elements["search-text"].value.trim();if(!o){s.warning({message:"Please enter a search query",position:"topRight"});return}u=o,l=1,d=0,A(),i(),L();try{const n=await g(u,l);if(d=n.totalHits,n.hits.length===0){s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(n.hits),P()?(i(),S()):b()}catch{s.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{f(),w.reset()}}async function C(){l+=1,i(),L();try{const r=await g(u,l);h(r.hits),D(),P()?(i(),S()):b()}catch{s.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{f()}}function P(){return l*x>=d}function S(){s.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}function D(){const r=document.querySelector(".gallery-item");if(!r)return;const o=r.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
