import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { AuthContext } from '../../auth';
import { PrivateRoute } from '../../router';

describe('Pruebas en <PrivateRouter />', () => { 
    test('Debe de mostrar el children si está autenticado.', () => { 
        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                id: '123ABC',
                name: 'Fer Santi'
            }
        }

        render( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        
        expect( screen.getByText('Ruta Privada') ).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalled();
        expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/");
    });
});