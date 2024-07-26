import { defineStore } from "pinia";
import { useTopicStore } from '@/stores/topic';


const usePostStore = defineStore('post', {
  // state est une fonction afin d'être réactive
  // State représente la partie principale du store, 
  // c'est l'endroit qui va contenir la structure de données de l'application.
  state: () => {
    return {
      posts: [],
      post:{},
    };
  },
  // Les getters représentent des methodes 
  // permettant de récupérer des données du store et 
  // de les manipuler avant sans les modifier.
  getters: {
    formattedPosts(){
      return this.sortPosts.map(post =>{
        return{
          title : post.Titre,
          body : post.Description,
          image: post.Image,
          topic : post.Topic,
          topicText : post.TopicText,
          id : post.id
        }
      })
    },
    formattedPost(){
       
        return{
          title : this.post.Titre,
          body : this.post.Description,
          image: this.post.Image
        }
     
    },
    sortPosts(state){
      return state.posts.sort((a,b)=>a.Titre.localeCompare(b.Titre));
    },
    colorPost:()=>{
      return (topic)=>{
        const topicStore = useTopicStore();
     
        return topicStore.getTopicColor(topic);
      }
     
    },
   
    
    

  },
  //les actions représentent les manipulatuions de données
  // qui vont être effectuées sur le store.
  actions: {
    // cette fonction récupère tous les posts
    async fetchPosts() {
      
      const response = await fetch('https://tall-otter-40.telebit.io/posts/all');
      const posts = await response.json();

      const topicStore = useTopicStore();
      
      const addTopicField=()=>{
       
        const arrayPosts=[];
        let id=0;
        const keys=Object.keys(posts);
        keys.forEach((topic)=>{
          const tabTopicEnCours=posts[topic];
          tabTopicEnCours.forEach((article)=>{
             article.Topic = topicStore.getTopicIndex(topic);
             article.TopicText = topic;
             article.id=id;
             arrayPosts.push(article);
             id++;
          })
          
        })
        return arrayPosts
           
      }
      this.posts = addTopicField();
      },

     // cette fonction récupère tous les posts d'un topic
          async fetchPostsForTopic(topicDemande) {
        
         
          const response = await fetch('https://tall-otter-40.telebit.io/posts/all');
          const posts = await response.json();
    
          const topicStore = useTopicStore();
          
          const addTopicField=()=>{
           
            const arrayPosts=[];
            let id=0;
            const keys=Object.keys(posts);
            keys.forEach((topic)=>{
              const tabTopicEnCours=posts[topic];
              tabTopicEnCours.forEach((article)=>{
                 article.Topic = topicStore.getTopicIndex(topic);
                 article.TopicText = topic;
                 article.id=id;
                 arrayPosts.push(article);
                 id++;
              })
              
            })
            
         
            return arrayPosts.filter(post => post.TopicText == topicDemande);
              
          }
        this.posts = addTopicField(topicDemande);
        
    },
    // cette fonction récupère un  post a l index idPost
    async fetchOnePost(idPost) {
        
      const response = await fetch('https://tall-otter-40.telebit.io/posts/all');
      const posts = await response.json();

      const topicStore = useTopicStore();
      
      const addTopicField=()=>{
       
        const arrayPosts=[];
        let id=0;
        const keys=Object.keys(posts);
        keys.forEach((topic)=>{
          const tabTopicEnCours=posts[topic];
          tabTopicEnCours.forEach((article)=>{
             article.Topic = topicStore.getTopicIndex(topic);
             article.TopicText = topic;
             article.id=id;
             arrayPosts.push(article);
             id++;
          })
          
        })
        return arrayPosts
           
      }
      this.posts = addTopicField();
    
      this.post=this.posts[idPost];
     

  
      
    },
  },
   

  
});
export {usePostStore};