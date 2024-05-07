import { useEffect,useState } from "react";
function PostsList(){
    let [posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>
        {
            if(response.ok){
                return response.json();
            }
            throw new Error("Failed to fetch data");
        }

        )
        .then((data)=>{
            console.log(data);
            setPosts(data)
        }

        )
        .catch((error)=>{
            console.log(error);
        })

        
    },[]);
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}
 
export default PostsList;