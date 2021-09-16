import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);
    
    // npx json-server --watch data/db.json --port 8000 to run the fetch request database
    useEffect(() => {
        setTimeout(() => {
        fetch(url)
            .then(res => {
                console.log(res)
                if(!res.ok){
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            })
        }, 1000);
    }, [url]);

    return {data, isPending, error}
}

export default useFetch;