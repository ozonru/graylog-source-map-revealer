package ru.ozon.plugins.sourcemap;

import org.graylog2.plugin.PluginMetaData;
import org.graylog2.plugin.ServerStatus;
import org.graylog2.plugin.Version;

import java.net.URI;
import java.util.EnumSet;
import java.util.Set;

public class SourceMapMetaData implements PluginMetaData {
    private static final String PLUGIN_PROPERTIES = "ru.ozon.plugins.sourcemap/graylog-plugin.properties";

    @Override
    public String getUniqueId() {
        return "ru.ozon.plugins.sourcemap.SourceMapPlugin";
    }

    @Override
    public String getName() {
        return "SourceMap";
    }

    @Override
    public String getAuthor() {
        return "OZON team";
    }

    @Override
    public URI getURL() {
        return URI.create("https://github.com/ozonru/graylog-source-map-revealer");
    }

    @Override
    public Version getVersion() {
        return Version.fromPluginProperties(this.getClass(), PLUGIN_PROPERTIES, "version", Version.from(0, 0, 0, "unknown"));
    }

    @Override
    public String getDescription() {
        return "SourceMap plugin";
    }

    @Override
    public Version getRequiredVersion() {
        return Version.fromPluginProperties(this.getClass(), PLUGIN_PROPERTIES, "graylog.version", Version.CURRENT_CLASSPATH);
    }

    @Override
    public Set<ServerStatus.Capability> getRequiredCapabilities() {
        return EnumSet.of(ServerStatus.Capability.SERVER);
    }
}
