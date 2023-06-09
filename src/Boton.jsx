import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export function Boton({text, nameX='Unoo'} ) {
    return(
        <button>
            {text} - {nameX}
        </button>
    )
}

Boton.propTypes = {
    text: PropTypes.string.isRequired
}

Boton.defaultProps = {
    nameX: 'Algun usuario'
}