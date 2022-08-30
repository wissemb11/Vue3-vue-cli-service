# vue3-cli-service [![](https://img.shields.io/badge/vue3--cli--service-1.0.0-blue)](https://www.npmjs.com/package/vue3-cli-service)

---
## Template Vue3 + @vue/cli-service

### Description
'Vue3 + @vue/cli-service' is a model with minimum requirements based on Vue3 and served by vue-cli-service.  

It is the result of this 
[tutorial](http://www.wi-bg.com),
 which aims to illustrate the use of COMPOSITION-API on vue3 served by @vue/cli-service.

### demo
[For live demo](https://codesandbox.io/s/clever-hofstadter-40zvh0),
### Installation

1- Clone this repo and run

```bash

git clone github.com/wissemb11/vue3-cli-service

```
2. change directory

```bash

cd vue3-cli-service

```
3. Install node modules

```bash

npm i

```

4- Run the serve command for development and watch

```bash

npm run serve

```

## Edit file src/main.js

##### COMPOSITION API case

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

##### OPTIONS API case

```vue
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')
```
