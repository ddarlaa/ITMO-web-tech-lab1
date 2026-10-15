import './style.css'

// ========================================
// LOADING SCREEN
// ========================================

const animalFacts = [
  'Octopuses have three hearts.',
  'Sea otters hold hands while sleeping so they do not drift apart.',
  'Goats have rectangular pupils.',
  'Cows have best friends and can become stressed when separated.',
  'A group of flamingos is called a flamboyance.',
  'Ravens can remember human faces.',
  'Penguins propose to their mates with pebbles.',
  'Butterflies taste with their feet.',
  'Crows can use tools to solve problems.',
  'A snail can sleep for several years.'
]

const randomFact = animalFacts[Math.floor(Math.random() * animalFacts.length)]

// ========================================
// PAGE
// ========================================

document.querySelector('#app').innerHTML = `
  <div id="loading-screen">
    <div class="loading-content">
      <p class="loading-label">/// LOADING PORTFOLIO...</p>
      <p id="animal-fact"></p>
      <p class="loading-hint">did you know?</p>
      <div class="loading-bar"><div class="loading-bar-progress"></div></div>
    </div>
  </div>

  <header class="site-header">
    <div class="header-date">30/09/2026</div>
    <div class="header-search">
      <span class="search-icon">⌕</span>
      <span>research</span>
    </div>
    <button id="friend-mode-button" class="friend-mode-button" type="button">FRIEND MODE</button>
  </header>

  <main id="normal-site">
    <section id="about" class="hero">
      <nav class="hero-navigation" aria-label="Main navigation">
        <a href="#about">about</a>
        <a href="#education">education</a>
        <a href="#portfolio">portfolio</a>
        <a href="#contact">contact</a>
      </nav>

      <div class="hero-title">
        <h1>HI</h1>
        <p>I'M</p>
      </div>

      <figure class="hero-photo">
        <img src="/images/main darla.png" alt="Portrait of Darya Pugina">
        <figcaption>DARLA</figcaption>
      </figure>

      <p id="about-description" class="hero-description">
        Software Engineering student interested in
        web development, backend systems and creative technologies.
        I enjoy combining technical and visual work —
        from programming and databases to design,
        photography and 3D.
      </p>

      <p class="hero-caption">
        The main idea of this site is for you to get to know me better. No matter the goal, age and location. Internationally friendly.
      </p>
    </section>

    <section class="quick-info">
      <div class="info-item"><span class="info-label">AGE</span><span>20</span></div>
      <div class="info-item"><span class="info-label">GPA</span><span>4.67 / 5.0</span></div>
      <div class="info-item"><span class="info-label">BASED IN</span><span>Saint-Petersburg, Russia</span></div>
      <div class="info-item"><span class="info-label">CURRENT STATUS</span><span>studying & open for work</span></div>
    </section>

    <section class="content-section about-section">
      <div class="section-heading"><h2>ABOUT</h2></div>

      <div class="about-grid">
        <div class="about-main">
          <p class="about-big">engineer & designer</p>
          <p id="about-text" class="about-description-text">
            My actual full name is Daria Pugina. I've been studying Software Engineering
            for 3 years in ITMO University, Russia. Besides all the hardskills of Full-Stack
            Developer I'm mastering my visual skills in design, photography and 3D.
          </p>
        </div>

        <div class="about-side">
          <div class="about-photo">
            <img src="/images/about-photo.jpg" alt="Darya">
            <span class="about-photo-caption">life is a blessing</span>
          </div>
          <div class="about-facts">
            <div class="about-fact"><span>EXPERIENCE</span><strong>3 years</strong></div>
            <div class="about-fact"><span>SPECIAL SKILL</span><strong>precision</strong></div>
            <div class="about-fact"><span>STATUS</span><strong>open to relocate</strong></div>
          </div>
        </div>
      </div>

      <section class="content-section education-section" id="education">
        <div class="section-heading"><h2>EDUCATION</h2></div>
        <div class="education-list">
          <article class="education-item">
            <div class="education-year">2024 — 2028</div>
            <div class="education-info">
              <h3>ITMO University, Software Engineering and Computer Technologies</h3>
              <p class="education-degree">Bachelor’s Degree in Computer Technologies in Design</p>
              <p class="education-description">Full tuition, scholarship for the extracurricular activities.</p>
            </div>
          </article>
          <article class="education-item">
            <div class="education-year">Fall 2026 — 2027</div>
            <div class="education-info">
              <h3>Abdullah Gul University</h3>
              <p class="education-degree">Exchange semester in Computer Engineering department</p>
              <p class="education-description">Mobile programming, analysis of algorithms and operating systems.</p>
            </div>
          </article>
        </div>
      </section>

      <div class="about-note">
        <p id="about-personal">the more you mess around the more you fing out.</p>
        <img src="/images/fuck around.jpg" alt="" class="about-note-image">
      </div>
    </section>

    <section class="content-section skills-section">
      <div class="section-heading"><h2>SKILLS</h2></div>
      <div class="skills-grid">
        <div class="skill-card">
          <div class="skill-card-top"><span>CODE</span></div>
          <h3>PROGRAMMING</h3>
          <div class="skill-list">
            <span>C#</span><span>C</span><span>Python</span><span>JavaScript</span><span>CSS</span>
          </div>
        </div>
        <div class="skill-card">
          <div class="skill-card-top"><span>SYSTEMS</span></div>
          <h3>BACKEND</h3>
          <div class="skill-list">
            <span>ASP.NET</span><span>Databases</span><span>Docker</span><span>Grafana</span><span>Git</span><span>Nginx</span><span>Postman</span>
          </div>
        </div>
        <div class="skill-card skill-card-pink">
          <div class="skill-card-top"><span>VISUAL</span></div>
          <h3>CREATIVE</h3>
          <div class="skill-list">
            <span>Blender</span><span>Unity</span><span>Photoshop</span><span>Illustrator</span><span>InDesign</span><span>Lightroom</span><span>Figma</span><span>Krita</span>
          </div>
        </div>
        <div class="skill-card">
          <div class="skill-card-top"><span>LANGUAGES</span></div>
          <h3>LANGUAGES</h3>
          <div class="language-list">
            <div><span>English</span><strong>C2</strong></div>
            <div><span>Spanish</span><strong>B1</strong></div>
            <div><span>Turkish</span><strong>A1</strong></div>
          </div>
        </div>
      </div>
    </section>

    <section id="portfolio" class="content-section portfolio-section">
      <div class="section-heading"><h2>PORTFOLIO</h2></div>

      <div class="portfolio-controls">
        <span>SCROLL TO EXPLORE ↘</span>
        <div>
          <button class="portfolio-arrow" id="projects-prev" type="button" aria-label="Previous project">←</button>
          <button class="portfolio-arrow" id="projects-next" type="button" aria-label="Next project">→</button>
        </div>
      </div>

      <div class="project-grid" aria-label="Portfolio projects">
        <a href="https://github.com/ddarlaa/IceBreakerApp/tree/laba5" target="_blank" rel="noopener noreferrer" class="project-card">
          <img src="/images/icebreaker app pic.jpg" alt="IceBreaker App">
          <h3>IceBreaker App</h3>
          <p>Service to get to know each other better. An app for students to find friends and communicate. Developed with C# and ASP.NET, using a PostgreSQL database and Docker for deployment.</p>
          <span class="project-arrow">→</span>
        </a>

        <a href="https://t.me/sailingclub_itmo" target="_blank" rel="noopener noreferrer" class="project-card">
          <img src="/images/smm proof.jpg" alt="SMM for ITMO Sailing Club">
          <h3>SMM for ITMO Sailing Club</h3>
          <p>Telegram channel for ITMO Sailing Club. I created a content plan, designed posts and wrote texts for the channel. Developed with Photoshop, Figma and Telegram. Subscribers: 350+.</p>
          <span class="project-arrow">→</span>
        </a>

        <a href="https://ddarlaa.github.io/front_laba2/blog/" target="_blank" rel="noopener noreferrer" class="project-card">
          <img src="/images/blogging.jpg" alt="Personal Blog with JS projects">
          <h3>Personal Blog with JS projects</h3>
          <p>Hugo site with a blog and several small JS projects. Developed with Hugo, JavaScript, CSS and HTML.</p>
          <span class="project-arrow">→</span>
        </a>
      </div>
    </section>

    <section id="contact" class="contact-section">
      <p class="eyebrow">HAVE A QUESTION?</p>
      <h2>LET'S TALK.</h2>
      <a href="mailto:d.pugina@list.ru" class="contact-email">d.pugina@list.ru</a>
      <div class="social-links">
        <a href="https://github.com/ddarlaa" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://t.me/ddarla" target="_blank" rel="noopener noreferrer">Telegram</a>
        <a href="https://instagram.com/ddaarrla" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </section>
  </main>

  <section id="friend-space" class="friend-space">
    <div class="friend-intro">
      <span class="friend-small">/// SECRET CORNER</span>
      <h2>okay...<br>forget the CV.</h2>
      <p>get to know me.</p>
    </div>

    <div class="friend-board">
      <div class="friend-polaroid polaroid-one">
        <img src="/images/sailing proof.jpg" alt="">
        <span>main hobby of this year: sailing</span>
      </div>
      <div class="friend-note note-one">
        <span>things I currently like:</span>
        <p>late night walks<br>reading on my pocketbook<br>going out of my comfort zone<br>ambient music<br>travelling as much as I can</p>
      </div>
      <div class="friend-polaroid polaroid-two">
        <img src="/images/cave explorer.jpg" alt="">
        <span>type of activity after hangover</span>
      </div>
      <div class="friend-note note-two">
        <span>01 / 10 / 2026</span>
        <p>currently in Turkey making assignments and enjoying the sun.</p>
      </div>
      <div class="friend-sticker sticker-one">♡</div>
      <div class="friend-sticker sticker-two">!!!</div>
      <div class="friend-sticker sticker-three">☆</div>
    </div>

    <div class="letters-heading">
      <span>/// LEAVE SOMETHING HERE</span>
      <h3>send me a little letter</h3>
      <p>no CVs. no formal introductions. just say hi.</p>
    </div>

    <div class="envelope-grid">
      ${[1, 2, 3].map((number) => `
        <article class="envelope-card">
          <div class="envelope" tabindex="0" role="button" aria-label="Open letter envelope">
            <div class="letter">
              <label>your name</label>
              <input type="text" class="letter-name" placeholder="your name..." autocomplete="name">
              <label>little message</label>
              <textarea class="letter-message" placeholder="write something..."></textarea>
              <button class="send-letter" type="button">send ♡</button>
            </div>
            <div class="envelope-back"></div>
            <div class="envelope-flap"></div>
            <div class="envelope-front"><span>to: darla ♡</span></div>
          </div>
          ${number === 2 ? '<p class="envelope-caption">break the ice</p>' : ''}
        </article>
      `).join('')}
    </div>
  </section>

  <footer class="site-footer">
    <span>© 2026 DARLA</span>
    <span>made with love and JavaScript</span>
  </footer>
`

