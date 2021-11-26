import './App.css';
import SMS from "./sms_chart/Chart.jsx"
import Profit from "./profit_chart/profit"

function App() {
  const state = [{
      name:"Farma",
      sended:[2500,2600,16900],
      notSended: [156,280,190]
  },]

    let procent = "99%"
    let cost = "265 478,03"
    let profit = "202 317,75"
  return (
    <div className="App">
      <div className="sms_info">
      <div className="bar_statistics">
         {
          state.map((item)=>{
            return <SMS sended={item.sended} failed={item.notSended}  />
        
          })
      }
      
           </div>
           <div className="text">
              <h3 className="procent_of_sended">
                  доставленных:{procent}
              </h3>
              <div className="cost_of_company"> 
                 <h4> доход компании:{cost}</h4>
                 <h4> расход компании:{profit}</h4>
              </div>
           </div>
      </div>
     <div className="profit_company">

     </div>
    </div>
  );
}

export default App;
