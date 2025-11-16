/* js/app.js (corrected) */


(function(){
  // Helpers
  function todayInKolkata(){
    const nowStr = new Date().toLocaleString('en-US', {timeZone:'Asia/Kolkata'});
    const now = new Date(nowStr);

    const y = now.getFullYear();
    const m = String(now.getMonth()+1).padStart(2,'0');
    const d = String(now.getDate()).padStart(2,'0');
    return `${y}-${m}-${d}`;
  }
  function dateToNum(iso){ return new Date(iso+'T00:00:00').getTime(); }

  // Typewriter: strips HTML tags and types text slowly
  function stripTags(html){
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }
  function typeText(el, text, delay=30){
    if(!el) return;
    el.textContent = '';
    let i = 0;
    const typer = setInterval(() => {
      el.textContent += text[i++] || '';
      if(i >= text.length) clearInterval(typer);
    }, delay);
  }

  // Safe DOM refs
  const friendPhoto = document.getElementById('friend-photo');
  if(friendPhoto) friendPhoto.addEventListener('error', ()=>{ friendPhoto.style.opacity = 0.9; });

  // Update friend's name in header only if data provides it
  if(typeof FRIEND_NAME !== 'undefined'){
    const headerTitle = document.querySelector('.title');
    if(headerTitle) headerTitle.textContent = `For ${FRIEND_NAME}`;
  }

  const grid = document.getElementById('cards-grid');
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  const modalClose = document.getElementById('modal-close');
  const globalCountdownEl = document.getElementById('global-countdown');

  const nowStr = todayInKolkata();
  const nowNum = dateToNum(nowStr);

  // compute days left
  if(typeof BIRTHDAY !== 'undefined' && globalCountdownEl){
    const diff = Math.max(0, Math.ceil((dateToNum(BIRTHDAY.date)-nowNum)/(1000*60*60*24)));
    globalCountdownEl.textContent = diff + ' days to go';
  }

  const allDays = (typeof DAYS !== 'undefined' ? DAYS.slice() : []).concat(
    (typeof BIRTHDAY !== 'undefined') ? [{day:0, date:BIRTHDAY.date, emoji:BIRTHDAY.emoji, title:BIRTHDAY.title, type:BIRTHDAY.type}] : []
  );

  // render day cards
  if(grid){
    allDays.forEach(item=>{
      // Calculate precise unlock based on current IST time (not just date)
    const nowIST = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    const unlockTime = new Date(`${item.date}T00:00:00+05:30`); // midnight IST
    const unlocked = nowIST >= unlockTime;

      const card = document.createElement('article');
      card.className = 'card ' + (unlocked? 'unlocked' : 'locked');
      card.innerHTML = `
        <div class='day-emoji'>${item.emoji}</div>
        <div class='day-title'>Day ${item.day} — ${item.title}</div>
        <div class='day-date'>${item.date}</div>
        <button class='open-btn' ${unlocked?'' : 'disabled'} data-day='${item.day}'>${unlocked? 'Open' : 'Locked'}</button>
      `;
      if(!unlocked){
        const overlay = document.createElement('div');
        overlay.className = 'lock-overlay';
        overlay.innerHTML = `<div class='lock-icon'>Opens ${item.date}</div>`;
        card.appendChild(overlay);
      }
      grid.appendChild(card);
      const btn = card.querySelector('.open-btn');
      if(btn) btn.addEventListener('click', ()=>{ if(!unlocked) return; openDay(item); });
    });
  }

  function openDay(item){
    if(!modal || !modalContent) return;
    modalContent.innerHTML = render(item);
    if (item.type === 'quiz') {
  startQuiz(item);
}

    modal.setAttribute('aria-hidden','false');

    // small autofocus animation: ensure transform/opacity initial is set by CSS, then animate
    const mc = modal.querySelector('.modal-card');
    if(mc){
      mc.style.transform = 'translateY(12px)';
      mc.style.opacity = '0';
      requestAnimationFrame(()=>{ // next frame apply final
        mc.style.transition = 'transform 420ms ease, opacity 420ms ease';
        mc.style.transform = 'translateY(0)';
        mc.style.opacity = '1';
      });
    }

    // If this day is a letter/note, run typewriter after modal content is injected
    if(item.type === 'letter' || item.type === 'note'){
      // prefer element with id 'typed-text' if present, otherwise the first paragraph inside modal
      const typedEl = document.getElementById('typed-text') || modalContent.querySelector('p');
      const raw = item.letterHtml || (item.type === 'note' ? (`Hi ${FRIEND_NAME},\n\nThis 10-day countdown is my tiny way of collecting moments and sharing them with you. Click gently, breathe, and enjoy. ✨`) : '');
      const text = stripTags(raw);
      if(typedEl) typeText(typedEl, text, 28);
    }
  }

  if(modalClose) modalClose.addEventListener('click', ()=>{ if(modal) modal.setAttribute('aria-hidden','true'); if(modalContent) modalContent.innerHTML=''; });
  if(modal) modal.addEventListener('click', e=>{ if(e.target===modal) modal.setAttribute('aria-hidden','true'); });

    function render(item){
    switch(item.type){

      // 🌸 Day 10 — Welcome message
      case 'note':
        return `
          <h2>${item.title}</h2>
          <div id="typed-text"></div>
          <div style="margin-top:12px;opacity:.9">
            <p>Hey Varsha 🌿</p>
            <p>This isn’t just a countdown — it’s a little corner I made for us.</p>
            <p>For the next ten days, every box here holds a small memory, a smile, a moment, or just a tiny piece of how much you mean to me.</p>
            <p>Think of it like a digital advent calendar — each day unlocking at midnight, waiting quietly until it’s time.</p>
            <p>So… take it slow, one door at a time. Enjoy the surprises, the music, and the little warmth hidden inside each day. ❤️</p>
          </div>
        `;

      // 💌 Day 9 — Heartfelt Letter
      case 'letter':
        return `
          <h2>${item.title}</h2>
          <div id="typed-text"></div>
          <div style="margin-top:12px;opacity:.9">
            <p>Dear Koranguu, 💫</p>
            <p>I don’t know when it happened exactly — but somewhere between our random chats, late-night talks, laughter, and all the tiny moments that never seemed special back then… you became <em>someone really special</em> to me.</p>
            <p>You’ve always had this quiet magic — the kind that doesn’t ask for attention but somehow changes the whole mood of a day. Even when things feel heavy, your presence makes it lighter.</p>
            <p>This letter isn’t about any big reason. It’s just a small reminder — that you matter more than you probably realize, and you’ve made more of a difference than you think.</p>
            <p>Thank you for being you — for staying kind in a world that often forgets how to be, for laughing in ways that make everything feel alive, and for being part of so many memories I’ll always keep close.</p>
            <p>I made this countdown not just to celebrate your birthday, but to celebrate <em>you</em> — the little things, the smiles, the stories, and the friendship that means so much.</p>
            <p>You deserve every ounce of love, peace, and happiness that the world can offer.</p>
            <p><strong>With a heart full of gratitude,</strong><br>— Lokesh 🌿</p>
          </div>
        `;

      // other types unchanged
      case 'gallery':
        return `<h2>${item.title}</h2><div class='gallery'>${(item.images||[]).map(i=>{
  if(typeof i === 'string') return `<img src='${i}' alt='mem' style='margin-top:12px;border-radius:8px;box-shadow:0 10px 30px rgba(0,0,0,0.06)'>`;
  return `<div style='margin-top:12px;text-align:center'>
    <img src='${i.src}' alt='mem' style='max-width:100%;border-radius:8px;box-shadow:0 10px 30px rgba(0,0,0,0.06)'>
    <p style='font-size:0.9rem;color:#6b7a6b;margin-top:6px;font-style:italic'>${i.caption}</p>
  </div>`;
}).join('')
}</div>`;
      case 'playlist':
        return `<h2>${item.title}</h2><p>Open the playlist (new tab)</p><a href='${item.playlistUrl}' target='_blank' rel='noopener'>Listen</a>`;
      case 'video':
        return `<h2>${item.title}</h2><video controls src='${item.video}' style='margin-top:12px;border-radius:8px;max-width:100%'></video>`;
      case 'compliments':
        return `<h2>${item.title}</h2><p id='comp-text'>Click for a gentle compliment</p><button id='comp-btn' class='open-btn'>Get compliment</button>`;
      case 'quiz':
        return`<h2>${item.title}</h2><div id="quiz-container"></div>`;
      case 'gift':
        return `<h2>${item.title}</h2>${item.giftHtml || ''}`;
      case 'list':
        return `<h2>${item.title}</h2><ol>${(item.list||[]).map(x=>`<li>${x}</li>`).join('')}</ol>`;
      case 'final':
        return `<h2>${item.title}</h2>${item.finalHtml || ''}`;
      case 'birthday':
        return `${BIRTHDAY.birthdayHtml || ''}`;
      default:
        return `<p>Coming soon...</p>`;
    }
  }


  // modal event delegation
  if(modal){
    modal.addEventListener('click', e=>{
      if(e.target && e.target.id === 'comp-btn'){
        const dayObj = (typeof DAYS !== 'undefined') ? DAYS.find(d=>d.day===5) : null;
        const list = dayObj ? dayObj.compliments : [];
        const pick = list.length ? list[Math.floor(Math.random()*list.length)] : 'You are wonderful.';
        const compText = document.getElementById('comp-text');
        if(compText) compText.textContent = pick;
      }
      if(e.target && e.target.classList.contains('qopt')){
        const idx = Number(e.target.dataset.i);
        const dayObj = (typeof DAYS !== 'undefined') ? DAYS.find(d=>d.day===4) : null;
        const ok = dayObj ? idx === dayObj.quiz.answer : false;
        setTimeout(()=>{ alert(ok? 'Yes — You remembered! 😊' : 'Haha — that one was tricky 😂'); }, 80);
      }
    });
  }
  // 🌿 Multi-question quiz logic
function startQuiz(dayItem) {
  const container = document.getElementById('quiz-container');
  const questions = dayItem.quizSet;
  let current = 0;
  let score = 0;

  function renderQuestion() {
    if (current >= questions.length) {
      container.innerHTML = `
        <div style="text-align:center;">
          <h3>Quiz complete 💫</h3>
          <p>You remembered <strong>${score}</strong> out of <strong>${questions.length}</strong> memories!</p>
          <p>${score === questions.length ? "You remember everything, memory legend 👑" : score >= 2 ? "That’s pretty good, I’m impressed 💚" : "Haha, we might need to make new memories then 😄"}</p>
        </div>
      `;
      return;
    }

    const q = questions[current];
    container.innerHTML = `
      <p style="font-weight:600;font-size:1.1rem;">${q.q}</p>
      <div class="quiz-options">
        ${q.options.map((opt, i) => `<button class="open-btn qbtn" data-i="${i}">${opt}</button>`).join("<br>")}
      </div>
    `;

    // add event listeners
    container.querySelectorAll('.qbtn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const choice = Number(e.target.dataset.i);
        if (choice === q.answer) {
          score++;
          e.target.style.background = 'rgba(46,204,113,0.3)';
        } else {
          e.target.style.background = 'rgba(255,120,120,0.2)';
        }

        // next question with fade
        setTimeout(() => {
          container.classList.add('fade');
          setTimeout(() => {
            container.classList.remove('fade');
            current++;
            renderQuestion();
          }, 600);
        }, 600);
      });
    });
  }

  renderQuestion();
}


  // music toggle (single, robust implementation)
  const musicBtn = document.getElementById('music-toggle');
  let audio = null;
  if(musicBtn){
    audio = new Audio('assets/music/background.mp3');
    audio.loop = true;
    audio.volume = 0.24;
    musicBtn.addEventListener('click', () => {
      if(!audio) return;
      if(audio.paused){
        audio.play().catch(()=>{/* autoplay blocked; user must click twice on some browsers */});
        musicBtn.textContent = 'Pause music';
        musicBtn.classList.add('playing');
      } else {
        audio.pause();
        musicBtn.textContent = 'Play music';
        musicBtn.classList.remove('playing');
      }
    });
  }

  // start tour button: scroll to grid
  const startBtn = document.getElementById('start-tour');
  if(startBtn) startBtn.addEventListener('click', ()=>{ const g = document.getElementById('cards-grid'); if(g) g.scrollIntoView({behavior:'smooth'}); });

  // 🌿 Typewriter Friendship Quote Rotator
  const quotes = [
    "“Some souls just understand each other.”",
    "“Friendship is the calm after every storm.”",
    "“We didn’t find each other by accident.”",
    "“Good times become memories, best friends become family.”",
    "“A true friend is one soul in two bodies.”",
    "“In the garden of memories, ours will always bloom.”",
    "“You don’t have to be perfect to be my person.”",
    "“Sometimes home isn’t a place — it’s someone.”",
    "“We’ve shared silence that said more than words.”",
    "“Old memories are the most beautiful souvenirs.”"
  ];

  const quoteEl = document.getElementById('friendship-quote');
  let quoteIndex = 0;
  let charIndex = 0;
  let typing = true;

  function typeQuote() {
    if (!quoteEl) return;

    const currentQuote = quotes[quoteIndex];
    if (typing) {
      // typing characters
      quoteEl.textContent = currentQuote.substring(0, charIndex++) + "▌";
      if (charIndex <= currentQuote.length) {
        setTimeout(typeQuote, 80); // typing speed
      } else {
        typing = false;
        setTimeout(typeQuote, 1800); // pause after full quote
      }
    } else {
      // erasing characters
      quoteEl.textContent = currentQuote.substring(0, charIndex--) + "▌";
      if (charIndex >= 0) {
        setTimeout(typeQuote, 40); // erasing speed
      } else {
        typing = true;
        quoteIndex = (quoteIndex + 1) % quotes.length;
        setTimeout(typeQuote, 400); // delay before next quote
      }
    }
  }

  if (quoteEl) typeQuote();

  // 🕒 Real-time IST clock display
  const clockEl = document.getElementById('clock');
  function updateClock() {
    const now = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    const d = new Date(now);
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');
    const ss = String(d.getSeconds()).padStart(2, '0');
    clockEl.textContent = `IST Time: ${hh}:${mm}:${ss}`;
  }
  if (clockEl) {
    updateClock();
    setInterval(updateClock, 1000);
  }


})(); // end IIFE
