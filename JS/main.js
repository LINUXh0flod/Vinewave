var menuLogo = window.document.getElementById('burguer') 
var menuItens = window.document.getElementById('headei')
var s1 = window.document.getElementById('sec1')
function clicar() {
if (menuItens.style.display == 'block') {
  menuItens.style.display = 'none'
} else {
  menuItens.style.display = 'block'
}
s1.style.marginTop = '220px'
}


