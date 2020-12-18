const colorPicker = document.querySelector('#changeColor');
let root = document.documentElement

colorPicker.addEventListener('change', ()=> {
  root.style.setProperty('--secondary-bg-color', colorPicker.value);
})