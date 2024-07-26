<template>
    <div class="home">
        <h1 class="ma-2">Home</h1>
        <v-row class="-flex justify-center">
            
            <v-card v-for="(post,index) in postStore.formattedPosts" :key="index" 

                class="w-33 pa-4 ma-2 "
                :color="postStore.colorPost(post.topic)"
                >
                <v-card-title class="text-uppercase">{{ post.topicText}}</v-card-title>
                <v-img
                max-height="200px"
                width="300px"
                :src="post.image"
               
                cover
                ></v-img>
             
                <v-card-title>{{ post.title }}</v-card-title>
                
                
                <v-card-text>{{ post.body }}</v-card-text>
                <v-card-actions>
                    <v-btn
                        color="orange-darken-4"
                        text = "Lire l'article"
                        :to="{ name: 'post',params: { id: post.id } }"
                    ></v-btn> 
                </v-card-actions>
            </v-card>
        </v-row>
    </div>
</template>

<script setup>

    import { onMounted } from 'vue';
    import { usePostStore } from '@/stores/post';    
    import { useTopicStore } from '@/stores/topic';    
    
  
    const topicStore = useTopicStore();

    const fetchTopicsPosts = async () =>{
        await topicStore.fetchTopics();
    } 
   
    
    const postStore = usePostStore();


    const fetchPosts = async () =>{
        await postStore.fetchPosts();
    } 

    onMounted( async() => {
      
        await fetchTopicsPosts();
        await fetchPosts();
    });


</script>