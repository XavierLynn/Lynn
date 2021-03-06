
globalFontColor = textColor;

   //使用模拟数据
var table_data = {
    "data": [{
        "title": "各类商品成交趋势",
        "table": [{
            "title": "总",
            "unit": "万tce",
            "xLabelRang": [{
                    "label": "2019.01"
                },
                {
                    "label": "2019.02"
                },
                {
                    "label": "2019.03"
                },
                {
                    "label": "2019.04"
                },
                {
                    "label": "2019.05"
                },
                {
                    "label": "2019.06"
                },
                {
                    "label": "2019.07"
                },
                {
                    "label": "2019.08"
                },
                {
                    "label": "2019.09"
                },
                {
                    "label": "2019.10"
                },
                {
                    "label": "2019.11"
                },
                {
                    "label": "2019.12"
                }
            ],
            "yLabelRang": [{
                    "label": "0"
                },
                {
                    "label": "20"
                },
                {
                    "label": "40"
                },
                {
                    "label": "60"
                },
                {
                    "label": "80"
                },
                {
                    "label": "100"
                },
                {
                    "label": "120"
                }
            ],
            "data": [{
                    "categoryName": "用能诊断",
                    "start_color": mainGroup['glspcjqs']['one'][0],
                    "end_color": mainGroup['glspcjqs']['one'][1],
                    'high_color': '#5ceaff',
                    "categoryData": [{
                            "xLabel": "2015",
                            "yLabel": "40"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "50"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "43"
                        },
                        {
                            "xLabel": "2018",
                            "yLabel": "50"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "48"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "42"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "48"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "53"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "58"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "60"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "52"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "55"
                        },


                    ]
                }, {
                    "categoryName": "用能咨询",
                    "start_color": mainGroup['glspcjqs']['two'][0],
                    "end_color": mainGroup['glspcjqs']['two'][1],
                    'high_color': '#5ceaff',
                    "categoryData": [{
                            "xLabel": "2015",
                            "yLabel": "47"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "52"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "50"
                        },
                        {
                            "xLabel": "2018",
                            "yLabel": "55"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "60"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "55"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "53"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "60"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "65"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "80"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "60"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "45"
                        },


                    ]
                }, {
                    "categoryName": "电能替代",
                    "start_color": mainGroup['glspcjqs']['three'][0],
                    "end_color": mainGroup['glspcjqs']['three'][1],
                    'high_color': '#5ceaff',
                    "categoryData": [{
                            "xLabel": "2015",
                            "yLabel": "45"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "53"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "46"
                        },
                        {
                            "xLabel": "2018",
                            "yLabel": "54"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "58"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "48"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "42"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "57"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "46"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "53"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "40"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "56"
                        },


                    ]
                }

            ]
        }]
    }, ]
};

var showRealData = ZSB["能源服务市场"]["各类商品成交趋势"];

$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/展示版/NYFWSC.asmx/GetQuYuDWMJNH",
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
    for (var i = 0; i < table_data['data'].length; i++) {
        yiji_title.push(table_data['data'][i]['title']);
    }

    $('.nav').append("<li id='tag'></li>");
    $("#tag").css({ "background-color": mainColor })
    for (var i = 0; i < yiji_title.length; i++) {
        const id = "title" + i;
        const href = "#title" + i;
        $('.nav').append("<li role='presentation'><a href='" + href + "' aria-controls='profile' role='tab' data-toggle='tab'>" + yiji_title[i] + "</a></li>");
    }

    $('.nav a').click(function() {
        $(".nav a").css({ "color": textColor })
        var yiji;
        var erji_index;
        for (var i = 0; i < table_data['data'].length; i++) {
            if (table_data['data'][i]['title'] === $(this).text()) {
                yiji = $(this).text();
                erji_index = i;
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

            series.length = 0;
            y_data.length = 0;
            x_label.length = 0;
            color_list.length = 0;
            new_color_list.length = 0;
            //如果只有一个二级标题，默认不显示
            if ($('.erji_title').length <= 1) {

                $('#subtitle').empty();
            }
            const leibie_name = []; // 用于存放类别名
            var id; // 存储 一级标题点击时的 id

            var dataShadow = [];
            var datas = [];
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
                                var yMax = 0;
                                for (var m = 0; m < table_data['data'][i]['table'][j]['data'][k]['categoryData'].length; m++) {
                                    res.push(table_data['data'][i]['table'][j]['data'][k]['categoryData'][m]['yLabel'])
                                    if (yMax / 10 > 10) {
                                        yMax = Math.ceil(yMax / 100) * 100
                                    } else {
                                        yMax = Math.ceil(yMax / 10) * 10
                                    }

                                }
                                dataShadow.push(yMax)
                                y_data.push(res);
                                datas.push(dataShadow)
                                color_list.push(color_res);
                            }
                        }
                    }
                }
            }
            var curInt = null;
            var label = {
                show: false, //开启显示
                position: 'top', // 在上方显示

                textStyle: { //数值样式
                    color: textColor,
                    fontSize: 35
                }
            };
            colors = [mainGroup['glspcjqs']['one'][2],
                mainGroup['glspcjqs']['two'][2],
                mainGroup['glspcjqs']['three'][2]
            ]

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
                tempColor = color_list[i][0];
                series.push(
                  
                    {
                        name: new_liebie[i],
                        type: 'line',
                        barGap: "-100%",
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3,
                                    //type:'dotted',  //'dotted'虚线 'solid'实线
                                    color: colors[i]
                                }
                            }
                        },
                        //lineStyle: { normal: { color: colorList[0] } },
                        smooth: false,
                        symbol: 'circle',
                        symbolSize: 5,
                        sampling: 'average',
                        areaStyle: { normal: { color: colorList[0] } },
                        barWidth: '56px',
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
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'none' // 默认为直线，可选为：'line' | 'shadow'
                    },
                    textStyle: {
                        color: globalFontColor,
                        fontSize: globalFontSize,
                    }
                },
           
                legend: {
                    //type: 'line',
                    icon: 'rect',
                    right: '3%',
                    data: new_liebie,
                    //width: 0,
                    itemGap: 120,
                    itemWidth: 60,
                    itemHeight: 5,
                    textStyle: {
                        fontSize: 40,
                        color: globalFontColor
                    }
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    top: '10%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: x_label,
                    offset: 1,

                    axisLine: {
                        lineStyle: {
                            color: globalFontColor,
                            width: 5,
                            offset: 5,
                        }
                    },
                    axisTick: {
                        show: false,
                        lineStyle: {
                            width: 5,
                            alignWithLabel: true
                        }
                    },
                    axisLabel: {
                        interval: 0,
                        rotate: -50,
                        color: globalFontColor,
                        fontSize: 40,
                        margin: 120,
                        align: 'center',
                    },
                    splitLine: {
                        show: false
                    }
                }],
                yAxis: [
 
                    {
                        name: '单',
                        nameLocation: 'end',
                        nameGap: 50,
                        nameTextStyle: {
                            color: globalFontColor,
                            fontSize: 40,
                        },
                        axisTick: {
                            show: false
                        },
                        type: 'value',
               
                        axisLabel: {
                            margin: 40,
                            color: globalFontColor,
                            fontSize: 40
                        },
                        axisLine: {
                            show: false
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                width: 1,
                                type: 'dashed'
                            }
                        },
                    }
                ],
                series: series,
                animationDuration: 0
            };

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
        url: "http://localhost:2277/展示版/NYFWSC.asmx/"+jsonData['FunctionName'],
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