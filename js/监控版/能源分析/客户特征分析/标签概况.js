globalFontSize = 40;

var showRealData = false;

var table_data = {
    "data": [{
        "title": "标签概况",
        "table": [     {
            "xLabel":"566标签客户",
            "yLabel":"719客户总数"
            },

            {
            "xLabel":"21运行标签",
            "yLabel":"3211标签总数"
            },
        ]
    }]
};

$(function () {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYFX.asmx/GetRegionHYXFPM",
        type: "POST",
        async: true,
        data: "regionID=zj&startDate=2019-12&endDate=2020-01",
        error: function() {
            Flush();
  
        },
        success: function (data) {
            if (showRealData) {
                table_data = JSON.parse(data);
                Flush();
            }
        }
    });
  
    //延迟刷新
    setInterval(function () { $('body').css('background-color', 'rgba(0,0,0,0.00)'); }, 2000);
  });
  
  function Flush() {
    yiji_title.length = 0;
    $('.nav').empty();
    var dataValues = table_data['data'][0]['table'];
    var dataValue = [];
    for(var i =0; i<dataValues.length; i++)
    {   
        var x_value = dataValues[i]["xLabel"].match(/\d+\d/g)
        var x_name = dataValues[i]["xLabel"].substring(x_value[0].length,dataValues[i]["xLabel"].length)
        var y_value = dataValues[i]["yLabel"].match(/\d+\d/g)
        var y_name = dataValues[i]["yLabel"].substring(y_value[0].length,dataValues[i]["yLabel"].length)
        dataValue.push({"x_label":[x_value,x_name],"y_label":[y_value,y_name]})

    }
    for (var i = 0; i < table_data['data'].length; i++) {
        yiji_title.push(table_data['data'][i]['title']);
    }
    $('.nav').append("<li id='tag'>◀</li>");
    for (var i = 0; i < yiji_title.length; i++) {
        
        const href = "#title" + i;
        $('.nav').append("<li role='presentation'><a href='" + href + "' aria-controls='profile' role='tab' data-toggle='tab'>" + yiji_title[i] + "</a></li>");
    }
    $('.nav a').click(function() {
        var yiji;
        for (var i = 0; i < table_data['data'].length; i++) {
            if (table_data['data'][i]['title'] === $(this).text()) {
                yiji = $(this).text();
                $('#subtitle').empty();
                for (var j = 0; j < table_data['data'][i]['table'].length; j++) {
                    $('#subtitle').append("<span class='erji_title'><a href='#' '>" + table_data['data'][i]['table'][j]['title'] + "</a></span>");
                }
                break
            }
        }
        $('.erji_title').click(function() {
            //每次点击初始化上一次加载的数据
            series = [];
            y_data = [];
            x_label = [];
            color_list = [];
            new_color_list = [];
            //如果只有一个二级标题，默认不显示
            if ($('.erji_title').length <= 1) {

                $('#subtitle').empty();
            }
            let tabvar = "";
            tabvar += "<button>";
            tabvar += "<label class='column1'>" + "<label class='titleCloumn' style = 'font-family:庞门正道标题体;font-size:60px;'>" + dataValue[0]['x_label'][0]  + "</label>" + "<br>"+dataValue[0]['x_label'][1] + "</label>";
            tabvar += "<label class='column2'>" + "<label class='titleCloumn' style = 'font-family:庞门正道标题体;font-size:60px; 0 0 0.2em #418dff;'>" + dataValue[0]['y_label'][0]+  "</label>" +"<br>"+ dataValue[1]['y_label'][1] + "</label>";
            // tabvar += "<label class='column3'><label class='titleCloumn'>经济增加值&nbsp;</label>" + dataValue['value3'] + "</label>";
            tabvar += "</button>";
            tabvar += "<button>";
            tabvar += "<label class='column1'>" + "<label class='titleCloumn' style = 'font-family:庞门正道标题体;font-size:60px;'>" + dataValue[1]['x_label'][0] + "</label>" + "<br>"+dataValue[1]['x_label'][1] + "</label>";
            tabvar += "<label class='column2'>" + "<label class='titleCloumn' style = 'font-family:庞门正道标题体;font-size:60px;'>" + dataValue[1]['y_label'][0]  + "</label>" + "<br>"+dataValue[1]['y_label'][1] + "</label>";
            // tabvar += "<label class='column3'><label class='titleCloumn'>当月综合能耗&nbsp;</label>" + dataValue['value6'] + "</label>";
            tabvar += "</button>";
            $('#show_labels').empty();
            $('#show_labels').append(tabvar);
            var dataShadow = [];

            var datas = [];
            for (var i = 0; i < table_data['data'].length; i++) {
                if (table_data['data'][i]['title'] === yiji) {
                    const res = []; // y_data 过渡数组
                    for (var j = 0; j < table_data['data'][i]['table'].length; j++) {
                                    res.push(table_data['data'][i]['table'][j]['yLabel'])
                                    dataShadow.push(yMax)
                                }
                                y_data.push(res);
                                datas.push(dataShadow)
                             
                    }
            }
               
          
         
            for (var i = 0; i < y_data.length; i++) {
           
                series.push({
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
                    symbolSize: [44, 43],
                    symbolBoundingData: 1000,
                    data: [6.5, 787.2],
                    z: 99999999,

                }, {
                    // full data
                    type: 'pictorialBar',
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,0.25)',

                        }
                    },
                    label: {
                        normal: {
                            show: false,
                            formatter: function(params) {
                                return (params.value);
                            },
                            position: 'right',
                            offset: [0, 0],
                            textStyle: {
                                color: '#ffffff',
                                fontSize: 55,
                                padding: [-10, 0, 0, 0],
                                textShadowColor: '#418dff',
                                textShadowBlur: 5,
                                fontFamily: '庞门正道标题体',
                            }
                        }
                    },
                    animationDuration: 0,
                    symbolRepeat: 'fixed',
                    symbolMargin: '1%',
        
                    symbol: 'image://http://127.0.0.1:8080/EChartSimple/Image/symbolStyleBackground.png',

                    symbolSize: [44, 43],
                    symbolBoundingData: 1000,
                    data: [1000, 1000],
                    z: 99999,

                })
            }
     
            myChart = echarts.init(document.getElementById('show_charts')); // 基于准备好的dom，初始化echarts实例
            option = {
                graphic: [{
                    type: 'image',
                    left: '28',
                    top: 75,
                    //z: 1000,
                    x: 115,
                    y: 60,
                    // bounding: 'raw',
                    style: {
                        image: '../../../../image/symbolOutLine.png',
                        width: 1350,
                        height: 100,
                        //                    opacity: 0.4
                    }
                }, {
                    type: 'image',
                    left: '28',
                    top: 325,
                    //z: 1000,
                    // x: -115,
                    // bounding: 'raw',
                    scale: [1, 1],
                    style: {
                        image: '../../../../image/symbolOutLine.png',
                        width: 1350,
                        height: 100,
                        //                    opacity: 0.4
                    }
                }, ],

                tooltip: {
                    show:false,
                    trigger: 'item',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'none' // 默认为直线，可选为：'line' | 'shadow'
                    },
                    textStyle: {
                        color: globalFontColor,
                        fontSize: 40,
                    }
                },
                // backgroundColor:{
                //     image:img
                // },
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
                    left: '5%',
                    right: '5%',
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
                        show: false,
                        interval: 0,
                        margin: 45,

                        color: '#ffffff',
                        textShadowColor: '#418dff',
                        textShadowBlur: 5,
                        fontSize: 45
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
                // ,itemStyle:{
                //     color: function(params){
                //       var key = params.dataIndex;
                //       if(key === curInt){
                //         return '#E062AE'
                //       }else{
                //         return '#37A2DA'
                //       }
                //     }}
                curInt = 1;
                myChart.setOption(option)
            });
        });
        $('.erji_title a')[0].click();
    });
    $('.nav a')[0].click();
    setInterval(function () { $('body').css('background-color', 'rgba(0,0,0,0.00)') }, 1000);
};
ue.interface.Flush = function () {
    Flush();
  }
  
ue.interface.Load = function (data) {
    var jsonData = JSON.parse(data);
    $.ajax({
        url: "http://localhost:2277/监控版/NYFX.asmx/" + jsonData['FunctionName'],
        type: "POST",
        async: true,
        data: jsonData['FunctionParam'],
        error: function () {
            Flush();
        },
        success: function (data) {
            if (showRealData) {
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