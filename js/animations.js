
/* Tiny petal particle system + optional GSAP hooks
   Keeps animations slow and cinematic. Customize particle sprite in assets/images/petals.png
*/
(function(){
  const canvas = document.getElementById('petal-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize(){ W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  window.addEventListener('resize', resize); resize();

  // load petal sprite
  const petal = new Image(); petal.src = 'assets/images/petals.png';

  function spawn(){
    const count = Math.floor(window.innerWidth/220);
    particles = [];
    for(let i=0;i<count;i++){ particles.push({x:Math.random()*W, y:Math.random()*H*0.2 - H, vx:(Math.random()*0.6)-0.3, vy:1+Math.random()*1.2, r:10+Math.random()*18, rot:Math.random()*Math.PI*2, rotV:(Math.random()*0.02)-0.01, alpha:0.7+Math.random()*0.3}); }
  }

  petal.onload = ()=>{ spawn(); animate(); }

  function animate(){ ctx.clearRect(0,0,W,H); particles.forEach(p=>{
    p.x += p.vx; p.y += p.vy; p.rot += p.rotV; if(p.y>H+60){ p.y = -40; p.x = Math.random()*W }
    ctx.save(); ctx.globalAlpha = p.alpha; ctx.translate(p.x,p.y); ctx.rotate(p.rot); ctx.drawImage(petal,-p.r/2,-p.r/2,p.r,p.r); ctx.restore();
  }); requestAnimationFrame(animate); }

  // subtle startup fade
  canvas.style.opacity = 0; setTimeout(()=>{ canvas.style.transition='opacity 900ms ease'; canvas.style.opacity=1; },200);
})();

