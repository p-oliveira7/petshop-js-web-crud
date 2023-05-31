const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
    .then(resposta => {
        return resposta.json()
    })
}
// fazendo a requisição utilizando API fetch
export const clienteService = {
    listaClientes
}
