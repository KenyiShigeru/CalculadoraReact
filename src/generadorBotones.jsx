import React from 'react';
import './estilosCalculadora.css';

const auxiliares = ['M+', 'M-', 'Mc', '/', '*', '-', '+', '=', '.'];

export function BotonesMultiples() {
    const botones = [];
    
    const valorEspecial = {
        7: '1',
        6: '2',
        5: '3',
        11: '4',
        10: '5',
        9: '6',
        15: '7',
        14: '8',
        13: '9',
        19:'M+',
        18:'M-',
        17:'C',
        16:'/',
        12:'*',
        8:'-',
        4:'+',
        1:'=',
        2:'.',
        3:'0'
    };

    for (let i = 19; i > 0; i--) {
        let buttonText = i.toString(); // Por defecto, utiliza el número como texto

        if (valorEspecial[i]) {
            buttonText = valorEspecial[i];
        }

        botones.push(
            <button key={i} className='boton'>
                {buttonText}
            </button>
        );
    }

    return (
        <div className='esquemaBotones'>
            {botones}
        </div>
    );
}
