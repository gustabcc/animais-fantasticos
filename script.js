function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  if (tabMenu.lenght && tabContent) {
    tabContent[0].classList.add('ativo');
  }

  function activeTab(index) {
    tabContent.forEach((content) => {
      content.classList.remove('ativo');
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add('ativo', direcao);
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index);
    });
  });
}

initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(
    '[data-anima="accordion"] dt',
  );

  if (accordionList) {
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling.classList.add('ativo');
    function activeAccordion() {
      this.classList.toggle('ativo');
      this.nextElementSibling.classList.toggle('ativo');
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}

initAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]',
  );

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

initScrollSuave();

function initAnimacaoScroll() {
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

initAnimacaoScroll();
