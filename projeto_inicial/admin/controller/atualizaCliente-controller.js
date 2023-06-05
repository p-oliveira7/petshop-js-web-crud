import { clienteService } from "../service/cliente-service.js"

// tela de editar cliente pego a url e o id do cleinte nela
const pegaURL = new URL(window.location)

const id = pegaURL.searchParams.get('id')

// querySelector para os dois campos na tela de edição
const inputNome = document.querySelector('[data-nome]')
const inputEmail = document.querySelector('[data-email]')

// passo o id que foi pego antes como argumento na função detalhaCliente importada fazendo a req GET do id e passo os dados de nome e email para os campos fazendo o preview das informações
clienteService.detalhaCliente(id)
.then( dados => {
    inputNome.value = dados.nome
    inputEmail.value = dados.email
})

// percorro o DOM para encontrar o form
const formulario = document.querySelector('[data-form]')
// adiciono um listener para o botão de editar cliente que vai chamar a função atualiza passando o input nome e email depos redirecionando para a tela de edicao concluida
formulario.addEventListener('submit', (evento)=> {
    evento.preventDefault()

    clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
    .then(()=> {
        window.location.href = "../telas/edicao_concluida.html"
    })
})