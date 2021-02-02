import {Helmet } from 'react-helmet'
import PropTypes from 'prop-types';

export const Seo = ({ title, description}) => {
    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <meta name={description}/>
            </Helmet>
        </div>
    )
}

Seo.propTypes={
    title: PropTypes.string,
    description: PropTypes.string
}

export default Seo;