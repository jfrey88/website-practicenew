<template>
    <div class="home">
        <h1 class="ma-2">Home</h1>
        <v-row>
            <v-card v-for="(post,index) in arrayPosts" :key="index" 
                class="w-33 pa-4 ma-2 "
                :color="couleursCategorie[post.Topic]"
                >
                <v-img
                max-height="200px"
                width="300px"
                :src="`${post.Image}`"
               
                cover
                ></v-img>
                
                <v-card-title>{{ post.Titre }}</v-card-title>
                <v-card-title>{{ post.Topic }}</v-card-title>
                <v-card-text>{{ post.Description }}</v-card-text>
                <v-card-actions>
                    <v-btn
                        color="orange-lighten-2"
                        text = "Lire l'article"
                        :to="{ name: 'post',params: { id: index } }"
                    ></v-btn> 
                </v-card-actions>
            </v-card>
        </v-row>
    </div>
</template>

<script setup>

    import { onMounted, ref } from 'vue';
    import {posts } from '../models/posts.js';
    import {categories } from '../models/categories.js';
    
    const couleursCategorie=ref(["blue-grey-lighten-4","red-lighten-4","pink-lighten-4","purple-lighten-4","indigo-lighten-4","blue-lighten-4","cyan-lighten-4","teal-lighten-4","green-lighten-4","light-green-lighten-4","lime-lighten-4","yellow-lighten-4","orange-lighten-4","brown-lighten-4"]);
    let arrayPosts = ref([]);
    let arrayAllPosts =ref([]);
    // on importe la liste des posts
   

    const arrayCategories = ref([]);    

    arrayAllPosts.value = await posts();

    const addTopicField=()=>{
        console.log('je suis bien ici');
        const keys=Object.keys(arrayAllPosts.value)
        keys.forEach((topic)=>{
            const tabTopicEnCours=arrayAllPosts.value[topic];
            tabTopicEnCours.forEach((article)=>{
                const found=arrayCategories.value.indexOf(topic)
                article.Topic = found!=-1 ? found+1 : 0;
                    
                arrayPosts.value.push(article);
            })
           
        })
        console.log('je suis bien ici');
        arrayPosts.value=shuffleArray(arrayPosts.value);
        
    }

    function shuffleArray(array) {
        console.log("-------------- je suis la");
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        console.log("avant :","i:",i," j:",j," array[i]:",array[i]," array(j])",array[j]);
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        console.log("après :","i:",i," j:",j," array[i]:",array[i]," array(j])",array[j]);
    }
    return(array);
    }
    
   
  
  


    onMounted(async ()=>{
        arrayCategories.value = await categories();
        addTopicField();
       
    })

</script>