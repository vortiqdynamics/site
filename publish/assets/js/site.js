(function () {
  const data = window.VORTIQ_DATA;
  if (!data) return;

  const iconMap = {
    network: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="7" r="2"></circle><circle cx="18" cy="7" r="2"></circle><circle cx="12" cy="17" r="2"></circle><path d="M8 8.5l3 5"></path><path d="M16 8.5l-3 5"></path><path d="M8 7h8"></path></svg>',
    cloud: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 18h10a4 4 0 0 0 .4-8 6 6 0 0 0-11.3 1.7A3.3 3.3 0 0 0 7 18z"></path></svg>',
    layout: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="14" rx="2"></rect><path d="M4 9h16"></path><path d="M9 9v10"></path></svg>',
    phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="3" width="10" height="18" rx="2"></rect><path d="M11 17h2"></path></svg>',
    globe: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18"></path><path d="M12 3a13 13 0 0 1 0 18"></path><path d="M12 3a13 13 0 0 0 0 18"></path></svg>',
    chip: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2"></rect><path d="M4 9h3"></path><path d="M4 15h3"></path><path d="M17 9h3"></path><path d="M17 15h3"></path><path d="M9 4v3"></path><path d="M15 4v3"></path><path d="M9 17v3"></path><path d="M15 17v3"></path></svg>',
    processor: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"></rect><circle cx="12" cy="12" r="3"></circle><path d="M12 2v4"></path><path d="M12 18v4"></path><path d="M2 12h4"></path><path d="M18 12h4"></path></svg>'
  };

  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  function activePage() {
    return document.body.dataset.page || "home";
  }

  function renderHeader() {
    const mount = document.querySelector("[data-header]");
    if (!mount) return;
    const current = activePage();
    const nav = data.nav
      .map((item) => {
        const active = item.id === current ? ' aria-current="page"' : "";
        return `<a href="${item.href}"${active}>${item.label}</a>`;
      })
      .join("");

    mount.innerHTML = `
      <header class="site-header" data-site-header>
        <a class="brand" href="index.html" aria-label="${data.site.name} home">
          <img src="assets/images/logo.webp" alt="${data.site.name} logo" class="brand-logo" width="60" height="60">
          <span class="brand-name">${data.site.name}</span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
          <span></span><span></span><span></span>
          <span class="sr-only">Menu</span>
        </button>
        <nav class="site-nav" id="site-nav" aria-label="Primary navigation">
          ${nav}
          <a class="nav-cta" href="request-quote.html">Request Quote</a>
        </nav>
        <a class="header-cta" href="request-quote.html">Request Quote</a>
      </header>
    `;
  }

  function renderFooter() {
    const mount = document.querySelector("[data-footer]");
    if (!mount) return;
    const navLinks = data.nav.map((item) => `<a href="${item.href}">${item.label}</a>`).join("");
    const serviceLinks = data.services.map((item) => `<a href="services.html#${item.id}">${item.title}</a>`).join("");

    const socialIconMap = {
      LinkedIn: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.13 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.5h5V24H0V8.5zM7.5 8.5H12v2.13h.06C12.72 9.25 14.18 8 16.39 8 21.41 8 22 11.32 22 15.62V24h-5v-7.38c0-1.76-.03-4.02-2.45-4.02-2.45 0-2.83 1.91-2.83 3.89V24h-5V8.5z"/></svg>`,
      Instagram: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
      X: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`
    };

    const socialLinks = data.site.social.map((item) => {
      const icon = socialIconMap[item.label] || `<span>${item.label[0]}</span>`;
      return `<a class="social-icon-btn" href="${item.href}" target="_blank" rel="noopener noreferrer" aria-label="${item.label}">${icon}</a>`;
    }).join("");

    mount.innerHTML = `
      <footer class="site-footer">
        <div class="footer-brand">
          <a class="brand" href="index.html">
            <img src="assets/images/logo.webp" alt="${data.site.name} logo" class="brand-logo" width="60" height="60">
            <span class="brand-name">${data.site.name}</span>
          </a>
          <p>${data.site.tagline}</p>
        </div>
        <div>
          <h2>Quick Links</h2>
          <div class="footer-links">${navLinks}</div>
        </div>
        <div>
          <h2>Services</h2>
          <div class="footer-links">${serviceLinks}</div>
        </div>
        <div>
          <h2>Contact</h2>
          <div class="footer-contact-groups">
            ${data.site.emails.map((e) => {
              const phone = (data.site.phones || []).find(p => p.label === e.label);
              return `
            <div class="footer-contact-dept">
              <span class="footer-dept-label">${e.label}</span>
              <a class="footer-contact-row" href="mailto:${e.address}">
                <span class="footer-contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </span>
                <span>${e.address}</span>
              </a>
              ${phone ? `
              <a class="footer-contact-row" href="tel:${phone.number.replaceAll(" ", "")}">
                <span class="footer-contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>
                </span>
                <span>${phone.number}</span>
              </a>` : ""}
            </div>`;
            }).join("")}
          </div>
          <div class="social-links">${socialLinks}</div>
        </div>
        <div class="footer-bottom">Copyright &copy;${data.site.name} ${new Date().getFullYear()}.</div>
      </footer>
    `;
  }

  function serviceCard(service, index) {
    return `
      <article class="service-card reveal" data-reveal="flow" id="${service.id}" style="--delay:${index * 70}ms">
        <div class="icon-box">${iconMap[service.icon] || iconMap.chip}</div>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
      </article>
    `;
  }

  function renderServices() {
    document.querySelectorAll("[data-render='services']").forEach((mount) => {
      mount.innerHTML = data.services.map(serviceCard).join("");
    });
  }

  function renderFlow() {
    document.querySelectorAll("[data-render='flow']").forEach((mount) => {
      mount.innerHTML = `
        <div class="flow-track" aria-label="Capability flow">
          ${data.flow
            .map(
              (item, index) => `
                <article class="flow-node reveal" data-reveal="circuit" style="--delay:${index * 80}ms">
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <h3>${item.title}</h3>
                  <p>${item.detail}</p>
                </article>
              `
            )
            .join("")}
        </div>
      `;
    });
  }

  function renderRDLab() {
    document.querySelectorAll("[data-render='rd-lab']").forEach((mount) => {
      mount.innerHTML = data.rdLab
        .map(
          (item, index) => `
            <article class="lab-card ${item.featured ? "featured" : ""} reveal" data-reveal="flow" style="--delay:${index * 80}ms">
              <div class="ambient-media compact">
                <img class="ambient-bg" src="${item.image}" alt="" aria-hidden="true" loading="lazy" decoding="async">
                <img class="ambient-main" src="${item.image}" alt="${escapeHtml(item.alt)}" loading="lazy" decoding="async">
              </div>
              <div class="lab-card-body">
                <p>${escapeHtml(item.category)}</p>
                <h3>${escapeHtml(item.title)}</h3>
                <span>${escapeHtml(item.description)}</span>
                <div class="lab-tags">
                  ${item.tags.map((tag) => `<em>${escapeHtml(tag)}</em>`).join("")}
                </div>
              </div>
            </article>
          `
        )
        .join("");
    });
  }

  function renderTechStack() {
    document.querySelectorAll("[data-render='tech']").forEach((mount) => {
      mount.innerHTML = data.techStack
        .map(
          (group, index) => `
            <article class="tech-card reveal" data-reveal="circuit" style="--delay:${index * 70}ms">
              <h3>${group.title}</h3>
              <div class="chip-list">
                ${group.items.map((item) => `<span>${item}</span>`).join("")}
              </div>
            </article>
          `
        )
        .join("");
    });
  }

  function renderCaseStudies() {
    document.querySelectorAll("[data-render='cases']").forEach((mount) => {
      mount.innerHTML = data.caseStudies
        .map(
          (item, index) => `
            <article class="case-card reveal" data-reveal="circuit" style="--delay:${index * 90}ms">
              <div class="ambient-media compact">
                <img class="ambient-bg" src="${item.image}" alt="" aria-hidden="true" loading="lazy" decoding="async">
                <img class="ambient-main" src="${item.image}" alt="" loading="lazy" decoding="async">
              </div>
              <div class="case-content">
                <h3>${item.title}</h3>
                <dl>
                  <dt>Problem</dt>
                  <dd>${item.problem}</dd>
                  <dt>Solution</dt>
                  <dd>${item.solution}</dd>
                  <dt>Result</dt>
                  <dd>${item.result}</dd>
                </dl>
              </div>
            </article>
          `
        )
        .join("");
    });
  }

  function initGalleryCarousel() {
    const carousel = document.querySelector("[data-render='gallery-carousel']");
    if (!carousel) return;

    carousel.innerHTML = `
      <div class="gallery-carousel">
        <div class="carousel-track">
          ${data.gallery
            .map(
              (item, index) => `
                <div class="carousel-slide ${index === 0 ? "active" : ""}">
                  <div class="ambient-media">
                    <img class="ambient-bg" src="" alt="" aria-hidden="true" loading="lazy" decoding="async">
                    <img class="ambient-main" src="${item.image}" alt="${escapeHtml(item.alt)}" loading="lazy" decoding="async">
                  </div>
                  <div class="carousel-info">
                    <span class="carousel-category">${escapeHtml(item.category)}</span>
                    <h3 class="carousel-title">${escapeHtml(item.title)}</h3>
                    <p class="carousel-description">${escapeHtml(item.description)}</p>
                  </div>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="carousel-nav">
          <button class="carousel-prev" type="button" aria-label="Previous slide">
            <svg viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg>
          </button>
          <button class="carousel-next" type="button" aria-label="Next slide">
            <svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg>
          </button>
        </div>
        <div class="carousel-dots">
          ${data.gallery
            .map(
              (_, index) => `
                <button class="carousel-dot ${index === 0 ? "active" : ""}" data-slide="${index}" type="button" aria-label="Go to slide ${index + 1}"></button>
              `
            )
            .join("")}
        </div>
      </div>
    `;

    const slides = carousel.querySelectorAll(".carousel-slide");
    const dots = carousel.querySelectorAll(".carousel-dot");
    const prevBtn = carousel.querySelector(".carousel-prev");
    const nextBtn = carousel.querySelector(".carousel-next");
    if (!slides.length) return;

    let currentIndex = 0;
    let timer = null;

    function showSlide(index) {
      slides[currentIndex].classList.remove("active");
      dots[currentIndex].classList.remove("active");
      currentIndex = (index + slides.length) % slides.length;
      slides[currentIndex].classList.add("active");
      dots[currentIndex].classList.add("active");
      initAmbientMediaInside(slides[currentIndex]);
    }

    function nextSlide() {
      showSlide(currentIndex + 1);
    }

    function prevSlide() {
      showSlide(currentIndex - 1);
    }

    function startTimer() {
      stopTimer();
      timer = window.setInterval(nextSlide, 5000);
    }

    function stopTimer() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    function initAmbientMediaInside(slide) {
      const main = slide.querySelector(".ambient-main");
      const bg = slide.querySelector(".ambient-bg");
      if (main && bg && !bg.getAttribute("src")) {
        bg.setAttribute("src", main.getAttribute("src"));
      }
    }

    initAmbientMediaInside(slides[0]);

    prevBtn.addEventListener("click", () => {
      prevSlide();
      startTimer();
    });
    nextBtn.addEventListener("click", () => {
      nextSlide();
      startTimer();
    });

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        showSlide(parseInt(dot.dataset.slide, 10));
        startTimer();
      });
    });

    carousel.addEventListener("mouseenter", stopTimer);
    carousel.addEventListener("mouseleave", startTimer);

    startTimer();
  }

  function renderFaq() {
    document.querySelectorAll("[data-render='faq']").forEach((mount) => {
      mount.innerHTML = data.faqs
        .map(
          (item, index) => `
            <details class="faq-item reveal" data-reveal="spark" style="--delay:${index * 60}ms">
              <summary>${item.question}</summary>
              <p>${item.answer}</p>
            </details>
          `
        )
        .join("");
    });
  }

  function initNav() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".site-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      document.body.classList.toggle("nav-open", !open);
      if (!open) {
        window.menuOpenScrollY = window.scrollY;
      }
    });
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-open");
      }
    });
  }

  function initHeaderScroll() {
    const header = document.querySelector("[data-site-header]");
    if (!header) return;
    const toggle = document.querySelector(".nav-toggle");
    const update = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
      if (document.body.classList.contains("nav-open") && typeof window.menuOpenScrollY === "number") {
        if (Math.abs(window.scrollY - window.menuOpenScrollY) > 10) {
          document.body.classList.remove("nav-open");
          if (toggle) {
            toggle.setAttribute("aria-expanded", "false");
          }
        }
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  /* === ANIMATION ENGINE === */
  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  function prefersReducedMotion() {
    return reduceMotionQuery.matches;
  }

  function initSiteLoader() {
    const loader = document.getElementById("site-loader");
    if (!loader) return;

    const hideLoader = (delay = 0) => {
      window.setTimeout(() => {
        loader.classList.add("is-done");
        window.setTimeout(() => {
          loader.setAttribute("hidden", "");
        }, 420);
      }, delay);
    };

    try {
      if (sessionStorage.getItem("vortiq_loaded") === "1") {
        loader.setAttribute("hidden", "");
        return;
      }
      sessionStorage.setItem("vortiq_loaded", "1");
    } catch (error) {
      // Private browsing or storage policies should not block page access.
    }

    loader.classList.add("is-active");
    hideLoader(prefersReducedMotion() ? 400 : 2200);
  }

  function prepareRevealElements() {
    document.querySelectorAll(".section-head.reveal").forEach((item) => {
      item.dataset.reveal = item.dataset.reveal || "spark";
    });
    document.querySelectorAll(".copy-block.reveal, .info-panel.reveal, .form-panel.reveal").forEach((item) => {
      item.dataset.reveal = item.dataset.reveal || "spark";
    });
    document.querySelectorAll(".feature-card.reveal, .service-card.reveal, .process-step.reveal, .lab-card.reveal").forEach((item) => {
      item.dataset.reveal = item.dataset.reveal || "flow";
    });
    document.querySelectorAll(".flow-node.reveal, .tech-card.reveal, .case-card.reveal").forEach((item) => {
      item.dataset.reveal = item.dataset.reveal || "circuit";
    });
    document.querySelectorAll(".ambient-media.reveal, .faq-item.reveal").forEach((item) => {
      item.dataset.reveal = item.dataset.reveal || "spark";
    });

    document
      .querySelectorAll(".services-grid, .tech-grid, .feature-grid, .process-grid, .case-grid, .lab-grid, .faq-list")
      .forEach((container) => {
        container.setAttribute("data-reveal-stagger", "");
      });

    const mobileReveal = window.matchMedia("(max-width: 767px)").matches;
    document.querySelectorAll(".reveal").forEach((item) => {
      if (!item.dataset.revealOriginal) {
        item.dataset.revealOriginal = item.dataset.reveal || "spark";
      }
      item.dataset.reveal = mobileReveal ? "pulse" : item.dataset.revealOriginal;
    });

    document.querySelectorAll("[data-reveal-stagger]").forEach((container) => {
      Array.from(container.children).forEach((child, index) => {
        if (child.classList.contains("reveal")) {
          child.style.transitionDelay = `${index * 80}ms`;
        }
      });
    });
  }

  function initReveal() {
    prepareRevealElements();
    const items = Array.from(document.querySelectorAll(".reveal"));
    if (!items.length) return;
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible", "is-revealed"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible", "is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );
    items.forEach((item) => observer.observe(item));
  }

  function initAmbientSections() {
    const sections = Array.from(document.querySelectorAll(".section.dark"));
    if (!sections.length) return;
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("is-in-view"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-in-view", entry.isIntersecting);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    sections.forEach((section) => observer.observe(section));
  }

  function initTypewriter() {
    const target = document.querySelector("[data-typewriter]");
    if (!target) return;
    const lines = data.hero.typewriter;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      target.textContent = lines[0];
      return;
    }
    let line = 0;
    let character = 0;
    let deleting = false;

    function tick() {
      const current = lines[line];
      target.textContent = current.slice(0, character);
      if (!deleting && character < current.length) {
        character += 1;
        window.setTimeout(tick, 42);
        return;
      }
      if (!deleting && character === current.length) {
        deleting = true;
        window.setTimeout(tick, 1700);
        return;
      }
      if (deleting && character > 0) {
        character -= 1;
        window.setTimeout(tick, 22);
        return;
      }
      deleting = false;
      line = (line + 1) % lines.length;
      window.setTimeout(tick, 260);
    }

    tick();
  }

  function initForms() {
    document.querySelectorAll("form[data-static-form]").forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        // Extract form fields
        const formData = new FormData(form);
        let message = `Hello Vortiq Dynamics, I have an inquiry:\n\n`;
        
        for (let [key, value] of formData.entries()) {
          if (value && key !== "resume") {
            const label = key.charAt(0).toUpperCase() + key.slice(1);
            message += `*${label}*: ${value}\n`;
          }
        }
        
        // Format wa.me phone string (remove symbols and spaces)
        const phone = data.site.phone.replaceAll(" ", "").replaceAll("+", "");
        const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        
        // Show status feedback
        const status = form.querySelector("[data-form-status]");
        if (status) {
          status.textContent = "Thank you! Opening WhatsApp to send your requirements...";
          status.removeAttribute("hidden");
        }
        
        // Reset inputs
        form.reset();
        
        // Open WhatsApp in new tab
        setTimeout(() => {
          window.open(waUrl, "_blank");
        }, 800);
      });
    });
  }

  function initAmbientMedia() {
    document.querySelectorAll(".ambient-media").forEach((media) => {
      const main = media.querySelector(".ambient-main");
      const bg = media.querySelector(".ambient-bg");
      if (main && bg && !bg.getAttribute("src")) {
        bg.setAttribute("src", main.getAttribute("src"));
      }
    });
  }

  function initAdminSchema() {
    const mounts = document.querySelectorAll("[data-admin-slots]");
    mounts.forEach((mount) => {
      mount.innerHTML = data.mediaSlots
        .map((slot) => `<span>${escapeHtml(slot)}</span>`)
        .join("");
    });
  }

  function initContactInfo() {
    const infoMount = document.querySelector("[data-contact-info]");
    if (!infoMount) return;

    const emailSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`;
    const phoneSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>`;
    const locationSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`;

    const groups = data.site.emails.map((e) => {
      const phone = (data.site.phones || []).find(p => p.label === e.label);
      return `
      <div class="cdept-group">
        <div class="cdept-header">
          <span class="cdept-name">${e.label}</span>
          <p class="cdept-purpose">${e.purpose || ""}</p>
        </div>
        <div class="cdept-rows">
          <a class="cdept-row" href="mailto:${e.address}">
            <span class="cdept-icon">${emailSVG}</span>
            <div class="cdept-info">
              <span class="cdept-label">Email</span>
              <span class="cdept-value">${e.address}</span>
              ${e.note ? `<span class="cdept-desc">${e.note}</span>` : ""}
            </div>
          </a>
          ${phone ? `
          <a class="cdept-row" href="tel:${phone.number.replaceAll(" ", "")}">
            <span class="cdept-icon">${phoneSVG}</span>
            <div class="cdept-info">
              <span class="cdept-label">Phone</span>
              <span class="cdept-value">${phone.number}</span>
            </div>
          </a>` : ""}
        </div>
      </div>`;
    }).join("");

    const delivery = `
      <div class="contact-delivery">
        <span class="delivery-icon">${locationSVG}</span>
        <div class="delivery-body">
          <p class="delivery-title">India | Global Project Delivery</p>
          <p class="delivery-sub">Serving clients across India and worldwide through remote collaboration and on-site project execution.</p>
        </div>
      </div>`;

    infoMount.innerHTML = groups + delivery;
  }


  function initLenis() {
    if (typeof Lenis === "undefined") return;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false
    });
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  function initPageTransitions() {
    const shell = document.querySelector(".site-shell");
    if (!shell) return;
    const bar = document.getElementById("page-transition-bar");
    const reducedMotion = prefersReducedMotion();
    
    window.requestAnimationFrame(() => {
      shell.classList.add("page-loaded");
    });
    
    document.body.addEventListener("click", (event) => {
      const link = event.target.closest("a");
      if (!link) return;
      
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || link.getAttribute("target") === "_blank") {
        return;
      }

      let destination;
      try {
        destination = new URL(href, window.location.href);
      } catch (error) {
        return;
      }

      const isSameOrigin = destination.origin === window.location.origin;
      const isHtmlPage = destination.pathname.endsWith(".html") || destination.pathname.endsWith("/");
      
      const isSamePage = destination.pathname === window.location.pathname && destination.search === window.location.search;
      if (!isSameOrigin || !isHtmlPage) return;

      if (isSamePage) {
        if (destination.hash === window.location.hash) {
          event.preventDefault();
        }
        return;
      }

      if (reducedMotion) {
        window.location.href = destination.href;
        return;
      }

      event.preventDefault();
      shell.classList.remove("page-loaded");
      shell.classList.add("page-leaving");
      if (bar) {
        bar.classList.remove("is-active");
        void bar.offsetWidth;
        bar.classList.add("is-active");
      }
      
      setTimeout(() => {
        window.location.href = destination.href;
      }, 220);
    });
  }

  function initCircuitMap() {
    const map = document.querySelector(".circuit-map");
    if (!map) return;
    const nodes = map.querySelectorAll(".node");
    const traces = map.querySelectorAll(".trace");
    
    nodes.forEach((node) => {
      node.style.cursor = "pointer";
      node.style.transformOrigin = `${node.getAttribute("cx")}px ${node.getAttribute("cy")}px`;
      node.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), fill 0.4s ease";
      node.style.outline = "none";
      
      node.addEventListener("mouseenter", () => {
        node.style.transform = "scale(1.25)";
        node.style.fill = "var(--green)";
        traces.forEach((t) => {
          t.style.strokeWidth = "3.5px";
          t.style.animationDuration = "2.2s";
        });
      });
      
      node.addEventListener("mouseleave", () => {
        node.style.transform = "scale(1)";
        node.style.fill = "";
        traces.forEach((t) => {
          t.style.strokeWidth = "";
          t.style.animationDuration = "";
        });
      });
    });
  }

  function initChatbot() {
    if (document.getElementById("vortiq-chatbot")) return;

    const chatbot = document.createElement("div");
    chatbot.id = "vortiq-chatbot";
    chatbot.className = "vortiq-chatbot";
    chatbot.innerHTML = `
      <button class="chatbot-toggle" type="button" aria-label="Open chat assistant">
        <svg class="chat-open-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        <svg class="chat-close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
      
      <div class="chatbot-window" style="display:none">
        <div class="chatbot-header">
          <img src="assets/images/logo.webp" alt="Vortiq logo" class="brand-logo" width="60" height="60">
          <div>
            <h4>Vortiq Assistant</h4>
            <span>Online • Engineering Agent</span>
          </div>
        </div>
        <div class="chatbot-messages" id="chatbot-messages"></div>
        <div class="chatbot-input-area">
          <input type="text" id="chatbot-input" placeholder="Type your response..." autocomplete="off">
          <button type="button" id="chatbot-send" aria-label="Send message">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(chatbot);

    const toggleBtn = chatbot.querySelector(".chatbot-toggle");
    const chatWindow = chatbot.querySelector(".chatbot-window");
    const openIcon = chatbot.querySelector(".chat-open-icon");
    const closeIcon = chatbot.querySelector(".chat-close-icon");
    const messagesArea = chatbot.querySelector("#chatbot-messages");
    const inputField = chatbot.querySelector("#chatbot-input");
    const sendBtn = chatbot.querySelector("#chatbot-send");

    let step = 0;
    let userData = { name: "", email: "", service: "", brief: "" };
    let initialized = false;

    toggleBtn.addEventListener("click", () => {
      const isVisible = chatWindow.style.display !== "none";
      if (isVisible) {
        chatWindow.style.display = "none";
        openIcon.style.display = "block";
        closeIcon.style.display = "none";
      } else {
        chatWindow.style.display = "flex";
        openIcon.style.display = "none";
        closeIcon.style.display = "block";
        inputField.focus();
        if (!initialized) {
          triggerBotGreeting();
          initialized = true;
        }
      }
    });

    function addMessage(sender, text, isHtml = false) {
      const msg = document.createElement("div");
      msg.className = `chat-msg ${sender}-msg`;
      if (isHtml) {
        msg.innerHTML = text;
      } else {
        msg.textContent = text;
      }
      messagesArea.appendChild(msg);
      messagesArea.scrollTop = messagesArea.scrollHeight;
    }

    function addTypingIndicator() {
      const ind = document.createElement("div");
      ind.className = "chat-msg bot-msg typing-indicator";
      ind.id = "chatbot-typing";
      ind.innerHTML = `<span></span><span></span><span></span>`;
      messagesArea.appendChild(ind);
      messagesArea.scrollTop = messagesArea.scrollHeight;
    }

    function removeTypingIndicator() {
      const ind = document.getElementById("chatbot-typing");
      if (ind) ind.remove();
    }

    function botSpeak(text, delay = 600, isHtml = false) {
      addTypingIndicator();
      setTimeout(() => {
        removeTypingIndicator();
        addMessage("bot", text, isHtml);
      }, delay);
    }

    function triggerBotGreeting() {
      botSpeak("Hello! Welcome to Vortiq Dynamics. I'm your virtual engineering assistant.");
      botSpeak("I can package your requirements and help notify our team. To get started, what is your name?", 1200);
    }

    function processInput() {
      const text = inputField.value.trim();
      if (!text) return;

      inputField.value = "";
      addMessage("user", text);

      if (text.toLowerCase() === "reset" || text.toLowerCase() === "start over") {
        step = 0;
        userData = { name: "", email: "", service: "", brief: "" };
        messagesArea.innerHTML = "";
        triggerBotGreeting();
        return;
      }

      if (step === 0) {
        userData.name = text;
        step = 1;
        botSpeak(`Nice to meet you, ${escapeHtml(userData.name)}! What is your email address so we can reach you?`);
      } else if (step === 1) {
        if (!text.includes("@") || text.length < 5) {
          botSpeak("That email address looks incomplete. Could you please double check and type a valid email?");
        } else {
          userData.email = text;
          step = 2;
          botSpeak("Got it. What type of service are you looking for? (e.g. IoT, Embedded, Cloud, Web Apps, Mobile, Edge AI)");
        }
      } else if (step === 2) {
        userData.service = text;
        step = 3;
        botSpeak("Excellent. Please briefly describe your project goals, technical requirements, or what you want to achieve.");
      } else if (step === 3) {
        userData.brief = text;
        step = 4;

        let summary = `Hello Vortiq Dynamics, I have an inquiry via Chat Assistant:\n\n`;
        summary += `*Name*: ${userData.name}\n`;
        summary += `*Email*: ${userData.email}\n`;
        summary += `*Service*: ${userData.service}\n`;
        summary += `*Brief*: ${userData.brief}\n`;

        const phone = data.site.phone.replaceAll(" ", "").replaceAll("+", "");
        const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(summary)}`;

        botSpeak("Perfect! I've compiled your requirements. Click the button below to send it directly to our team via WhatsApp:", 600);
        
        const btnHtml = `<a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn chatbot-submit-btn">Submit via WhatsApp</a><p style="font-size: 0.78rem; color: var(--muted); margin-top: 8px;">Type "reset" to start a new inquiry.</p>`;
        botSpeak(btnHtml, 1200, true);
      }
    }

    sendBtn.addEventListener("click", processInput);
    inputField.addEventListener("keydown", (e) => {
      if (e.key === "Enter") processInput();
    });
  }

  initSiteLoader();
  initChatbot();
  renderHeader();
  renderFooter();
  renderServices();
  renderFlow();
  renderRDLab();
  renderTechStack();
  renderCaseStudies();
  initGalleryCarousel();
  renderFaq();
  initAmbientMedia();
  initAdminSchema();
  initContactInfo();
  initLenis();
  initPageTransitions();
  initCircuitMap();
  initNav();
  initHeaderScroll();
  initTypewriter();
  initForms();
  initAmbientSections();
  initReveal();
})();
