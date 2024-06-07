import NossaHistoria from "./NossaHistoria"
import Servicos from "./Servicos"
import ImagensFrases from "./ImagensFrases"
import Noticias from "./Noticias"

export default function CorpoMain(){
    return(
        <div>
            <Servicos />
            <NossaHistoria/>
            <ImagensFrases/>
            <Noticias/>
        </div>
    )
}