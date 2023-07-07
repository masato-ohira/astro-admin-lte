import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import { renamePhp } from './npm-scripts/astro/renamePhp.mjs'
import { removeDoctype } from './npm-scripts/astro/removeDoctype.mjs'

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    {
      name: 'replaceTags',
      hooks: {
        'astro:build:done': (options) => {
          removeDoctype(options)
          renamePhp(options)
        },
      },
    },
  ],
  // base: '/custom-tags',
})
