import arquiteturaSustentavel from "../img/arquiteturaSustentavel.jpeg"
import cidadesInteligentes from "../img/cidadesInteligentes.jpg"
import tecnologiasNoEspaco from "../img/tecnologiasNoEspaco.jpeg"
import linha from "../img/TracoFino.png"

export default function Noticias(){
    return(
        <div className="Noticias">
            <div className="Noticias_Titulo">
                <img src={linha}/>
                <h1>NOTICIAS RECENTES</h1>
            </div>
            <div className="Noticias_DivGeral">
                <div>
                    <img src={arquiteturaSustentavel}/>
                    <h1>Arquitetura Sustentável em 2024</h1>
                    <p>Em 2024, a arquitetura sustentável está em alta, com novos materiais ecológicos e tecnologias de energia renovável se tornando padrão. Edifícios eficientes energeticamente e com vegetação integrada estão transformando as cidades em ambientes mais verdes e saudáveis.</p>
                </div>
                <div>
                    <img src={tecnologiasNoEspaco}/>
                    <h1>Tecnologia nos Espaços de Trabalho</h1>
                    <p>A tecnologia está revolucionando os espaços de trabalho. Ferramentas de organização inteligente e sistemas de armazenamento automatizado estão aumentando a produtividade. Escritórios modernos agora utilizam IoT para criar ambientes mais confortáveis e eficientes.</p>
                </div>
                <div>
                    <img src={cidadesInteligentes}/>
                    <h1>Cidades Inteligentes: O Futuro</h1>
                    <p>Cidades inteligentes estão emergindo com tecnologias avançadas para melhorar a organização urbana. Sistemas de transporte inteligente, gestão eficiente de resíduos e redes elétricas avançadas estão tornando as cidades mais eficientes e sustentáveis, beneficiando todos os cidadãos.</p>
                </div>
            </div>
            <div className="Noticias_btn">
                <button>MAIS NOTÍCIAS</button>
            </div>
        </div>
    )
}