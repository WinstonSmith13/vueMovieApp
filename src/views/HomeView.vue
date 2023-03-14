<template>
  <div class="grid justify-center">
    <input 
          v-model="search"
          class="text-white px-4 py-1 placeholder-blue-300 border bg-gray-600 border-blue-500 rounded outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          placeholder="Que cherches-tu ?" />

          <button @click="getApi" class="bg-yellow-300 rounded-lg mt-4 hover:bg-yellow-50">SEARCH</button>
        </div>

</template>

<script>
export default {
  data(){
    return {
      search: ''
    }
  },
methods:{
  getApi(){
    console.log(this.search)
  fetch(`http://www.omdbapi.com/?s=${this.search}&apikey=9630de31`)
  .then(response => response.json())
  .then(data => console.log(data))
}
}
}

</script>
