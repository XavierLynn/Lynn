
var showRealData = JKB["能源监控"]["企业监控"]["区域用户分布占比"]

var table_data = {
    "data": [{
        "title": "区域用户分布占比",
        "table": [{
            "title": "总",
            "unit": "万tce",
            "data": [{
                "categoryName": "需",
                "start_color": "#8FC31F",
                "end_color": "#8FC31F",
                'high_color': '#5ceaff',
                'gradient_color': '#8FC31F5A',
                "categoryData": [{
                        "xLabel": "张江南区",
                        "yLabel": "5.84"
                    },
                    {
                        "xLabel": "康桥工业园南区",
                        "yLabel": "11.40"
                    },
                    {
                        "xLabel": "孙桥科创中心",
                        "yLabel": "5.98"
                    },
                    {
                        "xLabel": "原国家高新区",
                        "yLabel": "52.58"
                    },
                    {
                        "xLabel": "上海国际医学园区",
                        "yLabel": "9.87"
                    },
                    {
                        "xLabel": "康桥工业园北区",
                        "yLabel": "8.21"
                    },
                    {
                        "xLabel": "规划保留用地",
                        "yLabel": "5.70"
                    },
                    {
                        "xLabel": "张江科学城",
                        "yLabel": "0.42"
                    }

                ]
            }, ]
        }]
    }]
};
$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYJK.asmx/GetEnteEnergyConsumptionMonthDetails",
        type: "POST",
        async: true,
        data: "elecID=1352958966&startDate=2019-12&endDate=2020-01",
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
    yiji_title.length=0;



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
                    $('#subtitle').append("<span class='erji_title'><a href='#' style='background-image: url(../../Image/zfsj/" + table_data['data'][i]['table'][j]['title'] + ".png);'>" + table_data['data'][i]['table'][j]['title'] + "</a></span>");
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
                                for (var m = 0; m < table_data['data'][i]['table'][j]['data'][k]['categoryData'].length; m++) {
                                    res.push({
                                        value: table_data['data'][i]['table'][j]['data'][k]['categoryData'][m]['yLabel'],
                                        name: table_data['data'][i]['table'][j]['data'][k]['categoryData'][m]['xLabel']
                                    })
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
            for (var i = 0; i < y_data.length; i++) {
                const colorList = new_color_list[i];
                series.push({
                    name: new_liebie[i],
                    type: 'pie',
                    //avoidLabelOverlap: false,
                    data: y_data[i],
                    radius: ['40%', '68%'],
                    center: ['50%', '52%'],
                    itemStyle: {
                        shadowColor: 'rgba(52,155,255, 1)',
                        shadowBlur: 20,
                        shadowOffsetY: 0
                    },
                    hoverOffset: 30,
                    label: {
                        color: '#FFFFFF',
                        formatter: '{b}  {@2012} {d}%',
                        // formatter: function(params) {
                        //     console.log(params)
                        //     var res = '<span style="color:#FF0000;">' +'sss'+'</span>' + params.name;
                        //     return res;
                        // },

                        fontSize: 40,
                        // fontFamily: '庞门正道标题体',

                        //fontWeight: 'lighter'
                    },
                    labelLine: {
                        length: 30,
                        length2: 60,
                        lineStyle: {
                            width: 2,
                            color: '#61adff'
                        }
                    },
                    minAngle: 20,
                    roseType: 'radius',
                })
            }
            console.log(new_liebie);
            myChart = echarts.init(document.getElementById('show_charts')); // 基于准备好的dom，初始化echarts实例
            option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}<br/> {c}" + unit + "<br/> {d}%",
                    textStyle: {
                        fontSize: globalFontSize,
                    }
                },
                // backgroundColor:{
                //     image:img
                // },
                legend: {
                    show: false,
                    orient: 'horizontal',
                    // right: '55',
                    // top:'middle',
                    bottom: '0',
                    width: 300,
                    itemWidth: 20,
                    itemHeight: 10,
                    itemGap: 20,
                    data: x_label,
                    textStyle: {
                        color: globalFontColor,
                        fontSize: globalFontSize - 5,
                        shadowColor: 'rgba(65,141,255,0.75)',
                        shadowBlur: 10,
                        shadowOffsetY: 0
                    }
                },
                color: ['#d1f6ff', '#b0f0ff', '#86e7fd', '#3c91d8', '#3588b8', '#296c99'],
                series: series,
                animationDuration: 0
            };

            // myChart.clear();
            myChart.setOption(option);
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
        url: "http://localhost:2277/监控版/NYJK.asmx/"+jsonData['FunctionName'],
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