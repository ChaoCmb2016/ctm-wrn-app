import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class Myjobstat extends Component {


    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var content=document.getElementById('main');
        console.log(window.screen.availWidth,window.screen.availHeight*0.4);
        content.style.width=window.screen.availWidth+'px';
        content.style.height=window.screen.availHeight*0.5+'px';
        
        var myChart = echarts.init(content);
        // 绘制图表
        myChart.setOption({
            title: { text: '系统相关作业统计数据',
            textStyle:{
                color :'black',
                fontStyle :'oblique',
                fontWeight :'bold',
                fontSize :'15'
            },
            x:'center',y:'bottom'},
            tooltip: {},
            xAxis: {
                data: ["完成", "报错","等待条件", "等待资源","执行"],
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10]
            }]
        });
    }




    render() {
        return (
            <div id="main"></div>
        );
    }
}

export default Myjobstat;