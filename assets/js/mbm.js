

/* ── Splash Screen ── */
const splashScreen = document.getElementById('splash-screen');
setTimeout(() => {
  splashScreen.classList.add('done');
  document.body.classList.remove('splash-active');
}, 3000);

/* ── Navbar scroll ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ── Hamburger ── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.querySelector('i').className = isOpen ? 'ri-close-line' : 'ri-menu-3-fill';
});
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.querySelector('i').className = 'ri-menu-3-fill';
  });
});

/* ── Hero Parallax ── */
const heroParallax = document.getElementById('hero-parallax');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY < window.innerHeight) {
    heroParallax.style.transform = `translateY(${scrollY * 0.3}px)`;
  }
}, { passive: true });

/* ── Scroll Reveal ── */
const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => revealObserver.observe(el));

/* ── Smooth anchor scroll ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── Contact Form → Mailto ── */
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('formName').value.trim();
  const email = document.getElementById('formEmail').value.trim();
  const phone = document.getElementById('formPhone').value.trim();
  const message = document.getElementById('formMessage').value.trim();
  
  if (!name || !email || !phone || !message) {
    alert('Veuillez remplir tous les champs du formulaire.');
    return;
  }
  
  const subject = encodeURIComponent('Demande Privée — MBM Conciergerie');
  const body = encodeURIComponent(
    `Bonjour MBM Conciergerie,\n\n` +
    `Je souhaite vous soumettre une demande privée. Voici mes coordonnées :\n\n` +
    `Nom : ${name}\n` +
    `Email : ${email}\n` +
    `Téléphone : ${phone}\n\n` +
    `Message confidentiel :\n` +
    `─────────────────────\n` +
    `${message}\n` +
    `─────────────────────\n\n` +
    `Cordialement,\n${name}`
  );
  
  window.location.href = `mailto:contact.mbmconciergerie@gmail.com?subject=${subject}&body=${body}`;
});
