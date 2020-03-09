var series1 = null;
var series2 = null;
var series3 = null;

$(function () {
  
    var table_data = {
        "title": "张江南区概况",
        "data": {
            "value1": "XQXY20190819001",
            "value2": "漳化线12",
            "value3": "削峰事件",
            "value4": "供需调控",
            "value5": "6mw",
            "value6": "6.03mw",
            "value7": "2019.09.19 14:30",
            "value8": "25",
            "value9": "5.7万元",
            "value10": "24小时",
            "value11": "2019-09-20 12:30-14:50",
        }

    };
    series1 = {
        type: "gauge", //刻度轴表盘
        radius: "80%", //刻度盘的大小
        center: ["50%", "50%"], //刻度盘的位置
        splitNumber: 10, //刻度数量
        startAngle: 225, //开始刻度的角度
        endAngle: -45, //结束刻度的角度
        axisLine: { //刻度的线条
            show: true,
            lineStyle: {
                width: 40, //定义一个宽15的数轴
                color: [ //颜色为渐变色
                    [
                        0.9,
                        new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                            offset: 0,
                            color: "rgba(255,0,0,0)"
                        },
                        {
                            offset: 1,
                            color: "rgba(255,0,0,1)"
                        }
                        ])
                    ],
                    [1, "rgba(0,0,0,0)"]
                ],
                shadowBlur: 40,
                shadowColor: '#F00',
            }
        },//刻度样式
        splitLine: { //文字和刻度的偏移量
            show: false,
            length: 20, //便宜的长度
            lineStyle: {
                width: 5,
                color: "#fff",
            }
        },
        axisLabel: { //表盘上的刻度数值文字
            show: false
        },
        axisTick: { //表盘上的刻度线
            show: false
        },
        pointer: { //表盘上的指针
            show: false
        },
        itemStyle: {//表盘指针的颜色
            color: '#18c8ff'
        },
        title: { //标题
            show: true,
            offsetCenter: [0, "-26%"], // x, y，单位px
            textStyle: {
                color: "#fff",
                fontSize: 20 //表盘上的标题文字大小
            }
        },
        //仪表盘详情，用于显示数据。
        detail: {
            show: true,
            offsetCenter: [0, '0%'],
            color: '#ffffff',
            formatter: '{a|{value}}{b|%}',
            rich: {
                a: {
                    fontSize: 100,
                    // fontFamily: '庞门正道标题体',
                    color: '#FFF',
                    textShadowBlur: 20,
                    textShadowColor: '#F00',
                    padding: [0, 0, 0, 36]
                },
                b: {
                    fontSize: 40,
                    // fontFamily: '庞门正道标题体',
                    color: '#FFF',
                    textShadowBlur: 20,
                    textShadowColor: '#F00',
                    padding: [0, 0, 30, 0]
                }
            }
        },
        data: [ //当前数值的数据
            {
                //  name: "当前合格率",
                value: 104
            }
        ]
    };
    series2 = {
        center: ["50%", "50%"], //仪表的位置
        name: "刻度", //仪表的名字
        type: "gauge", //统计图类型为仪表
        radius: "70%", //统计图的半径大小
        min: 0, //最小刻度
        max: 120, //最大刻度
        splitNumber: 8, //刻度数量
        startAngle: 225, //开始刻度的角度
        endAngle: -45, //结束刻度的角度
        axisLine: { //设置默认刻度盘上的刻度不显示，重新定义刻度盘
            show: true,
            lineStyle: {
                width: 5,
                color: [
                    [1, "rgba(255,255,255,1)"]
                ]
            }
        }, //仪表盘轴线
        axisLabel: { //仪表盘上的数据
            show: false,
            color: "#4d5bd1", //仪表盘上的轴线颜色
            distance: 25, //图形与刻度的间距
            formatter: function (v) { //刻度轴上的数据相关显示
                switch (v + "") {
                    case "0":
                        return "0";
                    case "2":
                        return "2W";
                    case "4":
                        return "4W";
                    case "6":
                        return "6W";
                    case "8":
                        return "8W";
                    case "10":
                        return "10W";
                    case "12":
                        return "12W";
                    case "14":
                        return "14W";
                    case "16":
                        return "16W";
                }
            }
        }, //刻度标签。
        axisTick: {
            show: true,
            splitNumber: 7, //刻度的段落数
            lineStyle: {
                color: '#fff',
                width: 5 //刻度的宽度
            },
            length: 0 //刻度的长度
        }, //刻度样式
        splitLine: { //文字和刻度的偏移量
            show: true,
            length: 0, //便宜的长度
            lineStyle: {
                width: 5,
                color: "#fff",
            }
        },
        detail: {
            show: false,
        }
    };
    series3 = {
        center: ["50%", "50%"], //仪表的位置
        name: "外边框", //仪表的名字
        type: "gauge", //统计图类型为仪表
        radius: "80%", //统计图的半径大小
        min: 0, //最小刻度
        max: 120, //最大刻度
        splitNumber: 12, //刻度数量
        startAngle: 225, //开始刻度的角度
        endAngle: -45, //结束刻度的角度
        axisLine: { //设置默认刻度盘上的刻度不显示，重新定义刻度盘
            show: true,
            lineStyle: {
                width: 5,
                color: [
                    [1, "rgba(255,255,255,1)"]
                ]
            }
        }, //仪表盘轴线
        axisLabel: { //仪表盘上的数据
            show: true,
            distance: -110,
            formatter: '{value}',
            // fontFamily: '庞门正道标题体',
            rotate: 40,
            fontSize: 40,
        }, //刻度标签。
        axisTick: {
            show: true,
            splitNumber: 7, //刻度的段落数
            lineStyle: {
                color: '#fff',
                width: 5 //刻度的宽度
            },
            length: 0 //刻度的长度
        }, //刻度样式
        splitLine: { //文字和刻度的偏移量
            show: true,
            length: 30, //便宜的长度
            lineStyle: {
                width: 5,
                color: "#fff",
            }
        },
        detail: {
            show: false,
        }
    };
    myChart = echarts.init(document.getElementById('show_charts')); // 基于准备好的dom，初始化echarts实例
    option = {
        // backgroundColor: '#0000FF',
        series: [
            series1, series2, series3
        ]
    };
    myChart.setOption(option);


    // setTimeout(function () {
    //     var temp = "{\"colorRGB\": \"255,94,94\",\"value\": 98}";
    //     setStyle(temp);
    // }, 2000);
});


