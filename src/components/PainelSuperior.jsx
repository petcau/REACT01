function PainelSuperior({ nivel, fase, pontos }) {
    return (
        <div className="painel-superior">
            <div className="info-grupo">
                <span className="label">Nível</span>
                <span className="valor">{nivel}</span>
            </div>

            <div className="valor-fase">
                <span className="valor-fase">{fase}</span>

            </div>
            <div className="info-grupo">
                <span className="label">Pontos</span>
                <span className="valor">{pontos}</span>

            </div>



        </div>

    )
}
export default PainelSuperior