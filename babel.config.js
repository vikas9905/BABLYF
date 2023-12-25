module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    ["module:react-native-dotenv", {
      "envName": "DEV_ENV",
      "moduleName": "@env",
      "path": ".env",
      "allowUndefined": true
    }]
  ]
};
