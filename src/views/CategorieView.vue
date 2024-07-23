<template>
    <div class="home">
      <h1 class="m-5">{{ id }}</h1>
      <v-row>
            <v-card v-for="(categorie,index) in arrayPostCategories" :key="index" class="w-50 pa-4">   

                
                <v-img
                max-height="200px"
                width="300px"
                :src="`${categorie.Image}`"
               
                cover
                ></v-img>
                
                <v-card-title>{{ categorie.Titre }}</v-card-title>
                <v-card-text>{{ categorie.Description }}</v-card-text>
                <v-card-actions>
                    <v-btn
                        color="orange-lighten-2"
                        text = "Lire l'article"
                        :to="{ name: 'CategoriePostView',params: { id: categorie.idex ,cat:id} }"
                    ></v-btn> 
                </v-card-actions>
            </v-card>
          </v-row>

    </div>
</template>
<script setup>
   
   
  import { ref,watch } from 'vue';
  //const posts = ref([]);

  import {postsCategorie } from '../models/categories.js';

  import {useRoute } from 'vue-router';

  const route = useRoute();
  const id=route.params.id;


  const arrayPostCategories = ref([]);

  arrayPostCategories.value = await postsCategorie(id);



  watch(() => route.params.id, // en attente de la modification de l'ID
  async (newId) => {
    arrayPostCategories.value = await postsCategorie(newId);
    console.log(arrayPostCategories.value);
    arrayPostCategories.value.forEach((categorie,index)=>{
      categorie.id=index;

  })
  }
  )
  //const data = await response.json();  

 





     


</script>