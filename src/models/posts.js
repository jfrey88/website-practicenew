const posts =async()=>{       
   // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const response = await fetch('https://tall-otter-40.telebit.io/posts/all');
   const data = await response.json();  
    return data;
}

const post = async(idPost)=>{
    const response = await fetch(`https://tall-otter-40.telebit.io/posts/${idPost}`);
    const data = await response.json();  
    return data
}



export {posts, post}
