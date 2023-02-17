import PropTypes from 'prop-types';

export const CharactersByHero = ({ alter_ego, characters }) => {
    if( alter_ego ===characters ) return (<></>);

    return <p>{ characters }</p>
}

CharactersByHero.propTypes = {
    alter_ego: PropTypes.string.isRequired,
    characters: PropTypes.string.isRequired
}
