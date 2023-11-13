export default function dropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle('ativo');
    outSideClick(this, () => {
      this.classList.remove('ativo');
    });
  }

  function outSideClick(element, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';

    if (!element.hasAttribute(outside)) {
      html.addEventListener('click', handleOutsideClick);
      element.setAttribute(outside, '');
    }

    function handleOutsideClick(event) {
      if (!element.contains(event.target)) {
        element.removeAttribute(outside, '');
        html.removeEventListener('click', handleOutsideClick);
        callback();
      }
    }
  }

  dropdownMenus.forEach((menu) => {
    ['click', 'touchstart'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
