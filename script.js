const menu=document.querySelector('.menu');const nav=document.querySelector('nav');
menu?.addEventListener('click',()=>{nav.classList.toggle('show')});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('show')));

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.section-tag,.project,.skill-row,.research-card,.contact-inner').forEach(el=>{el.classList.add('reveal');io.observe(el)});
