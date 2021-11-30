import { Card,CardContent,Typography,Grid, requirePropFactory } from '@material-ui/core'
import styles from "./styles.module.css"


const Cards = ({profit,cost,sended})=>{
  
    return(
        <div className = {styles.container}>
            <Grid container spacing={3} justify = "center">
                
                <Grid item component = {Card} xs={12} md ={3}  className= {styles.card}>
                        <CardContent className={styles.cardContent}>
                           
                            <Typography variant ="h5">
                                Расходы:{cost}
                            </Typography>
                        </CardContent>
                </Grid>
                <Grid item component = {Card} xs={12} md ={3}  className= {styles.card}>
                        <CardContent>
                         
                            <Typography color="red"variant ="h5">
                            доставленных: {sended}
                            </Typography>
                           
                        </CardContent>
                </Grid>
                <Grid item  sx={{width:"50px"}} component = {Card} xs={12} md ={3}  className= {styles.card}>
                        <CardContent>
                            
                            <Typography variant ="h5">
                            Прибыль:{profit}
                            </Typography>
                           
                        </CardContent>
                </Grid>

            </Grid>
        </div>
        )
}
export default Cards