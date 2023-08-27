import './estilosCalculadora.css'
export function ContenedorCalculadora(){//establecemos la funcion y los valores que va a regresar
    return(
        <div className='contenedorExterior'>
            <div>
                <input id='salida' type="text" />
            </div>
        </div>
    )

}
export function contenido(){
    return (
        <div>
            <ContenedorCalculadora/>
            <p>hola</p>
        </div>
    )
}