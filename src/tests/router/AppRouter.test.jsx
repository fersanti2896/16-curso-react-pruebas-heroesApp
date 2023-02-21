import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { AuthContext } from '../../auth';
import { HeroeCards, HeroePage, HeroesRoutes } from '../../heroes';
import { AppRouter, PrivateRoute } from '../../router';

describe('Pruebas en <AppRouter />', () => { 
    test('Debe de mostrar el login si no está autenticado.', () => { 
        const contextValue = {
            logged: false
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>    
        );
        
        expect( screen.getAllByText('Login') ).toBeTruthy();
        expect( screen.getAllByText('Login').length ).toBe(1);
    });

    test('Debe de mostrar el componente de Marvel si está autenticado.', () => { 
        const contextValue = {
            logged: true,
            user: {
                id: '123ABC',
                name: 'Fer Santi'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getAllByText('Marvel').length ).toBeGreaterThanOrEqual(1);
        expect( screen.getByText('Marvel Page') ).toBeTruthy();
    });
});