const headerEl = document.querySelector('header')
console.log(headerEl)
window.addEventListener('scroll', () => {
  if (window.scrollY > 81) {
     headerEl.classList.add('active');
  } else {
    headerEl.classList.remove('active')
  };
})

