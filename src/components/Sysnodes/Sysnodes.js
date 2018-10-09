import React from 'react';
import Mysysnode from '../Sysnode/Sysnode';



const Mysysnodes=(props)=>{
    return props.sysnodes.map((sysnode,index)=>{
        return <Mysysnode myclick={()=>props.clicked(index)}
         sysnode={sysnode} key={sysnode.id}/>
    })
}

export default Mysysnodes;




