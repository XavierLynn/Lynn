
var dataShadow = [];

itemStyle = {
    normal: {
        barBorderRadius: [0, 0, 0, 0],
        shadowColor: 'rgba(52,155,255, 1)',
        shadowBlur: 20,
        shadowOffsetY: 0
    },

};


var table_data = {
    "data": [{
        "title": "行业消费排名",
        "table": [{
            "title": "总",
            "unit": "万tce",
            "xLabelRang": [{
                "label": "农林牧渔业"
            },
            {
                "label": "文化 体育和娱乐业"
            },
            {
                "label": "制造业"
            },
            {
                "label": "电力 热力 燃气及水生产和供应业"
            },
            {
                "label": "建筑业"
            },
            {
                "label": "批发和零售业"
            },
            {
                "label": "交通运输 仓储和邮政业"
            },
            {
                "label": "住宿和餐饮业"
            },
            {
                "label": "金融业"
            },
            {
                "label": "信息传输 软件和信息技术服务业"
            },
            {
                "label": "房地产业"
            },
            {
                "label": "租赁和商业服务业"
            },
            {
                "label": "科学研究和技术服务业"
            },
            {
                "label": "水利 环境和公共设施管理业"
            },
            {
                "label": "卫生和社会工作"
            },
            {
                "label": "居民服务 维修和其他服务业"
            },
            {
                "label": "教育"
            },
            {
                "label": "公共管理 社会保障和社会组织"
            }
            ],
            "yLabelRang": [{
                "label": "0"
            },
            {
                "label": "100"
            },
            {
                "label": "200"
            },
            {
                "label": "300"
            },
            {
                "label": "400"
            },
            {
                "label": "500"
            }
            ],
            "data": [{
                "categoryName": "类别一",
                "start_color": "rgba(209,246,255,1)",
                "end_color": "rgba(209,246,255,1)",
                'high_color1': "rgba(209,246,255,1)",
                'high_color2': "rgba(209,246,255,1)",
                "categoryData": [{
                    "yLabel": "20"
                },
                {
                    "yLabel": "31"
                },
                {
                    "yLabel": "4"
                },
                {
                    "yLabel": "21"
                },
                {
                    "yLabel": "15"
                },
                {
                    "yLabel": "13"
                },
                {
                    "yLabel": "16"
                },
                {
                    "yLabel": "27"
                },
                {
                    "yLabel": "31"
                },
                {
                    "yLabel": "25"
                },
                {
                    "yLabel": "24"
                },
                {
                    "yLabel": "19"
                },
                {
                    "yLabel": "28"
                },
                {
                    "yLabel": "19"
                },
                {
                    "yLabel": "19"
                },
                {
                    "yLabel": "19"
                },
                {
                    "yLabel": "19"
                },
                {
                    "yLabel": "19"
                }
                ]
            }]
        }]
    }]
};


var showRealData = JKB["驾驶舱"]["行业消费排名"];

