import { useState } from "react";


const Home = () => {
    // let name="Prachet";
    const [name, setName] = useState('Prachet')

    const handleClick = () => {
        setName('Kevin')
    }
    
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={ handleClick }>Click Me</button>
            {/* Create Anonymous Func so we can pass in values and fucntion is not called whenevr site is loaded */}
        </div>
    );
}
 
export default Home;