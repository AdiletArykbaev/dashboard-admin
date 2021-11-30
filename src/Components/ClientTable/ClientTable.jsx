import React from 'react'
import styles from "./styles.module.css"





function ClientTable({ columns, data }) {
  

  return (
      <div>
 <table id="customers">
    <tr>
      <th>{columns.name}</th>
      <th>{columns.budget}</th>
      <th>{columns.nps}</th>
    </tr>
    {data.map((item)=>{
    return  <tr>
            <td>{item.name}</td>
            <td>{item.budget}</td>
            <td>{item.nps}</td>
            </tr>
    })}
    
   
  </table>
      </div>
   
  )
}
export default ClientTable