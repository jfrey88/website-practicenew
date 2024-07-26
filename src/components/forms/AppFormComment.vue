<template>
  <v-sheet class="mx-auto" width="800">
    <v-form 
      >
      <v-container >
        
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="commentaire.name"
              bg-color="purple-lighten-5"
              variant="solo"
              :counter="10"
              :rules="rulesLastname"
              label="Votre nom"
              hide-details
              clearable
              required
            ></v-text-field>
          </v-col>
  
          <v-col cols="12" md="6" >
            <v-text-field
             v-model="commentaire.email"
              prepend-inner-icon="mdi-email"
              bg-color="purple-lighten-5"
              variant="solo"
              :rules="rulesEmail"            
              label="Votre email"
              hide-details
              clearable
              required             
            ></v-text-field>
          </v-col>

        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-textarea
             v-model="commentaire.body"
              prepend-inner-icon="mdi-comment"
              bg-color="purple-lighten-5"
              variant="solo"
              row-height="30"
              rows="4"
              :counter="10"
              :rules="rulesComment"
              label="Votre commenaire"
              hide-details
              clearable
              required             
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" >
            <v-btn 
              class="mt-2" 
              color="purple-lighten-4"
              @click="onSubmit"
            >Submit</v-btn>
          </v-col>
          <v-col cols="12" md="6" >
            <v-btn 
              class="mt-2" 
              color="purple-lighten-4"
             @click="clear()"
            >clear</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-sheet>
</template>
  <script setup>

    import { ref } from 'vue';
  
    
    const commentaire = ref({name:"",
    email:"",
  body:""});


 // import {clearComment } from '../../models/comments.js';
  import {useRoute } from 'vue-router';
  import { useCommentStore } from '@/stores/comment'; 

 // import { onMounted } from 'vue';
  //const posts = ref([]);

 // import { useCommentStore } from '@/stores/comment';  


  const route = useRoute();
  const id=route.params.id;
  // console.log('------------------ AppFormComment.vue --> id -----------------------');
  // console.log(id);

  const comment = useCommentStore();
    const onSubmit=()=>{
      comment.addCommentForPost(id,commentaire.value);
      
      
    }
    // const clear=()=>{
    //   clearComment(id);

    // }
    const rulesLastname = ref([
    value => {
      if (value) 
      {
        if((value.length <= 20))
        {
          if ((value.trim())=="")
          {
            return('Le nom est obligatoire');
          }else{
            return true;
          }
          

        }else{
          return 'Le nom doit avoir moins de 20 lettres';
        }
      }else{
        return('Le nom est obligatoire')
      }
    }
  ]);
  
   const rulesEmail = ref([
    value=>{
      if (value) 
      {
        if (/.+@.+\..+/.test(value)) 
        {
          return true
        }else{
          return 'l\'adresse email doit être valide.'
        }
      }else{
        return('L\'email est obligatoire');
      }
    }
  ]);
    const rulesComment = ref([
    value=>{
      if (value) 
      {
        if((value.length <= 2000))
        {
          if ((value.trim())=="")
          {
            return('Le commentaire est obligatoire');
          }else{
            return true;
          }
          

        }else{
          return 'Le commentaire doit avoir moins de 2000 lettres';
        }
      }else{
        return('Le commentaire est obligatoire')
      }
    }
  ]);

    const clear=()=>{
      commentaire.value.body="";
      commentaire.value.email="";
      commentaire.value.name="";



    }
  
   
    
  </script>