// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ["@nuxtjs/tailwindcss", "@tresjs/nuxt"],
    plugins: [],
    app: {
        head: {
            title: 'Sample - ',
            meta: [
                {name: 'description', content: 'some description'},
            ],
            link: [
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
            ]
        }
    }

})