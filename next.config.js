// @generated: @expo/next-adapter@3.1.10
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#withexpo

// eslint-disable-next-line import/order
const { withExpo } = require('@expo/next-adapter')

// eslint-disable-next-line import/order
const withPlugins = require('next-compose-plugins')

// eslint-disable-next-line import/order
const withFonts = require('next-fonts')

const withTM = require('next-transpile-modules')([
  'react-native-web',
  'native-base'
])

const nextConfig = {}

module.exports = withPlugins(
  [
    withTM,
    [withFonts, { projectRoot: __dirname }],
    [withExpo, { projectRoot: __dirname }]
  ],
  nextConfig
)
