import { defineStore } from "pinia";

const useCommentStore = defineStore('comment', {
  // state est une fonction afin d'être réactive
  // State représente la partie principale du store, 
  // c'est l'endroit qui va contenir la structure de données de l'application.
  state: () => {
    return {
      comments: [],
    };
  },
  // Les getters représentent des methodes 
  // permettant de récupérer des données du store et 
  // de les manipuler avant sans les modifier.
  getters: {


  },
  //les actions représentent les manipulatuions de données
  // qui vont être effectuées sur le store.
  actions: {
     addCommentForPost(idPost,commentaire){
  
   
       //on stringify le commentaire, son auteur et l'email
       
     // let 
       let tabAncienPost= this.getCommentsForPost(idPost);
       if (tabAncienPost===undefined)
       {
        tabAncienPost=[];
       }
      //  console.log("addCommentForPost--------------- tabAncienPost -----------------------");
      //  console.log(tabAncienPost);
       commentaire.postId=idPost;
       tabAncienPost.push(commentaire);
      //  console.log("addCommentForPost--------------- tabAncienPost avec le nouveau commentaire -----------------------");
      //  console.log(tabAncienPost);
       let chaineComment=JSON.stringify(tabAncienPost);
       localStorage.setItem("commentaires",chaineComment)
       location.reload();
       },
        
      
   
      //  
   
   
      //  
       //on lit ce qui est dejà dans les commentaire
   
       //localStorage.setItem("lastname", comment.value.lastname);
   
   
    getCommentsForPost(id){
      const chaineTabCommentaire=localStorage.getItem("commentaires");
      // console.log("getCommentsForPost--------------- chaineTabCommentaire -----------------------");
      // console.log(chaineTabCommentaire);
      const tabCommentaire=JSON.parse(chaineTabCommentaire);
      // console.log("getCommentsForPost--------------- tabCommentDuPost -----------------------");
      const tabCommentDuPost=tabCommentaire.filter(elt => elt.postId==id)
      // console.log(tabCommentDuPost);
      
  
    return tabCommentDuPost
}
  },
});
export {useCommentStore};