ue.interface.Flush=function()
{
    Flush();
}

ue.interface.Load=function(data)
{
    var jsonData = JSON.parse(data);
    $.ajax({
        url: "http://localhost:2277/ChartsService.asmx/"+jsonData['FunctionName'],
        type: "POST",
        async: true,
        data: jsonData['FunctionParam'],
        error: function() {
            Flush();
        },
        success: function(data) {
            if(showRealData){
                table_data = JSON.parse(data);
                Flush();
            }  
        }
    });

}

//播放动画
ue.interface.SetStyle = function (inJson) {
    var dataJson = JSON.parse(inJson);
    var axisLine = { //刻度的线条
        show: true,
        lineStyle: {
            width: 40, //定义一个宽15的数轴
            color: [ //颜色为渐变色
                [
                    dataJson['value'] / 120,
                    new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                        offset: 0,
                        color: "rgba(" + dataJson['colorRGB'] + ",0)"
                    },
                    {
                        offset: 1,
                        color: "rgba(" + dataJson['colorRGB'] + ",1)"
                    }
                    ])
                ],
                [1, "rgba(0,0,0,0)"]
            ],
            shadowBlur: 40,
            shadowColor: "rgba(" + dataJson['colorRGB'] + ",1)",
        }
    }
    var detail = {
        show: true,
        offsetCenter: [0, '0%'],
        color: '#ffffff',
        formatter: '{a|{value}}{b|%}',
        rich: {
            a: {
                fontSize: 100,
                color: '#FFF',
                textShadowBlur: 20,
                textShadowColor: "rgba(" + dataJson['colorRGB'] + ",1)",
                padding: [0, 0, 0, 36]
            },
            b: {
                fontSize: 40,
                color: '#FFF',
                textShadowBlur: 20,
                textShadowColor: "rgba(" + dataJson['colorRGB'] + ",1)",
                padding: [0, 0, 30, 0]
            }
        }
    }
    var data = [ //当前数值的数据
        {
            //  name: "当前合格率",
            value: dataJson['value']
        }
    ]
    series1.axisLine = axisLine;
    series1.detail = detail;
    series1.data = data;
    myChart.clear();
    option.series = [series1, series2, series3];
    myChart.setOption(option);
};