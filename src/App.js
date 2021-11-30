import './App.css';
import React from "react"
import SMS from "./Components/sms_chart/Chart.jsx"
import Profit from "./Components/profit_chart/profit"
import state from "./redux/state"
import Search from './Components/searchCompany/Search';
import Card from "./Components/card/Card"
import Table from "./Components/ClientTable/ClientTable"

function App() {
  let data = [{name:"Номад",budget:"8200",nps:"8"}]


  return (
    <div className="App">
      <div className="app__wrapper">
      <div className="search_form">
        <Search companys={state.companys}/>
      </div>
        
           
            <div className="text">
         
         <Card profit={state.infoAboutCompany.profit} cost={state.infoAboutCompany.cost} sended={state.infoAboutCompany.procent}/>
       
      </div>
      <div className="bar_statistics">
    {
     state.companys.map((item)=>{
       return <SMS sended={item.sended} failed={item.notSended}  />
   
     })
 }
 
      </div>
      <div className="clientTable">
          <Table columns={{name:"Имя Компании",budget:"Бюджет",nps:"Нпс"}} data={data}/>
      </div>
      </div>
    
      
   
    </div>
  );
}

export default App;
