// Efeito máquina de escrever
var tecnologias = [
  {tecnologia: 'HTML5', cor: 'orange'},
  {tecnologia: 'CSS3', cor: 'blue'},
  {tecnologia: 'Javascript', cor: 'yellow'},
  {tecnologia: 'NodeJS', cor: 'green'},
]
function escrevePalavra (elemento) {
  tecnologias.map(function (tecnologia, index) {
    setTimeout(function () {
      elemento.innerHTML = ''
      tecnologiaArray = tecnologia.tecnologia.split('')
        tecnologiaArray.forEach(function (letra, i) {
          setTimeout(function () {
            elemento.innerHTML += letra
            elemento.style.color = tecnologia.cor
          }, 400 * i)
        });
    }, 4000 * index)
  })
}
escrevePalavra(palavra)
setInterval(function () {
  escrevePalavra(palavra)
}, 16000);
// Efeito máquina de escrever

// ---------

// Função que altera o background
function alteraBG () {
  var background = document.querySelector('body')
  if(window.pageYOffset < 841){
    background.classList.remove('bg-2')
  }
  if(window.pageYOffset > 841){
    background.classList.add('bg-2')
  }
}
window.addEventListener('scroll', function () {
  console.log(window.pageYOffset)
  alteraBG()
})
