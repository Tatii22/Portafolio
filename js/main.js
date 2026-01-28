// ================== SKILLS ==================
const TECH = ["HTML & CSS", "Java", "Python", "MySQL", "Git & GitHub", "Scrum"];

const SOFT = [
  "Comunicación",
  "Trabajo en equipo",
  "Proactividad",
  "Adaptabilidad",
  "Responsabilidad",
  "Aprendizaje continuo",
];

// ================== PROJECTS ==================
const PROJECTS = [
  {
    title: "Red Social Gamer",
    desc: "Aplicación en consola desarrollada en Python donde implementé registro de usuarios, publicaciones, comentarios y sistema de likes, trabajando bajo metodología Scrum.",
    tech: ["Python", "Scrum"],
    url: "https://github.com/Tatii22/Red-Social-Gamer.git",
  },
  {
    title: "Base de Datos E-Commerce",
    desc: "Diseño y desarrollo de una base de datos para un sistema de comercio electrónico, incluyendo relaciones y consultas SQL.",
    tech: ["MySQL", "SQL"],
    url: "https://github.com/Tatii22/Proyecto-de-Base-de-Datos-para-un-E-commerce.git",
  },
  {
    title: "Landing Page - Maquetado",
    desc: "Maquetado de una landing page responsive utilizando HTML y CSS, aplicando buenas prácticas de diseño.",
    tech: ["HTML", "CSS"],
    url: "https://github.com/Tatii22/Car-Dealer-App-UI-Design.git",
  },
  {
    title: "FakeStore - Proyecto JS",
    desc: "Aplicación web que consume FakeStoreAPI usando fetch y gestiona un carrito de compras con localStorage.",
    tech: ["JavaScript", "HTML", "CSS"],
    url: "https://github.com/Tatii22/Proyecto-Js.git",
  },
  {
    title: "Sistema de Cobros de Cartera CrediYa",
    desc: "Sistema de consola en Java para gestionar empleados, clientes, préstamos y pagos. Implementa POO, persistencia con MySQL y buenas prácticas de diseño modular.",
    tech: ["Java", "MySQL", "JDBC", "POO", "Git"],
    url: "https://github.com/Tatii22/PROYECTO-CREDIYA", 
  },
];

// ================== RENDER SKILLS ==================
function renderChips(id, list) {
  const container = document.getElementById(id);
  list.forEach((item) => {
    const chip = document.createElement("div");
    chip.className = "chip";
    chip.textContent = item;
    container.appendChild(chip);
  });
}

renderChips("skills-chips", TECH);
renderChips("soft-chips", SOFT);

// ================== CAROUSEL INFINITO (REAL) ==================
const cards = document.getElementById("cards");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let index = 0;
let cardWidth = 0;
let isTransitioning = false;

// Crear card
function createCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.desc}</p>
    <div class="tags">
      ${project.tech.map((t) => `<span class="tag">${t}</span>`).join("")}
    </div>
    <div class="project-actions">
      <a class="ghost" href="${project.url}" target="_blank" rel="noopener">
        Ver código
      </a>
    </div>
  `;
  return card;
}

// Render con clones
const allProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS];

allProjects.forEach((p) => cards.appendChild(createCard(p)));

function updateWidth() {
  cardWidth = cards.children[0].offsetWidth + 18;
  cards.style.transform = `translateX(${-cardWidth * index}px)`;
}

window.addEventListener("resize", updateWidth);

// Movimiento
function moveTo(newIndex) {
  if (isTransitioning) return;

  isTransitioning = true;
  index = newIndex;

  cards.style.transition = "transform 0.4s ease";
  cards.style.transform = `translateX(${-cardWidth * index}px)`;
}

// Botones
const STEP = 3;

next.addEventListener("click", () => moveTo(index + STEP));
prev.addEventListener("click", () => moveTo(index - STEP));

// Loop infinito
cards.addEventListener("transitionend", () => {
  const total = PROJECTS.length;

  if (index >= total * 2) {
    cards.style.transition = "none";
    index = total;
    cards.style.transform = `translateX(${-cardWidth * index}px)`;
  }

  if (index < total) {
    cards.style.transition = "none";
    index = total;
    cards.style.transform = `translateX(${-cardWidth * index}px)`;
  }

  isTransitioning = false;
});

// INIT
window.addEventListener("load", () => {
  index = PROJECTS.length;
  cardWidth = cards.children[0].offsetWidth + 18;
  cards.style.transform = `translateX(${-cardWidth * index}px)`;
});
// ================== FADE-UP ANIMATION ==================
window.addEventListener("load", () => {
  document.querySelectorAll(".fade-up").forEach((el) => {
    el.classList.add("in");
  });
});
// Animación de fade-up al hacer scroll
const fadeElements = document.querySelectorAll(".fade-up");

function checkFade() {
  const triggerBottom = window.innerHeight * 0.85;
  fadeElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.classList.add("in");
    }
  });
}

// Formulario de contacto
window.addEventListener("scroll", checkFade);
window.addEventListener("load", checkFade);

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const submitBtn = form.querySelector("button[type='submit']");
  submitBtn.disabled = true;
  submitBtn.textContent = "Enviando...";

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      alert("¡Mensaje enviado correctamente!");
      form.reset();
    } else {
      alert("Hubo un error. Por favor intenta de nuevo.");
    }
  } catch (error) {
    alert("Error al enviar. Revisa tu conexión.");
  }

  submitBtn.disabled = false;
  submitBtn.textContent = "Enviar mensaje";
});
