import React from 'react';
import './Sysnode.css';
const Mysysnode=(props)=>{
   return (
       <div className="Sysnode" onClick={props.myclick}>
       <span className="fontstyle">{props.sysnode.name}</span> 
       <br/>
       
       <span className="fontstyle">{props.sysnode.state}</span> 
       
       <span className="fontstyle right">进度{props.sysnode.rate_of_progress}%</span>
       <br/>
       <span>阈值|{props.sysnode.threshold}</span>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <span>平均|{props.sysnode.average}</span>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <span>热度|{props.sysnode.hot}</span>
       </div>
   )
}


export default Mysysnode;