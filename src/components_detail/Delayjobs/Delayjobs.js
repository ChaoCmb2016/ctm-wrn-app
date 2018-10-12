import React from 'react';
import './Delayjobs.css'
const Mydelayjob = (props) => {
    return (
        <div className="delayjob" >
            <span className="fontstyle">延迟作业:{props.delayjob.name}</span>
            <br />
            <span className="fontstyle">延迟{props.delayjob.minutes}分钟,
            剩余{props.delayjob.num_of_prejobs}个作业</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{props.delayjob.state}</span>
            <br />
            <span>作业负责人|{props.delayjob.jobowner}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>电话|{props.delayjob.tel}</span>
        </div>
    )
}

const Mydelayjobs = (props) => {
    return props.delayjobs.map((delayjob, index) => {
        return <Mydelayjob
            delayjob={delayjob}
            key={delayjob.id} />
    })
}

export default Mydelayjobs;