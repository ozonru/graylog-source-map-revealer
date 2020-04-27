package ru.ozon.plugins.sourcemap;

import org.graylog2.plugin.PluginConfigBean;

public class SourceMapPluginConfiguration implements PluginConfigBean {
    private static final String PREFIX = "sourcemap_";

    public String endpoint() {
        return "";
    }
}
