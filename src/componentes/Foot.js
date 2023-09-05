import React from "react";

const Foot = () =>{
    return(
        <div className="footer">
            <div className="Contacto">
                <p>Contacto</p>
                <ul>
                    <li className="my_email"> <a href="mailto:srosalesparra@gmail.com">srosalesparra<span className="ar">@</span>gmail.com<div className="email_icon"></div></a></li>
                    <li className="my_github"><a href="https://github.com/SebasRosalesp/SWAPI_REACT">Github<div className="github_icon"></div></a></li>
                </ul>
            </div>
            <div className="Informacion">
                <p>Acerca de la página</p>
                <ul>
                    <li className="swapi"><div className="swapi_icon"></div>
                        <ul>
                            <li>App elaborada en React gracias al APi externo Star Wars Api</li>
                            <li>
                            <a href="https://swapi.dev/">Swapi</a>
                            </li>
                        </ul>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
};

export default Foot;