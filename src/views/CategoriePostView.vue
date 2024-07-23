<template>
    <div class="home">
        <v-card class="w-250 pa-4">
            <v-img
                max-height="100px"
                max-width="150px"
                :src="`${data.Image}`"
               
                cover
                ></v-img>
            <v-card-title>{{ data.Titre }}</v-card-title>
            <v-card-text>{{ data.Description }}</v-card-text>
            
        </v-card>
        
    </div>
</template>
<script setup>
   
  //import { ref } from 'vue';
  //const posts = ref([]);
  import {useRoute } from 'vue-router';

  const route = useRoute();
  const id=route.params.id;
  const cat=route.params.cat;

  console.log("id ",id);
  console.log("categorie ",cat);


  import {postCategorie } from '../models/categories.js';
  const data = await postCategorie(cat,id);
    console.log(data);
  //const data = await response.json();  




</script>