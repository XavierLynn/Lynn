globalFontSize = 40;


var showRealData = JKB["能源管理"]["执行进度"]

var table_data = {
    "data": [{
        "title": "执行进度",
        "table": [{
            "title": "",
            "unit": "tce",
            "tableValue": [{
                    "tr": [
                        { "td1": "上海通用重工集团有限公司", "td2": "完成量" }, { "td1": "响应量:1034kw", "td2": "完成度:74%" }
                    ]

                },
                {
                    "tr": [
                        { "td1": "亿可能源服务公司", "td2": "出力排名" }, { "td1": "响应量:689kw", "td2": "完成度:92%" }
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


    for (var i = 0; i < table_data['data'].length; i++) {
        yiji_title.push(table_data['data'][i]['title']);
        for (var j = 0; j < table_data['data'][i]['table'].length; j++) {
            if (table_data['data'][i]['table'][j]['tableValue'] != '') {
                tableValues = table_data['data'][i]['table'][j]['tableValue']
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
            tabvar += " <tr style='height:100px'>";
            tabvar += " <td></td>";
            tabvar += "   <td></td>";
            tabvar += "   <td></td>";
            tabvar += " </tr>";
            //第一行
            tabvar += "  <tr style='height:0px;padding:0px,'>";

            tabvar += "    <td style='width:200px;height:0px;text-align:left'>";
            tabvar += "         <text class='label'>" + tableValues[0]["tr"][0]['td1'] + "</text>";
            tabvar += "    </td>";
            //竖间隔
            tabvar += "    <td style='width:150px;'>";
            tabvar += "    </td>";

            // tabvar += "    <td style='width:650px;text-align:center'>";
            // tabvar += "         <text class='label'>" + tableValues[0]["tr"][0]['td2'] + "</text>";
            // tabvar += "    </td>";
            tabvar += " </tr>";

            //第二行
            tabvar += "   <tr style='height:0px;padding:0px,'>";

            tabvar += "     <td style='width:200px;height:0px;text-align:left'>";
            tabvar += "       <text class='label2'>" + tableValues[0]["tr"][1]['td1'].split(":")[0] + ":" + "<span class ='label4'>" + tableValues[0]["tr"][1]['td1'].split(":")[1] + "</span>" + "</text>";
            tabvar += "   </td>";
            //竖间隔
            tabvar += "    <td style='width:0px;'>";
            tabvar += "       <text class='label2'></text>";
            tabvar += "    </td>";

            tabvar += "     <td style='width:650px;height:0px;text-align:left;margin-left:-200px'>";
            tabvar += "       <text class='label3'>" + tableValues[0]["tr"][1]['td2'].split(":")[0] + ":" + "<span class ='label4'>" + tableValues[0]["tr"][1]['td2'].split(":")[1] + "</span>" + "</text>";
            tabvar += "   </td>";
            tabvar += "    <td></td>";

            tabvar += " </tr>";


            //行间隔
            tabvar += " <tr style='height:100px'>";
            tabvar += " <td></td>";
            tabvar += "   <td></td>";
            tabvar += "   <td></td>";
            tabvar += " </tr>";
            //第一行
            tabvar += "  <tr style='height:0px;padding:0px,'>";

            tabvar += "    <td style='width:350px;height:50px;text-align:left'>";
            tabvar += "         <text class='label'>" + tableValues[1]["tr"][0]['td1'] + "</text>";
            tabvar += "    </td>";
            //竖间隔
            tabvar += "    <td style='width:150px;'>";
            tabvar += "    </td>";

            // tabvar += "    <td style='width:650px;text-align:center'>";
            // tabvar += "         <text class='label'>" + tableValues[1]["tr"][0]['td2'] + "</text>";
            // tabvar += "    </td>";
            tabvar += " </tr>";

            //第二行
            tabvar += "   <tr style='height:0px;padding:0px,'>";

            tabvar += "     <td style='width:650px;height:0px;text-align:left'>";
            tabvar += "       <text class='label2'>" + tableValues[1]["tr"][1]['td1'].split(":")[0] + ":" + "<span class ='label4'>" + tableValues[1]["tr"][1]['td1'].split(":")[1] + "</span>" + "</text>";
            tabvar += "   </td>";
            //竖间隔
            tabvar += "    <td style='width:60px;'>";
            tabvar += "       <text class='label2'></text>";
            tabvar += "    </td>";

            tabvar += "     <td style='width:650px;height:0px;text-align:left'>";
            tabvar += "       <text class='label3'>" + tableValues[1]["tr"][1]['td2'].split(":")[0] + ":" + "<span class ='label4'>" + tableValues[1]["tr"][1]['td2'].split(":")[1] + "</span>" + "</text>";
            tabvar += "   </td>";
            tabvar += "    <td></td>";

            tabvar += " </tr>";

            //行间隔
            tabvar += " <tr style='height:100px'>";
            tabvar += " <td></td>";
            tabvar += "   <td></td>";
            tabvar += "   <td></td>";
            tabvar += " </tr>";
            //第一行
            tabvar += "  <tr style='height:0px;padding:0px,'>";

            tabvar += "    <td style='width:350px;height:50px;text-align:left'>";
            tabvar += "         <text class='label'>" + tableValues[2]["tr"][0]['td1'] + "</text>";
            tabvar += "    </td>";
            //竖间隔
            tabvar += "    <td style='width:150px;'>";
            tabvar += "    </td>";

            // tabvar += "    <td style='width:650px;text-align:center'>";
            // tabvar += "         <text class='label'>" + tableValues[1]["tr"][0]['td2'] + "</text>";
            // tabvar += "    </td>";
            tabvar += " </tr>";

            //第二行
            tabvar += "   <tr style='height:0px;padding:0px,'>";

            tabvar += "     <td style='width:650px;height:0px;text-align:left'>";
            tabvar += "       <text class='label2'>" + tableValues[2]["tr"][1]['td1'].split(":")[0] + ":" + "<span class ='label4'>" + tableValues[2]["tr"][1]['td1'].split(":")[1] + "</span>" + "</text>";
            tabvar += "   </td>";
            //竖间隔
            tabvar += "    <td style='width:60px;'>";
            tabvar += "       <text class='label2'></text>";
            tabvar += "    </td>";

            tabvar += "     <td style='width:650px;height:0px;text-align:left'>";
            tabvar += "       <text class='label3'>" + tableValues[2]["tr"][1]['td2'].split(":")[0] + ":" + "<span class ='label4'>" + tableValues[2]["tr"][1]['td2'].split(":")[1] + "</span>" + "</text>";
            tabvar += "   </td>";
            tabvar += "    <td></td>";

            tabvar += " </tr>";


            $('#show_table').append(tabvar);
            $('.label2').css({ "color": c1 })
            $('.label3').css("color", c1)
            $('.label4').css({ "color": c8, "text-shadow": th1 })
            const leibie_name = []; // 用于存放类别名
            var id; // 存储 一级标题点击时的 id
            for (var i = 0; i < table_data['data'].length; i++) {
                if (table_data['data'][i]['title'] === yiji) {
                    for (var j = 0; j < table_data['data'][i]['table'].length; j++) {
                        if (table_data['data'][i]['table'][j]['title'] === $(this).text()) {
                            unit = table_data['data'][i]['table'][j]['unit'];
                            for (var k = 0; k < table_data['data'][i]['table'][j]['data'].length; k++) {
                                const color_res = []; // 颜色过渡数组
                                leibie_name.push(table_data['data'][i]['table'][j]['data'][k]['categoryName']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['start_color']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['end_color']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['high_color']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['gradient_color']);
                                const res = []; // y_data 过渡数组
                                var currentLabel = '';
                                for (var m = 0; m < table_data['data'][i]['table'][j]['data'][k]['categoryData'].length; m++) {
                                    res.push({
                                        value: table_data['data'][i]['table'][j]['data'][k]['categoryData'][m]['yLabel'],
                                        name: table_data['data'][i]['table'][j]['data'][k]['categoryData'][m]['xLabel'],

                                    })

                                    //x_label.push(currentLabel)
                                    x_label.push(table_data['data'][i]['table'][j]['data'][k]['categoryData'][m]['xLabel'])
                                }
                                y_data.push(res);
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
            for (var i = 0; i < color_list.length; i++) {
                const res = []; // 存储颜色的过渡矩阵
                for (var j = 0; j < y_data[i].length; j++) {
                    res.push(new echarts.graphic.LinearGradient(0, 1, 0, 0, [
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
            var dataCategory = table_data['data'][0]['table'][0]['data'][0]['categoryData']
            var pieChartData = [];
            var tips = 100;
            var tick = 0;
            // var m=60;
            function aniClockwise(m) {
                return [{
                        value: tips,
                        // type:LinearGradient,
                        itemStyle: {
                            normal: {
                                color: 'rgba(255,255,255,0.1)',
                            }
                        },
                    },
                    {
                        value: m,
                        itemStyle: {
                            normal: {
                                borderWidth: 0,
                                borderColor: 'rgba(0,0,0,0)',
                                borderType: 'dashed',
                                color: 'rgba(255,255,255,1)',
                                shadowBlur: 10,
                                shadowColor: 'rgb(25,256,20)'
                            }
                        }
                    },
                    {
                        value: 100 - m - tips,
                        itemStyle: {
                            normal: {
                                color: 'rgba(255,255,255,0.1)',
                            }
                        }
                    }
                ];
            };

            function aniAnticlockwise(x) {
                return [{
                        value: tick,
                        itemStyle: {
                            normal: {
                                color: h6,
                            }
                        },
                    },
                    {
                        value: x,
                        itemStyle: {
                            normal: {
                                borderWidth: 0,
                                color: c2,
                                shadowBlur: 10,
                                shadowColor: h1,
                            }
                        }
                    },
                    {
                        value: 100 - x - tick,
                        itemStyle: {
                            normal: {
                                color: h6,
                            }
                        }
                    }
                ];
            };

            for (var i = 0; i < dataCategory.length; i++) {
                var legendName = { value: dataCategory[i]['yLabel'], name: dataCategory[i]['xLabel'] }
                pieChartData.push(legendName)
            };


            // for (var i = 0; i < y_data.length; i++) {
            //     const colorList = new_color_list[i];
            series = [{
                    name: 'aaa',
                    type: 'pie',
                    avoidLabelOverlap: false,

                    data: ['11'],
                    radius: ['68%', '80%'],
                    center: ['50%', '50%'],
                    itemStyle: {

                    },
                    label: {
                        show: true,
                        //formatter: '{d}%',
                        formatter: '61' + '%',
                        position: 'center',
                        fontSize: 140,
                        fontWeight: 'lighter',
                        color: c1,
                        padding: [5, 0, 0, 0],
                        textShadowBlur: 30,
                        textShadowColor: h1,
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
                        // color: c2,
                        // shadowColor: h1,
                        // shadowBlur: 10,
                        // shadowOffsetY: 0,
                    },
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    data: aniAnticlockwise(60)
                },

            ];
            console.log(new_liebie);
            myChart = echarts.init(document.getElementById('show_charts')); // 基于准备好的dom，初始化echarts实例
            option = {
                tooltip: {
                    show: false,
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

        // $('.erji_title a')[0].click();



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