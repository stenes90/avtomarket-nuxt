export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "avtomarket",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/global.js",
    { src: "~plugins/slide-menu", ssr: false },
    "~/plugins/fontawesome.js",
    { src: "~/plugins/file-upload.js", ssr: false },
    { src: "~/plugins/vue-carousel.js", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next"
  ],
  axios: {
    // proxy: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // transpile: ["file-upload"],
    transpile: ["carousel"]
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: "token",
          global: true
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: false
          // autoFetch: true
        },
        endpoints: {
          login: {
            url: "https://avtomarket.azurewebsites.net/api/user/login",
            method: "post"
          },
          logout: { url: "/api/auth/logout", method: "post" },
          user: {
            url: "https://avtomarket.azurewebsites.net/api/user",
            method: "get"
          }
        }
      }
    }
  }
};
