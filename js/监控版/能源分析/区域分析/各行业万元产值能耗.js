
var showRealData = JKB["能源分析"]["区域分析"]["各行业万元产值能耗"]

  //使用模拟数据
var table_data = {
    "data": [{
        "title": "各行业万元产值能耗",
        "table": [{
            "title": "总",
            "unit": "(万元/tce)",
            "xLabelRang": [{
                "label": "制造业"
            },
            {
                "label": "租赁和商务服务业"
            },
            {
                "label": "科学研究和技术服务业"
            },
            {
                "label": "信息传输、软件和信息技术服务业"
            },
            {
                "label": "教育"
            },
            {
                "label": "住宿和餐饮业"
            },
            {
                "label": "批发和零售业"
            },
            {
                "label": "交通运输、仓储和邮政业"
            },
            {
                "label": "电力、热力、燃气及水生产和供应业"
            },
            {
                "label": "水利、环境和公共设施管理业"
            },
            {
                "label": "卫生和社会工作"
            },
            {
                "label": "公共管理、社会保障和社会组织"
            },
            {
                "label": "农、林、牧、渔业"
            },
            {
                "label": "文化、体育和娱乐业"
            },
            {
                "label": "房地产业"
            },
            {
                "label": "金融业"
            },
            {
                "label": "建筑业"
            },
            {
                "label": "居民服务、修理和其他服务业"
            },

            ],
            "yLabelRang": [{
                    "label": "0"
                },
                {
                    "label": "10"
                },
                {
                    "label": "20"
                },
                {
                    "label": "30"
                },
                {
                    "label": "40"
                },
                {
                    "label": "50"
                },
            ],
            "data": [{
                "categoryName": "类别一",
                "start_color": 'rgba(45,253,255,0.25)',
                "end_color": 'rgba(45,253,255,1)',
                'high_color1': '#F2F2F2', //'#ed5f00',
                'high_color2': '#fce700',
                "categoryData": [{
                        "xLabel": "阿里巴巴",
                        "yLabel": 14269.58
                    },
                    {
                        "xLabel": "2019.02",
                        "yLabel": 97639.75
                    },
                    {
                        "xLabel": "2019.03",
                        "yLabel": 122178.35
                    },
                    {
                        "xLabel": "2019.04",
                        "yLabel": 35355.3
                    },
                    {
                        "xLabel": "2019.05",
                        "yLabel": 21533.19
                    },
                    {
                        "xLabel": "2019.06",
                        "yLabel": 24535.93
                    },
                    {
                        "xLabel": "2019.07",
                        "yLabel": 1176.01
                    },
                    {
                        "xLabel": "2019.08",
                        "yLabel": 12579.98
                    },
                    {
                        "xLabel": "2019.09",
                        "yLabel": 2801.75
                    },
                    {
                        "xLabel": "2019.10",
                        "yLabel": 3801.62
                    },
                    {
                        "xLabel": "2019.11",
                        "yLabel": 2279.86
                    },
                    {
                        "xLabel": "2019.12",
                        "yLabel": 1121.47
                    },
                    {
                        "xLabel": "2019.01",
                        "yLabel": 2562.53
                    },
                    {
                        "xLabel": "2019.02",
                        "yLabel": 3210.32
                    },
                    {
                        "xLabel": "2019.03",
                        "yLabel": 4720.35
                    },
                    {
                        "xLabel": "2019.04",
                        "yLabel": 960.59
                    },
                    {
                        "xLabel": "2019.05",
                        "yLabel": 2012.36
                    },
                    {
                        "xLabel": "齐感科技",
                        "yLabel": 1203.56
                    }
                ]
            }]
        }]
    }]
};


$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYFX.asmx/GetRegionWYCZNH",
        type: "POST",
        async: true,
        data: "regionID=zj&startDate=2019-12&endDate=2020-01",
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
            var unit; // 用于存放 数值单位
            const leibie_name = []; // 用于存放类别名
            var id; // 存储 一级标题点击时的 id
            var yMax = 0;
            var dataShadow = [];
            var datas = [];
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
                                    if (m > 0) {
                                        dataShadow.push(yMax)
                                    }

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
                dataShadow.push(yMax);
            }
            for (var i = 0; i < y_data.length; i++) {
                const colorList = new_color_list[i];

                tempColor = color_list[i][0];
                series.push({
                        type: 'bar',
                        barGap: "-100%",
                        barWidth: '44px',
                        silent: true,
                        itemStyle: {
                            normal: {
                                color: 'rgba(255,255,255,0.16)',
                                barBorderRadius: [0, 0, 0, 0],
                                shadowBlur: 20,
                                shadowColor: 'rgba(255,255,255,0.16)'
                            }
                        },
                        data: datas[i],
                        animation: false
                    },

                    {
                        name: new_liebie[i],
                        type: 'bar',
                        barGap: "-100%",
                        itemStyle: itemStyle = {
                            normal: {
                                barBorderRadius: [0, 0, 0, 0],
                                color: function(params) {
                                    return colorList[params.dataIndex]
                                },
                                shadowBlur: 20,
                                shadowColor: '#2dfdff'
                            },
                        },
                        barWidth: '44px',
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
                    left: '5%',
                    right: '2.5%',
                    bottom: '2%',
                    top: '8%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: x_label,
                    axisLine: {
                        lineStyle: {
                            color: globalFontColor,
                            width: 3,
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
                        rotate: 0,
                        fontStyle: 'normal',
                        fontFamily: 'sans-serif',
                        color: globalFontColor,
                        fontSize: 36,
                        margin: 40,
                        align: 'center',
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
                        padding: [0, 140, 0, 0],
                        color: globalFontColor,
                        fontSize: globalFontSize,
                    },
                    axisTick: {
                        show: false
                    },
                    min: 0,
                    max: yMax,
                    type: 'value',
                    axisLabel: {
                        margin: 50,
                        color: globalFontColor,
                        fontSize: globalFontSize
                    },
                    axisLine: {
                        show: false
                    },
                    splitNumber: 5,
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


//播放动画
ue.interface.PlayAnimation = function(time) {
    option.animationDuration = time;
    myChart.clear();
    myChart.setOption(option);
};

//使其高亮
ue.interface.Highlight = function(xlabel) {
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
            barWidth: '40px',
            label: label,
            data: y_data[i],
            color: function(params) {
                return colorList[params.dataIndex]
            }
        })
    }
    option.series = series;
    option.animationDuration = 1000;
    myChart.clear();
    myChart.setOption(option);
};