// ========================================
// LOADING SCREEN
// ========================================

document.querySelector('#animal-fact').textContent = randomFact

window.setTimeout(() => {
  document.querySelector('#loading-screen')?.classList.add('hidden')
}, 4000)

// ========================================
// FRIEND MODE
// ========================================

const friendModeButton = document.querySelector('#friend-mode-button')

friendModeButton.addEventListener('click', () => {
  const isFriendMode = document.body.classList.toggle('friend-mode-active')
  friendModeButton.textContent = isFriendMode ? 'CV MODE' : 'FRIEND MODE'
})

// ========================================
// PORTFOLIO CAROUSEL
// ========================================

const projectCarousel = document.querySelector('.project-grid')
const prevProjects = document.querySelector('#projects-prev')
const nextProjects = document.querySelector('#projects-next')

function scrollProjects(direction) {
  const firstCard = projectCarousel?.querySelector('.project-card')
  if (!firstCard || !projectCarousel) return

  const styles = window.getComputedStyle(projectCarousel)
  const gap = parseFloat(styles.columnGap || styles.gap) || 20
  const distance = firstCard.getBoundingClientRect().width + gap

  projectCarousel.scrollBy({
    left: direction * distance,
    behavior: 'smooth'
  })
}

prevProjects?.addEventListener('click', () => scrollProjects(-1))
nextProjects?.addEventListener('click', () => scrollProjects(1))

