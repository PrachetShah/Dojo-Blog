import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then(res => {
                    return res.json();
            })
            .then((data) => {
                console.log(data);
                setBlogs(data)
            })
    }, []);

    // //Now it will run again only when name changes.
    // useEffect(() => {
    //     console.log('Use Effect Executed');
    //     console.log(name);
    // }, [name]);
        //Now it will run again only when name changes.
    

    return ( 
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            {/* To segregate Blogs
            <BlogList blogs={ blogs.filter((blog)=> blog.author === 'Prachet') } title="Prachet's Blogs" /> */}
            {/* Create Anonymous Func so we can pass in values and fucntion is not called whenevr site is loaded */}
        </div>
    );
}
 
export default Home;