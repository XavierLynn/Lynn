globalFontSize = 40;

var showRealData = JKB["能源分析"]["区域分析"]["各区能效"];

var table_data = {
    "data": [{
        "title": "各区能效",
        "table": [{
            "title": "万元产值综合能耗",
            "unit": "(tce/万元)",
            "xLabelRang": [{
                    "label": "张江南区"
                },
                {
                    "label": "康桥工业园南区"
                },
                {
                    "label": "原国家高新区"
                },
                {
                    "label": "孙桥科创中心"
                },
                {
                    "label": "规划保留用地"
                },
             
                {
                    "label": "康桥工业园北区"
                },
                {
                    "label": "上海国际医学院区"
                },
            
            ],
            "yLabelRang": [{
                    "label": "0"
                },
                {
                    "label": "40"
                },
                {
                    "label": "80"
                },
                {
                    "label": "120"
                },
                {
                    "label": "160"
                },
                {
                    "label": "200"
                }
            ],
            "data": [{
                "categoryName": "类别一",
                "start_color": 'rgba(209,246,255,1)',
                "end_color": 'rgba(209,246,255,1)',
                'high_color': '#5ceaff',
                "categoryData": [{
                    "xLabel": "原国家高新区",
                    "yLabel": "0"
                },
                {
                    "xLabel": "孙桥科创中心",
                    "yLabel": "0"
                },
                {
                    "xLabel": "张江南区",
                    "yLabel": "0"
                },
                {
                    "xLabel": "康桥工业园北区",
                    "yLabel": "0"
                },
                {
                    "xLabel": "上海国际医学园区",
                    "yLabel": "0"
                },
                {
                    "xLabel": "康桥工业园南区",
                    "yLabel": "0"
                },
                {
                    "xLabel": "规划保留用地",
                    "yLabel": "0"
                },
                ]
            }]
        },{
            "title": "单位建筑面积能耗",
            "unit": "(tce/km²)",
            "xLabelRang": [{
                    "label": "张江南区"
                },
                {
                    "label": "康桥工业园南区"
                },
                {
                    "label": "原国家高新区"
                },
                {
                    "label": "孙桥科创中心"
                },
                {
                    "label": "规划保留用地"
                },
             
                {
                    "label": "康桥工业园北区"
                },
                {
                    "label": "上海国际医学院区"
                },
            
            ],
            "yLabelRang": [{
                    "label": "0"
                },
                {
                    "label": "40"
                },
                {
                    "label": "80"
                },
                {
                    "label": "120"
                },
                {
                    "label": "160"
                },
                {
                    "label": "200"
                }
            ],
            "data": [{
                "categoryName": "类别一",
                "start_color": 'rgba(209,246,255,1)',
                "end_color": 'rgba(209,246,255,1)',
                'high_color': '#5ceaff',
                "categoryData": [{
                    "xLabel": "原国家高新区",
                    "yLabel": "63756.05"
                },
                {
                    "xLabel": "孙桥科创中心",
                    "yLabel": "43230.01"
                },
                {
                    "xLabel": "张江南区",
                    "yLabel": "64026.5"
                },
                {
                    "xLabel": "康桥工业园北区",
                    "yLabel": "27356.98"
                },
                {
                    "xLabel": "上海国际医学园区",
                    "yLabel": "23938.39"
                },
                {
                    "xLabel": "康桥工业园南区",
                    "yLabel": "46394.37"
                },
                {
                    "xLabel": "规划保留用地",
                    "yLabel": "14746.09"
                },
                ]
            }]
        },{
            "title": "度电经济增加值",
            "unit": "(元/kwh)",
            "xLabelRang": [{
                    "label": "张江南区"
                },
                {
                    "label": "康桥工业园南区"
                },
                {
                    "label": "原国家高新区"
                },
                {
                    "label": "孙桥科创中心"
                },
                {
                    "label": "规划保留用地"
                },
             
                {
                    "label": "康桥工业园北区"
                },
                {
                    "label": "上海国际医学院区"
                },
            
            ],
            "yLabelRang": [{
                    "label": "0"
                },
                {
                    "label": "40"
                },
                {
                    "label": "80"
                },
                {
                    "label": "120"
                },
                {
                    "label": "160"
                },
                {
                    "label": "200"
                }
            ],
            "data": [{
                "categoryName": "类别一",
                "start_color": 'rgba(209,246,255,1)',
                "end_color": 'rgba(209,246,255,1)',
                'high_color': '#5ceaff',
                "categoryData": [{
                    "xLabel": "原国家高新区",
                    "yLabel": "0"
                },
                {
                    "xLabel": "孙桥科创中心",
                    "yLabel": "0"
                },
                {
                    "xLabel": "张江南区",
                    "yLabel": "0"
                },
                {
                    "xLabel": "康桥工业园北区",
                    "yLabel": "0"
                },
                {
                    "xLabel": "上海国际医学园区",
                    "yLabel": "0"
                },
                {
                    "xLabel": "康桥工业园南区",
                    "yLabel": "0"
                },
                {
                    "xLabel": "规划保留用地",
                    "yLabel": "0"
                },
                ]
            }]
        }]
    }]
};

