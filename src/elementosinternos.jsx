import './estilosCalculadora.css'
import { BotonesMultiples } from './generadorBotones'
export function Pantalla(){
    return(
        <div className='centrar'>
            <div className="bordeinferior sombra">
            <input type="text" id='input'/>
               <BotonesMultiples/>
            </div>
           
        </div>
        
    )
}
