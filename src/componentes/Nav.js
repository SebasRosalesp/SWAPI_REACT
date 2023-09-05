import React, {useContext} from "react";
import Context from "./Context";
import './Card.css'

const Nav = () => {

    const {personajes, planetas, naves} = useContext(Context);

    return(
        <div className="navContainer">
            <div className="icon"></div>
            <div className="nav">
                <button onClick={()=>personajes()}>Personajes</button>
                <button onClick={()=>planetas()}>Planetas</button>
                <button onClick={()=>naves()}>Naves espaciales</button>
            </div>
        </div>
    );
};
export default Nav;