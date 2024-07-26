<template>
  <v-layout class="rounded rounded-md">
    <!-- ***********************  barre de navigation ***********************-->
    <v-app-bar > 
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawerOpened = !drawerOpened"></v-app-bar-nav-icon>
        
        <v-app-bar-title width="200px">Le monde vu par Jeff</v-app-bar-title>
        
        
        <v-btn v-for="(topic,index) in topicStore.topics" :key="index"
       
          :to="{ name: 'categorie',params: { id: topic } }"
          
          :color="topicStore.getTopicColor(index+1)"
          variant="flat"
        >{{topic}}</v-btn> 
        
        
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
  import { useTopicStore } from '@/stores/topic';



  const drawerOpened = ref(false);

   // on importe la liste des categorie
   const topicStore = useTopicStore();

  const fetchTopicsPosts = async () =>{
    await topicStore.fetchTopics();
  } 

  onMounted(async ()=>{
    await fetchTopicsPosts();
    
  })
  

    
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
