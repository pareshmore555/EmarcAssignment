
import "../components/GraphListing.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faCirclePlus, faCircleMinus,faBars,faEye } from "@fortawesome/free-solid-svg-icons";
import Chart from "./Chart";
import Chart2 from "./Chart2";
function GraphListing(){
    // indonesia
    const dates = ['jul 18', 'jul 19', 'jul 20', 'jul 21'];
    const prices = [100, 103, 105, 120];
    // indonesia
    const datesargentina = ['2017', '2018', '2019', '2020'];
    const pricesargentina = [400, 550, 760, 100];

  return (
      <div className="graphcontainerlist">
        {/* first card */}
        <div className="graphlist">
         <div className="Topbuttons">
            <button className="btnview"><FontAwesomeIcon icon={faEye} style={{marginRight:"4px"}} />View</button>
            <button className="btndelete"><FontAwesomeIcon icon={faTrash} /></button>
            
         </div>  
         <hr style={{ border: '1px solid gray',marginTop:"20px"}} />
         <div className="mainsub1">
            <div className="subhead">
            <h3>Crude palm oil</h3>
            <p>Crude palm oil|USDMT|Indonesia</p>
            </div>
            <div className="palmoillast">
            <FontAwesomeIcon icon={faCirclePlus} />
            <FontAwesomeIcon icon={faCircleMinus} />
            <FontAwesomeIcon icon= {faBars} />
            </div>
             
         </div>
        {/* another component of chart */}
        <div className="chart">
          <Chart dates={dates} prices={prices} />
        </div>
        <h4>Crude palm oil(Indonesia,Spot FD,USD/MT)</h4>
        </div>
         
         {/* second card */}
        
         <div className="graphlist">
         <div className="Topbuttons">
            <button className="btnview"><FontAwesomeIcon icon={faEye} style={{marginRight:"4px"}} />View</button>
            <button className="btndelete"><FontAwesomeIcon icon={faTrash} /></button>
            
         </div>  
         <hr style={{ border: '1px solid gray',marginTop:"20px"}} />
         <div className="mainsub1">
            <div className="subhead">
            <h3>Caustic soda</h3>
            <p>Caustic soda|USDMT|Argentina</p>
            </div>
            <div className="palmoillast">
            <FontAwesomeIcon icon={faCirclePlus} />
            <FontAwesomeIcon icon={faCircleMinus} />
            <FontAwesomeIcon icon= {faBars} />
            </div>
             
         </div>
        {/* another component of chart */}
        <div className="chart">
          <Chart2 datesargentina={datesargentina} pricesargentina={pricesargentina} />
        </div>
        <h4>Caustic soda(Argentina,CIF,Solid,USD/MT) </h4>
        </div>
    

        

        
      </div>
  )
}
export default GraphListing;