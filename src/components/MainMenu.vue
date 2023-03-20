<template>
    <p class="text-white">Main Menu Component</p>
    <button @click="$emit('closeMenu')" class="text-white">Close Menu</button>
</template>

<script setup>

const emit = defineEmits(['closeMenu'])

</script>

