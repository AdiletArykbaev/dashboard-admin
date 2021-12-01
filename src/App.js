import "./App.css";
import React from "react";
import SMS from "./Components/sms_chart/Chart.jsx";
import state from "./redux/state";
import Search from "./Components/searchCompany/Search";
import Table from "./Components/ClientTable/ClientTable";

function App() {
  let data = [
    { name: "Номад", budget: "8200", nps: "8" },
    { name: "Народный", budget: "20000", nps: "9" },
    { name: "Бонецкий", budget: "11000", nps: "10" },
    { name: "Билимкана", budget: "15500", nps: "10" },
    { name: "Баркад", budget: "14800", nps: "10" },
    { name: "Байтушум", budget: "9900", nps: "8" },
    { name: "Номад", budget: "8200", nps: "8" },
    { name: "Номад", budget: "8200", nps: "8" },
    { name: "Номад", budget: "8200", nps: "8" },
  ];
  let names = data.map((item)=>{
    return item.name
  })
  console.log(names)
  return (
    <div className="App">
      <header>
        <div className="search_bar">
          <Search names={names} />
        </div>
        <div className="app_card">
          <ul className="about_company">
            <li className="company_cost">
              расходы: {state.infoAboutCompany.cost}
            </li>
            <li className="company_profit">
              прибыль: {state.infoAboutCompany.profit}
            </li>
            <li className="sended__messages">
              отправленных сообщений: {state.infoAboutCompany.procent}
            </li>
          </ul>
        </div>
      </header>

      <div className="app__content">
        {state.companys.map((item) => {
          return <SMS sended={item.sended} failed={item.notSended} />;
        })}

        <div className="app__table">
          <Table
            columns={{ name: "Имя Компании", budget: "Бюджет", nps: "Нпс" }}
            data={data}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
