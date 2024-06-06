import Fotoicon from "../img/IconARCHIVISION.png"

export default function PrimeiraApresentacao(){
    return(
        <div className="PrimeiraApresentacao">
            <div className="PrimeiraApresentacao_BarraSuperior">
                <div className="PrimeiraApresentacao_BarraSuperior_Links">
                    <div className="PrimeiraApresentacao_BarraSuperior_LogoNome">
                        <img src={Fotoicon}/>
                        <h1>ARCHIVISION</h1>
                    </div>
                    <div>
                        <ul>
                            <li><a style={{ color: 'rgb(211, 183, 0)' }} href="#">HOME</a></li>
                            <li><a href="#servicos">SERVIÇOS</a></li>
                            <li><a href="#">PROJETOS</a></li>
                            <li><a href="#">BLOG</a></li>
                            <li><a href="#">CONTATO</a></li>
                        </ul>
                    </div>
                </div>
                <div className="PrimeiraApresentacao_BarraSuperior_pesquisa">
                    <i class="fas fa-search"></i>
                </div>
            </div>
            <div className="PrimeiraApresentacao_TextoCentral">
                <h1>ARCHIVISION</h1>
                <p>Bem-vindo ao nosso site! Aqui você encontrará informações sobre nossa empresa e como entrar em contato conosco.</p>
                <button>Entre em contato agora!</button>
            </div>
        </div>
    )
}