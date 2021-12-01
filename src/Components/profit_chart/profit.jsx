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
        backgroundColor:["#24B90C;"],

      },
      {
        id: 2,
        label: 'Растраты',
        backgroundColor:[" linear-gradient(180deg, rgba(255, 204, 51, 0.1) 0%, rgba(255, 255, 255, 0) 141.68%);"],
        data: props.cost,
      },
      
    ],
    
  }
  
  } />
        </div>
    )
}

export default profit
