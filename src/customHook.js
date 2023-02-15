import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setBlogs] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(res => {
          return res.json();
        })
        .then( data => {
          console.log(data);
          setBlogs(data);
        });
      }, [url]);

      return (data);
}
 
export default useFetch;