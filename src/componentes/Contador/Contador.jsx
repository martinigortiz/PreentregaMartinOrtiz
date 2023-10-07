import React from 'react'
import { useState } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(1);

    const incrementar = () => {
        if (contador < 10) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    return (
        <div>
            <button onClick={incrementar}> + </button>
            <p>{contador}</p>
            <button onClick={decrementar}> - </button>
        </div>
    )
}

export default Contador