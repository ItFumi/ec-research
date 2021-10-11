export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'EC Research',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#”',
    },
    meta: [
      { charset: 'utf-8' }, // 文字コードにutf-8を指定
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }, // スマホ等のモバイル端末で最適なWeb表示をさせるために設定
      { name: 'description', content: 'これはnuxtアプリです' }, // ページの説明文
      { name: 'keywords', content: 'Nuxt.js,Nuxt,nuxt' }, // ページのキーワード
      { name: 'format-detection', content: 'telephone=no' }, // 電話番号の自動リンク機能を制御
      // ogp設定
      { name: 'og:url', content: 'https://ja.nuxtjs.org/' }, // ページのURL。絶対パスで記述
      { name: 'og:type', content: 'website' }, // ページの種類。website以外にもblogやarticle,productなどがある
      { name: 'og:site_name', content: 'nuxtアプリ' }, // ページのサイト名
      { name: 'og:title', content: '【nuxtアプリ】nuxtアプリについて' }, // ページのタイトル
      { name: 'og:description', content: 'これはnuxtアプリです' }, // ページの説明文
      { name: 'og:image', content: 'https://res.cloudinary.com/nuxt/image/upload/w_1200,h_675,c_fill,f_auto/remote/nuxt-org/blog/case-study-livementor/main.png' }, // SNS上でシェアされた際に表示する画像。絶対パスで記述
      // facebookのogp設定
      { name: 'fb:app_id', content: '111111111111111' }, // サイトやブログの管理者をfacebookに伝えるためのタグ。facebookのogp設定には、app_idという15桁の数字を使用。Facebook for Developersに登録して取得する
      // twitterのogp設定
      { name: 'twitter:card', content: 'summary_large_image' }, // twitterでの表示タイプ。summary_large_image以外にもsummaryやapp,playerなどがある
      { name: 'twitter:site', content: '@twitter_user_id' },
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
