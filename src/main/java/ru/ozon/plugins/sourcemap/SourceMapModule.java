package ru.ozon.plugins.sourcemap;

import ru.ozon.plugins.sourcemap.SourceMapPluginConfiguration;

import com.google.common.collect.ImmutableSet;

import org.graylog2.plugin.PluginConfigBean;
import org.graylog2.plugin.PluginModule;

import java.util.Set;

public class SourceMapModule extends PluginModule {
    @Override
    public Set<? extends PluginConfigBean> getConfigBeans() {
        return ImmutableSet.of(
                new SourceMapPluginConfiguration()
        );
    }
}
