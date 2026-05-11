import "./TermosDeUso.css"

function TermosDeUso (props) {

    return (

        <>
            <div className="overlay">
                <div className="modal">

                    <div className="cima">
                        <div className="titulo">TERMOS DE USO</div>
                        <button type="button" className="fechar" onClick={props.fechar}>X</button>
                    </div>

                    <div>

                        <div className="topico">Privacidade</div>
                        <div className="conteudo">1. Proteção dos seus dados de contato: seus dados (nome, e-mail etc.)
                        são sigilosos. Não serão compartilhados nem divulgados — apenas os administradores do site têm
                        acesso a eles.
                        </div>

                        <div className="topico">Consentimento</div>
                        <div className="conteudo">2. Fotos com outras pessoas: ao enviar uma foto com o rosto de outras
                        pessoas, você declara que tem o consentimento de todas elas. A responsabilidade por essa autorização
                        é sua.
                        </div>

                        <div className="topico">Conteúdo</div>
                        <div className="conteudo">3. Conteúdo adequado para todas as idades: material com conteúdo adulto,
                        violento ou ofensivo não será publicado. Apenas conteúdo adequado para o público geral é permitido.
                        </div>
                        <div className="conteudo">4. Respeito à comunidade: não é permitido publicar discurso de ódio,
                        bullying ou qualquer forma de intolerância. Conteúdos assim serão removidos e a conta poderá
                        ser suspensa.
                        </div>
                        <div className="conteudo">5. Licença de uso do conteúdo: ao publicar, você autoriza o site a exibir
                        seu conteúdo na plataforma. Você continua sendo o proprietário. O site não usará suas publicações
                        para fins comerciais.
                        </div>
                        <div className="conteudo">6. Remoção de conteúdo: os administradores podem remover qualquer conteúdo
                        que viole estes termos. Você também pode denunciar publicações inadequadas diretamente na plataforma.
                        </div>
                        <div className="conteudo">7. Atualizações nestes termos: estes termos podem ser atualizados. Você
                        será avisado por e-mail ou por um aviso na plataforma. Continuar usando o site implica aceitar as
                        mudanças.
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default TermosDeUso;