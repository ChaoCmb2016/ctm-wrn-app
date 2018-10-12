import React, { Component } from 'react';

import MyheaderD from '../components_detail/Header/Header';
import Mywrongjobs from '../components_detail/Wrongjobs/Wrongjobs';
import Mydelayjobs from '../components_detail/Delayjobs/Delayjobs';
import Myotherjobs from '../components_detail/Otherjobs/Otherjobs';
import Myjobstat from '../components_detail/Jobstat/Jobstat'
import { withRouter } from 'react-router-dom';
import Hammer from 'hammerjs';



//有状态组件
class Detail extends Component {
  //构造函数
  constructor(props) { //初始化state的工作要在constructor中完成。
    super(props);
    //在react中，无法获取dom节点，把要改变的值放在state状态机中
    this.state = {
      wrongjobs:[],delayjobs:[],otherjobs:[]
    };
    this.getData();
  }

  getData() {
    fetch(`/jsondatadetail`, { method: 'GET' }).then(res => res.json())
      .then(data => this.setState({
        wrongjobs: data.wrongjobs,
        delayjobs: data.delayjobs,
        otherjobs: data.otherjobs,
      }));

  }


  componentDidMount() {
    this.bindSwipeEvent();
    document.getElementById('detail_div').scrollIntoView(true);
  };
  bindSwipeEvent() {
    var content = document.getElementById('detail_div');
    var hammer = new Hammer(content);
    hammer.get('swipe').set({ threshold: 100 });
    hammer.on("swiperight", e => {
      this.props.history.goBack();
    });

  };
  render() {
    return (
      <div id='detail_div'>
        <MyheaderD title={this.props.location.query.title} />
        <Myjobstat />
        <Mywrongjobs wrongjobs={this.state.wrongjobs}/>
        <Mydelayjobs delayjobs={this.state.delayjobs}/>
        {/* <Myotherjobs otherjobs={this.state.otherjobs}/> */}
      </div>
    );
  }
}

export default withRouter(Detail);
