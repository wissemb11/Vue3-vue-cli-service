import { createApp, h } from 'vue'
import './style.css'
// import App from './App.vue'
let App = {
    setup() {
        return () => [h('h1', '# Tutorial Vue3-COMPOSITION-API ON the SERVER SIDE'),
            h('p', 'This tutorial aims to illustrate the use of vue3 with COMPOSITION-API on the server side served by @vue/cli-service'),
            h('h1', `# Install dependencies`),
            h('p', "#initiate wb-ui-3 project"),
            h('code', `npm init`),
            h('p', '#install local node_modules'),
            h('code', `npm i`),
            h('p', '#install last version of vue (3.2.26)'),
            h('code', `npm install vue@next`),
            // # -----------------------------------------------
            h('p', h('b', `At this point, we cam work at node shell`)),
            // # -----------------------------------------------`),
            h('h1', `# Creating server`),
            h('p', '#Install service provided by @vue framework  (we can use express framework)'),
            h('code', `npm install vue-cli-service`),
            h('p', '# add services  from @vue-cli-service in packages.json->scripts'),
            h('code', `
scripts:{...
     "serve": "vue-cli-service serve",
 }
`),
            h('h1', `# Creating files`),
            h('li', `# Creating folder 'src'`),
            h('li', `# Creating index.htm ; there, will live the vue app mounted to the element of the id= #app`),

            h('h2', ' #-----index.htm----'),
            h('code', `// <!DOCTYPE html>
 <html lang="en">
   <head>
     <meta charset="UTF-8" />
     <link rel="icon" type="image/svg+xml" href="/vite.svg" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <title>Vue3-COMPOSITION-API ON the SERVER SIDE</title>
   </head>
   <body>
     <div id="app"></div>
     <script type="module" src="/src/main.js"></script>
   </body>
 </html>`),
            // #-----------------,

            h('li', `#creating main.js ; The entry point that control the vue app. here we will only use COMPOSITION-API.`),

            h('h2', '#-----main.js----'),
            h('code', `import { createApp,h } from 'vue';
App={
    prop:{},
    setup(props,context){
    ...
    ...
        }
};`),
            // #-----------------

            h('li', '# Mount the App to the element of id #app (in index.html)'),
            h('li', '# Add some style '),
            h('h2', '#-----style.css----'),
            h('code', `import './style.css'`)
        ]

    }
}
createApp(App).mount('#app')