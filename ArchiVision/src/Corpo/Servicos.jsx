import linha from "../img/TracoFino.png"
import digitalizacao from "../img/digitalizacao.png"
import catalogo from "../img/catalogo.png"
import consultoria from "../img/consultoria.png"
import gestao from "../img/gestao.png"
import protecao from "../img/protecao.png"

export default function Servicos(){
    return(
        <div id="servicos">
            <div className="Servicos_Titulo">
                <img src={linha}/>
                <h1>NOSSOS SERVIÇOS</h1>
            </div>
            <div className="Servicos_OpcoesDivGERAL">

                <div>
                    <img src={digitalizacao}/>
                    <div>
                        <h1>Digitalização de Documentos</h1>
                        <p>A Archivision pode digitalizar documentos físicos, tornando-os acessíveis e pesquisáveis digitalmente.</p>
                    </div>
                </div>

                <div>
                    <img src={gestao}/>
                    <div>
                        <h1>Gerenciamento de Documentos Eletrônicos</h1>
                        <p>Oferecendo soluções para organizar, armazenar e recuperar documentos eletrônicos de forma eficiente.</p>
                    </div>
                </div>

                <div>
                    <img src={consultoria}/>
                    <div>
                        <h1>Consultoria em Arquivamento</h1>
                        <p>Prestação de consultoria especializada para ajudar empresas a desenvolver políticas e procedimentos de arquivamento eficazes.</p>
                    </div>
                </div>

                <div>
                    <img src={protecao}/>
                    <div>
                        <h1>Preservação de Documentos Históricos</h1>
                        <p>Oferecimento de serviços para preservar e proteger documentos históricos importantes para garantir sua longevidade.</p>
                    </div>
                </div>

                <div>
                    <img src={catalogo}/>
                    <div>
                        <h1>Indexação e Catalogação de Documentos</h1>
                        <p>Assistência na indexação e catalogação de documentos para facilitar a recuperação e o acesso às informações.</p>
                    </div>
                </div>

                <div>
                    <img src={gestao}/>
                    <div>
                        <h1>Treinamento em Gerenciamento de Documentos</h1>
                        <p>Fornecimento de treinamento e capacitação para equipes sobre as melhores práticas em gerenciamento de documentos e arquivamento.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}