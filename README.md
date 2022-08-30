# vue-router [![release candidate](https://img.shields.io/npm/v/vue-router.svg)](https://www.npmjs.com/package/@wissemb11/vue3-cli-service)

> This is the repository for WB Router 4 (for Vue 3)

---
# Template for creating Vue3-COMPOSITION-API  served by @vue/cli-service


## Installation

clone this repo and run

```bash
npm i

#then run the serve command for development and watch

npm run serve

```

## Aliases

`@` points to `/src/`

`#` points to `/src/components/`

## Vuetify

tree shaking is auto when building for production

[@mdi/js](https://github.com/Templarian/MaterialDesign-JS) is added and configured to be used in .vue files for example to add icon mdi-weather-night

```vue
<template>
  <v-btn icon>
    <v-icon>{{ $mdi.mdiWeatherNight }}</v-icon>
  </v-btn>
</template>
```

## Vue

you can add anything (ex: vuex, vue router) using the entry point's js file