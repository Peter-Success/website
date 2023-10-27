// https://nuxt.com/docs/api/configuration/nuxt-config
const url = require('url')
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'normalize.css',
    '@/styles/global.scss'
  ],
  plugins: [
    '~/plugins/antd.js',
    '~/plugins/antd-icon.js'
  ],
  postcss: {
    plugins: {
      'postcss-px-to-viewport': {
        unitToConvert: 'px',
        viewportWidth: 1920,
        unitPrecision: 5,
        propList: ['*'],
        viewportUnit: 'vw',
        fontViewportUnit: 'vw',
        selectorBlackList: ['h5', 'ant-form', 'ant-input', 'ant-btn'],
        minPixelValue: 1,
        mediaQuery: false,
        replace: true,
        exclude: undefined,
        include: undefined,
        landscape: false,
        landscapeUnit: 'vw',
        landscapeWidth: 568
      }
    }
  }
})
