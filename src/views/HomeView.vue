<template>
  <div class="grid justify-center mb-20 ">
    <input v-model="search"
      class="mt-10 text-white px-4 py-1 placeholder-blue-300 border bg-gray-600 border-blue-500 rounded outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      placeholder="Que cherches-tu ?" />
    <button @click="getApi" class="bg-yellow-300 rounded-lg mt-4 hover:bg-yellow-50">SEARCH</button>
  </div>

  <div class="relative">
    <div v-for="movie in movies" :key="movie.imdbID" class="relative text-white">
      <router-link :to="'/movie/' + movie.imdbID">
        <img :src="movie.Poster" alt="movie.Poster" class="relative z-[0] block w-[100%] h-[300px] object-cover mb-10">
        <div class="absolute z-[100] bg-black bg-opacity-30 w-full h-full inset-0">
          <h3 class="">Titre : {{ movie.Title }}</h3>
          <p>Année : {{ movie.Year }}</p>
          <p>Type : {{ movie.Type }}</p>
        </div>
        <!--  -->
      </router-link>
    </div>
  </div>
</template>


<script setup>
import { ref } from "vue";

const search = ref("");
const movies = ref([]);

function getApi() {
  fetch(`http://www.omdbapi.com/?s=${search.value}&apikey=9630de31`)
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

