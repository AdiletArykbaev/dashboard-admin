import React from 'react'
import {NativeSelect,FormControl} from "@material-ui/core"
import styles from "./styles.module.css"




const Search = ({names}) => {
   
    return (
       
    
        <div>
         <FormControl className={styles.formControl}>
             <NativeSelect className={styles.companyCounter}>
               <option value="global">Общая информация</option>

                {names.map((item)=>{
                        return  <option value="Optima">{item}</option>
                })}
               
             </NativeSelect>
   

         </FormControl>
        </div>
    )
}


export default Search
