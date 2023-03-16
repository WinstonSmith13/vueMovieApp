<template>
  <div class="grid justify-center mb-20">
    <input v-model="search"
      class="mt-10 text-white px-4 py-1 placeholder-blue-300 border bg-gray-600 border-blue-500 rounded outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      placeholder="Que cherches-tu ?" />
    <button @click="getApi" class="bg-yellow-300 rounded-lg mt-4 hover:bg-yellow-50">SEARCH</button>
  </div>

  <div class="relative flex flex-wrap m-10">
    <div v-for="movie in movies" :key="movie.imdbID" class=" relative text-white m-auto max-w-md ">
      <router-link :to="'/movie/' + movie.imdbID">
        <img :src="movie.Poster" alt="movie.Poster" class="relative z-[0] block w-full h-[300px] object-cover mb-10">
        <p class="font-bold capitalize text-black  absolute z-[101] left-0 bottom-[90%] bg-yellow-400 inline-block px-2">{{ movie.Type }}</p>
        <div class="absolute z-[100] bg-black bg-opacity-30 w-full h-[100px] left-0 right-0 bottom-10 px-2 py-2 hover:rounded-t-lg  hover:bg-yellow-400">
          <h3 class="font-bold">{{ movie.Title }}</h3>
          <p class="text-[10px] ">{{ movie.Year }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>



<script setup>
import { ref } from "vue";
import env from '@/env.js';

const search = ref("");
const movies = ref([]);

function getApi() {
  fetch(`http://www.omdbapi.com/?s=${search.value}&apikey=${env.apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === "True") {
        movies.value = data.Search;
      } else {
        movies.value = [];
      }
    });
}
</script>

