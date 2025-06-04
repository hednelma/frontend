const filtrarClientePorNome = (nome, list, setResult) => {
    const filtrar_cliente = list.filter(r1 => r1.nome.toLowerCase().includes(nome.toLowerCase()))
    setResult(filtrar_cliente)
}

export default filtrarClientePorNome