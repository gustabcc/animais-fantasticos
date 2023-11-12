export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  sections[0].classList.add('ativo');

  function animaScroll() {
    sections.forEach((section) => {
      const distancia = section.offsetTop;
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < 300) {
        section.classList.add('ativo');
      }
    });
  }

  window.addEventListener('scroll', animaScroll);
}
