function TelaInicial({ aoJogar }) {
    return (
        <div className="tela tela-inicial">
            <div className="card-inicial">
                <h1 className="titulo-inicial">Jornada do Saber</h1>
                <p className="texto-inicial">Você está pronto?</p>
                <button className="botao-principal" onClick={aoJogar}>JOGAR</button>
            </div>
        </div>
    )
}

export default TelaInicial