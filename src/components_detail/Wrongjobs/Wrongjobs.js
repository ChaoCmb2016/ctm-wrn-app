import React from 'react';
import './Wrongjobs.css'
const Mywrongjob = (props) => {
    return (
        <div className="wrongjob" >
            <span className="fontstyle">报错作业:{props.wrongjob.name}</span>
            <br />
            <span className="fontstyle">报错信息:{props.wrongjob.information}</span>
            <br />
            <span>作业负责人|{props.wrongjob.jobowner}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>电话|{props.wrongjob.tel}</span>
        </div>
    )
}

const Mywrongjobs = (props) => {
    return props.wrongjobs.map((wrongjob, index) => {
        return <Mywrongjob
            wrongjob={wrongjob}
            key={wrongjob.id} />
    })
}

export default Mywrongjobs;