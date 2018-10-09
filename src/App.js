import React, { Component } from 'react';
import './App.css';
import Myheader from './components/Header/Header';
import Mysearch from './components/Searcher/Searcher';
import Mysysnodes from './components/Sysnodes/Sysnodes'


//有状态组件
class App extends Component {
  //构造函数
  constructor(props) {
    super(props);
    this.state = {
      sysnodes: [], sysnodesString: [], tmpsysnodes: []
    }
    this.getData();
  }

  getData() {
    fetch(`/jsondata`, { method: 'GET' }).then(res => res.json())
      .then(data => this.setState({
        sysnodes: data.sysnodes,
        tmpsysnodes: data.tmpsysnodes
      }));
  }


  stepIntoDetail = (sysIndex) => {
    alert("待后续开发");
  }

  inputTestChanged = (event) => {
    const tmpsysnodes=this.state.tmpsysnodes;
    this.setState({
      sysnodes:tmpsysnodes
    });
    // console.log("once");
    // console.log(this.state.sysnodes) 
    // etState调用后并不是立即执行，
    // 需要走完react的生命周期，到到render的时候，state的值才改变。
    // 解决方法，setState的第二个参数，是回调函数，
    // 把state改变后的需要执行的代码放在回调函数中，这样就可以保证，
    // setState生效后，才执行，因此可以实现改变state生效
    if(event.target.value){
      const hitSysnodes = this.state.tmpsysnodes.filter(sysnode => {
        return JSON.stringify(sysnode).indexOf(event.target.value)!==-1;
      })
      console.log(event.target.value);
      console.log(hitSysnodes.length);
      this.setState({
        sysnodes:hitSysnodes
      });
    }
    
  }


  render() {
    let sysnodes = <Mysysnodes sysnodes={this.state.sysnodes}
      clicked={this.stepIntoDetail} />;

    return (
      <div>
        <Myheader/>
        <Mysearch myOnchaged={this.inputTestChanged}/>
        {sysnodes}
      </div>
    );
  }
}

export default App;
