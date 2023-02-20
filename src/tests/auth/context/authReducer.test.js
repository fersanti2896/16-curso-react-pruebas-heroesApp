import { authReducer } from '../../../auth/context';
import { types } from '../../../auth/types/types';

describe('Pruebas en useReducer', () => {  
    const initialState = { 
        logged: false
    };

    test('Debe de retornar el estado por defecto.', () => { 
        const newState = authReducer( initialState, {} );

        expect( newState ).toEqual( initialState );
    });

    test('Debe de llamar el login autenticar y establecer el user.', () => { 
        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                user: 'Marisol Contreras'
            }
        }

        const newState = authReducer( initialState, action );
        
        expect( newState.user ).toBe( action.payload );
    });

    test('Debe de llamar el logout con el borrado del nombre y logged en false.', () => {
        const actionLogin = {
            type: types.login,
            payload: {
                id: 'ABC',
                user: 'Marisol Contreras'
            }
        }

        const newStateLogin = authReducer( initialState, actionLogin );

        const action = {
            type: types.logout
        };

        const newStateLogout = authReducer( newStateLogin, action );

        expect( newStateLogout ).toStrictEqual( initialState );
    });
})