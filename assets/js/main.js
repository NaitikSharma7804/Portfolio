/**
 * =========================================================================
 * NAITIK SHARMA — MAIN JAVASCRIPT
 * =========================================================================
 * Handles navigation, typing animations, circular hero text, active link
 * tracking, ScrollReveal effects, contact interactions, and accessible UX.
 */

document.addEventListener("DOMContentLoaded", () => {
  /*=============== SHOW & CLOSE MOBILE MENU ===============*/
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }

  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }

  /* Close mobile menu on nav link click */
  const navLinks = document.querySelectorAll(".nav__link, .nav__resume-btn");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu) {
        navMenu.classList.remove("show-menu");
      }
    });
  });

  /* Close when clicking outside menu */
  document.addEventListener("click", (e) => {
    if (
      navMenu &&
      navMenu.classList.contains("show-menu") &&
      !navMenu.contains(e.target) &&
      navToggle &&
      !navToggle.contains(e.target)
    ) {
      navMenu.classList.remove("show-menu");
    }
  });

  /*=============== HEADER BACKGROUND ON SCROLL ===============*/
  const header = document.getElementById("header");
  const scrollHeader = () => {
    if (window.scrollY >= 50) {
      header.classList.add("bg-header");
    } else {
      header.classList.remove("bg-header");
    }
  };
  window.addEventListener("scroll", scrollHeader, { passive: true });
  scrollHeader();

  /*=============== CIRCULAR ROTATING TEXT (HERO) ===============*/
  const circularText = document.getElementById("home-text-circular");
  if (circularText) {
    const text = circularText.textContent.trim();
    circularText.textContent = "";
    const totalChars = text.length;
    const degPerChar = 360 / totalChars;

    for (let i = 0; i < totalChars; i++) {
      const span = document.createElement("span");
      span.textContent = text[i];
      span.style.transform = `rotate(${i * degPerChar}deg)`;
      circularText.appendChild(span);
    }
  }

  /*=============== TYPED.JS TEXT ANIMATION ===============*/
  const typedTarget = document.getElementById("home-typed");
  if (typedTarget && typeof Typed !== "undefined") {
    new Typed("#home-typed", {
      strings: [
        "AI Engineer in the Making",
        "Machine Learning Enthusiast",
        "LLM Application Developer",
        "Full-Stack Engineer"
      ],
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 2200,
      startDelay: 400,
      loop: true,
      showCursor: false
    });
  }

  /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
  const sections = document.querySelectorAll("section[id]");

  const scrollActive = () => {
    const scrollY = window.pageYOffset || window.scrollY;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 140;
      const sectionId = current.getAttribute("id");
      const sectionLink = document.querySelector(`.nav__menu a[href*="#${sectionId}"]`);

      if (sectionLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          sectionLink.classList.add("active-link");
        } else {
          sectionLink.classList.remove("active-link");
        }
      }
    });
  };
  window.addEventListener("scroll", scrollActive, { passive: true });
  scrollActive();

  /*=============== SHOW SCROLL UP BUTTON ===============*/
  const scrollUp = document.getElementById("scroll-up");
  const checkScrollUp = () => {
    if (scrollUp) {
      if (window.scrollY >= 350) {
        scrollUp.classList.add("show-scroll");
      } else {
        scrollUp.classList.remove("show-scroll");
      }
    }
  };
  window.addEventListener("scroll", checkScrollUp, { passive: true });
  checkScrollUp();

  /*=============== CUSTOM CURSOR ===============*/
  const cursor = document.getElementById("custom-cursor");
  if (cursor && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    let mouseX = -100;
    let mouseY = -100;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    });

    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, .project-card, .focus-card, .skill-chip"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1.6)";
        cursor.style.borderColor = "#ffffff";
        cursor.style.backgroundColor = "rgba(138, 255, 101, 0.25)";
      });
      el.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
        cursor.style.borderColor = "var(--first-color)";
        cursor.style.backgroundColor = "transparent";
      });
    });
  }

  /*=============== CONTACT FORM SUBMISSION ===============*/
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  const btnSendMessage = document.getElementById("btn-send-message");

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const nameInput = document.getElementById("contact-name");
      const emailInput = document.getElementById("contact-email");
      const subjectInput = document.getElementById("contact-subject");
      const messageInput = document.getElementById("contact-message");
      const honeyInput = contactForm.querySelector('input[name="_honey"]');

      // Honeypot spam check
      if (honeyInput && honeyInput.value) {
        return;
      }

      const name = nameInput ? nameInput.value.trim() : "";
      const email = emailInput ? emailInput.value.trim() : "";
      const subject = subjectInput && subjectInput.value.trim() ? subjectInput.value.trim() : "Portfolio Message";
      const message = messageInput ? messageInput.value.trim() : "";

      if (!name || !email || !message) {
        if (formStatus) {
          formStatus.className = "form__status error";
          formStatus.textContent = "Please fill in all required fields (Name, Email, and Message).";
        }
        return;
      }

      const targetEmail = (window.PORTFOLIO_CONFIG && window.PORTFOLIO_CONFIG.personal && window.PORTFOLIO_CONFIG.personal.email) || "naitik1726@gmail.com";
      const endpoint = (window.PORTFOLIO_CONFIG && window.PORTFOLIO_CONFIG.personal && window.PORTFOLIO_CONFIG.personal.contactFormEndpoint) || `https://formsubmit.co/ajax/${targetEmail}`;

      // Show sending state
      if (btnSendMessage) {
        btnSendMessage.disabled = true;
        btnSendMessage.innerHTML = 'Sending Message... <i class="ri-loader-4-line spin"></i>';
      }

      if (formStatus) {
        formStatus.className = "form__status";
        formStatus.style.display = "block";
        formStatus.style.borderColor = "var(--border-color)";
        formStatus.style.color = "var(--text-color)";
        formStatus.style.background = "var(--card-hover)";
        formStatus.innerHTML = '<i class="ri-loader-4-line spin"></i> Delivering message directly to Naitik\'s inbox...';
      }

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name: name,
            email: email,
            _subject: `[Portfolio Inquiry] ${subject} — from ${name}`,
            message: message,
            _captcha: "false",
            _template: "table"
          })
        });

        const data = await response.json().catch(() => ({}));

        if (response.ok || data.success === "true" || data.success === true) {
          if (formStatus) {
            formStatus.className = "form__status success";
            formStatus.style.display = "block";
            formStatus.style.background = "";
            formStatus.style.borderColor = "";
            formStatus.style.color = "";
            formStatus.innerHTML = `✓ <strong>Message sent directly!</strong> Thank you ${name}, your email has been delivered to <strong>${targetEmail}</strong>. Naitik will get back to you shortly.`;
          }
          contactForm.reset();
        } else {
          throw new Error((data && data.message) || "Form submission failed");
        }
      } catch (err) {
        console.warn("Direct delivery fallback triggered:", err);
        const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject} — from ${name}`);
        const mailtoBody = encodeURIComponent(`Hi Naitik,\n\n${message}\n\n---\nSender: ${name}\nEmail: ${email}`);
        const mailtoLink = `mailto:${targetEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

        if (formStatus) {
          formStatus.className = "form__status error";
          formStatus.style.display = "block";
          formStatus.style.background = "";
          formStatus.style.borderColor = "";
          formStatus.style.color = "";
          formStatus.innerHTML = `Direct server response delayed. <a href="${mailtoLink}" style="color:var(--white-color);text-decoration:underline;font-weight:600;">Click here to send via mail client</a> or email <strong>${targetEmail}</strong> directly.`;
        }
      } finally {
        if (btnSendMessage) {
          btnSendMessage.disabled = false;
          btnSendMessage.innerHTML = 'Send Message <i class="ri-send-plane-fill"></i>';
        }
      }
    });
  }

  /*=============== DYNAMIC COPYRIGHT YEAR ===============*/
  const currentYearSpan = document.getElementById("current-year");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  /*=============== INTERSECTION OBSERVER REVEAL ANIMATIONS ===============*/
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!prefersReducedMotion && "IntersectionObserver" in window) {
    const revealElements = document.querySelectorAll(
      ".section__header, .about__statement, .info-card, .timeline__item, .project-card, .focus-card, .skill-category, .leadership-card, .achievements-box, .education__card, .contact__card, .contact__form-card"
    );

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05
      }
    );

    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add("revealed");
      } else {
        el.classList.add("reveal-anim");
        revealObserver.observe(el);
      }
    });
  }
});
