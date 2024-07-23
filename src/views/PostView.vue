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
        
                <h2 class="pa-4">LAISSEZ UN COMMENTAIRE</h2>
                <AppFormComment />
         
        
       
        <h2 class="pa-4">COMMENTAIRES</h2>
        <v-row>
            <v-card v-for="post in arrayComments" :key="post.id" class="w-100 pa-4">
               
                <v-card-title>{{ post.name+" "+post.email }}</v-card-title>
                <v-card-text>{{ post.body }}</v-card-text>
                
            </v-card>
        </v-row>
    </div>
</template>
<script setup>
    import AppFormComment from '@/components/forms/AppFormComment.vue';
  import { ref } from 'vue';
  //const posts = ref([]);
  import {useRoute } from 'vue-router';

  const route = useRoute();
  const id=route.params.id;


  import {post } from '../models/posts.js';
  const data = await post(id);
    console.log(data);
  //const data = await response.json();  

    const arrayComments = ref([]);

    import {comments } from '../models/comments.js';
    arrayComments.value = await comments(id);  


</script>