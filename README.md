# vue3-cli-service ![](https://img.shields.io/npm/v/vue-router.svg)

---
# Template Vue3 + @vue/cli-service: The minimum required


## Installation

clone this repo and run

```bash
npm i

#then run the serve command for development and watch

npm run serve

```

# Edit file src/main.js

#### COMPOSITION API case

[@mdi/js](https://github.com/Templarian/MaterialDesign-JS) is added and configured to be used in .vue files for example to add icon mdi-weather-night

```vue
import { createApp, h } from 'vue'
import './style.css'
// import App from './App.vue'
let App = {
    props:['props1','props2']
    setup(props,context) {
        return () => [h('h1', '# Vue3-COMPOSITION-API ON the SERVER SIDE'),
            h('p', ...),
            ... 
         ]

    }
}
createApp(App).mount('#app')
```

#### OPTIONS API case

```vue
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')
```
