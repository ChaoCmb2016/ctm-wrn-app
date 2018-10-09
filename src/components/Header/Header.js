import React from 'react';
import './Header.css'

const Myheader=()=>{

    var addSys=()=>{
       alert("待后续开发")
    }

    return (
        <div className="Header">
            <h2 id="title">准实时预警展现</h2>
            <img id="add" src="add.png" alt="新增预警点" onClick={addSys}></img>
        </div>
    )
}


export default Myheader;