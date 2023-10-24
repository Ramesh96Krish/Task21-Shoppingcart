import './copyright.css'
import CoprRight from "../../assests/copyright.png"

const Copright = ()=>{


    return(
        <div className='copyright-container'>
            <h4>Copyright <img className='copyright-image' src={CoprRight} alt='copyRight'/> Your website 2023</h4>
        </div>
    )
}
 export default Copright;