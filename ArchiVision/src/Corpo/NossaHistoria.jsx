import linha from "../img/TracoFino.png"
import FotoNossaHisotoria from "../img/imagemDeNossaHistoria.png"

export default function NossaHistoria(){
    return(
        <div className="NossaHistoria">
            <div className="NossaHistoria_texto">
                <img src={linha}/>
                <h1>NOSSA HISTORIA</h1>
                <p>A Archivision foi fundada com o objetivo de fornecer soluções inovadoras para a digitalização e gerenciamento de documentos. Com anos de experiência no mercado, nos dedicamos a ajudar empresas a preservar e organizar suas informações de maneira eficiente e segura.</p>
                <p style={{ color: 'rgb(211, 183, 0)', fontSize: '15px' }}>Nosso compromisso é oferecer serviços de alta qualidade que atendam às necessidades específicas de cada cliente. Desde a consultoria em arquivamento até a digitalização de documentos históricos, nossa equipe de especialistas está pronta para oferecer o suporte necessário para garantir o sucesso dos seus projetos de gerenciamento de documentos.</p>
                <button>Saiba Mais</button>
            </div>
            <div className="NossaHistoria_img">
                <img src={FotoNossaHisotoria}/>
            </div>
        </div>
    )
}