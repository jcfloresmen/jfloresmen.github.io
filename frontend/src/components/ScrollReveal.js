import '../styles/index.css';

import { useEffect } from 'react';

const ScrollReveal = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const sectionTitles = document.querySelectorAll('.section-title');
    const sections = document.querySelectorAll('main > div');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;

      // Animate regular reveal elements
      revealElements.forEach((el, i) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 80) {
          // Delay each element for staggered effect
          setTimeout(() => el.classList.add('active'), i * 80);
        }
      });

      // Animate section titles
      sectionTitles.forEach((title, i) => {
        const titleTop = title.getBoundingClientRect().top;
        if (titleTop < windowHeight - 60) {
          setTimeout(() => title.classList.add('animate'), i * 100);
        }
      });

      // Update navbar active link (scroll spy)
      let currentSectionId = '';
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight / 2) {
          currentSectionId = section.id;
        }
      });

      if (currentSectionId) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
          }
        });
      }
    };

    // Optimize scroll performance
    let ticking = false;
    const optimizedScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          revealOnScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizedScroll);
    setTimeout(revealOnScroll, 300); // Initial check

    return () => {
      window.removeEventListener('scroll', optimizedScroll);
    };
  }, []);

  return null;
};

export default ScrollReveal;
