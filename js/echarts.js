$(function(){
    // ajax 请求数据
    // $.ajax({
    //     //请求方式
    //     type : "POST",
    //     //请求的媒体类型
    //     contentType: "application/json;charset=UTF-8",
    //     //请求地址
    //     url : "http://xxxx/xxx/xxx/",
    //     //数据，json字符串
    //     data : JSON.stringify(list),
    //     //请求成功
    //     success : function(result) {
    //         //result 为返回结果 即后面的table_data
    //         console.log(result);
    //     },
    //     //请求失败，包含具体的错误信息
    //     error : function(e){
    //         console.log(e.status);
    //         console.log(e.responseText);
    //     }
    // });
    //使用模拟数据
    var table_data = {
        "table":[
            {
                "title":"万元产值综合能耗",
                "xLabelRang":[
                    {
                        "label":"2015"
                    },
                    {
                        "label":"2016"
                    },
                    {
                        "label": "2017"
                    },
                    {
                        "label":"2018"
                    },
                    {
                        "label":"2019"
                    }
                ],
                "yLabelRang":[
                    {
                        "label":"0"
                    },
                    {
                        "label":"100"
                    },
                    {
                        "label":"200"
                    },
                    {
                        "label":"300"
                    },
                    {
                        "label":"400"
                    },
                    {
                        "label":"500"
                    }
                ],
                "data":[
                    {
                        "xLabel":"2015",
                        "yLabel":"20"
                    },
                    {
                        "xLabel":"2016",
                        "yLabel":"120"
                    },
                    {
                        "xLabel":"2017",
                        "yLabel":"250"
                    },
                    {
                        "xLabel":"2018",
                        "yLabel":"310"
                    },
                    {
                        "xLabel":"2019",
                        "yLabel":"490"
                    }
                ]
            },
            {
                "title":"单位面积能耗",
                "xLabelRang":[
                    {
                        "label":"行业1"
                    },
                    {
                        "label":"行业2"
                    },
                    {
                        "label":"行业3"
                    },
                    {
                        "label":"行业4"
                    },
                    {
                        "label":"行业5"
                    }
                ],
                "yLabelRang":[
                    {
                        "label":"0"
                    },
                    {
                        "label":"100"
                    },
                    {
                        "label":"200"
                    },
                    {
                        "label":"300"
                    },
                    {
                        "label":"400"
                    },
                    {
                        "label":"500"
                    }
                ],
                "data":[
                    {
                        "xLabel":"行业1",
                        "yLabel":"20"
                    },
                    {
                        "xLabel":"行业2",
                        "yLabel":"120"
                    },
                    {
                        "xLabel":"行业3",
                        "yLabel":"250"
                    },
                    {
                        "xLabel":"行业4",
                        "yLabel":"310"
                    },
                    {
                        "xLabel":"行业5",
                        "yLabel":"490"
                    }
                ]
            }
        ]
    };
    const x_val = [2015,2018];  // HighLight（int Index/float label）函数的返回值，让指定 柱子 高亮 ,可以为1个或多个
    const start_color = '#83bff6'; //设置渐变色的起始颜色
    const end_color = '#188df0'; //设置渐变色的终止颜色
    const gao_liang_color = 'rgba(0,0,0,0)FF'; //
    const tabel_length = Object.keys(table_data['table']).length; //获取 table_data 表的个数
    $(".nav-tabs a").click(function () {
        const item = $(this).text(); //获取当前选择内容
        const href_value = $(this).attr('href').slice(1); //获取当前内容对应的跳转路径  方便后面画图
        for (var i=0;i<tabel_length;i++){
            const color_list=[]; //存放经过判断后的数组颜色
            if (item == table_data['table'][i]['title']){
                const myChart = echarts.init(document.getElementById(href_value));   // 基于准备好的dom，初始化echarts实例
                const xAxis_data = [];  //存放从 table_data['table'][i]['title'] 里面提取的 X 坐标
                const series_data = []; //存放从 table_data['table'][i]['title'] 里面提取的 X 对应的 Y 值
                //开始从 从 table_data['table'][i]['title']['xLabelRang'] 里面提取的 X 坐标
                for (var j=0;j<(table_data['table'][i]['xLabelRang']).length;j++){
                    xAxis_data.push(table_data['table'][i]['xLabelRang'][j]['label'])
                }
                // //开始从 从 table_data['table'][i]['title']['data'] 里面提取的 X 对应的 Y 值
                for (var j=0;j<(table_data['table'][i]['data']).length;j++){
                    series_data.push(table_data['table'][i]['data'][j]['yLabel'])
                }
                const option = {
                    color: ['#3398DB'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'none'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : xAxis_data,
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel:{
                                interval:0,
                                rotate:40,
                                color: '#FFFFFF'
                            },
                            splitLine:{
                                show: false
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            axisLabel: {
                                color: '#FFFFFF',
                                data:[100,200,300,400,500,600,700]
                            },
                            splitLine:{
                                show: false
                            },
                        }
                    ],
                    series : [
                        {
                            name:'值',
                            type:'bar',
                            barWidth: '30%',
                            data:series_data,
                            itemStyle: {
                                normal: {
                                    color: function (param){
                                        // 根据函数调用的返回值决定那个柱形图高亮，那个不高亮
                                        const jianbian_color = new echarts.graphic.LinearGradient(
                                            0, 0, 0, 1,
                                            [
                                                {offset: 0, color: start_color},
                                                {offset: 0.5, color: end_color}
                                            ]
                                        );
                                        for (var a=0;a<xAxis_data.length;a++){
                                            color_list.push(jianbian_color);
                                        }
                                        for (var k=0;k<x_val.length;k++){
                                            if (x_val[k] ==xAxis_data[param.dataIndex]) {
                                                color_list.splice(param.dataIndex,1,gao_liang_color);
                                            }
                                            // return (x_val[k] == xAxis_data[param.dataIndex])?
                                            //     gao_liang_color:new echarts.graphic.LinearGradient(
                                            //         0, 0, 0, 1,
                                            //         [
                                            //             {offset: 0, color: start_color},
                                            //             {offset: 0.6, color: end_color}
                                            //         ]
                                            //     );
                                        }
                                        console.log(color_list);
                                        return color_list[param.dataIndex]
                                    },
                                    label: {
                                        show: true, //开启显示
                                        position: 'top', // 在上方显示
                                        textStyle: { //数值样式
                                            color: '#FFFFFF',
                                            fontSize: 16
                                        }
                                    },
                                },
                            },
                        },
                    ],
                    animationDuration: 7000
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart.clear();
                myChart.setOption(option);
            }
        }
    });
});