
import "../components/Viewgraph.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faBell,faPlus,faInfo,faClipboard,faCirclePlus,faCircleMinus,faBars } from "@fortawesome/free-solid-svg-icons";
import Chartbig from "./Chartbig";
function Viewgraph(){

    const pricesargentina =[-1250,750,250,750,-500,1750]
    const datesargentina=["jul 18",2019,"jul 19",2020,"jul 20",2021]

   return (
    <div className="graphcontainerlist">
        <div className="twomaindiv">
            {/* firstform */}
        <div className="graphlist-form">
             <div className="topbuttons">
               <button className="homebtn"><FontAwesomeIcon icon={faHouse} /></button>
               <button >1Y</button>
               <button >2Y</button>
               <button >5Y</button>
               <button >10Y</button>
               <button >All</button>
 
               <button style={{marginLeft:"250px"}} >Update</button>
               <button ><FontAwesomeIcon icon={faBell} /></button>
               <button ><FontAwesomeIcon icon={faPlus} /></button>
               <button ><FontAwesomeIcon icon={faInfo} /></button>
               <button ><FontAwesomeIcon icon={faClipboard} /></button>
               <button >All</button>
             
               
             </div>

             <div className="mainsubhead">
            <div className="subhead">
            <h3>Crude palm oil</h3>
            <p>Crude palm oil|USDMT|Indonesia</p>
            </div>
            <div className="lastbuttons">
            <FontAwesomeIcon icon={faCirclePlus} />
            <FontAwesomeIcon icon={faCircleMinus} />
            <FontAwesomeIcon icon= {faBars} />
            </div>
            </div>
            
            <Chartbig datesargentina={datesargentina} pricesargentina={pricesargentina}/>
            <h4>Crude palm oil(Indonesia,Spot FD,USD/MT)</h4>
        </div>

           {/* second form */}
           <div className="graphlist-form2">
              <div className="form2main">
                 <div className="firstone">
                      <h2 >1670.00</h2>
                      <p >USD/MAT</p>
                      <p style={{paddingBottom:"40px"}}>Indonesia</p>
                 </div>
                 <div className="secondone">
                      <p style={{paddingBottom:"2px"}}>%W-OW Change</p>
                      <div style={{display:"flex",flexDirection:"row",marginLeft:"40px",gap:"40px",marginBottom:"10px"}}>
                      <h3>N/A</h3>
                      <h6 style={{paddingBottom:"40px"}}>N/A</h6>
                      </div>
                      <hr style={{ border: '1px solid gray',marginTop:"10px"}} />

                      <p style={{paddingBottom:"2px"}}>%M-OM Change</p>
                      <div style={{display:"flex",flexDirection:"row",marginLeft:"40px",gap:"30px",marginTop:"20px"}}>
                      <h3>13.61 %</h3>
                      <h6 style={{paddingBottom:"40px"}}>1470.00</h6>
                      </div>
                      <hr style={{ border: '1px solid gray',marginTop:"10px",marginBottom:"20px"}} />

                      <p style={{paddingBottom:"2px"}}>%Q-OQ Change</p>
                      <div style={{display:"flex",flexDirection:"row",marginLeft:"40px",gap:"30px",marginBottom:"10px"}}>
                      <h3>27.48 %</h3>
                      <h6 style={{paddingBottom:"40px"}}>1310.00</h6>
                      </div>

                 </div>
                 
              </div>
           </div>

        </div>
       
    
    </div>

   )
}
export default Viewgraph;