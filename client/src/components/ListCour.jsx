import React from "react";
import Cour from "./Cour";
const ListCour = ({cours}) => {
  

  return (
    <div>
        {cours.map(cour=> <Cour key={cour.id} cour={cour}/>)}
    
    </div>
  );
}


export default  ListCour;