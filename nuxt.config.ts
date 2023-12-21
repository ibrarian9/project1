// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
      '@pinia/nuxt',
    ],
    runtimeConfig: {
        public: {
            baseApi: 'http://localhost:8080/api'
        }
    },
    routeRules: {
        '/api/all': { proxy: { to: "http://localhost:8080/api/hape/all" }}
    },
});