// Disable arrows when the carousel reaches either end.
function updateCarouselButtons() {
  if (!projectCarousel || !prevProjects || !nextProjects) return

  const maxScroll = projectCarousel.scrollWidth - projectCarousel.clientWidth
  prevProjects.disabled = projectCarousel.scrollLeft <= 2
  nextProjects.disabled = projectCarousel.scrollLeft >= maxScroll - 2
}

projectCarousel?.addEventListener('scroll', updateCarouselButtons, { passive: true })
window.addEventListener('resize', updateCarouselButtons)
requestAnimationFrame(updateCarouselButtons)

// ========================================
// ENVELOPES
// ========================================

const envelopes = document.querySelectorAll('.envelope')

envelopes.forEach((envelope) => {
  envelope.addEventListener('click', (event) => {
    if (event.target.closest('input, textarea, button')) return
    envelope.classList.toggle('open')
  })

  envelope.addEventListener('keydown', (event) => {
    if (event.target !== envelope) return
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      envelope.classList.toggle('open')
    }
  })
})

// ========================================
// SEND LETTER
// ========================================

document.querySelectorAll('.send-letter').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation()

    const letter = button.closest('.letter')
    const nameInput = letter.querySelector('.letter-name')
    const messageInput = letter.querySelector('.letter-message')
    const name = nameInput.value.trim()
    const message = messageInput.value.trim()

    if (!name || !message) {
      alert('write something first ♡')
      return
    }

    const subject = `a little letter from ${name}`
    const body = `hi darla ♡\n\n${message}\n\n— ${name}`
    const mailto = 'mailto:d.pugina@list.ru'
      + `?subject=${encodeURIComponent(subject)}`
      + `&body=${encodeURIComponent(body)}`

    window.location.href = mailto
  })
})
