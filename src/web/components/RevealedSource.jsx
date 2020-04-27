import React from 'react';

const regex = /\s*at (?:[^\s]* )?\(?(.*\.js):(\d+):(\d+)\)?/;

export function isEnabled({value}) {
	return regex.test(value);
}

class Loader extends React.Component {
	constructor(props, ctx) {
		super(props, ctx);

		this.state = {
			value: 0
		};

		this.interval = setTimeout(() =>  {
			this.setState((state) => ({
				value: (state.value + 1) % 3
			}));
		}, 15);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return <pre>Loading {Array.from({length: this.state.value + 1}).join('.')}</pre>
	}
}

export class RevealedSource extends React.Component {
	constructor(props, ctx) {
		super(props, ctx);

		this.state = {
			loading: true,
			revealed: null
		};
	}

	componentDidMount() {
		this.abortController = new AbortController();

		fetch('http://localhost:3000/map', {
			method: 'POST',
			body: this.props.value,
			signal: this.abortController.signal
		})
		.then(res => res.text())
		.then(revealed => this.setState({
			loading: false,
			revealed
		}))
		.catch(err => {
			console.error(err);
			this.setState({loading: false})
		})
		.then(() => {
			this.abortController = null;
		})
	}

	componentWillUnmount() {
		if (this.abortController) {
			this.abortController.abort();
		}
	}

	render() {
		const {
			loading,
			revealed
		} = this.state;

		if (loading) {
			return <Loader />;
		}

		if (!loading && revealed === null) {
			return <pre>INTERNAL CONSUMER ERROR</pre>;
		}

		return <pre>{this.state.revealed}</pre>;
	}
}
