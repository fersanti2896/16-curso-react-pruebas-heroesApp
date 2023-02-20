import { types } from '../../../auth/types/types';

describe('Pruebas en types', () => { 
    test('Debe de retornar el objeto de types.', () => { 
        expect( types ).toEqual({ 
            login: '[Auth] Login', 
            logout: '[Auth] Logout'
        });
    });
});