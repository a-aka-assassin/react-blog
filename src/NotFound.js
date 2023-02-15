import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry!!!!</h2>
            <p>This page does not exist</p>
            <Link to="/">
                <button>Go To Home</button>
            </Link>
        </div>
     );
}
 
export default NotFound;