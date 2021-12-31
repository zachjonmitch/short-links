window.addEventListener('DOMContentLoaded', (event) => {

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