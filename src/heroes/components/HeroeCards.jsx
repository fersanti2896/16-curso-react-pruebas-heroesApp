import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CharactersByHero } from './';

export const HeroeCards = ({ hero }) => {
    const {id, superhero, publisher, alter_ego, first_appearance, characters} = hero;
    const heroImg = `/assets/heroes/${ id }.jpg`;

    return (
        <>
            <div className='col animate__animated animate__fadeIn'>
                <div className='card'>
                    <div className="row no-gutters">
                        <div className="col-4">
                            <img src={ heroImg } className='card-img' alt={ superhero }/>
                        </div>

                        <div className="col-8">
                            <div className="card-body">
                                <h5 className="card-title">{ superhero }</h5>
                                <p className="card-text">{ alter_ego }</p>

                                <CharactersByHero alter_ego={ alter_ego } characters={ characters } />

                                <p className='card-tex'>
                                    <small className='text-muted'>{ first_appearance }</small>
                                </p>

                                <Link to={`/heroe/${ id }`}>
                                    Más información...
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

HeroeCards.propTypes = {
    hero: PropTypes.object.isRequired
}


