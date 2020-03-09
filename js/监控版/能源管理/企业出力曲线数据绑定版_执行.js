label = {
    show: true, //开启显示
    position: 'top', // 在上方显示
    textStyle: { //数值样式
        color: '#FFFFFF',
        fontSize: globalFontSize - 10
    }
};
itemStyle = {
    normal: {
        barBorderRadius: [0, 0, 0, 0],
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#0000ff' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#ff0000' // 100% 处的颜色
        }]),
        lineStyle: {
            width: 10 //设置曲线宽度
        }
    },

};
var showRealData = JKB["能源管理"]["企业处理曲线数据绑定版_执行"]
var table_data = {
    "title": "企业出力曲线",
    "table": [{
        "title": "XXXX能源服务公司1",
        "unit": "kw",
        "xLabelRang": [{
            "label": "11:00"
        },
        {
            "label": "11:30"
        },
        {
            "label": "12:00"
        },
        {
            "label": "12:30"
        },
        {
            "label": "13:00"
        },
        {
            "label": "13:30"
        },
        {
            "label": "14:00"
        },
        {
            "label": "14:30"
        },
        {
            "label": "15:00"
        },
        ],
        "yLabelRang": [{
            "label": "0"
        },
        {
            "label": "5"
        },
        {
            "label": "10"
        },
        {
            "label": "15"
        },
        {
            "label": "20"
        },
        {
            "label": "25"
        }
        ],
        "data": [{
            "categoryName": "实际",
            "icon": "auto",
            "lineStyle": "solid",
            "start_color": "rgba(255,253,255,1)",
            "end_color": "rgba(255,253,255,1)",
            'high_color': "rgba(255,253,255,0.3)",
            'gradient_color': "rgba(0,253,173,0)",
            "categoryData": [{
                "xLabel": "2015",
                "yLabel": "70"
            },
            {
                "xLabel": "2016",
                "yLabel": "75"
            },
            {
                "xLabel": "2017",
                "yLabel": "80"
            },
            {
                "xLabel": "2018",
                "yLabel": "75"
            },
            {
                "xLabel": "2019",
                "yLabel": "70"
            },
            {
                "xLabel": "2019",
                "yLabel": "72"
            },
            {
                "xLabel": "2019",
                "yLabel": "75"
            },
            {
                "xLabel": "2019",
                "yLabel": "78"
            },
            {
                "xLabel": "2019",
                "yLabel": "65"
            },
            ]
        },
        {
            "categoryName": "计划",
            "lineStyle": "solid",
            "start_color": "rgba(0,253,173,1)",
            "end_color": "rgba(0,253,173,1)",
            'high_color': "rgba(97,173,255,0.3)",
            'gradient_color': "rgba(97,173,255,0)",
            "categoryData": [{
                "xLabel": "2019",
                "yLabel": "95"
            },
            {
                "xLabel": "2019",
                "yLabel": "97"
            },
            {
                "xLabel": "2019",
                "yLabel": "98"
            },
            {
                "xLabel": "2019",
                "yLabel": "99"
            },
            {
                "xLabel": "2019",
                "yLabel": "100"
            },
            {
                "xLabel": "2019",
                "yLabel": "101"
            },
            {
                "xLabel": "2019",
                "yLabel": "90"
            },
            {
                "xLabel": "2019",
                "yLabel": "85"
            },
            {
                "xLabel": "2015",
                "yLabel": "80"
            },
            ]
        },
        ],
    }, {
        "title": "XXXX能源服务公司2",
        "unit": "kw",
        "xLabelRang": [{
            "label": "11:00"
        },
        {
            "label": "11:30"
        },
        {
            "label": "12:00"
        },
        {
            "label": "12:30"
        },
        {
            "label": "13:00"
        },
        {
            "label": "13:30"
        },
        {
            "label": "14:00"
        },
        {
            "label": "14:30"
        },
        {
            "label": "15:00"
        },
        ],
        "yLabelRang": [{
            "label": "0"
        },
        {
            "label": "5"
        },
        {
            "label": "10"
        },
        {
            "label": "15"
        },
        {
            "label": "20"
        },
        {
            "label": "25"
        }
        ],
        "data": [{
            "categoryName": "实际",
            "icon": "auto",
            "lineStyle": "solid",
            "start_color": "rgba(255,253,255,1)",
            "end_color": "rgba(255,253,255,1)",
            'high_color': "rgba(255,253,255,0.3)",
            'gradient_color': "rgba(0,253,173,0)",
            "categoryData": [{
                "xLabel": "2015",
                "yLabel": "70"
            },
            {
                "xLabel": "2016",
                "yLabel": "75"
            },
            {
                "xLabel": "2017",
                "yLabel": "80"
            },
            {
                "xLabel": "2018",
                "yLabel": "75"
            },
            {
                "xLabel": "2019",
                "yLabel": "70"
            },
            {
                "xLabel": "2019",
                "yLabel": "72"
            },
            {
                "xLabel": "2019",
                "yLabel": "75"
            },
            {
                "xLabel": "2019",
                "yLabel": "78"
            },
            {
                "xLabel": "2019",
                "yLabel": "65"
            },
            ]
        },
        {
            "categoryName": "计划",
            "lineStyle": "solid",
            "start_color": "rgba(0,253,173,1)",
            "end_color": "rgba(0,253,173,1)",
            'high_color': "rgba(97,173,255,0.3)",
            'gradient_color': "rgba(97,173,255,0)",
            "categoryData": [{
                "xLabel": "2019",
                "yLabel": "95"
            },
            {
                "xLabel": "2019",
                "yLabel": "97"
            },
            {
                "xLabel": "2019",
                "yLabel": "98"
            },
            {
                "xLabel": "2019",
                "yLabel": "99"
            },
            {
                "xLabel": "2019",
                "yLabel": "100"
            },
            {
                "xLabel": "2019",
                "yLabel": "101"
            },
            {
                "xLabel": "2019",
                "yLabel": "90"
            },
            {
                "xLabel": "2019",
                "yLabel": "85"
            },
            {
                "xLabel": "2015",
                "yLabel": "80"
            },
            ]
        },
        ],
    }, {
        "title": "XXXX能源服务公司3",
        "unit": "kw",
        "xLabelRang": [{
            "label": "11:00"
        },
        {
            "label": "11:30"
        },
        {
            "label": "12:00"
        },
        {
            "label": "12:30"
        },
        {
            "label": "13:00"
        },
        {
            "label": "13:30"
        },
        {
            "label": "14:00"
        },
        {
            "label": "14:30"
        },
        {
            "label": "15:00"
        },
        ],
        "yLabelRang": [{
            "label": "0"
        },
        {
            "label": "5"
        },
        {
            "label": "10"
        },
        {
            "label": "15"
        },
        {
            "label": "20"
        },
        {
            "label": "25"
        }
        ],
        "data": [{
            "categoryName": "实际",
            "icon": "auto",
            "lineStyle": "solid",
            "start_color": "rgba(255,253,255,1)",
            "end_color": "rgba(255,253,255,1)",
            'high_color': "rgba(255,253,255,0.3)",
            'gradient_color': "rgba(0,253,173,0)",
            "categoryData": [{
                "xLabel": "2015",
                "yLabel": "70"
            },
            {
                "xLabel": "2016",
                "yLabel": "75"
            },
            {
                "xLabel": "2017",
                "yLabel": "80"
            },
            {
                "xLabel": "2018",
                "yLabel": "75"
            },
            {
                "xLabel": "2019",
                "yLabel": "70"
            },
            {
                "xLabel": "2019",
                "yLabel": "72"
            },
            {
                "xLabel": "2019",
                "yLabel": "75"
            },
            {
                "xLabel": "2019",
                "yLabel": "78"
            },
            {
                "xLabel": "2019",
                "yLabel": "65"
            },
            ]
        },
        {
            "categoryName": "计划",
            "lineStyle": "solid",
            "start_color": "rgba(0,253,173,1)",
            "end_color": "rgba(0,253,173,1)",
            'high_color': "rgba(97,173,255,0.3)",
            'gradient_color': "rgba(97,173,255,0)",
            "categoryData": [{
                "xLabel": "2019",
                "yLabel": "95"
            },
            {
                "xLabel": "2019",
                "yLabel": "97"
            },
            {
                "xLabel": "2019",
                "yLabel": "98"
            },
            {
                "xLabel": "2019",
                "yLabel": "99"
            },
            {
                "xLabel": "2019",
                "yLabel": "100"
            },
            {
                "xLabel": "2019",
                "yLabel": "101"
            },
            {
                "xLabel": "2019",
                "yLabel": "90"
            },
            {
                "xLabel": "2019",
                "yLabel": "85"
            },
            {
                "xLabel": "2015",
                "yLabel": "80"
            },
            ]
        },
        ],
    }, {
        "title": "XXXX能源服务公司4",
        "unit": "kw",
        "xLabelRang": [{
            "label": "11:00"
        },
        {
            "label": "11:30"
        },
        {
            "label": "12:00"
        },
        {
            "label": "12:30"
        },
        {
            "label": "13:00"
        },
        {
            "label": "13:30"
        },
        {
            "label": "14:00"
        },
        {
            "label": "14:30"
        },
        {
            "label": "15:00"
        },
        ],
        "yLabelRang": [{
            "label": "0"
        },
        {
            "label": "5"
        },
        {
            "label": "10"
        },
        {
            "label": "15"
        },
        {
            "label": "20"
        },
        {
            "label": "25"
        }
        ],
        "data": [{
            "categoryName": "实际",
            "icon": "auto",
            "lineStyle": "solid",
            "start_color": "rgba(255,253,255,1)",
            "end_color": "rgba(255,253,255,1)",
            'high_color': "rgba(255,253,255,0.3)",
            'gradient_color': "rgba(0,253,173,0)",
            "categoryData": [{
                "xLabel": "2015",
                "yLabel": "70"
            },
            {
                "xLabel": "2016",
                "yLabel": "75"
            },
            {
                "xLabel": "2017",
                "yLabel": "80"
            },
            {
                "xLabel": "2018",
                "yLabel": "75"
            },
            {
                "xLabel": "2019",
                "yLabel": "70"
            },
            {
                "xLabel": "2019",
                "yLabel": "72"
            },
            {
                "xLabel": "2019",
                "yLabel": "75"
            },
            {
                "xLabel": "2019",
                "yLabel": "78"
            },
            {
                "xLabel": "2019",
                "yLabel": "65"
            },
            ]
        },
        {
            "categoryName": "计划",
            "lineStyle": "solid",
            "start_color": "rgba(0,253,173,1)",
            "end_color": "rgba(0,253,173,1)",
            'high_color': "rgba(97,173,255,0.3)",
            'gradient_color': "rgba(97,173,255,0)",
            "categoryData": [{
                "xLabel": "2019",
                "yLabel": "95"
            },
            {
                "xLabel": "2019",
                "yLabel": "97"
            },
            {
                "xLabel": "2019",
                "yLabel": "98"
            },
            {
                "xLabel": "2019",
                "yLabel": "99"
            },
            {
                "xLabel": "2019",
                "yLabel": "100"
            },
            {
                "xLabel": "2019",
                "yLabel": "101"
            },
            {
                "xLabel": "2019",
                "yLabel": "90"
            },
            {
                "xLabel": "2019",
                "yLabel": "85"
            },
            {
                "xLabel": "2015",
                "yLabel": "80"
            },
            ]
        },
        ],
    }, {
        "title": "XXXX能源服务公司5",
        "unit": "kw",
        "xLabelRang": [{
            "label": "11:00"
        },
        {
            "label": "11:30"
        },
        {
            "label": "12:00"
        },
        {
            "label": "12:30"
        },
        {
            "label": "13:00"
        },
        {
            "label": "13:30"
        },
        {
            "label": "14:00"
        },
        {
            "label": "14:30"
        },
        {
            "label": "15:00"
        },
        ],
        "yLabelRang": [{
            "label": "0"
        },
        {
            "label": "5"
        },
        {
            "label": "10"
        },
        {
            "label": "15"
        },
        {
            "label": "20"
        },
        {
            "label": "25"
        }
        ],
        "data": [{
            "categoryName": "实际",
            "icon": "auto",
            "lineStyle": "solid",
            "start_color": "rgba(255,253,255,1)",
            "end_color": "rgba(255,253,255,1)",
            'high_color': "rgba(255,253,255,0.3)",
            'gradient_color': "rgba(0,253,173,0)",
            "categoryData": [{
                "xLabel": "2015",
                "yLabel": "70"
            },
            {
                "xLabel": "2016",
                "yLabel": "75"
            },
            {
                "xLabel": "2017",
                "yLabel": "80"
            },
            {
                "xLabel": "2018",
                "yLabel": "75"
            },
            {
                "xLabel": "2019",
                "yLabel": "70"
            },
            {
                "xLabel": "2019",
                "yLabel": "72"
            },
            {
                "xLabel": "2019",
                "yLabel": "75"
            },
            {
                "xLabel": "2019",
                "yLabel": "78"
            },
            {
                "xLabel": "2019",
                "yLabel": "65"
            },
            ]
        },
        {
            "categoryName": "计划",
            "lineStyle": "solid",
            "start_color": "rgba(0,253,173,1)",
            "end_color": "rgba(0,253,173,1)",
            'high_color': "rgba(97,173,255,0.3)",
            'gradient_color': "rgba(97,173,255,0)",
            "categoryData": [{
                "xLabel": "2019",
                "yLabel": "95"
            },
            {
                "xLabel": "2019",
                "yLabel": "97"
            },
            {
                "xLabel": "2019",
                "yLabel": "98"
            },
            {
                "xLabel": "2019",
                "yLabel": "99"
            },
            {
                "xLabel": "2019",
                "yLabel": "100"
            },
            {
                "xLabel": "2019",
                "yLabel": "101"
            },
            {
                "xLabel": "2019",
                "yLabel": "90"
            },
            {
                "xLabel": "2019",
                "yLabel": "85"
            },
            {
                "xLabel": "2015",
                "yLabel": "80"
            },
            ]
        },
        ],
    }]
};
$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYGL.asmx/GetEnteEnergyConsumptionMonth",
        type: "POST",
        async: true,
        data: "regionID=zj&topCount=3&startDate=2019-12&endDate=2020-01",
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

