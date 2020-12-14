const logoContainer = document.querySelector('.container__logo');
let bgColor = document.querySelector('#logoBgColor');

logoContainer.style.display = 'inline-block';

bgColor.addEventListener('change', () => {
  let logoColor = bgColor.value;
  logoContainer.style.background = logoColor;
});
