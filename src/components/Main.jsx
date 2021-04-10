import react, { useState } from 'react';
import '../App.css';
import reycle from '../images/377164_331310083549333_857619595_n.jpg'
import OrderTable from './OrderTable'


function Main(){

    // const [orders, setOrders]= useState()
    // const [userInput, setUserInput]= useState(0)
    


    return(
        <div >
        <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'/>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        
        <div>
            <a>aaaa</a>
            <OrderTable/>
            {/* <OrderSum/> */}
        </div>

        </div>
        
    )   
}

export default Main