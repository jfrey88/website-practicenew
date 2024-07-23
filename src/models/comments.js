const comments = async(idPost)=>{       
    //const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}/comments`);
    //const data = await response.json();  
    //console.log(data)
    let data=[];
    const tabRec=getCommentsForPost(idPost);
    //console.log(tabRec);    
    tabRec.forEach((element) =>{
        element.id=data.length+1;
       // console.log(element);
        data.push(element)
    })
    //data.push(rec);
    return data;
}

const getCommentsForPost=(idPost)=>{
    const chaineTabCommentaire=localStorage.getItem("commentaires");
    
    const tabCommentaire=JSON.parse(chaineTabCommentaire);
    
    let tabCommentaireDeLid=[];
    console.log(tabCommentaireDeLid);
    console.log(tabCommentaire);
    for(let i=0;i<tabCommentaire.length;i++)
    {
        console.log('postId comm =',tabCommentaire[i].postId,' idPost=',idPost,' test :',tabCommentaire[i].postId==idPost);
        if (tabCommentaire[i].postId==idPost)
        {
            console.log('je suis ici');
            tabCommentaireDeLid.push(tabCommentaire[i]);
        }
        console.log(tabCommentaireDeLid);
    }
  
    return tabCommentaireDeLid
}

const addCommentForPost=(idPost,comment)=>{
   // console.log("le commentaire brut ",comment);

    //on stringify le commentaire, son auteur et l'email
    

    let tabAncienPost= getCommentsForPost(idPost);
    comment.postId=idPost;
    tabAncienPost.push(comment);
    //console.log(tabAncienPost);
    let chaineComment=JSON.stringify(tabAncienPost);
    //console.log(chaineComment);

    localStorage.setItem("commentaires",chaineComment)
    //on lit ce qui est dejà dans les commentaire

    //localStorage.setItem("lastname", comment.value.lastname);

}

const clearComment=(idPost)=>{
    const chaineTabCommentaire=localStorage.getItem("commentaires");
    
    const tabCommentaire=JSON.parse(chaineTabCommentaire);
    console.log(tabCommentaire)
    tabCommentaire.forEach(function(item,index,objet)
        {
            
            if (item.postId==idPost)
            {
                
                objet.splice(index,1);
            }
           
        })
        console.log(tabCommentaire)
        let chaineComment=JSON.stringify(tabCommentaire);
        localStorage.setItem("commentaires",chaineComment)
        return  
}


export {comments,addCommentForPost,clearComment}