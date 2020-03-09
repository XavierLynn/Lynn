globalFontSize = 40;
var showRealData = JKB["驾驶舱"]["标签概况"]

var tabel_data = {
    "data": [{
        "title": "标签概况",
        "table": [
            {
            "currentLabel":"标签客户",
            "fullLabel":"客户总数",
            "currentValue":"566",
            "fullValue":"719"

            },

            {
            "currentLabel":"运行标签",
            "fullLabel":"标签总数",
            "currentValue":"21",
            "fullValue":"3211"
            },
        ]
    }]
};


$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/JSC.asmx/GetQuYuDWMJNH",
        type: "POST",
        async: true,
        data: "regionID=zj&startDate=2019-01&endDate=2019-12",
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
    //延迟刷新
    setInterval(function () { $('body').css('background-color', 'rgba(0,0,0,0.00)');}, 2000);
});

function Flush(){
 
    yiji_title.length = 0;
    $('.nav').empty()
  
    for (var i = 0; i < tabel_data['data'].length; i++) {
        yiji_title.push(tabel_data['data'][i]['title']);
    }
    $('.nav').append("<li id='tag'>◀</li>");
    for (var i = 0; i < yiji_title.length; i++) {
        const id = "title" + i;
        const href = "#title" + i;
        $('.nav').append("<li role='presentation'><a href='" + href + "' aria-controls='profile' role='tab' data-toggle='tab'>" + yiji_title[i] + "</a></li>");
    }

    $('.nav a').click(function() {
        var yiji;
        for (var i = 0; i < tabel_data['data'].length; i++) {
            if (tabel_data['data'][i]['title'] === $(this).text()) {
                yiji = $(this).text();
                $('#subtitle').empty();
                for (var j = 0; j < tabel_data['data'][i]['table'].length; j++) {
                    $('#subtitle').append("<span class='erji_title'><a href='#' style='background-image: url(../../Image/zfsj/" + tabel_data['data'][i]['table'][j]['title'] + ".png);'>" + tabel_data['data'][i]['table'][j]['title'] + "</a></span>");
                }
                break
            }
        }
        $('.erji_title').click(function() {
            //每次点击初始化上一次加载的数据
            series = [];
            y_data = [];
            x_label = [];
            labelValue =[];
            fullLabels = [];
            var currentValue;

            series.length = 0;
            y_data.length = 0;
            x_label.length = 0;
            labelValue.length = 0;
            fullLabels.length = 0;


            //如果只有一个二级标题，默认不显示
            if ($('.erji_title').length <= 1) {
                $('#subtitle').empty();
            }
            for (var i = 0; i < tabel_data['data'].length; i++) {
                if (tabel_data['data'][i]['title'] === yiji) {
                    for (var j = 0; j < tabel_data['data'][i]['table'].length; j++) {
                        const res = []; // y_data 过渡数组
                        x_label.push(tabel_data['data'][i]['table'][j]["currentValue"]+tabel_data['data'][i]['table'][j]["currentLabel"])
                        res.push(tabel_data['data'][i]['table'][j]['fullLabel'])
                        currentLabel = tabel_data['data'][i]['table'][j]['fullLabel'].match(/\d+\d/g)
                        y_data.push(res); 
                       
                        fullLabels.push({"value":tabel_data['data'][i]['table'][j]["fullValue"],"label":tabel_data['data'][i]['table'][j]["fullLabel"]})

                        //Value
                        currentValue = Number(tabel_data['data'][i]['table'][j]["currentValue"])
                        fullValue = Number(tabel_data['data'][i]['table'][j]["fullValue"])
                        ValuePre = Math.round((currentValue/fullValue)*10000)
                        labelValue.push(ValuePre)
                      
                    }
                }
            }
            for (var i = 0; i < y_data.length; i++) {
                // alert(labelValue)
                index = 0;
                series.push(
                    {
                    // current data
                    type: 'pictorialBar',
                    symbol: 'image://http://127.0.0.1:8080/EChartSimple/Image/symbolStyle.png',
                    itemStyle: {
                        normal: {
                            barBorderRadius: 5,
                            color: '#418dff',
                        }
                    },
        
                    symbolRepeat: 'fixed',
                    symbolMargin: '1%',
                    symbolClip: true,
                    symbolSize: [44 ,43],
                    symbolBoundingData:10000,
            
                    data:labelValue,
                    z: 99999999,
                },    
                {
                    // full data
                    type: 'pictorialBar',
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,0.25)',

                        }
                    },

                    label: {
                        normal: {
                            show: true,

                            formatter: function(params) {
                   
                                if(index == 0){
                                    index++;
                                    return "{a|"+fullLabels[0].value+"}"+"\n"+fullLabels[0].label
                                }
                                if(index == 1){
                                    index++;
                                    return "{a|"+fullLabels[1].value+"}"+"\n"+fullLabels[1].label
                                }
                                else{
                                    index--;
                                    return "{a|"+fullLabels[0].value+"}"+"\n"+fullLabels[0].label
                                }
                           
      
                            },
                            rich: {
                                a: {
                                    
                                    fontSize: 60,
                                    color: "#ffffff",
                                    fontFamily: '庞门正道标题体',
                                }
                            },
                            align:'center',
                            position: 'right',
                            offset: [150, 0],
                            textStyle: {
                                color: '#ffffff',
                                fontSize: 50,
                                padding: [-10, 0, 0, 0],

                            //     fontFamily: '庞门正道标题体',
                            }
                        }
                    },
                    animationDuration: 0,
                    symbolRepeat: 'fixed',
                    symbolMargin: '1%',
                    symbol: 'image://http://127.0.0.1:8080/EChartSimple/Image/symbolStyleBackground.png',
                    symbolSize: [44, 43],
                    symbolBoundingData: 10000,
                    data: [10000,10000],
                    z: 99999,
                },   
                )
            }

            myChart = echarts.init(document.getElementById('show_charts')); // 基于准备好的dom，初始化echarts实例
            index = 0;  
            option = {
                graphic: [{
                    type: 'image',
                    left: '260',
                    top: 20,
                    //z: 1000,
                    x: 115,
                    y: 60,
                    // bounding: 'raw',
                    style: {
                        image: '../../../image/symbolOutLine.png',
                        width: 1550,
                        height: 100,
                        //                    opacity: 0.4
                    }
                }, {
                    type: 'image',
                    left: '260',
                    top: 160,
                    scale: [1, 1],
                    style: {
                        image: '../../../image/symbolOutLine.png',
                        width: 1550,
                        height: 100,
                        //                    opacity: 0.4
                    }
                }, ],
                tooltip: {
                    trigger: 'item',
                    formatter: function(params) {
                        if(params.name=="566标签客户")
                        {
                            return params.name+":"+fullLabels[0].value+fullLabels[0].label
                        }
                        else{
                            return params.name+":"+fullLabels[1].value+fullLabels[1].label
                        }
                
                   
                    },
              
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'none' // 默认为直线，可选为：'line' | 'shadow'
                    },
                    textStyle: {
                        color: globalFontColor,
                        fontSize: globalFontSize,
                    }
                },

                legend: {
                    right: '3%',
                    data: new_liebie,
                    itemWidth: 20,
                    itemHeight: 12,
                    textStyle: {
                        fontSize: globalFontSize,
                        color: globalFontColor
                    }
                },
                grid: {
                    left: '3%',
                    right: '14%',
                    bottom: '0%',
                    top: '0%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'value',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                }],
                yAxis: [{
                    type: 'category',
                    data: x_label,
                    axisLabel: {
                        interval: 0,
                        margin: 220,
                        color: globalFontColor,
                        fontSize: 50,
                        padding:[0,-180,0,0],
                        formatter: function(value) {
                            var currentInts = value.match(/\d+\d/g);
                            var currentStr = value.substring(currentInts[0].length,value.length)
                            return "{a|" + currentInts + "}" + "\n" + currentStr;
                        },
                        align:'center',
                        rich: {
                            a: {
                                fontFamily: '庞门正道标题体',
                                fontSize: 60,
                                color: "#ffffff",
                          
                            }
                        },
                    },

                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                }],
                series: series,
                // animationDuration: 0
            };
            // 使用刚指定的配置项和数据显示图表。
            // myChart.clear();
            myChart.setOption(option);
            $('#btn').click(function() {
              
                curInt = 1;
                myChart.setOption(option)
            });
        });
        $('.erji_title a')[0].click();
    });

    $('.nav a')[0].click();
};

ue.interface.Flush=function()
{
    Flush();
}

ue.interface.Load=function(data)
{
    var jsonData = JSON.parse(data);
    $.ajax({
        url: "http://localhost:2277/监控版/JSC.asmx/"+jsonData['FunctionName'],
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
ue.interface.PlayAnimation = function(time) {
    option.animationDuration = time;
    myChart.clear();
    myChart.setOption(option);
};