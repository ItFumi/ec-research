export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'EC Research',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'ECサイトのUI/UXを研究するサイト' },
      // ogp設定
      { name: 'og:url', content: 'https://ec-research.netlify.app/' },
      { name: 'og:type', content: 'website' },
      { name: 'og:site_name', content: 'EC Research' },
      { name: 'og:title', content: 'EC Research' },
      { name: 'og:description', content: 'ECサイトのUI/UXを研究するサイト' },
      { name: 'og:image', content: 'https://ec-research.netlify.app/site_image.png' },
      // twitterのogp設定
      { name: 'twitter:card', content: 'summary_large_image' },
      ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vuejs-paginate', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-fontawesome'
  ],
  fontawesome: {
    component: "fa",
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
      {
        set: "@fortawesome/free-brands-svg-icons",
        icons: ["fab"],
      },
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  publicRuntimeConfig: {
    apiKEY: process.env.API_KEY,
  }
}
