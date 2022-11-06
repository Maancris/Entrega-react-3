
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({url}) => {

    const [show, setshow] = useState ({});
    useEffect(() =>{
        axios.get (url)
        .then(res => setshow(res.data))
    })
    console.log (show)
    return (

         <div className='residentData'>
            <h2>{show.name}</h2>
            <img src={show.image} className='imgRick'/>
            <div>
             <p>STATUS : <b>{show.status}</b></p> 
             <p className='info4'>ORIGIN NAME : <b>{show.origin?.name}</b></p>
             <p>EPISODE : <b>{show.episode?.length}</b></p>
             </div>
        </div>
    );
};

export default ResidentInfo;