$(function () {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/JSC.asmx/GetRegionHYXFPM",
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
    $('.nav').empty()

    for (var i = 0; i < table_data['data'].length; i++) {
        yiji_title.push(table_data['data'][i]['title']);
    }
    const img = new Image(); // 设置背景图片
    img.src = '../../../Image/gray.jpg'; // 背景图片路径
    $('.nav').append("<li id='tag'>◀</li>");
    for (var i = 0; i < yiji_title.length; i++) {
        const id = "title" + i;
        const href = "#title" + i;
        $('.nav').append("<li role='presentation'><a href='" + href + "' aria-controls='profile' role='tab' data-toggle='tab'>" + yiji_title[i] + "</a></li>");
    }
    $('.nav a').click(function () {
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
        $('.erji_title').click(function () {
            //每次点击初始化上一次加载的数据
            series = [];
            y_data = [];
            x_label = [];
            color_list = [];
            new_color_list = [];
            dataShadow = [];
            
            series.length = 0;
            y_data.length = 0;
            x_label.length = 0;
            color_list.length = 0;
            new_color_list.length = 0;
            dataShadow.length = 0;
            //如果只有一个二级标题，默认不显示
            if ($('.erji_title').length <= 1) {

                $('#subtitle').empty();
            }
            var unit; // 用于存放 数值单位
            const leibie_name = []; // 用于存放类别名
            var id; // 存储 一级标题点击时的 id
            for (var i = 0; i < table_data['data'].length; i++) {
                if (table_data['data'][i]['title'] === yiji) {
                    for (var j = 0; j < table_data['data'][i]['table'].length; j++) {
                        if (table_data['data'][i]['table'][j]['title'] === $(this).text()) {
                            unit = table_data['data'][i]['table'][j]['unit'];
                            for (var k = 0; k < table_data['data'][i]['table'][j]['xLabelRang'].length; k++) {
                                x_label.push(table_data['data'][i]['table'][j]['xLabelRang'][k]['label'].split('').join('\n'))
                            }
                            for (var k = 0; k < table_data['data'][i]['table'][j]['data'].length; k++) {
                                const color_res = []; // 颜色过渡数组
                                leibie_name.push(table_data['data'][i]['table'][j]['data'][k]['categoryName']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['start_color']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['end_color']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['high_color1']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['high_color2']);
                                const res = []; // y_data 过渡数组
                                yMax = 0;
                                for (var m = 0; m < table_data['data'][i]['table'][j]['data'][k]['categoryData'].length; m++) {
                                    var number = Number(table_data['data'][i]['table'][j]['data'][k]['categoryData'][m]['yLabel'])
                                    if (yMax < number) {
                                        yMax = number
                                    }
                                }
                                yMax = GetMaxNuber(yMax);
                                for (var m = 0; m < table_data['data'][i]['table'][j]['data'][k]['categoryData'].length; m++) {
                                    res.push(table_data['data'][i]['table'][j]['data'][k]['categoryData'][m]['yLabel'])
                                    if (m == 0)
                                        yMax = Number(table_data['data'][i]['table'][j]['data'][k]['categoryData'][m]['yLabel']);
                                    if (yMax < Number(table_data['data'][i]['table'][j]['data'][k]['categoryData'][m]['yLabel']))
                                        yMax = Number(table_data['data'][i]['table'][j]['data'][k]['categoryData'][m]['yLabel']);
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
            //计算最大刻度
            yMax = Math.ceil(yMax / 10) * 10;
            for (var i = 0; i < y_data[0].length; i++) {
                dataShadow.push(yMax);
            }
            for (var i = 0; i < y_data.length; i++) {
                const colorList = new_color_list[i];
                series.push({
                    type: 'bar',
                    barGap: "-100%",
                    barWidth: '40px',
                    itemStyle: {
                        normal: { color: colorAlp, barBorderRadius: [0, 0, 0, 0] }
                    },
                    data: dataShadow,
                }, {
                    name: new_liebie[i],
                    type: 'bar',
                    barGap: "-100%",
                    itemStyle: {
                        normal: {
                            barBorderRadius: [0, 0, 0, 0],
                            color: function(params) {
                                return colorList[params.dataIndex]
                            }
                        },
                    },
                    barWidth: '40px',
                    // label: label,
                    data: y_data[i],
                    color: function (params) {
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
                    right: '3%',
                    data: new_liebie,
                    itemWidth: 40,
                    itemHeight: 24,
                    textStyle: {
                        fontSize: globalFontSize,
                        color: globalFontColor
                    }
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '25%',
                    top: '10%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: x_label,
                    axisLine: {
                        lineStyle: {
                            color: globalFontColor,
                            width: 2,
                            offset: 10,
                        }
                    },
                    axisTick: {
                        show: false,
                        lineStyle: {
                            width: 10,
                            alignWithLabel: true
                        }
                    },
                    axisLabel: {
                        interval: 0,
                        rotate: 0,
                        color: globalFontColor,
                        fontSize: globalFontSize,
                        margin: 20
                    },
                    splitLine: {
                        show: false
                    }
                }],
                yAxis: [{
                    name: unit,
                    nameLocation: 'end',
                    nameGap: 40,
                    nameTextStyle: {
                        color: globalFontColor,
                        fontSize: globalFontSize,
                    },
                    type: 'value',
                    axisTick: {
                        show: false
                    },
                    type: 'value',
                    axisLabel: {
                        color: globalFontColor,
                        fontSize: globalFontSize
                    },
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
                            type: 'dashed'
                        }
                    },
                }],
                series: series,
                animationDuration: 0
            };
            // 使用刚指定的配置项和数据显示图表。
            // myChart.clear();
            myChart.setOption(option);

        });
        $('.erji_title a')[0].click();
    });

    $('.nav a')[0].click();
};

ue.interface.Flush = function () {
    Flush();
}

ue.interface.Load = function (data) {
    var jsonData = JSON.parse(data);
    $.ajax({
        url: "http://localhost:2277/监控版/JSC.asmx/" + jsonData['FunctionName'],
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
ue.interface.PlayAnimation = function (time) {
    option.animationDuration = time;
    myChart.clear();
    myChart.setOption(option);
};
//使其高亮
ue.interface.Highlight = function (xlabel) {
    x_val = [xlabel];
    new_color_list = [];
    series = [];

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
                        new_color_list[i].splice(n, 1, new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            { offset: 0, color: color_list[i][2] },
                            { offset: 1, color: color_list[i][3] }
                        ]));
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
            type: 'bar',
            barGap: 0,
            itemStyle: itemStyle,
            barWidth: '84px',
            label: label,
            data: y_data[i],
            color: function (params) {
                return colorList[params.dataIndex]
            }
        })
    }
    option.series = series;
    option.animationDuration = 1000;
    myChart.clear();
    myChart.setOption(option);
};