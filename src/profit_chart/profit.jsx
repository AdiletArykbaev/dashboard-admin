import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import styles from "./profit.module.css"

const profit = (props) => {
    return (
        <div className={styles.wrapper}>
            <Doughnut data={{
    labels: ['прибыль', 'растраты'],
    datasets: [
      
      {
        id: 1,
        label: 'прибыль',

        data: props.profit,
        backgroundColor:["#00ff00 "],

      },
      {
        id: 2,
        label: 'Растраты',
        backgroundColor:["#ff0000"],
        data: props.cost,
      },
      
    ],
    
  }
  
  } />
        </div>
    )
}

export default profit