function Flush(){
    $('.nav').empty();
    yiji_title.length = 0;
   



    $('.nav').append("<li id='tag'>◀</li>");
    $('.nav').append("<li role='presentation'><a href='#title' aria-controls='profile' role='tab' data-toggle='tab'>" +table_data['title']+ "</a></li>");
    //初始化底部的页标记
    var length = Math.ceil(table_data["table"].length / 4);
    let tabvar = "";
    tabvar += "<div id='show_table'>";
    for (let index = 0; index < length; index++)
        tabvar += "<button class='tabItem' value=" + index + "></button>";
    tabvar += "</div>";
    $("#show_Bar").append(tabvar);
    //为页标记添加点击事件
    $(".tabItem").click(function () {
        $(".tabItem").removeClass("tabItemSelect");
        $(this).addClass("tabItemSelect");
        var pageIndex = Number($(this).val());
        //根据选择的页标记，加载对应页码的数据
        $("#show_Panel").empty();
        for (let index = pageIndex * 4; index < ((pageIndex + 1) * 4); index++)
            if (index < table_data["table"].length)
                CreateDataCard(table_data["table"][index], index);
    });
    $(".tabItem").first().click();

    //根据传入的数据创建数据卡片
    function CreateDataCard(inData, inIndex) {
        //初始化数据Crad
        let tabvar = "";
        tabvar += "<div class='dataCard animated fadeInRight'>";
        tabvar += "<div class='titlePanel'>";
        tabvar += "<button class='titleButton'>";
        tabvar += "<label class='titleContent'>&nbsp;" + inData["title"] + "&nbsp;</label>";
        tabvar += "</button>";
        tabvar += "</div>";
        tabvar += "<div class='chartPanel'>";
        tabvar += "<div class='show_chart' id='show_charts" + inIndex + "'>";
        tabvar += "</div>";
        tabvar += "</div>";
        tabvar += "</div>";
        $("#show_Panel").append(tabvar);

        //初始化图表
        var series = [];
        var xData = [];
        var legendData = [];
        var unit = inData["unit"];
        for (let index = 0; index < inData["xLabelRang"].length; index++)
            xData.push(inData["xLabelRang"][index]["label"]);

        for (let index = 0; index < inData["data"].length; index++) {
            var element = inData["data"][index];
            var color = new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                { offset: 0, color: element["start_color"] },
                { offset: 1, color: element["end_color"] },
            ])
            legendData.push({
                name: inData["data"][index]['categoryName'],
                icon: inData["data"][index]['icon'],
            })
            var yData = [];
            for (let j = 0; j < element["categoryData"].length; j++)
                yData.push(element["categoryData"][j]["yLabel"]);

            series.push({
                name: element["categoryName"],
                type: 'line',
                itemStyle: {
                    normal: {
                        barBorderRadius: [0, 0, 0, 0],
                        lineStyle: {
                            width: 4,
                            type: 'solid',
                        }
                    },
                },
                smooth: false,
                symbol: 'circle',
                symbolSize: 20,
                label: {
                    show: false
                },
                data: yData,
                color: color
            })
        }

        option = {
            // backgroundColor: 'rgba(255,255,128,0.8)',
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'none' // 默认为直线，可选为：'line' | 'shadow'
                },
                textStyle: {
                    color: globalFontColor,
                    fontSize: 38,
                }
            },
            legend: {
                icon: 'auto',
                right: '3%',
                top: '0%',
                itemGap: 100,
                data: legendData,

                itemWidth: 50,
                itemHeight: 5,
                textStyle: {
                    fontSize: 40,
                    color: globalFontColor
                }
            },
            grid: {
                left: '3%',
                right: '3%',
                bottom: '0%',
                top: '20%',
                containLabel: true
            },
            xAxis: [{
                name: '',
                nameLocation: 'end',
                nameTextStyle: {
                    color: globalFontColor,
                    fontSize: 40,
                },
                type: 'category',
                data: xData,
                axisLine: {
                    lineStyle: {
                        color: globalFontColor,
                        width: 4,
                        offset: 10,
                    }
                },
                axisTick: {
                    show: false,
                    interval: 1,
                    inside: false,
                    length: 20,
                    lineStyle: {
                        width: 2,

                        alignWithLabel: true
                    }
                },
                axisLabel: {
                    interval: 0,
                    rotate: 0,
                    color: globalFontColor,
                    fontSize: 40,
                    margin: 40,
                },
                splitLine: {
                    show: false
                }
            }],
            yAxis: [{
                name: unit,
                nameLocation: 'end',
                nameGap: 60,
                nameTextStyle: {
                    padding: [0, 50, 0, 0],
                    color: globalFontColor,
                    fontSize: globalFontSize - 5,
                },
                axisTick: {
                    show: false
                },
                type: 'value',
                splitNumber: 5,
                axisLabel: {
                    color: globalFontColor,
                    fontSize: 40,
                    margin: 10
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        width: 2,
                        type: 'solid'
                    }
                },
            }],
            series: series,
            animationDuration: 0
        };
        myChart = echarts.init(document.getElementById('show_charts' + inIndex));
        myChart.setOption(option);
    }
};

ue.interface.Flush=function()
{
    Flush();
}

ue.interface.Load=function(data)
{
    var jsonData = JSON.parse(data);
    $.ajax({
        url: "http://localhost:2277/监控版/NYGL.asmx/"+jsonData['FunctionName'],
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