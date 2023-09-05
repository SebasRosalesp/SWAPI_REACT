import React, { useState } from "react";
import Context from "./Context";
import CardGeneratorPerson from "./CardGeneratorPerson";
import CardGeneratorPlanet from "./CardGeneratorPlanets";
import CardGeneratorNave from "./CardGeneratorNaves";

const StateCompo = ({children}) =>{
    
    const [section, setSection] = useState(<CardGeneratorPerson/>);

    const personajes = () =>{
        setSection(<CardGeneratorPerson/>)
    }
    const planetas = () =>{
        setSection(<CardGeneratorPlanet/>)
    };
    const naves = () =>{
        setSection(<CardGeneratorNave/>);
    };

    return(
        <Context.Provider
        value={{
            section,
            personajes,
            planetas,
            naves,
        }}>
            {children}
        </Context.Provider>
    )
};

export default StateCompo;