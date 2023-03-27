import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ title }) => {
	return (
		<header>
			<h1 className="title">{title}</h1>
		</header>
	);
};

Header.propTypes = {
	title: PropTypes.string
};
