import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {
    const [ formState, setFormState ] = useState( initialForm );

    /* Función que permite cambiar el valor de un input */
    const onInputChange = ( { target } ) => {
        const { name, value } = target;
        
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    /* Función que permite resetar los valores por defecto del formulario */
    const onResetForm = () => {
        setFormState( initialForm );
    }
    
    /* Expone la desestructuración del formState (propiedades) */
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
