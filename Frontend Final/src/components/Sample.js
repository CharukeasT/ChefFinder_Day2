import React from 'react'
import '../assets/FindChef.css'
import SampleCard from './SampleCard'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
function Sample() {
    // const [chef,setChef] = useState([]);
    // useEffect(() => {
    //     axios.get('http://localhost:8082/api/v1/auth/showChefDetails',
    //     {
    //         // headers:{
    //         //     "Author"
    //         // }
    //     })
    // })
    const chef = [
        {id:1,name:"Charu",experience:4,rating:4.5},
        {id:2,name:"Ajay",experience:3,rating:4.2},
        {id:3,name:"Chandru",experience:5,rating:4.3},
        {id:4,name:"Abishek",experience:7,rating:4.7},
        {id:5,name:"Jason",experience:6,rating:4.3},
        {id:6,name:"Vijay",experience:1,rating:4.1},
        {id:7,name:"Indhu",experience:2,rating:4.2},
        {id:8,name:"Imay",experience:3,rating:4.3},
        {id:9,name:"Kumar",experience:4,rating:4.4},
    ]
    // const filter = chef.filter(chef => )
  return (
    <div className='divfc'>
        {chef.map(data =>(
                <SampleCard details={data}/>

        ))}
    </div>
  )
}

export default Sample