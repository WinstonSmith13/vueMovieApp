<template>
    <div class="p-[16px] bg-yellow-400 bg-opacity-50 mt-10 rounded-lg m-10">
        <h2 class="text-[28px] text-white font-semibold">{{ movieDetail.Title }}</h2>
        <p class="text-white mb-[16px]">{{ movieDetail.Year }}</p>
      
        <img :src="movieDetail.Poster" alt="movieDetail.Poster" class="block max-w-[200px] mb-[16px]">
        <p class="text-white mb-[16px]">"{{ movieDetail.Plot }}"</p>
        <button @click="$router.back()" class="bg-yellow-300 rounded-lg mt-4 hover:bg-yellow-50 p-2"> Back</button>
    </div>
    
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import env from '@/env.js';


const route = useRoute();
const id = route.params.id;
const movieDetail = ref({});

onBeforeMount (() => {
    fetch(`http://www.omdbapi.com/?i=${id}&apikey=${env.apiKey}`)
        .then(response => response.json())
        .then(data => {

            movieDetail.value = data;

        })

})


</script>

