// fazendo a requisição utilizando API fetch
const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
    .then(resposta => {
        return resposta.json()
    })
}
// requisição POST para cadastrar novos clientes
const criaCliente = (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome,
            email
        })
    })
}
// req DELETE que recebe o id do cliente
const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method:'DELETE'
    })
}

// req GET com id para o preview na pagina de editar clientes
const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => {
        return resposta.json()
    })
}

// req PUT para a tela de editar recebe id nome e email e substitui no json
const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then( resposta => {
        return resposta.json()
    })
}

// exportando as funções do cliente-service
export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}
