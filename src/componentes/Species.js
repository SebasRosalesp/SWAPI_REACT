import React, {useState, useEffect} from "react";
import Person from "./Person";


const Species = ()=>{
    const [specie, setSpecie] = useState('null');

    useEffect(()=>{
        const fetchSpecie = async ()=>{
            const response = await fetch(specie);
            const data = await response.json();
            setSpecie(data);
        };
        
        fetchSpecie();
    
    },[]);
    
    if(!specie){
        return<div>Cargando...</div>
    }
    
    
    
    return(
        <p>Especie: {specie.name}</p>
    )
}

export default Species;