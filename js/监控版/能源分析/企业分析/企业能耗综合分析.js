label = {
    show: false, //开启显示
    position: 'inside', // 在上方显示
    textStyle: { //数值样式
        color: '#FFFFFF',
        fontSize: globalFontSize
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

var showRealData = JKB["能源分析"]["企业分析"]["企业能耗综合分析"]


var table_data = {
    "data": [{
        "title": "企业能耗综合分析",
        "table": [{
            "title": "总",
            "unit": "Tce",
            "xLabelRang": [{
                    "label": "电",
                    "maxValue": 500
                },
                {
                    "label": "气",
                    "maxValue": 500
                },
                {
                    "label": "水",
                    "maxValue": 500
                },
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
                    "categoryName": "行业均值",
                    "start_color": c8,
                    "end_color": h12,
                    'high_color': '#6298E0',
                    'gradient_color': '#223C58',
                    "categoryData": [{
                            "yLabel": "300"
                        },
                        {
                            "yLabel": "320"
                        },
                        {
                            "yLabel": "500"
                        },
                    ]
                },
                {
                    "categoryName": "企业",
                    "start_color": c4,
                    "end_color": h11,
                    'high_color': '#8EA7AD',
                    'gradient_color': '#445157',
                    "categoryData": [{
                            "yLabel": "500"
                        },
                        {
                            "yLabel": "480"
                        },
                        {
                            "yLabel": "350"
                        },
                    ]
                }
            ]
        }, ]
    }]
};


$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYFX.asmx/GetRegionQYNYZHFX",
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

function Flush(){
  
    yiji_title.length = 0;
    $('.nav').empty()
 
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
            datas = [];

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
            var dataValues = {};
            var indicators = [];
            var colorLendge = [];
            for (var i = 0; i < table_data['data'].length; i++) {
                if (table_data['data'][i]['title'] === yiji) {
                    for (var j = 0; j < table_data['data'][i]['table'].length; j++) {
                        if (table_data['data'][i]['table'][j]['title'] === $(this).text()) {
                            unit = table_data['data'][i]['table'][j]['unit'];
                            for (var k = 0; k < table_data['data'][i]['table'][j]['xLabelRang'].length; k++) {
                                x_label.push(table_data['data'][i]['table'][j]['xLabelRang'][k]['label'])
                                indicators.push({ name: table_data['data'][i]['table'][j]['xLabelRang'][k]['label'], max: table_data['data'][i]['table'][j]['xLabelRang'][k]['maxValue'] })
                            }
                            for (var k = 0; k < table_data['data'][i]['table'][j]['data'].length; k++) {
                                const color_res = []; // 颜色过渡数组
                                leibie_name.push(table_data['data'][i]['table'][j]['data'][k]['categoryName']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['start_color']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['end_color']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['high_color']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['gradient_color']);
                                colorLendge.push(table_data['data'][i]['table'][j]['data'][k]['start_color']);
                                areaStyle = { normal: { color: table_data['data'][i]['table'][j]['data'][k]['start_color'], opacity: 0.1 } };
                                lineStyle = {
                                    normal: {
                                        color: table_data['data'][i]['table'][j]['data'][k]['start_color'],
                                        shadowColor: table_data['data'][i]['table'][j]['data'][k]['start_color'],
                                        shadowBlur: 20,
                                        width: 5,
                                    }
                                }
                                itemStyle = {
                                    normal: {
                                        color: table_data['data'][i]['table'][j]['data'][k]['end_color'],
                                    }
                                }
                                const res = []; // y_data 过渡数组
                                for (var m = 0; m < table_data['data'][i]['table'][j]['data'][k]['categoryData'].length; m++) {
                                    res.push(table_data['data'][i]['table'][j]['data'][k]['categoryData'][m]['yLabel'])
                                }
                                dataValues = {
                                    value: res,
                                    name: table_data['data'][i]['table'][j]['data'][k]['categoryName'],
                                    areaStyle: areaStyle,
                                    lineStyle: lineStyle,
                                    itemStyle: itemStyle
                                }
                                y_data.push(res);
                                datas.push(dataValues);
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
            for (var i = 0; i < y_data.length; i++) {
                const colorList = new_color_list[i];
                //获取area颜色
                var tempColor = color_list[i][3];

                tempColor = 'rgba(' + parseInt(tempColor.substr(1, 2), 16) + ',' + parseInt(tempColor.substr(3, 2), 16) + ',' + parseInt(tempColor.substr(5, 2), 16) + ', 1)' // 0% 处的颜色
                    //获取外发光颜色
                var tempColorShadowBlur = color_list[i][2];
                tempColorShadowBlur = 'rgba(' + parseInt(tempColorShadowBlur.substr(1, 2), 16) + ',' + parseInt(tempColorShadowBlur.substr(3, 2), 16) + ',' + parseInt(tempColorShadowBlur.substr(5, 2), 16) + ', 1)' // 0% 处的颜色
                series.push({
                    name: new_liebie[i],
                    itemStyle: {
                        normal: {
                            barBorderRadius: [0, 0, 0, 0],
                            lineStyle: {
                                width: 4 //设置曲线宽度
                            }
                        },

                    },
                    type: 'radar',
                    symbol: 'circle',
                    data: datas,
                });
                console.log(new_liebie);
                myChart = echarts.init(document.getElementById('show_charts')); // 基于准备好的dom，初始化echarts实例
                option = {
                    // backgroundColor: '#161627',
                    tooltip: {
                        textStyle: {
                            fontSize: globalFontSize,
                            color: globalFontColor
                        }
                    },
                    color: colorLendge,
                    legend: {
                        icon: 'pin',
                        left: '3%',
                        top: '13%',
                        data: new_liebie,
                        width: 40,
                        itemWidth: 100,
                        itemHeight: 10,
                        textStyle: {
                            fontSize: globalFontSize,
                            color: globalFontColor
                        }
                    },
                    radar: {
                        indicator: indicators,
                        shape: 'circle',
                        splitNumber: 5,
                        name: {

                            textStyle: {
                                color: c1,
                                fontSize: 60,
                                borderRadius: 3,
                                padding: [30, 50],
                                textShadowBlur: 20,
                                textShadowColor: h1
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: [
                                    'rgba(238,238,238, 0.3)', 'rgba(238,238,238, 0.2)',
                                    'rgba(238,238,238, 0.2)', 'rgba(238,238,238, 0.2)',
                                    'rgba(238,238,238, 0.2)', 'rgba(238,238,238, 0.2)'
                                ].reverse(),
                                width: 5
                            }
                        },
                        splitArea: {
                            show: true,
                            areaStyle: {
                                color: ['rgba(0,0,0,0)']
                            }
                        },
                        axisLine: {
                            width: 5,
                            lineStyle: {
                                width: 2,
                                color: 'rgba(238,238,238, 1)'
                            }
                        }
                    },
                    series: series,
                    animationDuration: 0
                };
                myChart.setOption(option);
            }
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