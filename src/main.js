import './style.css'
const BASE_URL = import.meta.env.BASE_URL || ''

// ========================================
// STATE & ROUTER (SPA LOGIC)
// ========================================

const hasVisited = sessionStorage.getItem('hasVisited');

function renderApp() {
  const hash = window.location.hash || '#/';
  const app = document.querySelector('#app');
  
  let pageContent = '';
  switch (hash) {
    case '#/': pageContent = getHomeHTML(); break;
    case '#/portfolio': pageContent = getPortfolioHTML(); break;
    case '#/contacts': pageContent = getContactsHTML(); break;
    case '#/life': pageContent = getLifeHTML(); break;
    default: pageContent = getHomeHTML();
  }

  app.innerHTML = `
    ${!hasVisited ? getLoadingScreenHTML() : ''}
    ${getHeaderHTML(hash)}
    <main id="normal-site" class="page-transition">
      ${pageContent}
    </main>
    ${getFooterHTML()}
  `;

  attachEvents();
  
  if (!hasVisited) {
    sessionStorage.setItem('hasVisited', 'true');
    const animalFacts = [
      'Octopuses have three hearts.',
      'Sea otters hold hands while sleeping so they do not drift apart.',
      'Goats have rectangular pupils.',
      'Crows can remember human faces.'
    ];
    document.querySelector('#animal-fact').textContent = animalFacts[Math.floor(Math.random() * animalFacts.length)];
    setTimeout(() => document.querySelector('#loading-screen')?.classList.add('hidden'), 3000);
  }
}

window.addEventListener('hashchange', renderApp);

// ========================================
// HTML GENERATORS
// ========================================

function getLoadingScreenHTML() {
  return `
    <div id="loading-screen">
      <div class="loading-content">
        <p class="loading-label">/// LOADING PORTFOLIO...</p>
        <p id="animal-fact"></p>
        <p class="loading-hint">did you know?</p>
        <div class="loading-bar"><div class="loading-bar-progress"></div></div>
      </div>
    </div>
  `;
}

function getHeaderHTML(currentHash) {
  const navItem = (path, name) => 
    `<a href="${path}" class="${currentHash === path ? 'active-link' : ''}">${name}</a>`;

  const today = new Date();
  const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;

  return `
    <header class="site-header">
      <div class="header-date">${formattedDate}</div>
      <nav class="navigation">
        ${navItem('#/', 'home')}
        ${navItem('#/portfolio', 'portfolio')}
        ${navItem('#/contacts', 'contacts')}
        ${navItem('#/life', 'life')}
      </nav>
    </header>
  `;
}

function getFooterHTML() {
  return `
    <footer class="site-footer">
      <span>© 2026 DARLA</span>
      <span>made with love and JavaScript</span>
    </footer>
  `;
}

