import { useHistory, useParams } from "react-router-dom";
import useFetch from "./customHook";

const BlogDetails = () => {

    const {id} = useParams();
    const history = useHistory();
    
    const data = useFetch('http://localhost:8000/blogs/' + id);

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + data.id, {
            method: 'DELETE'
        }).then(() => {
            console.log("Blog deleted");
            history.push('/');
        })

    }

    return ( 
        <div className="blog-details">
          <h2>{data && data.title}</h2>  
          <h3>Written By {data && data.author}</h3>
          <p>{data && data.body}</p>
          <button onClick={handleClick}>Delete</button>
        </div>
     );
}
 
export default BlogDetails;