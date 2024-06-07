import img1 from "../img/1.jpg"
import img2 from "../img/2.jpg"
import img3 from "../img/3.jpg"
import img4 from "../img/4.jpg"
import img5 from "../img/5.jpg"
import img6 from "../img/6.jpg"
import img7 from "../img/7.jpg"
import img8 from "../img/8.jpg"

export default function ImagensFrases(){
    return(
        <div className="ImagensFrases">
            <img src={img1}/>
            <img src={img2}/>
            <img src={img3}/>
            <img src={img4}/>
            <img src={img5}/>
            <img src={img6}/>
            <img src={img7}/>
            <img src={img8}/>
        </div>
    )
}