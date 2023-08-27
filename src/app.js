document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.boton');
    const salida = document.querySelector('#input');
    const asignaciones =['=']
    eventos();
    
    function eventos() {
        
        botones.forEach(boton => {
            if(boton.textContent==='='){
                boton.addEventListener('click', igualacion);

            }else if(boton.textContent==='C'){
                   
                boton.addEventListener('click', borrar);
            }else{
                boton.addEventListener('click', extraccion);
            }
            
        });
    }
    function borrar(){
        salida.value=''
    }
    function igualacion(){
        const operacion = eval(salida.value)
        salida.value=operacion

    }

    function extraccion(event) {
        
        if(event.target.textContent!=='M+'
        && event.target.textContent!=='M-'
        && event.target.textContent!=='Mc'
        && event.target.textContent!=='=') {
             salida.value+=event.target.textContent;
        }
       
    }
});
