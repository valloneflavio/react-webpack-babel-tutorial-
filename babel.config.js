/* eslint-env node */
'use strict';

module.exports = function (api) {
    api.cache.never();

    const presets = [
        ['@babel/env', {
            forceAllTransforms: true,
            targets: { firefox: 56, chrome: 61, edge: 12, ios: 11 }
        }],
        ['@babel/preset-react']
    ]

    const plugins = ['@babel/plugin-proposal-class-properties']

    return { plugins, presets }
}
