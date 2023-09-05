import React, {useState, useEffect} from "react";

const Person = ({personId}) => {
    const [person, setPerson] = useState(null);

    useEffect(()=>{
        const fetchPerson = async ()=>{
            const response = await fetch(`https://swapi.dev/api/people/${personId}`);
            const data = await response.json();
            setPerson(data);
        };
        
        fetchPerson();

    },[personId]);

    if(!person){
        return(
        <div className='card-group'>
            <div className="picContainer"></div>
            <div className="estrellas"></div>
            <div className="loader"></div>
        </div>
        );
    }

    let src = '';

    switch(personId){
        
        case 1:
            src = 'img1';
            break;
        case 2:
            src = 'img2';
            break;
        case 3:
            src = 'img3';
            break;
        case 4:
            src = 'img4';
            break;
        case 5:
            src = 'img5';
            break;
        case 6:
            src = 'img6';
            break;
        case 7:
            src = 'img7';
            break;
        case 8:
            src = 'img8';
            break;
        case 9:
            src = 'img9';
            break;
        case 10:
            src = 'img10';
            break;
        default:
            break;
    };
    
    return(
        <div className='card-group'>
            <div className="picContainer">
                <div className={src} id="img"></div>
            </div>
            <div className="estrellas"></div>
            <div className="text">
                
                <div className="info">
                    <p>Nombre: {person.name}</p>
                    <p>Altura: {person.height} Cm</p>
                    <p>Peso: {person.mass} Kg</p>
                </div>
                <div className="info2">
                    <p>Cabello: {person.hair_color}</p>
                    <p>Piel: {person.skin_color}</p>
                    <p>Género: {person.gender}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Person;