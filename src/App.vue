<template>
  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
    <MainMenuVue v-if="isMenuOpen"></MainMenuVue>
    <button class="text-white" @click="isMenuOpen = true">Open Menu</button>
      <router-link class="text-white items-center  font-bold" to="/">
        <h1><span class="text-yellow-400 font-medium">Vue</span>Movies</h1>
      </router-link>


      <button data-collapse-toggle="navbar-default" type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
      
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <router-link class="text-white items-center  font-bold" to="/">
            <h1><span class="text-yellow-400 font-medium hover:text-white">Home</span></h1>
          </router-link>
          <router-link class="text-white font-bold" to="/about">
            <h1><span class="text-yellow-400 font-medium hover:text-white">About</span></h1>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>

  <header>


  </header>
  <main class="h-full w-full">
    <router-view />
  </main>
</template>

<script setup>
import MainMenuVue from './components/MainMenu.vue';
import { RouterView } from 'vue-router';
import {ref} from 'vue';
 
const isMenuOpen = ref(false);
</script>


<style>
* {
  margin: 0;
  padding: 0;
  /* background-color: #42B883; */
}

body {
  background-color: #35495E;
}</style>
