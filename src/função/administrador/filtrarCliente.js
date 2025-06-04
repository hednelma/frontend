const filtrarCliente = (role, list, setResult) => {
    const filtrar_cliente = list.filter(r1 => r1.role == role)
    setResult(filtrar_cliente)
}

export default filtrarCliente