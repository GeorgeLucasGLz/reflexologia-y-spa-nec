function scrollToElement(elementSelector, instance = 0) {

    const elements = document.querySelectorAll(elementSelector)

    if (elements.length > instance) {

        elements[instance].scrollIntoView({ behavior: 'smooth' })
    }
}
const navHome = document.getElementById('nav-home')
const navService = document.getElementById('nav-services')
const navLocation = document.getElementById('nav-location')

const toggleHome = document.getElementById('toggle-home')
const toggleService = document.querySelector('#toggle-services')
const toggleLocation = document.querySelector('#toggle-location')

navHome.addEventListener('click', (event) => {

    event.preventDefault()
    scrollToElement('main')
})

toggleHome.addEventListener('click', (event) => {
    event.preventDefault()
    closeMenuToggle()
    scrollToElement('main')
})

navService.addEventListener('click', (event) => {

    event.preventDefault()
    scrollToElement('#servicios')
})

toggleService.addEventListener('click', (event) => {
    event.preventDefault()
    closeMenuToggle()
    scrollToElement('#servicios')
})

navLocation.addEventListener('click', (event) => {
    event.preventDefault()
    scrollToElement('.mapa')
})

toggleLocation.addEventListener('click', (event) => {
    event.preventDefault()
    closeMenuToggle()
    scrollToElement('.mapa')
})


const btnToggleOn = document.querySelector('.btn-toggle-on')
const navToggleOn = document.querySelector('.nav-toggle-on')

function showMenuToggle() {
    btnToggleOn.style.opacity = '0'
    navToggleOn.style.display = 'flex'

    setTimeout(() => {
        navToggleOn.classList.add('active')
    }, 10)
}

function closeMenuToggle() {

    btnToggleOn.style.opacity = '1'
    navToggleOn.classList.remove('active')

    setTimeout(() => {
        navToggleOn.style.display = 'none'
    }, 300)
}



// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelectorAll('nav ul li a').forEach(anchor => {
//         anchor.addEventListener('click', function(e) {
//             e.preventDefault();
//             const targetId = this.getAttribute('href').substring(1);
//             const targetSection = document.getElementById(targetId);
//             targetSection.scrollIntoView({ behavior: 'smooth' });
//         });
//     });

//     // Scroll suave con las flechas del teclado y el mouse wheel
//     let isScrolling = false;

//     window.addEventListener('wheel', event => {
//         if (isScrolling) return;
//         isScrolling = true;
//         setTimeout(() => isScrolling = false, 1000);

//         if (event.deltaY > 0) {
//             scrollToNextSection();
//         } else {
//             scrollToPreviousSection();
//         }
//     });

//     window.addEventListener('keydown', event => {
//         if (isScrolling) return;
//         isScrolling = true;
//         setTimeout(() => isScrolling = false, 1000);

//         if (event.key === 'ArrowDown') {
//             scrollToNextSection();
//         } else if (event.key === 'ArrowUp') {
//             scrollToPreviousSection();
//         }
//     });

//     function scrollToNextSection() {
//         const sections = document.querySelectorAll('main section');
//         const currentSection = getCurrentSection(sections);
//         const nextSection = currentSection.nextElementSibling;

//         if (nextSection) {
//             nextSection.scrollIntoView({ behavior: 'smooth' });
//         }
//     }

//     function scrollToPreviousSection() {
//         const sections = document.querySelectorAll('main section');
//         const currentSection = getCurrentSection(sections);
//         const prevSection = currentSection.previousElementSibling;

//         if (prevSection) {
//             prevSection.scrollIntoView({ behavior: 'smooth' });
//         }
//     }

//     function getCurrentSection(sections) {
//         const scrollY = window.pageYOffset;
//         let currentSection = sections[0];

//         for (const section of sections) {
//             const sectionTop = section.offsetTop;
//             if (scrollY >= sectionTop - section.clientHeight / 2) {
//                 currentSection = section;
//             }
//         }
//         return currentSection;
//     }
// });


