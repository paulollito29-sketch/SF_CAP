import { useState } from "react";

const useContador = () => {
    const [numero, setNumero] = useState(0);

    const incrementar = () => {
        setNumero(numero + 1);
    }

    const decrementar = () => {
        setNumero(numero - 1);
    }

    const resetear = () => {
        setNumero(0);
    }

    return {
        numero,
        incrementar,
        decrementar,
        resetear
    }
}

export default useContador