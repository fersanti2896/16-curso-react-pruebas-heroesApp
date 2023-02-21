import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { SearchPage } from '../../../heroes/pages/SearchPage';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}));

describe('Pruebas en <SearchPage />', () => { 
    beforeEach( () => jest.clearAllMocks() );

    test('Debe de mostrarse con valores por defecto.', () => { 
        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar a Batman y el input con el valor del queryString.', () => { 
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('batman');

        const img = screen.getByRole('img');
        expect( img.src ).toContain('/assets/heroes/dc-batman.jpg');

        const searchTag = screen.getByLabelText('search');        
        expect( searchTag.style.display ).toContain('none');
    });

    test('Debe de mostrar un error si no se encuentra el heroe (susanadistancia).', () => { 
        render(
            <MemoryRouter initialEntries={['/search?q=susanadistancia']}>
                <SearchPage />
            </MemoryRouter>
        );
       
        const searchTag = screen.getByLabelText('search-error');
        expect( searchTag.innerHTML ).toBe('No here with <b>susanadistancia</b>');
    });

    test('Debe de llamar el navigate a la pantalla nueva.', () => { 
        const inputValue = 'superman';

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change( input, { target: { name: 'searchText', value: inputValue } } );

        const form = screen.getByLabelText('form');
        fireEvent.submit( form );

        expect( mockUseNavigate ).toHaveBeenCalled();
        expect( mockUseNavigate ).toHaveBeenCalledWith(`?q=${ inputValue }`);
    });
});