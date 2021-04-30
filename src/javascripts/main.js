import './reactApp.jsx';
import "../stylesheets/main.scss";
import my from "./my.js";

import Vue from 'vue';
import VueApp from './VueApp.vue';

import add from './add.ts';

new Vue({
  el: '#vue-root',
  render: (h) => h(VueApp),
});

console.log(add(3, 9));
console.log("webpack");
my();
