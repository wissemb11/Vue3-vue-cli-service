import { createApp, h } from 'vue'
import './style.css'
// import App from './App.vue'
let App = {
    props:['props1','props2']
    setup(props,context) {
        return () => [h('h1', '# Vue3-COMPOSITION-API ON the SERVER SIDE'),
            h('p', ...),
 

        ]

    }
}
createApp(App).mount('#app')