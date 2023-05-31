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
export const clienteService = {
    listaClientes,
    criaCliente
}
