import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../auth';
import { Navbar } from '../../../ui';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}));

describe('Pruebas en <Navbar />', () => { 
    const contextValue = {
        logged: true,
        user: {
            id: '123',
            name: 'Marisol de Nicolás'
        },
        logout: jest.fn()
    }

    beforeEach( () => jest.clearAllMocks() );

    test('Debe de mostrar el nombre del usuario en el Navbar.', () => { 
        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        const userName = screen.getByText('Marisol de Nicolás');
        
        expect( userName ).toBeTruthy();
    });

    test('Debe de llamar el logout y navigate cuando hace click en el botón.', () => { 
        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        const logoutBtn = screen.getByRole('button', { name: 'Logout' });
        fireEvent.click(logoutBtn);

        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockUseNavigate ).toHaveBeenCalledWith("/login", {"replace": true});
    });
});