function Flush(){
    $('.nav').empty();
    yiji_title.length=0;

    var currentErjiTab = null;
    var twoLevelTitle = null;
    for (var i = 0; i < table_data['data'].length; i++) {
        yiji_title.push(table_data['data'][i]['title']);
    }

    $('.nav').append("<li id='tag'>◀</li>");
    for (var i = 0; i < yiji_title.length; i++) {
        const id = "title" + i;
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
                    var temp = table_data['data'][i]['table'][j]['title'];
                    $('#subtitle').append("<span class='erji_title'><a href='#' >" + temp + "</a></span>");
                    let id = document.getElementById("subtitle");
                    let tempA = id.getElementsByTagName("a");
                    $(tempA[j]).css("color","rgba(255,255,255,0.6)");
                    twoLevelTitle = tempA;
                }
                break
            }
        }

        $('.erji_title a').click(function() {
            for (var i = 0; i < twoLevelTitle.length; i++) {
       
                if (twoLevelTitle[i].text == $(this).text()) {
                    if (currentErjiTab != twoLevelTitle[i]) {
                        $(twoLevelTitle[i]).css("color","rgb(255,255,255)") 
                        if (currentErjiTab != null) {
                            $(currentErjiTab).css("color","rgba(255,255,255,0.6)")  
                    }
                    currentErjiTab = twoLevelTitle[i];
                }
            }
        }});
        $('.erji_title a').mouseenter(function() {
            for (var i = 0; i < twoLevelTitle.length; i++) {
                if (twoLevelTitle[i].text == $(this).text()) {
                    $(twoLevelTitle[i]).css("color","rgb(255,255,255)") ;
                }
            }
        });
        $('.erji_title a').mouseleave(function() {
            
            for (var i = 0; i < twoLevelTitle.length; i++) {
                
                if (twoLevelTitle[i].text == $(this).text() && currentErjiTab != twoLevelTitle[i]) {
                    $(twoLevelTitle[i]).css("color","rgba(255,255,255,0.6)") ;
                }
            }
        });

        $('.erji_title').click(function() {
            //每次点击初始化上一次加载的数据
            series = [];
            y_data = [];
            x_label = [];
            color_list = [];
            new_color_list = [];
            dataShadow = [];
            datas = [];
            yMax = 0;
            const leibie_name = []; // 用于存放类别名



            //如果只有一个二级标题，默认不显示
            if ($('.erji_title').length <= 1) {

                $('#subtitle').empty();
            }
            
            for (var i = 0; i < table_data['data'].length; i++) {
                if (table_data['data'][i]['title'] === yiji) {
                    for (var j = 0; j < table_data['data'][i]['table'].length; j++) {
                        if (table_data['data'][i]['table'][j]['title'] === $(this).text()) {
                            unit = table_data['data'][i]['table'][j]['unit'];
                            for (var k = 0; k < table_data['data'][i]['table'][j]['xLabelRang'].length; k++) {
                                x_label.push(table_data['data'][i]['table'][j]['xLabelRang'][k]['label'])
                            }
                            for (var k = 0; k < table_data['data'][i]['table'][j]['data'].length; k++) {
                                const color_res = []; // 颜色过渡数组
                                leibie_name.push(table_data['data'][i]['table'][j]['data'][k]['categoryName']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['start_color']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['end_color']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['high_color']);
                                const res = []; // y_data 过渡数组
                                //计算最大整数
                                yMax =0;
                                for (var m = 0; m < table_data['data'][i]['table'][j]['data'][k]['categoryData'].length; m++) {
                                    var number = Number(table_data['data'][i]['table'][j]['data'][k]['categoryData'][m]['yLabel'])
                                    if(yMax<number){
                                        yMax=number
                                    }
                                }
                                yMax = GetMaxNuber(yMax);

                                
                                for (var m = 0; m < table_data['data'][i]['table'][j]['data'][k]['categoryData'].length; m++) {
                                    res.push(table_data['data'][i]['table'][j]['data'][k]['categoryData'][m]['yLabel'])

                                    dataShadow.push(yMax)


                                }
                                y_data.push(res);
                                datas.push(dataShadow)
                                color_list.push(color_res);
                            }
                        }
                    }
                }
            }
            var curInt = null;
            if (leibie_name.length > 1) {
                new_liebie = leibie_name;
            } else {
                new_liebie = [];
            }
            var rich = {
                white: {
                    fontSize: 50,
                   
                    color: '#ffffff',



                }
            };

            for (var i = 0; i < color_list.length; i++) {
                const res = []; // 存储颜色的过渡矩阵
                for (var j = 0; j < y_data[i].length; j++) {
                    res.push(new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        { offset: 0, color: color_list[i][0] },
                        { offset: 1, color: color_list[i][1] }
                    ]))
                }
                new_color_list.push(res);
            }
            // 判断需要高亮的数组的位置  并将原来的颜色替换成高亮色
            for (var i = 0; i < color_list.length; i++) {
                if (x_val.length !== 0) {
                    for (var m = 0; m < x_val.length; m++) {
                        for (var n = 0; n < x_label.length; n++) {
                            if (x_val[m] === x_label[n]) {
                                new_color_list[i].splice(n, 1, color_list[i][2]);
                                break
                            }
                        }
                    }
                }
            }
            const label = {
                show: true, //开启显示
                position: [730, -10], // 在上方显示
                textShadowBlur: 20,
                formatter: function(params) {
                    return params.value;
                },

                //textShadowColor: '#418dff',
                textStyle: { //数值样式
                    color: '#ffffff',
                    fontSize: 52,
                    fontFamily: '庞门正道标题体',
                    textShadowBlur: 10,
                    textShadowColor: '#418dff'
                        // fontWeight:70,

                },
                rich: rich
            };
            const itemStyle = {
                normal: {
                    barBorderRadius: [5, 5, 5, 5],
                },

            };
            for (var i = 0; i < y_data.length; i++) {
                const colorList = new_color_list[i];
                series.push({
                        type: 'bar',
                        barGap: "-100%",
                        barWidth: '36px',
                        silent: true,

                        itemStyle: {
                            normal: {
                                color: 'rgba(255,255,255,0.10)',
                                barBorderRadius: [10, 10, 10, 10],
                                
                                borderColor: '#d1f6ff',
                                borderWidth: 1.5,
                            }
                        },
                        data: datas[i],

                        animation: false
                    },

                    {
                        name: new_liebie[i],
                        type: 'bar',
                        barGap: "-100%",
                        // barCategoryGap:'50%',
                        itemStyle: {
                            normal: {
                                barBorderRadius: [10, 10, 10, 10],
                                color: function(params) {
                                    return colorList[params.dataIndex]
                                },
                                shadowBlur: 10,
                                shadowColor: 'rgb(65,141,255)'
                            },

                        },
                        barWidth: '36px',
                        label: label,

                        data: y_data[i],
                        color: function(params) {
                            return colorList[params.dataIndex]
                        }

                    })
            }
            console.log(new_liebie);
            myChart = echarts.init(document.getElementById('show_charts')); // 基于准备好的dom，初始化echarts实例
            option = {
                tooltip: {
                    trigger: 'item',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'none' // 默认为直线，可选为：'line' | 'shadow'
                    },
                    textStyle: {
                        color: globalFontColor,
                        fontSize: globalFontSize,
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
                    left: '2%',
                    right: '22%',
                    bottom: '8%',
                    top: '0%',
                    containLabel: true
                },
                xAxis: [{
                    name: unit,
                    nameLocation: 'end',
                    nameGap: 60,
                    nameTextStyle: {
                        padding: [50, 0, 0, 0],
                        color: globalFontColor,
                        fontSize: 35,
                    },
                    type: 'value',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        rotate: -50,
                        textAlign:"center",
                        alingn:"center",
                        color: '#ffffff',
                        fontSize: 40,
                        padding:[0,0,-50,0],
                        margin: 20
                    },
                    splitLine: {
                        show: true,
                        margin: 80,
                        lineStyle: {
                            width: 1,
                            type: 'dashed'
                        }
                    }
                }],
                yAxis: [{
                    type: 'category',
                    data: x_label,
                    axisLabel: {
                        interval: 0,
                        margin: 50,
                        color: '#ffffff',
                        fontSize: 40,
                      

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
                animationDuration: 0
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
}

$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYFX.asmx/GetRegionNXPM",
        type: "POST",
        async: true,
        data: "regionID=zj&startDate=2018-01&endDate=2018-12",
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
    setInterval(function () { $('body').css('background-color', 'rgba(0,0,0,0.00)') }, 1000);
   
});

//播放动画
ue.interface.PlayAnimation = function(time) {
    option.animationDuration = time;
    myChart.clear();
    myChart.setOption(option);
};

ue.interface.Flush=function()
{
    Flush();
}

ue.interface.Load=function(data)
{
    var jsonData = JSON.parse(data);
    $.ajax({
        url: "http://localhost:2277/监控版/NYFX.asmx/"+jsonData['FunctionName'],
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