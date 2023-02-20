import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../auth';
import { PublicRoute } from '../../router/PublicRoute';

describe('Pruebas en <PublicRoute />', () => { 
    test('Debe de mostrar el children sino está autenticado.', () => { 
        const contextValue = {
            logged: false
        }

        render( 
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Ruta Pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta Pública') ).toBeTruthy();
    });

    test('Debe de navegar si está autenticado.', () => { 
        const contextValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'Fernando'
            }
        }

        render( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={ 
                            <PublicRoute>
                                <h1>Ruta Pública</h1>
                            </PublicRoute>
                        } />

                        <Route path='/' element={ <h1>Página Marvel</h1> } />
                    </Routes>

                    
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Página Marvel') ).toBeTruthy();
    });
});