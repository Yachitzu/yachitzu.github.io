/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
    }

    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active');
        });

        target.classList.add('qualification__active');

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active');
        })
        tab.classList.add('qualification__active');
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header');
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);


/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


//Cambio de lenguaje 
const languageToggle = document.getElementById("language-toggle");
const languageMenu = document.getElementById("language-menu");

// Traducciones básicas
const translations = {
  en: { title: "Hi, I'm Estefanía", description: "Back-End developer",
    about:"Software engineering student, looking for some challenges",
    contac:"Contact me",
    slide:"slide",
    home:"Home",
    sobre:"About me",
    skills:"Skills",
    portfolio:"Portfolio",
    profile:"My profile",
    des:"Code lover, backend enthusiast and amateur vulnerability detective. Constantly exploring the tech world and always ready for a new challenge. 💻",
    git:"Repositories on Github",
    cou:"Courses taken",
    cv:"Take a look on my CV",
    lvl:"My technical level",
    m3:"More than 3 years",
    m1:"More than 1 year",
    m2:"More than 2 years",
    pv:"Predictive models",
    dp:"Data preprocessing",
    nn:"Neural networks",
    ia:"Artificial Intelligence",
    db:"Databases",
    tl:"My technical level",
    for:"Formation",
    jor:"My personal journey",
    pro:"Professional",
    edu:"Education",
    soft:"Software engineering",
    f1:"2020 - current",
    f2:"july/2024 - october/2024",
    ms:"See more",
    proy:"Projects",
    d1:"Build with PHP, Js, MySQL",
    d2:"Movil App build with Java",
    d3:"Integral system for greenhouse monitoring",
    d4:"API REST build with Node.js",
    mail:"Mail me",
    loc:"Location",
    rr:"Estefanía Mora - All rights reserved"


  },
  es: { title: "Hola, soy Estefanía", description: "Desarrolladora Back-End",
    about:"Estudiante de ingenieria en software en busca de desafios",
    contac:"Contactame",
    slide:"desliza",
    home:"Inicio",
    sobre:"Acerca de mi",
    skills:"Skills",
    portfolio:"Portafolio",
    profile:"Mi perfil",
    des:"Amante del código, aficionada al backend y detective aficionada de vulnerabilidades. Explorando constantemente el mundo tecnológico y siempre lista para un nuevo desafío. 💻 ",
    git:"Repositorios en Github",
    cou:"Cursos completados",
    cv:"Echale un vistazo a mi CV",
    lvl:"Mi nivel técnico",
    m3:"Más de 3 años",
    m1:"Más de 1 años",
    m2:"Más de 2 años",
    pv:"Modelos predictivos",
    dp:"Preprocesamiento de datos",
    nn:"Redes neuronales",
    ia:"Inteligencia Artificial",
    db:"Bases de datos",
    tl:"Mi nivel tecnico",
    for:"Formación",
    jor:"Mi viaje personal",
    pro:"Profesional",
    edu:"Educación",
    soft:"Ingeniería en Software",
    f1:"2020 - actualmente",
    f2:"julio/2024 - octubre/2024",
    ms:"Ver más",
    proy:"Proyectos",
    d1:"Desarollada con PHP, Js, MySQL",
    d2:"App móvil desarrollada en Java",
    d3:"Sistema integral para el monitoreo de invernaderos",
    d4:"API REST construida con Node.js",
    mail:"Envíame un mail",
    loc:"Localización",
    rr:"Estefanía Mora - Todos los derechos reservados"
    

},
};

let currentLang = "en";

// Ocultar menú al cargar (por seguridad)
window.addEventListener("DOMContentLoaded", () => {
  languageMenu.classList.add("hidden");
});

// Cerrar el menú si se redimensiona la ventana
window.addEventListener("resize", () => {
  languageMenu.classList.add("hidden");
});


// Mostrar/ocultar menú
languageToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // No se cierra al hacer click dentro
  languageMenu.classList.toggle("hidden");
});

// Seleccionar idioma y cerrar menú
document.querySelectorAll("#language-menu li").forEach(item => {
  item.addEventListener("click", () => {
    const selectedLang = item.getAttribute("data-lang");
    currentLang = selectedLang;
    translatePage(currentLang);
    languageMenu.classList.add("hidden");
  });
});

// Cerrar si haces clic fuera
document.addEventListener("click", (e) => {
  if (!languageToggle.contains(e.target) && !languageMenu.contains(e.target)) {
    languageMenu.classList.add("hidden");
  }
});

// Función de traducción
function translatePage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
}


