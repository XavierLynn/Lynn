globalFontSize = 40;
label = {
    show: true, //开启显示
    position: 'right', // 在上方显示
    formatter: '{c}' + unit,
    textStyle: { //数值样式
        color: '#FFFFFF',
        fontSize: globalFontSize
    }
};
//播放动画
ue.interface.PlayAnimation = function(time) {
    option.animationDuration = time;
    myChart.clear();
    myChart.setOption(option);
};
//使其高亮
// $('#btn').click(function () {
ue.interface.Highlight = function(xlabel) {
    x_val = [xlabel];
    new_color_list = [];
    series = [];

    for (var i = 0; i < color_list.length; i++) {
        const res = []; // 存储颜色的过渡矩阵
        for (var j = 0; j < y1_data[i].length; j++) {
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
    for (var i = 0; i < y1_data.length; i++) {
        const colorList = new_color_list[i];
        series.push({
            name: new_liebie[i],
            type: 'bar',
            barGap: 0,
            itemStyle: itemStyle,
            barWidth: '26px',
            label: label,
            data: y1_data[i],
            color: function(params) {
                return colorList[params.dataIndex]
            }
        })
    }
    option.series = series;
    myChart.clear();
    myChart.setOption(option);
};
// });
var table_data = {
    "data": [{
        "title": "用电经济性指标同行对比",
        "table": [{
            "title": "总",
            "unit": "万tce",
            "xLabelRang": [{
                    "label": "最大设备\n利用率  "
                },
                {
                    "label": "电量峰谷\n比     "
                },
                {
                    "label": "功率因数"
                }

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
                {
                    "label": "60"
                },
                {
                    "label": "70"
                },
                {
                    "label": "80"
                },
                {
                    "label": "90"
                },
                {
                    "label": "100"
                }

            ],
            "data": [{
                "categoryName": "类别一",
                "start_color": 'rgba(1,55,122,1)',
                "end_color": 'rgba(92,234,255,1)',
                'high_color1': '#ed5f00',
                'high_color2': '#fce700',
                "categoryData": [{
                        "xLabel": "最大设备利用率",
                        "y1Label": "84",
                        "y2Label": "67"
                    },
                    {
                        "xLabel": "电量峰谷比",
                        "y1Label": "77",
                        "y2Label": "77"
                    },
                    {
                        "xLabel": "利率奖惩电费",
                        "y1Label": "97",
                        "y2Label": "100"
                    }

                ]
            }]
        }]
    }]
};
var showRealData = ZSB["能源客户视角"]["用电经济性指标同行对比"];
$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYKHSJ.asmx/GetQuYuDWMJNH",
        type: "POST",
        async: true,
        data: "regionID=zj&startDate=2019-08&endDate=2019-12",
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

    const yiji_title = []; // 存放 一级标题的名称
    // yiji_title.length = 0;
    $('.nav').empty()
 
    x_val = []; // 需要高亮的 x_label //"2017","2019"

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
        x_label = [];
        y_data = [];
        color_list = [];
        new_color_list = [];
        series = [];

        
        series.length = 0;
        y_data.length = 0;
        x_label.length = 0;
        color_list.length = 0;
        new_color_list.length = 0;
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
            y1_data = [];
            y2_data = [];
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
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['high_color1']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['high_color2']);
                                const res1 = [];
                                const res2 = []; // y_data 过渡数组
                                for (var m = 0; m < table_data['data'][i]['table'][j]['data'][k]['categoryData'].length; m++) {
                                    res1.push(table_data['data'][i]['table'][j]['data'][k]['categoryData'][m]['y1Label']);
                                    res2.push(table_data['data'][i]['table'][j]['data'][k]['categoryData'][m]['y2Label'])
                                }
                                y1_data.push(res1);
                                y2_data.push(res2);
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
            new_liebie.push('人工智能岛', '行业均值');
            for (var i = 0; i < color_list.length; i++) {
                const res = []; // 存储颜色的过渡矩阵
                for (var j = 0; j < y1_data[i].length; j++) {
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
            label = {
                show: true, //开启显示
                position: 'right', // 在上方显示
                formatter: '{c}' + unit,
                textStyle: { //数值样式
                    color: textColor,
                    fontSize: globalFontSize
                }
            };
            for (var i = 0; i < y1_data.length; i++) {
                const colorList = new_color_list[i];
                tempColor = color_list[i][0];
                series.push({
                    name: new_liebie[i],
                    type: 'bar',
                    barGap: '50%',
                    itemStyle: itemStyle = {
                        normal: {
                             barBorderRadius: [0, 0, 0, 0],
                                    color: function(params) {
                                        return colorList[params.dataIndex]
                                    },
                            color: mainGroup["ydjjxzbthdb"]["one"],
                        },
                    },
                    barWidth: '38px',
                    label: label,
                    data: y1_data[i],
                    color: function(params) {
                        return colorList[params.dataIndex]
                    }
                }, {
                    name: new_liebie[i + 1],
                    type: 'bar',
                    barGap: '50%',
                    itemStyle: itemStyle = {
                        normal: {
                             barBorderRadius: [0, 0, 0, 0],
                                    color: function(params) {
                                        return colorList[params.dataIndex]
                                    },
                            color: mainGroup["ydjjxzbthdb"]["two"],
                        },
                    },
                    barWidth: '38px',
                    label: label,
                    data: y2_data[i],

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
                        color: textColor,
                        fontSize: globalFontSize,
                    }
                },
                // backgroundColor:{
                //     image:img
                // },

                legend: {
                    icon: 'bar',
                    right: '10%',
                    top: 0,

                    itemGap: 50,
                    data: new_liebie,
                    itemWidth: 50,
                    itemHeight: 20,

                    textStyle: {
                        fontSize: globalFontSize,
                        color: textColor
                    }
                },
                grid: {
                    left: '2%',
                    right: '15%',
                    bottom: '0%',
                    top: '10%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'value',
                    axisLine: {
                        show: true
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        color: textColor,
                        fontSize: globalFontSize,
                    },
                    splitNumber: 10,
                    splitLine: {
                        show: false
                    }
                }],
                yAxis: [{
                    type: 'category',
                    data: x_label,
                    axisLabel: {
                        interval: 0,
                        margin: 45,
                        // color: '#2A3545',
                        color: mainGroup['ydjjxzbthdb']['yText'],
                        fontSize: globalFontSize + 4,
                        backgroundColor: mainGroup['ydjjxzbthdb']['yBG'],
                        borderRadius: 10,
                        borderColor: mainGroup['ydjjxzbthdb']['yBorderC'],
                        borderWidth: 2,
                        padding: [15, 15, 10, 15]
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: true
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
};

ue.interface.Flush=function()
{
    Flush();
}

ue.interface.Load=function(data)
{
    var jsonData = JSON.parse(data);
    $.ajax({
        url: "http://localhost:2277/监控版/NYKHSJ.asmx/"+jsonData['FunctionName'],
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