const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')
const itens = JSON.parse(localStorage.getItem('itens')) || []

itens.forEach(elemento => {
  console.log(elemento.nome, elemento.quantidade)
})

form.addEventListener('submit', evento => {
  evento.preventDefault()

  const nome = evento.target.elements['nome']
  const quantidade = evento.target.elements['quantidade']

  const itemAtual = {
    nome: nome.value,
    quantidade: quantidade.value
  }

  criaElemento(itemAtual)

  itens.push(itemAtual)

  localStorage.setItem('itens', JSON.stringify(itens))
  nome.value = ''
  quantidade.value = ''
})

function criaElemento(nome, quantidade) {
  const novoItem = document.createElement('li')
  novoItem.classList.add('item')

  const numeroItem = document.createElement('strong')
  numeroItem.innerHTML = quantidade

  novoItem.appendChild(numeroItem)
  novoItem.innerHTML += nome

  lista.appendChild(novoItem)
}
