import './style.scss';

import './style.scss';

import { createApp } from 'vue';

import * as VueRouter from 'vue-router';


import App from './App.vue';
import ToDoList from './pages/ToDoList.vue';
import Modals from './pages/Modals.vue';
import Clicker from './pages/Clicker.vue';
import Chuck from './pages/Chuck.vue';
import RickAndMorty from './pages/RickAndMorty.vue';

const routes = [
    { path: '/', component: RickAndMorty, name: 'Rick and Morty' },
    { path: '/Chuck', component: Chuck, name: 'Chuck' },
    { path: '/Clicker', component: Clicker, name: 'Clicker' },
    { path: '/modal', component: Modals, name: 'Home' },
    { path: '/todolist', component: ToDoList, name: 'To-Do List' },
  ]

  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
  })

let app = createApp(App)
app.use(router);

app.mount('#app');