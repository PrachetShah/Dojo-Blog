import { useState } from "react";


const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My New Website', body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit", author: "Prachet", id:1 },
        { title: 'My New LEGO Model', body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit", author: "Kevin", id:2 },
        { title: 'My New Cooking Video', body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit", author: "Bhoomi", id:3 },
    ]);
    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>{ blog.author }</p>
                </div>
            ))}
            {/* Create Anonymous Func so we can pass in values and fucntion is not called whenevr site is loaded */}
        </div>
    );
}
 
export default Home;