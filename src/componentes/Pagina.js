import React, { useContext } from "react";
import Context from "./Context";

const Pagina = ()=>{

    const {section} = useContext(Context);

    return(
       <div className="section">
            {section}
       </div>
    );
};

export default Pagina;