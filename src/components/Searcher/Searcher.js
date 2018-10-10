import React from 'react';
import './Searcher.css'
const Mysearcher = (props) => {

    return (
        <div className="Seacher">
            <i className="icon-search"></i>
            <input type="text" onChange={props.myOnchaged}
                className="input-search" placeholder="关键字搜索"></input>
        </div>
    )
}


export default Mysearcher;