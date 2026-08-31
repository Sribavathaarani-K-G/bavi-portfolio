// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// Close mobile menu when a link is clicked
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

// Active nav link tracking
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section[id]");

const observerOptions = {
  threshold: 0.3,
  rootMargin: "-80px 0px -66% 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      const activeLink = document.querySelector(
        `a[href="#${entry.target.id}"]`,
      );

      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
}, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    const target = document.querySelector(href);

    if (href !== "#" && target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Close mobile menu on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    mobileMenu.classList.remove("active");
  }
});
