package ru.ozon.plugins.sourcemap;

import ru.ozon.plugins.sourcemap.SourceMapMetaData;
import ru.ozon.plugins.sourcemap.SourceMapModule;

import org.graylog2.plugin.Plugin;
import org.graylog2.plugin.PluginMetaData;
import org.graylog2.plugin.PluginModule;

import java.util.Collection;
import java.util.Collections;

/**
 * Implement the Plugin interface here.
 */
public class SourceMapPlugin implements Plugin {
    @Override
    public PluginMetaData metadata() {
        return new SourceMapMetaData();
    }

    @Override
    public Collection<PluginModule> modules() {
        return Collections.<PluginModule>singleton(new SourceMapModule());
    }
}
