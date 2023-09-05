import React,{useState, useEffect} from "react";

const Planet = ({planetId})=>{
    const [planet, setPlanet] = useState(null);

    useEffect(()=>{
        const fetchPlanet = async ()=>{
            const response = await fetch(`https://swapi.dev/api/planets/${planetId}/`)
            const data = await response.json();
            setPlanet(data);
        };
        
        fetchPlanet();
    },[planetId]);

    if(!planet){
        return <div>Cargando...</div>
    }
    
    let src = '';

    switch(planetId){
        
        case 1:
            src = 'imgplanet1';
            break;
        case 2:
            src = 'imgplanet2';
            break;
        case 3:
            src = 'imgplanet3';
            break;
        case 4:
            src = 'imgplanet4';
            break;
        case 5:
            src = 'imgplanet5';
            break;
        case 6:
            src = 'imgplanet6';
            break;
        case 7:
            src = 'imgplanet7';
            break;
        case 8:
            src = 'imgplanet8';
            break;
        case 9:
            src = 'imgplanet9';
            break;
        case 10:
            src = 'imgplanet10';
            break;
        default:
            break;
    };
    return(
        <div className='card-group'>
            <div className="estrellas"></div>
            <div className="picContainer">
                <div className={src} id="img"></div>
            </div>
            <div className="text">
            
                <div className="info">
                    <p>Nombre: {planet.name}</p>
                    <p>Clima: {planet.climate}</p>
                    <p>Poblacion: {planet.population}</p>
                    <p>Diametro: {planet.diameter} Km</p>
                </div>
                <div className="info2">
                    <p>Periodo Orbital: {planet.orbital_period} Horas</p>
                    <p>Superficies de agua: {planet.surface_water}</p>
                    <p>Gravedad: `{planet.gravity}</p>
                    <p>Terreno: {planet.terrain}</p>
                </div>
            </div>
        </div>
    );
};

export default Planet;