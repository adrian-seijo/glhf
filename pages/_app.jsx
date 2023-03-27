import React from 'react';
import PropTypes from 'prop-types';

import '@styles/globals.css';

function Application({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

Application.propTypes = {
	Component: PropTypes.node,
	pageProps: PropTypes.any
};

export default Application;
