window.addEventListener('DOMContentLoaded', (event) => {

  // Toggle mobile menu collapse
  document.querySelector('.mobile-menu-btn').addEventListener('click', event => {
    let mainNavGroup = document.querySelector('.main-nav-group');
    let accountNavGroup = document.querySelector('.account-nav-group');

    mainNavGroup.classList.toggle('is-active');
    accountNavGroup.classList.toggle('is-active');
  });

  //Toggle dropdown menu
  document.querySelectorAll('.menu-dropdown').forEach((item) => {
    item.addEventListener('click', event => {
      event.preventDefault();
  
      let menuItem = event.target.parentElement;
      let submenu = menuItem.querySelector('.submenu-list');
  
      event.target.classList.toggle('is-active');
      submenu.classList.toggle('is-active');
    });
  })

  // Toggle accordion collapse
  document.querySelectorAll('.accordion-btn').forEach((item) => {
    item.addEventListener('click', event => {
      let accordionItem = event.target.parentElement;
      let accordionCollapse = accordionItem.querySelector('.accordion-collapse');
      let accordionContent = accordionItem.querySelector('.accordion-content');

      document.querySelectorAll('.accordion-item').forEach((item) => {
        if (item == accordionItem && !accordionItem.classList.contains('is-active')) {
          accordionItem.classList.add('is-active');
          accordionCollapse.style.height = accordionContent.offsetHeight + 'px';
        } else {
          item.classList.remove('is-active');
          item.querySelector('.accordion-collapse').style.height = '0px';
        }
      });
    });
  });
});