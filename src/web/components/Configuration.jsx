import PropTypes from 'prop-types';
import React from 'react';
import createReactClass from 'create-react-class';

import { Button } from 'components/graylog';
import { BootstrapModalForm, Input } from 'components/bootstrap';
import { IfPermitted } from 'components/common';
import ObjectUtils from 'util/ObjectUtils';

const AWSPluginConfiguration = createReactClass({
	displayName: 'SourceMapPluginConfiguration',

	propTypes: {
		config: PropTypes.object,
		updateConfig: PropTypes.func.isRequired,
	},

	getDefaultProps() {
		return {
			config: {
				endpoint: null,
			},
		};
	},

	getInitialState() {
		const { config } = this.props;

		return {
			config: ObjectUtils.clone(config),
		};
	},

	componentWillReceiveProps(newProps) {
		this.setState({ config: ObjectUtils.clone(newProps.config) });
	},

	_updateConfigField(field, value) {
		const { config } = this.state;

		const update = ObjectUtils.clone(config);
		update[field] = value;
		this.setState({ config: update });
	},

	_onUpdate(field) {
		return (e) => {
			this._updateConfigField(field, e.target.value);
		};
	},

	_openModal() {
		this.modal.open();
	},

	_closeModal() {
		this.modal.close();
	},

	_resetConfig() {
		// Reset to initial state when the modal is closed without saving.
		this.setState(this.getInitialState());
	},

	_saveConfig() {
		this.props.updateConfig(this.state.config).then(() => {
			this._closeModal();
		});
	},

	render() {
		return (
		<div>
			<h3>Source Map Plugin Configuration</h3>
			<p>
				Base configuration for source map consumer.
			</p>
			<dl className="deflist">
				<dt>Consumer endpoint:</dt>
				<dd>
					{this.state.config.endpoint !== null
					? this.state.config.endpoint
					: 'Not defined'}
				</dd>
			</dl>

			<IfPermitted permissions="clusterconfigentry:edit">
				<Button bsStyle="info" bsSize="xs" onClick={this._openModal}>
					Configure
				</Button>
			</IfPermitted>

			<BootstrapModalForm ref={(elem) => { this.modal = elem; }}
			                    title="Update Configuration"
			                    onSubmitForm={this._saveConfig}
			                    onModalClose={this._resetConfig}
			                    submitButtonText="Save">
				<fieldset>
					<Input id="consumer-endpoint"
					       type="text"
					       label="Consumer endpoint"
					       name="endpoint"
					       value={this.state.config.endpoint}
					       onChange={this._onUpdate('endpoint')} />
				</fieldset>
			</BootstrapModalForm>
		</div>
		);
	},
});

export default AWSPluginConfiguration;
