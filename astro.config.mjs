import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import { includes } from 'lodash-es'
import { writeFileSync, readFileSync, renameSync } from 'fs'

const ssiDir = 'ssi'

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    {
      name: 'replacePhp',
      hooks: {
        'astro:build:done': (options) => {
          // SSIを除き拡張子はphpに変更
          const paths = options.routes
            .filter(({ pathname }) => !includes(pathname, `/${ssiDir}/`))
            .map((v) => `dist${v.pathname}/index.html`)
          try {
            paths.map((target) => {
              const phpPath = target.replace('.html', '.php')
              return renameSync(target, phpPath)
            })
          } catch (error) {
            console.log(error)
          }
        },
      },
    },
  ],
  // base: '/custom-tags',
})
