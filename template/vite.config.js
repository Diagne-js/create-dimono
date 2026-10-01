import {defineConfig} from "vite"
import {dimono} from "dimono"
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        dimono(),
        tailwindcss()
    ]
})