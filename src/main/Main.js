// import React from 'react'
import Counter from './Counter';
import img from'./img/fondo.jpg';
import './css/Counter.css';


function Main(){
    return(
        <div className='text-center'>
            <Counter datos={['Ethan Andrés', '16246', '5A']} />
            <img src={img} alt="fondo.jpg" class='img'/>
            
        </div>
    )
}

export default Main