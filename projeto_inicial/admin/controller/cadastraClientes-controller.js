import { clienteService } from "../service/cliente-service.js"

// percorrendo o DOM cadastra_cliente.html
const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const nome = evento.target.querySelector('[data-nome]').value
    const email = evento.target.querySelector('[data-email]').value
    //retorno o nome e email que foram buscados como argumentos da função criaclientes e redireciono para tela de cadastro concluido
    clienteService.criaCliente(nome, email)
    .then(()=> {
        window.location.href = '../telas/cadastro_concluido.html'
    })
})