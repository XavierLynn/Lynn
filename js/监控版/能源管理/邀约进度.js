globalFontSize = 40;


var showRealData = JKB["能源管理"]["邀约进度"]
var table_data = {
    "data": [{
        "title": "邀约进度",
        "table": [{
            "title": "",
            "unit": "tce",
            "tableValue": [{
                    "tr": [
                        { "td1": "计划总量", "td2": "6.0mw" }, { "td1": "响应量:1034kw", "td2": "完成度:74%" }
                    ]

                },
                {
                    "tr": [
                        { "td1": "响应量", "td2": "5.2mw" }, { "td1": "响应量:689kw", "td2": "完成度:92%" }
                    ]

                },
                {
                    "tr": [
                        { "td1": "上海通用重工集团有限公司", "td2": "出力排名" }, { "td1": "响应量:2009kw", "td2": "完成度:67%" }
                    ]

                }
            ],
            "data": [{
                "categoryName": "需",
                "start_color": "#00FDAD",
                "end_color": "#00FDAD",
                'high_color': '#00FDAD',
                'gradient_color': '#00FDAD',
                "categoryData": [{
                        "xLabel": "电",
                        "yLabel": 539.80
                    },
                    {
                        "xLabel": "热",
                        "yLabel": 59.73
                    },
                    {
                        "xLabel": "冷",
                        "yLabel": 17.07
                    },
                    {
                        "xLabel": "水",
                        "yLabel": 0.32
                    }

                ]
            }, ]
        }, ]
    }, ]
};
var table_data = {
    "data": [{
        "title": "邀约进度",
        "table": [{
            "title": "",
            "unit": "tce",
            "pre":"85%",
            "tableValue": [{
                "title":"计划总量","value":"6.0mv"
            },
            {
                "title":"响应量","value":"5.2mv"
            }
         
            ]
    }, ]
}],};
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
    yiji_title.length =0;
    var pre_value = 0;
    for (var i = 0; i < table_data['data'].length; i++) {
        yiji_title.push(table_data['data'][i]['title']);
        for (var j = 0; j < table_data['data'][i]['table'].length; j++) {
            if (table_data['data'][i]['table'][j]['tableValue'] != '') {
                tableValues = table_data['data'][i]['table'][j]['tableValue']
                pre_value = table_data['data'][i]['table'][j]['pre']
            }
        }
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
                    $('#subtitle').append("<span class='erji_title'><a>" + table_data['data'][i]['table'][j]['title'] + "</a></span>");
                }
                break
            }
        }

        $('.erji_title').append(function() {
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
            $('#show_table').empty();
            let tabvar = "";
            //行间隔
            tabvar += " <tr style='height:80px'>";
            tabvar += " <td></td>";
            tabvar += "   <td></td>";
            tabvar += "   <td></td>";
            tabvar += " </tr>";
            //第一行
            tabvar += "  <tr style='height:0px;padding:20px;text-align:center'>";
            tabvar += "    <td style='width:500px;'>";
            tabvar += "    </td>";
            tabvar += "    <td style='width:150px;height:80px;text-align:center;background-image: url(../../../Image/能源管理/TextBackGround.png)'>";
            tabvar += "         <text class='label'>" + tableValues[0]["title"] + "</text>";
            tabvar += "    </td>";
            //竖间隔
            tabvar += "    <td style='width:500px;'>";
            tabvar += "    </td>";

            tabvar += "    <td style='width:650px;text-align:center'>";
            tabvar += "         <text class='label2'>" + tableValues[0]["value"] + "</text>";
            tabvar += "    </td>";
            tabvar += "    <td style='width:200px;'>";
            tabvar += "    </td>";
            tabvar += " </tr>";



            //行间隔
            tabvar += " <tr style='height:50px'>";
            tabvar += " <td></td>";
            tabvar += "   <td></td>";
            tabvar += "   <td></td>";
            tabvar += " </tr>";
            //第一行
            tabvar += "  <tr style='height:0px;padding:0px,'>";
            tabvar += "    <td style='width:500px;'>";
            tabvar += "    </td>";
            tabvar += "    <td style='width:150px;height:80px;text-align:center;background-image: url(../../../Image/能源管理/TextBackGround.png)''>";
            tabvar += "         <text class='label'>" + tableValues[1]["title"] + "</text>";
            tabvar += "    </td>";
            //竖间隔
            tabvar += "    <td style='width:500px;'>";
            tabvar += "    </td>";

            tabvar += "    <td style='width:650px;text-align:center'>";
            tabvar += "         <text class='label2'>" + tableValues[1]["value"] + "</text>";
            tabvar += "    </td>";
            tabvar += "    <td style='width:200px;'>";
            tabvar += "    </td>";
            tabvar += " </tr>";

            $('#show_table').append(tabvar);

            var tick = 0;
            function aniAnticlockwise(x) {
                return [{
                        value: tick,
                        itemStyle: {
                            normal: {
                                color: 'rgba(255,255,255,0.1)',
                            }
                        },
                    },
                    {
                        value: x,
                        itemStyle: {
                            normal: {
                                borderWidth: 0,
                                color: 'rgba(255,255,255,1)',
                                shadowBlur: 10,
                                shadowColor: '#418dff'
                            }
                        }
                    },
                    {
                        value: 100 - x - tick,
                        itemStyle: {
                            normal: {
                                color: 'rgba(255,255,255,0.1)',
                            }
                        }
                    }
                ];
            };

            series = [{
                    name: 'aaa',
                    type: 'pie',
                    avoidLabelOverlap: false,

                    data: ['11'],
                    radius: ['68%', '80%'],
                    center: ['50%', '50%'],
                    itemStyle: {

                        // shadowColor: '#418dff',
                        // shadowBlur: 10,
                        // shadowOffsetY: 0,

                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    label: {
                        show: true,
                        //formatter: '{d}%',
                        formatter: pre_value,
                        position: 'center',
                        fontSize: 140,
                        fontWeight: 'lighter',
                        color: '#FFFFFF',
                        padding: [5, 0, 0, 0],
                        textShadowBlur: 30,
                        textShadowColor: '#418dff',
                        fontFamily: '庞门正道标题体',
                    },
                    labelLine: {
                        length: 40,
                        length2: 50,
                        lineStyle: {
                            width: 5
                        }
                    },
                    hoverOffset: 0,
                    minAngle: 20,
                },
                {
                    name: 'loading',
                    type: 'pie',
                    radius: ['68%', '80%'],
                    center: ['50%', '50%'],
                    hoverAnimation: false,
                    itemStyle: {

                        shadowColor: '#418dff',
                        shadowBlur: 10,
                        shadowOffsetY: 0,

                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    data: aniAnticlockwise(86)
                },

            ];
     
            myChart = echarts.init(document.getElementById('show_charts')); // 基于准备好的dom，初始化echarts实例
            option = {

                legend: {
                    show: true,
                    orient: 'vertical',
                    right: '0',
                    x: 'left',
                    y: 'bottom',
                    bottom: '50px',
                    itemWidth: 50,
                    itemHeight: 30,
                    itemGap: 60,
                    data: ['aa', 'bb', 'cc', 'dd'],
                    textStyle: {
                        color: globalFontColor,
                        fontSize: globalFontSize,
                    }
                },

                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgba(255,255,255,0.1)' },

                    { offset: 1, color: 'rgba(255,255,255,0.25)' }
                ], false),

                series: series,
                //animationDuration: 0
                animation: false,
                animationThreshold: 100,
                animationDurationUpdate: function(idx) {
                    // 越往后的数据延迟越大
                    return idx * 1000;
                },
            };
            myChart.setOption(option);
        });
    });
    $('.nav a')[0].click();
    setInterval(function () { $('body').css('background-color', 'rgba(0,0,0,0.00)') }, 1000);
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

//播放动画
ue.interface.PlayAnimation = function(time) {
    option.animationDuration = time;
    myChart.clear();
    myChart.setOption(option);
};