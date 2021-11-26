import React from 'react'
import styles from "./Chart.module.css"
import { Bar } from 'react-chartjs-2';

const chartCompnent = (props) => {

  
    return (
        <div className={styles.wrapper}>
          <Bar   datasetIdKey='id'
  data={{
    labels: ['megacom', 'o', 'beline'],
    datasets: [
      
      {
        id: 1,
        label: 'отправленные',

        data: props.sended,
        backgroundColor:["#00ff00 "],

      },
      {
        id: 2,
        label: 'не отправленные сообщения',
        backgroundColor:["#ff0000"],
        data: props.failed,
      },
      
    ],
    
  }
  
  } />
        </div>
    )
}

export default chartCompnent
