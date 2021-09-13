import { useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My New Website', body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit", author: "Prachet", id:1 },
        { title: 'My New LEGO Model', body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit", author: "Kevin", id:2 },
        { title: 'My New Cooking Video', body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit", author: "Prachet", id:3 },
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    };

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            {/* To segregate Blogs
            <BlogList blogs={ blogs.filter((blog)=> blog.author === 'Prachet') } title="Prachet's Blogs" /> */}
            {/* Create Anonymous Func so we can pass in values and fucntion is not called whenevr site is loaded */}
        </div>
    );
}
 
export default Home;