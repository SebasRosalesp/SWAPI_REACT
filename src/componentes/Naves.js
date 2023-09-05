import React,{useState, useEffect} from "react";

const Nave = ({naveId})=>{
    const [nave, setNave] = useState(null);

    useEffect(()=>{
        const fetchNave = async ()=>{
            const response = await fetch(`https://swapi.dev/api/starships/${naveId}/`);
            const data = await response.json();
            setNave(data);
        };
        
        fetchNave();
        
    },[naveId]);

    if(!nave){
        return( 
        <div className='card-group'>
            <div className="picContainer"></div>
            <div className="estrellas"></div>
            <div className="loader"></div>
    </div>);
    }
    
    let src = '';

    switch(naveId){ 
        
        case 2:
            src = 'imgnave1';
            break;
        case 3:
            src = 'imgnave2';
            break;
        case 5:
            src = 'imgnave3';
            break;
        case 9:
            src = 'imgnave4';
            break;
        case 10:
            src = 'imgnave5';
            break;
        case 11:
            src = 'imgnave6';
            break;
        default:
            break;
    };

    return(
        <div className='card-group'>
            <div className="picContainer">
                <div className={src} id="img"></div>
            </div>
            <div className="text">
            <div className="estrellas"></div>
                <div className="info">
                    <p>Nombre: {nave.name}</p>
                    <p>Modelo: {nave.model}</p>
                    <p>Creador: {nave.manufacturer}</p>
                </div>
                <div className="info2">
                    <p>Capacidad de pasajeros: {nave.passengers}</p>
                    <p>Largo: {nave.length} M</p>
                    <p>Tipo de Nave: {nave.starship_class}</p>
                </div>
            </div>
        </div>
    );
};

export default Nave;