import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from './customHook';
const Home = () => {

    const [name, setName] = useState('Mario');
    const blogs = useFetch('http://localhost:8000/blogs');
   
   
    return ( 
        <div className="home">
          { blogs && <BlogList blogs={blogs} title = "All Workouts!"/>}
          { blogs && <BlogList blogs = { blogs.filter((blog) => blog.author === 'Arsalan')} title = "Arsalan's Blogs"></BlogList> }
          <button onClick={() => setName('Arnold')}>Invoke useEffect</button>
          <p>{name}</p>
        </div>
     );
}
 
export default Home;