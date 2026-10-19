document.querySelectorAll('.card,.job,.skills>div,.stat').forEach(el=>el.classList.add('reveal'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -10% 0px'});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('.card').forEach(c=>c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')}));
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;cio.unobserve(e.target);const el=e.target,end=+el.dataset.count,suf=el.dataset.suffix||'';if(reduce)return;const t0=performance.now(),d=1400;(function step(t){const p=Math.min(1,(t-t0)/d),v=Math.round(end*(1-Math.pow(1-p,3)));el.textContent=v.toLocaleString('en-US')+suf;if(p<1)requestAnimationFrame(step)})(t0)}),{threshold:.5});
document.querySelectorAll('[data-count]').forEach(el=>cio.observe(el));
