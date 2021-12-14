import React , {useState, useEffect} from "react";

const useFetch = (url) => {
 const [error, setError] = useState(null);
 const [loading, setLoading] = useState(true);
 const [data, setData] = useState([]);

 
 //Fetching marvel data
 const getData = async  ()=> {
    try {
     await fetch(url, {
         method: 'GET',
     })
     .then(response => response.json())
     .then(json=>setData(json.data))
     setLoading(false)
 } catch (err) {
     setError(err.message)
     setLoading(false)
     console.log(err)
    }
 }

 //Mounting process : One time process
 useEffect(() => {
    getData();
    return () => {
        null
    }
}, [])

return {error,loading,data}
}

export default useFetch;

