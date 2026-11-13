document.querySelectorAll('.card,.job,.skills>div,.stat').forEach(el=>el.classList.add('reveal'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -10% 0px'});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('.card').forEach(c=>c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')}));
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;cio.unobserve(e.target);const el=e.target,end=+el.dataset.count,suf=el.dataset.suffix||'';if(reduce)return;const t0=performance.now(),d=1400;(function step(t){const p=Math.min(1,(t-t0)/d),v=Math.round(end*(1-Math.pow(1-p,3)));el.textContent=v.toLocaleString('en-US')+suf;if(p<1)requestAnimationFrame(step)})(t0)}),{threshold:.5});
document.querySelectorAll('[data-count]').forEach(el=>cio.observe(el));
// Safety net: if the entry animations never advance (throttled tab, odd browsers), jump them to their end state.
setTimeout(()=>document.querySelectorAll('.hero h1,.hero .lead,.hero .btns,.hero .photo,.hero .eyebrow,.hero .ring').forEach(el=>el.getAnimations().forEach(a=>{if(a.currentTime===0&&a.playState==='running'&&(a.effect.getTiming().iterations!==Infinity))a.finish()})),2500);
// Active section in the nav
const navLinks=[...document.querySelectorAll('nav ul a[href^="#"]')];
if(navLinks.length){const sio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});navLinks.forEach(a=>{const s=document.querySelector(a.getAttribute('href'));if(s)sio.observe(s)})}
// Back to top
const toTop=document.createElement('a');toTop.href='#';toTop.className='totop';toTop.setAttribute('aria-label','Back to top');toTop.textContent='↑';document.body.appendChild(toTop);
toTop.addEventListener('click',e=>{e.preventDefault();scrollTo({top:0,behavior:reduce?'auto':'smooth'})});
addEventListener('scroll',()=>toTop.classList.toggle('show',scrollY>700),{passive:true});
// Gallery lightbox
document.addEventListener('click',e=>{const img=e.target.closest('.pgallery img');if(!img)return;const imgs=[...document.querySelectorAll('.pgallery img')];let i=imgs.indexOf(img);
  const d=document.createElement('dialog');d.className='lb';d.innerHTML='<img alt=""><button class="nav prev" aria-label="Previous">‹</button><button class="nav next" aria-label="Next">›</button>';document.body.appendChild(d);
  const show=k=>{i=(k+imgs.length)%imgs.length;d.querySelector('img').src=imgs[i].src;d.querySelector('img').alt=imgs[i].alt};show(i);
  const rtl=document.documentElement.dir==='rtl';d.querySelector('.prev').onclick=ev=>{ev.stopPropagation();show(i-1)};d.querySelector('.next').onclick=ev=>{ev.stopPropagation();show(i+1)};
  d.addEventListener('click',ev=>{if(ev.target.tagName!=='BUTTON')d.close()});d.addEventListener('keydown',ev=>{if(ev.key==='ArrowRight')show(rtl?i-1:i+1);if(ev.key==='ArrowLeft')show(rtl?i+1:i-1)});d.addEventListener('close',()=>d.remove());d.showModal()});
