import react from 'react';
import '../App.css';
import headerImage from '../images/complete-order-492040.png'



function Header(){
    return(
        <div className='rootHeader'>      
            <img className="headerImage" src={headerImage}/>
            <h2>דף הזמנות</h2>   
        </div>
    )
}

export default Header;

