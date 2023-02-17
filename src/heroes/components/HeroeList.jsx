import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers';
import { HeroeCards } from './';

export const HeroeList = ({ publisher }) => {
    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [publisher] );

    return (
        <>
            <div className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>
                {
                    heroes.map( hero => 
                        <HeroeCards key={ hero.id } hero={ hero } />
                     )
                }
            </div>
        </>
    )
}

HeroeList.propTypes = {
    publisher: PropTypes.string.isRequired
}
