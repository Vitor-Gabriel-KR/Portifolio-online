const caixas = document.querySelectorAll('.caixa');

for (let i = 0; i < caixas.length; i++) {
  let cabecalho = caixas[i].querySelector('.cabecalho');
  cabecalho.addEventListener('click', function() {
    const caixaAtual = this.parentElement;
    
    if (!caixaAtual.classList.contains('expandido')) {
      caixaAtual.classList.add('expandido');
      
      for (let j = 0; j < caixas.length; j++) {
        if (caixas[j] !== caixaAtual) {
          caixas[j].classList.remove('expandido');
        }
      }
    } else {
      caixaAtual.classList.remove('expandido');
    }
  });
}