import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const[error, setError] = useState(null);

  // npx json-server --watch data/db.json --port 8000 to run the fetch request database
  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
            console.log(res)
            if(!res.ok){
                throw Error('Could not fetch the data for that resource');
            }
            return res.json();
        })
        .then(data => {
            setBlogs(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            setError(err.message);
            setIsPending(false);
        })
    }, 1000);
  }, [])

    // //Now it will run again only when name changes.
    // useEffect(() => {
    //     console.log('Use Effect Executed');
    //     console.log(name);
    // }, [name]);
    //Now it will run again only when name changes.

  return (
    <div className="home">
        {error && <div>{error}</div>}
      { isPending && <div>Loading...</div> }
      {blogs && <BlogList blogs={blogs} />}
       {/* To segregate Blogs
            <BlogList blogs={ blogs.filter((blog)=> blog.author === 'Prachet') } title="Prachet's Blogs" /> */}
        {/* Create Anonymous Func so we can pass in values and fucntion is not called whenevr site is loaded */}
    </div>
  );
}
 
export default Home;