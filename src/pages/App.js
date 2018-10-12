import React, { Component } from 'react';
import './App.css';
import Myheader from '../components/Header/Header';
import Mysearch from '../components/Searcher/Searcher';
import Mysysnodes from '../components/Sysnodes/Sysnodes';
import { withRouter } from 'react-router-dom';
import Hammer from 'hammerjs';


//有状态组件
class App extends Component {
  //构造函数
  constructor(props) {
    super(props);
    this.state = {
      sysnodes: [], tmpsysnodes: []
    }
    this.getData();
    this.bindSwipeEvent = this.bindSwipeEvent.bind(this);
  }

  getData() {
    fetch(`/jsondata`, { method: 'GET' }).then(res => res.json())
      .then(data => this.setState({
        sysnodes: data.sysnodes,
        tmpsysnodes: data.tmpsysnodes
      }));
      //console.log(123);
  }
  componentDidMount() {
    this.bindSwipeEvent();
    // document.getElementById('content').scrollIntoView(true);
  };
  bindSwipeEvent(e) {
    var content = document.getElementById('content');
    var hammer = new Hammer(content);
    hammer.get('swipe').set({ threshold: 100 });
    hammer.on("swiperight", e => {
      this.getData();
    });

  };

  stepIntoDetail = (sysIndex) => {
    this.props.history.push({
      pathname: '/detail',
      query: {
        title: this.state.sysnodes[sysIndex].name,
        name: '董超'
      }
    });
  }

  inputTestChanged = (event) => {
    const tmpsysnodes = this.state.tmpsysnodes;
    this.setState({
      sysnodes: tmpsysnodes
    });
    // console.log("once");
    // console.log(this.state.sysnodes) 
    // etState调用后并不是立即执行，
    // 需要走完react的生命周期，到到render的时候，state的值才改变。
    // 解决方法，setState的第二个参数，是回调函数，
    // 把state改变后的需要执行的代码放在回调函数中，这样就可以保证，
    // setState生效后，才执行，因此可以实现改变state生效
    if (event.target.value) {
      const hitSysnodes = this.state.tmpsysnodes.filter(sysnode => {
        return JSON.stringify(sysnode).indexOf(event.target.value) !== -1;
      })
      console.log(event.target.value);
      console.log(hitSysnodes.length);
      this.setState({
        sysnodes: hitSysnodes
      });
    }
  }

  componentWillUnmount() {

  }

  render() {
    let sysnodes = <Mysysnodes sysnodes={this.state.sysnodes}
      clicked={this.stepIntoDetail} />;

    return (
      <div id="content">
        <Myheader />
        <Mysearch myOnchaged={this.inputTestChanged} />
        {sysnodes}
      </div>
    );
  }
}

export default withRouter(App);
