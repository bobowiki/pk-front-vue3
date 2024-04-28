// uno.config.ts
import { defineConfig } from 'unocss'
// import presetWind from '@unocss/preset-wind'
import { presetWind, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss'
// import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  shortcuts: {
    // method2 使用shortcurs 针对全局经常需要使用的样式
    // 'router-link': 'text-white text-xl px-8 py-2 hover:font-500',
    'bg-image': 'w-full h-full bg-cover bg-no-repeat bg-center-top'
  },
  presets: [
    presetWind(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block'
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    colors: {
      main: '#4E98F4'
    }
  }
})
