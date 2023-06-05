import { clienteService } from "../service/cliente-service.js"

(async ()=> {
// tela de editar cliente pego a url e o id do cleinte nela
const pegaURL = new URL(window.location)

const id = pegaURL.searchParams.get('id')

// querySelector para os dois campos na tela de edição
const inputNome = document.querySelector('[data-nome]')
const inputEmail = document.querySelector('[data-email]')

// passo o id que foi pego antes como argumento na função detalhaCliente importada fazendo a req GET do id epega na API os dados de nome e email para os campos fazendo o preview das informações
const dados = await clienteService.detalhaCliente(id)
        inputNome.value = dados.nome
        inputEmail.value = dados.email
// percorro o DOM para encontrar o form
const formulario = document.querySelector('[data-form]')
// adiciono um listener para o botão de editar cliente que vai chamar a função atualiza passando o input nome e email apara a API, depois redirecionando para a tela de edicao concluida
formulario.addEventListener('submit', async (evento)=> {
    evento.preventDefault()

    await clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
    window.location.href = "../telas/edicao_concluida.html"
})
})()
