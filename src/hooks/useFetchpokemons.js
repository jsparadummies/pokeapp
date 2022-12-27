import {useState,useEffect} from "react";
   
  const useFetchpokemons = (url) => {
      
      const [pokemons, setpokemons] = useState([]);
     
     
   



    useEffect(() => {
        const getpokemons = async (valor)  => {
     

            let results = await fetch(valor)
            let data = await results.json()
            setpokemons(data);
            
          
     
}
      
      getpokemons(url)
    }, []);
    

    
    return [
        pokemons,
    ]
}

export default useFetchpokemons;
