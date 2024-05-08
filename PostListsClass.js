import React,{Component} from "react";
//define class with state objects posts and isloaded initialized in constructor
class PostListsClass extends Component {
    constructor(props) {
        super(props);
       this.state = {
            posts: [],
            isLoaded:true
            
}
      }
    
    
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then(postList => {
            this.setState({ posts: postList ,
                isLoaded: false
            });
        }
        ,
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        // (error) => {
        //   this.setState({
        //     isLoaded: false,
        //     error
        //   });
        // }
    );
    }
    
    render() {
        return (
            <>
            <h1>Posts</h1>
 
            {/* if loading show loading message else show postlist */}
 
                {this.state.isLoaded ? <h1>Loading...</h1> :             
            <ul>
                {this.state.posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            }
             
             </>
        )
    }
}
export default PostListsClass;