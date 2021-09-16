// import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  
  //data:blogs ':' here means we can call it data as well as blogs here
  const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

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