import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Arsalan');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author};
        
        fetch('http://localhost:8000/blogs', {
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("New blog added");
            history.push('/');
        });

        
    }

    return ( 
        <div className="create">
            <h2>Add A New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                type="text" 
                required 
                value = {title}
                onChange = {(e)=> setTitle(e.target.value)}
                />

            <label>Blog Body</label>
                <textarea
                required name="" id="" cols="30" rows="10"
                value = {body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>

            <label >Blog Author</label>
            <select 
            value = {author}
            onChange={(e)=>setAuthor(e.target.value)}
            >
                <option value="Arsalan">Arsalan</option>
                <option value="Bane">Bane</option>
                <option value="Batman">Batman</option>
            </select>
            <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;