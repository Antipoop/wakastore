function openMenu() {
  document.getElementById('menu').className = 'menu2';
  // document.getElementById('mover').className = 'moverActiveLeft'
  document.getElementById('logoWhite').className = 'logoWhiteActiveLeft'
  document.getElementById('logoBrown').className = 'logoBrownActiveLeft'
  document.getElementById('btn2').className = 'button2Active'
  document.getElementById('ee').className = 'ee2' 
}
function closeMenu() {
  // document.getElementById('mover').className = 'moverNotActive'
  document.getElementById('btn2').className = 'button2'
  document.getElementById('menu').className = 'moveMenuLeft'
  document.getElementById('logoWhite').className = 'logoWhiteActiveRight'
  document.getElementById('logoBrown').className = 'logoBrownActiveRight'
  document.getElementById('ee').className = 'ee' 
}
function openBuy() {
  document.getElementById('containerNotActive').id = 'tg'
}
function closeBuy() {
  document.getElementById('tg').id = 'containerNotActive'
}