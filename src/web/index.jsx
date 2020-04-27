import 'webpack-entry';

import { PluginManifest, PluginStore } from 'graylog-web-plugin/plugin';
import SourceMapPluginConfiguration from './components/Configuration.jsx';
import {isEnabled, RevealedSource} from './components/RevealedSource.jsx';
import packageJson from '../../package.json';

PluginStore.register(new PluginManifest(packageJson, {
	// systemConfigurations: [
	// 	{
	// 		component: SourceMapPluginConfiguration,
	// 		configType: 'ru.ozon.sourcemap.config.SourceMapPluginConfiguration',
	// 	},
	// ],
	valueActions: [
		{
			component: RevealedSource,
			type: 'ru.ozon.plugins.sourcemap.SourceMapPlugin',
			title: 'Reveal source',
			isEnabled,
		}
	]
}));
