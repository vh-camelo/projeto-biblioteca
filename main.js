import { livro } from './livro.js'
import { revista } from './revista.js'
import { criarBuscador } from './buscador.js'


const listaPai = document.querySelector('#lista-acervo')
const botao = document.querySelector('#btn-listar')
const listaDisponiveis = document.querySelector('#lista-disponiveis')
const botaoDisponivel = document.querySelector('#btn-listar-disponiveis')
const botaoProcurar = document.querySelector('#btn-procurar')
const nomeEnviado = document.querySelector('#input')
const listaProcura = document.querySelector('#lista-de-procura')
const botaoNovoItem = document.querySelector('#adicionar')
const novoItem = document.querySelector('#input-item')
const tipoDeItem = document.querySelector('#item-selecionado')
const itemAutorEdicao = document.querySelector('#input-autor')



botao.addEventListener("click", criarItem)
botaoDisponivel.addEventListener("click", listarDisponiveis)
botaoProcurar.addEventListener("click", buscarLivro)
botaoNovoItem.addEventListener("click", adicionarItem)




let acervos = []

function adicionarItem() {

    const itemNovo = novoItem.value;
    const AutorEdicao = itemAutorEdicao.value;
    if (tipoDeItem.value === "livros") {
        acervos.push(new livro(`${itemNovo}`, `${AutorEdicao}`))
    }
    if (tipoDeItem.value === "revistas") {
        acervos.push(new revista(`${itemNovo}`, `${AutorEdicao}`))
    }
}


function listarDisponiveis() {
    acervos.forEach(elemento => {
        if (elemento.disponivel === true) {
            const novoItemDisponivel = document.createElement('li')
            novoItemDisponivel.textContent = elemento.descricao()
            listaDisponiveis.appendChild(novoItemDisponivel)
        }
    });

}


function buscarLivro(){
    const nomeLivro = nomeEnviado.value.toLowerCase()
    const emprestaDevolve = document.querySelector('#empresta-devolve')

    if(emprestaDevolve.value === "emprestar"){
        for (const itemprocurado of acervos){
        if (itemprocurado.titulo.toLowerCase() === nomeLivro && itemprocurado.disponivel === true) {
            const novoItem = document.createElement('li')
            const botao = document.createElement('button')
            novoItem.textContent = itemprocurado.descricao()
            listaProcura.appendChild(novoItem)
            novoItem.appendChild(botao)
            botao.textContent = "Pegar livro emprestado"
            botao.addEventListener("click", () => {
                itemprocurado.emprestar()
                novoItem.textContent = itemprocurado.descricao()
            })
        }
    }}else{
        for (const itemprocurado of acervos){
        if (itemprocurado.titulo.toLowerCase() === nomeLivro && itemprocurado.disponivel === false) {
            const novoItem = document.createElement('li')
            const botao = document.createElement('button')
            novoItem.textContent = itemprocurado.descricao()
            listaProcura.appendChild(novoItem)
            novoItem.appendChild(botao)
            botao.textContent = "Devolver livro"
            botao.addEventListener("click", () => {
                itemprocurado.devolver()
                novoItem.textContent = itemprocurado.descricao()})

    }}}
}



function criarItem(){
    acervos.forEach(elemento => {
        const novoItem = document.createElement('li')
        novoItem.textContent = elemento.descricao()
        listaPai.appendChild(novoItem)

    });
}

