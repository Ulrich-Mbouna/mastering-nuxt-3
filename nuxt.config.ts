// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules:[
        "@nuxtjs/tailwindcss",
        "@vueuse/nuxt"
    ],
    css:[
        "uikit/dist/css/uikit.min.css",
    ],
    app:{
        head:{
            script:[
                {
                    src: "uikit/dist/js/uikit.min.js",
                },
                {
                    src: "uikit/dist/js/uikit-icons.min.js",
                }
            ]
        }
    }
})