// --- СТРАНИЦА 1: HOME ---
function getHomeHTML() {
  return `
    <section id="about" class="hero">
      <figure class="hero-photo">
        <img src="${BASE_URL}/images/main darla.png" alt="Portrait of Darya Pugina">
      </figure>

      <div class="hero-content">
        <div class="hero-title">
          <h1>HI</h1>
          <p>I'M</p>
          <div class="hero-name">DARLA</div>
        </div>

        <p class="hero-description">
          Software Engineering student interested in
          web development, backend systems and creative technologies.
          I enjoy combining technical and visual work —
          from programming and databases to design,
          photography and 3D.
        </p>

        <p class="hero-caption">
          The main idea of this site is for you to get to know me better. No matter the goal, age and location. Internationally friendly.
        </p>
      </div>
    </section>

    <section class="content-section about-section">
      <div class="section-heading"><h2>ABOUT</h2></div>
      <div class="about-grid">
        <div class="about-main">
          <p class="about-big">engineer & designer</p>
          <p class="about-description-text">
            My actual full name is Daria Pugina. I've been studying Software Engineering
            for 3 years in ITMO University, Russia. Besides all the hardskills of Full-Stack
            Developer I'm mastering my visual skills in design, photography and 3D.
          </p>
        </div>
      </div>
    </section>

    <section class="content-section skills-section">
      <div class="section-heading"><h2>SKILLS</h2></div>
      <div class="skills-grid">
        <div class="skill-card"><h3>PROGRAMMING</h3><div class="skill-list"><span>C#</span><span>C</span><span>Python</span><span>JavaScript</span><span>CSS</span></div></div>
        <div class="skill-card"><h3>BACKEND</h3><div class="skill-list"><span>ASP.NET</span><span>PostgreSQL</span><span>Docker</span><span>Grafana</span><span>Nginx</span></div></div>
        <div class="skill-card skill-card-pink"><h3>CREATIVE</h3><div class="skill-list"><span>Blender</span><span>Unity</span><span>Figma</span><span>Photoshop</span><span>Lightroom</span></div></div>
      </div>
    </section>

    <section class="content-section education-section">
      <div class="section-heading"><h2>EDUCATION & ACHIEVEMENTS</h2></div>
      <div class="education-list">
        <article class="education-item">
          <div class="education-year">2024 — 2028</div>
          <div class="education-info">
            <h3>ITMO University, Software Engineering</h3>
            <p class="education-degree">Bachelor’s Degree</p>
            <p class="education-description">Full tuition, scholarship for the extracurricular activities.</p>
          </div>
        </article>
        <article class="education-item">
          <div class="education-year">Fall 2026</div>
          <div class="education-info">
            <h3>Abdullah Gul University (Turkey)</h3>
            <p class="education-degree">Exchange Semester</p>
            <p class="education-description">Mobile programming, analysis of algorithms and operating systems.</p>
          </div>
        </article>
        <article class="education-item">
          <div class="education-year">Extra</div>
          <div class="education-info">
            <h3>Volunteering & Community</h3>
            <p class="education-description">Active participant in conversation clubs and Buddy System. Volunteering in extracurricular university events.</p>
          </div>
        </article>
      </div>
    </section>
  `;
}

// --- СТРАНИЦА 2: PORTFOLIO ---
function getPortfolioHTML() {
  const projects = [
    { name: 'IceBreaker App', date: 'October 2026', desc: 'Service to get to know each other better. Developed with C# and ASP.NET, using PostgreSQL and Docker.', img: 'icebreaker app pic.jpg', link: 'https://github.com/ddarlaa/IceBreakerApp/tree/laba5' },
    { name: 'ITMO Sailing SMM', date: 'Summer 2026', desc: 'Content plan, designs, and texts for ITMO Sailing Club Telegram channel. 350+ subscribers.', img: 'smm proof.jpg', link: 'https://t.me/sailingclub_itmo' },
    { name: 'Personal Blog (Hugo)', date: 'August 2026', desc: 'Hugo site with a blog and several small JS projects. HTML, CSS, JavaScript.', img: 'blogging.jpg', link: 'https://ddarlaa.github.io/front_laba2/blog/' },
    { name: 'Photo Tech Presentation', date: 'September 2026', desc: 'Research presentation on modern photography technologies.', img: 'about-photo.jpg', link: '#' }
  ];

  return `
    <section class="content-section portfolio-section">
      <div class="section-heading"><h2>MAIN WORKS</h2></div>
      <div class="portfolio-grid-page">
        ${projects.map(p => `
          <a href="${p.link}" target="_blank" class="project-card">
            <div class="project-date-badge">${p.date}</div>
            <img src="${BASE_URL}/images/${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <span class="project-arrow">→</span>
          </a>
        `).join('')}
      </div>
    </section>
  `;
}


// --- СТРАНИЦА 3: CONTACTS ---
function getContactsHTML() {
  return `
    <section class="contact-section">
      <p class="eyebrow">LET'S CONNECT</p>
      <h2>CONTACTS.</h2>
      
      <div class="contact-links-grid">
        <a href="tel:+79999999999" class="contact-big-link">📞 +7 (911) 972-61-04</a>
        <a href="mailto:d.pugina@list.ru" class="contact-big-link">✉️ d.pugina@list.ru</a>
      </div>

      <div class="social-bento">
        <a href="https://t.me/ddarla" target="_blank" class="bento-box"><span>Telegram</span></a>
        <a href="https://github.com/ddarlaa" target="_blank" class="bento-box"><span>GitHub</span></a>
        <a href="https://instagram.com/ddaarrla" target="_blank" class="bento-box pink"><span>Instagram</span></a>
      </div>
    </section>
  `;
}

