  // Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
  assetPlugins: ['expo-asset/tools/hashAssetFiles'],
  getTransformOptions: async () => ({
    transform: {
      experimentalImportSupport: false,
      inlineRequires: true,
    },
  }),
};
//
config.resolver = {
  ...config.resolver,
  assetExts: config.resolver.assetExts.filter((ext) => ext !== 'svg'),
  sourceExts: [...config.resolver.sourceExts, 'svg', 'd.ts'],
  resolveRequest:  (context, moduleName, platform) => {
    if (moduleName === 'crypto') {
      // when importing crypto, resolve to react-native-quick-crypto
      return context.resolveRequest(
        context,
        'react-native-quick-crypto',
        platform,
      )
    }
    // otherwise chain to the standard Metro resolver.
    return context.resolveRequest(context, moduleName, platform)
  }
};

module.exports = config;
