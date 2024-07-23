<template>
  <v-sheet class="mx-auto" width="800">
    <v-form 
      >
      <v-container >
        
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="comment.name"
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
             v-model="comment.email"
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
             v-model="comment.body"
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
              @click="clear"
            >Clear</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-sheet>
</template>
  <script setup>

    import { ref } from 'vue';
  
    
    const comment = ref({name:"",
    email:"",
  body:""});

  import {addCommentForPost } from '../../models/comments.js';
  import {clearComment } from '../../models/comments.js';
  import {useRoute } from 'vue-router';

  const route = useRoute();


  const id=route.params.id;

    const onSubmit=()=>{
      addCommentForPost(id,comment.value);

      
    }
    const clear=()=>{
      clearComment(id);
      console.log('je passe dans clear');
    }
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


  
   
    
  </script>