// --- СТРАНИЦА 4: LIFE & WALL ---
function getLifeHTML() {
  const savedNotes = JSON.parse(localStorage.getItem('partyWallNotes') || '[]');
  const defaultNote = `
    <div class="friend-note pinned" style="transform: rotate(3deg); background: #f8ddea;">
      <p>"Darla is the best! Loved the portfolio."</p><span>— Anonymous</span>
    </div>
  `;

  const renderedNotes = savedNotes.map(n => `
    <div class="friend-note pinned" style="transform: rotate(${n.rotation}deg); background: ${n.color};">
      <p>"${n.msg}"</p><span>— ${n.name}</span>
    </div>
  `).join('');

  return `
    <section class="friend-space visible">
      <div class="friend-intro">
        <h2>okay... forget the CV.</h2>
        <p>hobbies, sports, travel & raw vibes.</p>
      </div>

      <div class="friend-board">
        <div class="friend-polaroid polaroid-one">
          <img src="${BASE_URL}/images/sailing proof.jpg" alt="">
          <span>sailing & traveling</span>
        </div>
        <div class="friend-note note-one">
          <span>things I currently like:</span>
          <p>late night walks, reading, getting out of comfort zone, ambient music.</p>
        </div>
      </div>

      <div class="party-wall">
        <div class="letters-heading">
          <h3>PARTY WALL</h3>
          <p>leave a postcard here, like on a wall at a home party.</p>
        </div>
        
        <div class="wall-grid" id="wall-grid">
          <article class="envelope-card">
            <div class="envelope openable" tabindex="0">
              <div class="letter">
                <input type="text" class="letter-name" placeholder="your name (optional)">
                <textarea class="letter-message" placeholder="write something nice..."></textarea>
                <button class="send-letter">Pin to Wall ♡</button>
              </div>
              <div class="envelope-back"></div><div class="envelope-flap"></div>
              <div class="envelope-front"><span>add note +</span></div>
            </div>
          </article>
          
          ${renderedNotes}
          ${savedNotes.length === 0 ? defaultNote : ''}
        </div>
      </div>
    </section>
  `;
}

// ========================================
// EVENT LISTENERS
// ========================================
function attachEvents() {
  document.querySelectorAll('.openable').forEach(env => {
    env.addEventListener('click', e => {
      if (e.target.closest('input, textarea, button')) return;
      env.classList.toggle('open');
    });
  });

  document.querySelectorAll('.send-letter').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const letter = btn.closest('.letter');
      const nameInput = letter.querySelector('.letter-name');
      const msgInput = letter.querySelector('.letter-message');
      
      const name = nameInput.value.trim() || 'Anonymous';
      const msg = msgInput.value.trim();
      
      if (!msg) {
        alert('Please write a message first ♡');
        return;
      }
      
      const colors = ['#f8ddea', '#e0f7fa', '#fff5a8', '#f3b6cb'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const randomRotation = (Math.random() * 6 - 3).toFixed(1);
      
      const savedNotes = JSON.parse(localStorage.getItem('partyWallNotes') || '[]');
      savedNotes.unshift({ name, msg, color: randomColor, rotation: randomRotation });
      localStorage.setItem('partyWallNotes', JSON.stringify(savedNotes));
      
      const newNote = document.createElement('div');
      newNote.className = 'friend-note pinned page-transition';
      newNote.style.transform = `rotate(${randomRotation}deg)`;
      newNote.style.background = randomColor;
      newNote.innerHTML = `<p>"${msg}"</p><span>— ${name}</span>`;
      
      const wall = document.getElementById('wall-grid');
      wall.insertBefore(newNote, wall.children[1]);
      
      nameInput.value = '';
      msgInput.value = '';
      btn.closest('.envelope').classList.remove('open');
    });
  });
}

renderApp();