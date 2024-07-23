const categories =async()=>{       
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
     const response = await fetch('https://tall-otter-40.telebit.io/posts/topics');
    const data = await response.json();  
     return data;
 }

 const postsCategorie = async(nomCategorie)=>{
    const response = await fetch(` https://tall-otter-40.telebit.io/posts?topic=${nomCategorie}`);
    const data = await response.json();  
    return data
}

const postCategorie = async(nomCategorie,id)=>{
    const response = await fetch(` https://tall-otter-40.telebit.io/posts?topic=${nomCategorie}`);
    const data = await response.json();  

    return data[id]
}
 export {categories,postsCategorie,postCategorie}