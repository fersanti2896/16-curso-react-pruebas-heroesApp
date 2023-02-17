import { Navigate, Route, Routes } from 'react-router';
import { Navbar } from '../../ui';
import { DCPage, HeroePage, MarvelPage, SearchPage } from '../pages';

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar /> 

            <div className='container'>
                <Routes>
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DCPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="heroe/:id" element={<HeroePage />} />

                    <Route path="/" element={<Navigate to="/marvel" />} />
                </Routes>
            </div>
        </>
    )
}
