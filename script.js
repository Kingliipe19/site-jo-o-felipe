// ————————————————
// Alternar Tema (Dark / Light)
// ————————————————

const toggleThemeBtn = document.getElementById("toggle-theme");

// Verifica tema salvo no localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.classList.add(savedTheme);
}

toggleThemeBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("light-theme");
  
  const isLight = document.documentElement.classList.contains("light-theme");
  localStorage.setItem("theme", isLight ? "light-theme" : "");
});


// ————————————————
// Scroll Suave para links de navegação
// ————————————————

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    // scroll suave
    document.querySelector(href).scrollIntoView({
      behavior: "smooth"
    });
  });
});


// ————————————————
// Menu Responsivo (hamburger)
// ————————————————

const nav = document.querySelector("nav .nav-links");
const hamburgerBtn = document.createElement("button");

hamburgerBtn.innerText = "☰";
hamburgerBtn.id = "hamburger-menu";
hamburgerBtn.style.cssText = `
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  display: none;
`;

document.querySelector("nav").prepend(hamburgerBtn);

hamburgerBtn.addEventListener("click", () => {
  nav.classList.toggle("show-menu");
});

// Exibe o botão de hamburger em telas pequenas
window.addEventListener("resize", () => {
  if (window.innerWidth < 800) {
    hamburgerBtn.style.display = "block";
  } else {
    hamburgerBtn.style.display = "none";
    nav.classList.remove("show-menu");
  }
});

// Inicializa estado baseado no tamanho da tela
if (window.innerWidth < 800) {
  hamburgerBtn.style.display = "block";
}