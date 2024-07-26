import { defineStore } from "pinia";

const useTopicStore = defineStore('topic', {
  // state est une fonction afin d'être réactive
  // State représente la partie principale du store, 
  // c'est l'endroit qui va contenir la structure de données de l'application.
  state: () => {
    return {
      topics: [],
    };
  },
  // Les getters représentent des methodes 
  // permettant de récupérer des données du store et 
  // de les manipuler avant sans les modifier.
  getters: {
    getTopicIndex:(state)=>{
      return (topic)=>{
        const found=state.topics.indexOf(topic)
        return found!=-1 ? found+1 : 0;
       }
    },
    getTopicColor:()=>{
      return (topic)=>{
        const couleursCategorie=["blue-grey-lighten-4","red-lighten-4","pink-lighten-4","purple-lighten-4","indigo-lighten-4","blue-lighten-4","cyan-lighten-4","teal-lighten-4","green-lighten-4","light-green-lighten-4","lime-lighten-4","yellow-lighten-4","orange-lighten-4","brown-lighten-4"]
        return couleursCategorie[topic];
      }
      
        
      
    }


  },
  //les actions représentent les manipulatuions de données
  // qui vont être effectuées sur le store.
  actions: {
    async fetchTopics() {
      const response = await fetch('https://tall-otter-40.telebit.io/posts/topics');
      const topics = await response.json();
      
      this.topics = topics;
    }
  },
});
export {useTopicStore};