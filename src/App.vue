<template>
  <v-layout class="rounded rounded-md">
    <!-- ***********************  barre de navigation ***********************-->
    <v-app-bar > 
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawerOpened = !drawerOpened"></v-app-bar-nav-icon>
        
        <v-app-bar-title>Le monde vu par Jeff</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn v-for="categorie in arrayCategories" :key="categorie"
          :to="{ name: 'categorie',params: { id: categorie } }"
          :color="couleursCategorie(categorie)"
          variant="flat"
        >{{categorie}}</v-btn> 
        
        
      </template>
     
    </v-app-bar>

     <!-- ***********************  navigation drawer  ***********************-->
    <v-navigation-drawer :model-value="drawerOpened">
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
       
      </v-list>
      <AppHeader />
    </v-navigation-drawer>

     <!-- ***********************  main  ***********************-->
    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <RouterView />
    </v-main>
  </v-layout>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import { RouterView } from 'vue-router';
  import AppHeader from '@/components/Layout/AppHeader.vue';
  import {categories } from '@/models/categories.js';



  const drawerOpened = ref(false);

   // on importe la liste des categorie
   const arrayCategories = ref([]);    
   const couleursCategorie=(valeur)=>{
    const tabCol=["blue-grey-lighten-4","red-lighten-4","pink-lighten-4","purple-lighten-4","indigo-lighten-4","blue-lighten-4","cyan-lighten-4","teal-lighten-4","green-lighten-4","light-green-lighten-4","lime-lighten-4","yellow-lighten-4","orange-lighten-4","brown-lighten-4"];
    const found=arrayCategories.value.indexOf(valeur)
    return tabCol[found!=-1 ? found+1 : 0]; 
  }

  onMounted(async ()=>{
    arrayCategories.value = await categories();
    
  })
  console.log("appvue ",arrayCategories);

    
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
