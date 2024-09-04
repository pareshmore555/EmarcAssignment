
import "../components/Graphform.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Graphform(){
const [addvalue,setAddvalue]=useState(0)

function Addone(){
   setAddvalue(addvalue+1)
}
function Minusone(){
  setAddvalue(addvalue-1)
}


    return(
       <div className="graph-container">
        
        
        <form className="Graph-form">
        <div className="heading">
        <h2>Manage product price trend</h2>
        <button className="addchanges">Add changes</button>
        </div>
          <div className="inputs">
          <input type="text" className="input1" />  
          <input type="text"  className="input2"/> 
          </div>
          <div className="firstrow">
            <div className="inputwrapper">
            
            <input type="text" className="priceinput" ></input> 
            <FontAwesomeIcon icon={faSortUp} onClick={Addone} ></FontAwesomeIcon>
            <FontAwesomeIcon icon={faSortDown} onClick={Minusone}></FontAwesomeIcon>
            <input type="text" className="calenderinput"></input>
             <button className="add">+</button>
            </div>
           
          </div>
        
          <div className="secondrow">
            <div className="inputwrapper">
            
            <input type="text" className="priceinput"></input>
            <FontAwesomeIcon icon={faSortUp} onClick={Addone} ></FontAwesomeIcon>
            <FontAwesomeIcon icon={faSortDown} onClick={Minusone}></FontAwesomeIcon>
            <input type="text" className="calenderinput"></input>
             <button className="minus">-</button>
            </div>
           
          </div>

        </form>
       </div>
    )
}
export default Graphform;