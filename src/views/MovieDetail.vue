<template>
    <div>

{{ movieDetail.Title }}
{{ movieDetail.Year }}
{{ movieDetail.Runtime }}
{{ movieDetail.Plot }}
{{ movieDetail.imdbRating }}

<img :src="movieDetail.Poster" alt="">
    </div>
    <button @click="$router.back()" class="btn btn-primary btn-sm">&lt; Back</button>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import env from '@/env.js';

const route = useRoute();
const id = route.params.id;
const movieDetail = ref([]);

fetch (`http://www.omdbapi.com/?i=${id}&apikey=${env.apiKey}`)
.then(response => response.json())
.then(data => {
    
        movieDetail.value = data;
     
})





</script>

