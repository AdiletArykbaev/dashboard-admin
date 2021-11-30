import React from 'react'
import {NativeSelect,FormControl} from "@material-ui/core"
import styles from "./styles.module.css"



const search = (props) => {

  
    return (
        <div>
         <FormControl className={styles.formControl}>
             <NativeSelect className={styles.companyCounter}>
                <option value="Farma">Farma</option>
                <option value="Optima">Optima</option>
             </NativeSelect>
   

         </FormControl>
        </div>
    )
}


export default search
