import PropTypes from 'prop-types';
import React from 'react';

const regex = /\s*at (?:[^\s]* )?\(?(.*\.js):(\d+):(\d+)\)?/;

export function isEnabled({value}) {
	return regex.test(value);
}

export class RevealedSource extends React.Component {
	render() {
		return `REVEALED ` + JSON.stringify(this.props);
	}
}
