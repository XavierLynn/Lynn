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
            color: 'rgba(0,0,0,0)ff' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#ff0000' // 100% 处的颜色
        }]),
        lineStyle: {
            width: 10 //设置曲线宽度
        }
    },

};

var table_data = {
    "data": [{
        "title": "虚拟电厂出力曲线",
        "table": [{
            "title": "总",
            "unit": "kw",
            "xLabelRang": [{
                    "label": "15:30"
                },
                {
                    "label": "16:00"
                },
                {
                    "label": "16:30"
                },
                {
                    "label": "17:00"
                },
                {
                    "label": "17:30"
                },
                {
                    "label": "18:00"
                },
                {
                    "label": "18:30"
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
                    "start_color": mainGroup['xlfzldb']['three'],
                    "end_color": mainGroup['xlfzldb']['three'],
                    'high_color': "rgba(65,140,255,0.3)",
                    'gradient_color': "rgba(65,140,255,0)",
                    "categoryData": [{
                            "xLabel": "1",
                            "yLabel": "23000"
                        },
                        {
                            "xLabel": "2",
                            "yLabel": "19500"
                        },
                        {
                            "xLabel": "3",
                            "yLabel": "16000"
                        },
                        {
                            "xLabel": "4",
                            "yLabel": "25000"
                        },
                        {
                            "xLabel": "5",
                            "yLabel": "27000"
                        },
                        {
                            "xLabel": "6",
                            "yLabel": "28000"
                        },
                        {
                            "xLabel": "7",
                            "yLabel": "22000"
                        },

                    ]
                },

                {
                    "categoryName": "计划",
                    "start_color": mainGroup['xlfzldb']['one'],
                    "end_color": mainGroup['xlfzldb']['one'],
                    'high_color': "rgba(209,246,255,0.3)",
                    'gradient_color': "rgba(209,246,255,0)",
                    "categoryData": [{
                            "xLabel": "1",
                            "yLabel": ""
                        },
                        {
                            "xLabel": "2",
                            "yLabel": "0"
                        },
                        {
                            "xLabel": "3",
                            "yLabel": "45000"
                        },
                        {
                            "xLabel": "4",
                            "yLabel": "46000"
                        },
                        {
                            "xLabel": "5",
                            "yLabel": "45000"
                        },
                        {
                            "xLabel": "6",
                            "yLabel": "38000"
                        },
                        {
                            "xLabel": "7",
                            "yLabel": "0"
                        },

                    ]
                }

            ]
        }]
    }]
};
var showRealData = ZSB["能源企业视角"]["虚拟电厂出力曲线"];
$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/ChartsService.asmx/GetQuYuDWMJNH",
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

    
    // var transp = '#FFFFFF00';
    var currentErjiTab = null;
    var twoLevelTitle = null;
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
        $(".nav a").css({ "color": mainColor })
        var yiji;
        for (let i = 0; i < table_data['data'].length; i++) {
            if (table_data['data'][i]['title'] === $(this).text()) {
                yiji = $(this).text();
                $('#subtitle').empty();
                for (let j = 0; j < table_data['data'][i]['table'].length; j++) {
                    var temp = table_data['data'][i]['table'][j]['title'];
                    $('#subtitle').append("<span class='erji_title'><a href='#' >" + temp + "</a></span>");
                    // $('.erji_title a').attr("background-image", 'url("../../Image/zfsj/' + temp + 'focus.png")');
                    // $('.erji_title a').attr("style", "background-image:url(../../Image/zfsj/" + temp + "focus.png);");

                    let id = document.getElementById("subtitle")
                    let tempA = id.getElementsByTagName("a");
                    tempA[j].style.backgroundImage = 'url("../../../Image/zfsj/' + temp + '.png")';
                    twoLevelTitle = tempA;

                }
                break
            }
        }
        $('.erji_title a').click(function() {
            for (var i = 0; i < twoLevelTitle.length; i++) {
                if (twoLevelTitle[i].text == $(this).text()) {
                    if (currentErjiTab != twoLevelTitle[i]) {
                        twoLevelTitle[i].style.backgroundImage = 'url("../../../Image/zfsj/' + $(this).text() + 'focus.png")';
                        if (currentErjiTab != null) {
                            currentErjiTab.style.backgroundImage = 'url("../../../Image/zfsj/' + currentErjiTab.text + '.png")';
                        }
                        currentErjiTab = twoLevelTitle[i];
                    }
                }
            }
        });
        $('.erji_title a').mouseenter(function() {
            for (var i = 0; i < twoLevelTitle.length; i++) {
                if (twoLevelTitle[i].text == $(this).text()) {
                    twoLevelTitle[i].style.backgroundImage = 'url("../../../Image/zfsj/' + $(this).text() + 'focus.png")';

                }
            }
        });
        $('.erji_title a').mouseleave(function() {
            for (var i = 0; i < twoLevelTitle.length; i++) {
                if (twoLevelTitle[i].text == $(this).text() && currentErjiTab != twoLevelTitle[i]) {
                    twoLevelTitle[i].style.backgroundImage = 'url("../../../Image/zfsj/' + $(this).text() + '.png")';
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
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['gradient_color']);
                                const res = []; // y_data 过渡数组
                                for (var m = 0; m < table_data['data'][i]['table'][j]['data'][k]['categoryData'].length; m++) {
                                    res.push(table_data['data'][i]['table'][j]['data'][k]['categoryData'][m]['yLabel'])
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
                    res.push(new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                        // { offset: 0, color: transp },
                        { offset: 0, color: color_list[i][0] },
                        { offset: 1, color: color_list[i][1] },
                        // { offset: 1, color: transp }
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
            var colorGra = [];
            for (var i = 0; i < table_data['data'][0]['table'][0]['data'].length; i++) {
                var highColors = { 'one': table_data['data'][0]['table'][0]['data'][i]['gradient_color'], 'two': table_data['data'][0]['table'][0]['data'][i]['high_color'] };
                colorGra.push(highColors)
            }

            for (var i = 0; i < y_data.length; i++) {
                const colorList = new_color_list[i];
                var tempColor = color_list[i][0];
                series.push({
                    name: new_liebie[i],

                    type: 'line',
                    //lineStyle: { normal: { color: colorList[0] } },
                    itemStyle: {
                        normal: {
                            barBorderRadius: [0, 0, 0, 0],
                            lineStyle: {
                                width: 4,
                                shadowColor: color_list[i][0],
                                shadowBlur: 10,
                            }

                        },

                    },
                    smooth: false,
                    //stack: '总量',
                    symbol: 'none',

                    label: {
                        show: false
                    },
                    data: y_data[i],
                    color: colorList[i]

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
                        fontSize: 38,
                    }
                },
                // backgroundColor:{
                //     image:img
                // },
                legend: {
                    icon: 'auto',
                    right: '3%',
                    top: '0%',
                    itemGap: 150,
                    data: new_liebie,
                    itemWidth: 50,
                    itemHeight: 5,
                    textStyle: {
                        fontSize: 40,
                        color: globalFontColor
                    }
                },
                grid: {
                    left: '1%',
                    right: '1%',
                    bottom: '0%',
                    top: '22%',
                    containLabel: true
                },
                xAxis: [{
                    name: '',
                    nameLocation: 'end',
                    nameGap: 20,
                    nameTextStyle: {
                        color: globalFontColor,
                        fontSize: 40,
                    },
                    type: 'category',
                    data: x_label,
                    axisLine: {
                        lineStyle: {
                            color: globalFontColor,
                            width: 4,
                            offset: 10,
                        }
                    },
                    axisTick: {
                        show: false,
                        lineStyle: {
                            width: 20,
                            alignWithLabel: true
                        }
                    },
                    axisLabel: {
                        interval: 0,
                        rotate: 0,
                        color: globalFontColor,
                        fontSize: 40,
                        margin: 60
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
                        fontSize: globalFontSize - 5,
                    },
                    axisTick: {
                        show: false
                    },
                    type: 'value',
                    // min: 0,
                    // max: 25,
                    splitNumber: 5,
                    axisLabel: {
                        color: globalFontColor,
                        fontSize: 40,
                        margin: 40
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


ue.interface.Flush=function()
{
    Flush();
}

ue.interface.Load=function(data)
{
    var jsonData = JSON.parse(data);
    $.ajax({
        url: "http://localhost:2277/ChartsService.asmx/"+jsonData['FunctionName'],
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