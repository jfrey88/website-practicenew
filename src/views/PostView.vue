<template>
    <div class="home">
        <v-card class="w-250 pa-4">
            <v-img
                max-height="100px"
                max-width="150px"
                :src="`${postStore.formattedPost.image}`"
               
                cover
                ></v-img>
            <v-card-title>{{ postStore.formattedPost.title }}</v-card-title>
            <v-card-text>{{ postStore.formattedPost.body }}</v-card-text>
            
        </v-card>
        
                <h2 class="pa-4">LAISSEZ UN COMMENTAIRE</h2>
                <AppFormComment />
         
        
       
        <h2 class="pa-4">COMMENTAIRES</h2>
        <v-row>
            <v-card v-for="post in tabCommentofThisPost" :key="post.postId" class="w-100 pa-4">
               
                <v-card-title>{{ post.name+" "+post.email }}</v-card-title>
                <v-card-text>{{ post.body }}</v-card-text>
                
            </v-card>
        </v-row>
    </div>
</template>
<script setup>
  import AppFormComment from '@/components/forms/AppFormComment.vue';
  import { onMounted ,ref } from 'vue';
 
  import {useRoute } from 'vue-router';
  import { usePostStore } from '@/stores/post';    
  import { useCommentStore } from '@/stores/comment';    
  
  const route = useRoute();
  const id=route.params.id;



  const postStore = usePostStore();
  const commentStore = useCommentStore();

  let tabCommentofThisPost = ref([]);
  tabCommentofThisPost=commentStore.getCommentsForPost(id);
  // console.log("PostView.vue--------------- tabCommentofThisPost -----------------------");
  // console.log(tabCommentofThisPost);

   const fetchOnePost = async () =>{
     await postStore.fetchOnePost(id);
     
   
   } 

  onMounted( async() => {
    
    await fetchOnePost(id);
    commentStore.getCommentsForPost(id);
    
  });

 


</script>