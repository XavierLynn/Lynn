label = {
    show: true, //开启显示
    position: 'top', // 在上方显示
    textStyle: { //数值样式
        color: '#FFFFFF',
        fontSize: globalFontSize - 20
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
            width: 5 //设置曲线宽度
        }
    },

};

var showRealData = JKB["能源分析"]["企业分析"]["月度设备用能分析"]
var table_data = {
    "data": [{
        "title": "月度设备用能分析",
        "table": [{
            "title": "总",
            "unit": "kwh",
            "data": [{
                "categoryName": "今年",
                "start_color": 'rgba(65,141,255,0)',
                "end_color": 'rgba(65,141,255,1)',
                'high_color': '#5ceaff',
                'gradient_color': '#8FC31F',
                "categoryData": [{
                        "xLabel": "动力",
                        "yLabel": "100"
                    },
                    {
                        "xLabel": "电梯",
                        "yLabel": "200"
                    },
                    {
                        "xLabel": "空调",
                        "yLabel": "250"
                    },
                    {
                        "xLabel": "照明",
                        "yLabel": "310"
                    },
                    {
                        "xLabel": "消防",
                        "yLabel": "440"
                    }
                ]
            }, ]
      
        }]
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
    $("#btn1").click(function() {
        // alert("Text: " + $("#test").text());
    });

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
                    tempA[j].style.backgroundImage = 'url("../../../../Image/能源分析/总峰平谷/' + 'Normal/' + temp + '.png")';
                    twoLevelTitle = tempA;

                }
                break
            }
        }

        $('.erji_title a').click(function() {
            for (var i = 0; i < twoLevelTitle.length; i++) {
                if (twoLevelTitle[i].text == $(this).text()) {
                    if (currentErjiTab != twoLevelTitle[i]) {
                        twoLevelTitle[i].style.backgroundImage = 'url("../../../../Image/能源分析/总峰平谷/' + 'Pressed/' + $(this).text() + '.png")';
                        if (currentErjiTab != null) {
                            currentErjiTab.style.backgroundImage = 'url("../../../../Image/能源分析/总峰平谷/' + 'Normal/' + currentErjiTab.text + '.png")';
                        }
                        currentErjiTab = twoLevelTitle[i];
                    }
                }
            }
        });
        $('.erji_title a').mouseenter(function() {
            for (var i = 0; i < twoLevelTitle.length; i++) {
                if (twoLevelTitle[i].text == $(this).text() && currentErjiTab != twoLevelTitle[i]) {
                    twoLevelTitle[i].style.backgroundImage = 'url("../../../../Image/能源分析/总峰平谷/' + 'Hovered/' + $(this).text() + '.png")';

                }
            }
        });
        $('.erji_title a').mouseleave(function() {
            for (var i = 0; i < twoLevelTitle.length; i++) {
                if (twoLevelTitle[i].text == $(this).text() && currentErjiTab != twoLevelTitle[i]) {
                    twoLevelTitle[i].style.backgroundImage = 'url("../../../../Image/能源分析/总峰平谷/' + 'Normal/' + $(this).text() + '.png")';
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
            // if (currentErjiTab != null) {
            //     currentErjiTab.attr("background-image", 'url("../../Image/zfsj/' + $(this).text() + '.png")');
            // }
            // // alert("../../Image/zfsj/"+$(this).text()+"focus.png");

            // $(this).attr("background-image", 'url("../../Image/zfsj/' + $(this).text() + 'focus.png")');
            // currentErjiTab = $(this);

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

            colorGra = [{ 'one': 'rgba(0,253,173,0.31)', 'two': 'rgba(0,253,173,0.74)' }, { 'one': 'rgba(255,255,255,0.18)', 'two': 'rgba(255,255,255,0.76)' }];
            colorLine = ['rgba(0,253,173,1)', 'rgba(255,255,255,1)']
            for (var i = 0; i < y_data.length; i++) {
                const colorList = new_color_list[i];
                tempColor = color_list[i][0];
                tempColor = 'rgba(' + parseInt(tempColor.substr(1, 2), 16) + ',' + parseInt(tempColor.substr(3, 2), 16) + ',' + parseInt(tempColor.substr(5, 2), 16) + ', 1)' // 0% 处的颜色
                types = ['bar', 'bar', 'line']
                if (i == 2) {
                    series.push({
                        name: new_liebie[i],
                        type: types[i],
                        barGap: '30%',
                        // lineStyle: {
                        //     type: 'dashed',
                        //     width: 1,
                        //     color: 'rgb(255,237,218)'
                        // },
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3,
                                    type: 'dotted', //'dotted'虚线 'solid'实线
                                    color: 'rgb(255,132,0)'
                                }
                            }
                        },
                        shadowBlur: 10,
                        shadowColor: 'rgb(255,132,0)',
                        barWidth: '20px',
                        label: label,
                        data: y_data[i],
                        color: 'rgb(255,132,0)'
                    }, )
                } else {
                    series.push({
                        name: new_liebie[i],
                        type: 'pie',
                        //avoidLabelOverlap: false,
                        data: y_data[i],
                        radius: ['35%', '70%'],
                        center: ['51%', '40%'],
                        itemStyle: {
                            // shadowColor: 'rgba(52,155,255, 1)',
                            // shadowBlur: 20,
                            // shadowOffsetY: 0
                        },
                        hoverOffset: 30,
                        label: {
                            color: c1,

                            fontSize: 40,
                            formatter: function(params) {
                                return params.name + " " + "{a|" + params.value + "}" + unit;
                            },
                            rich: {
                                a: {
                                    fontSize: 40,
                                    // fontFamily: "庞门正道标题体",
                                    color: c1,
                                    lineHeight: 56,
                                    verticalAlign: 'center'
                                }
                            }

                        },
                        labelLine: {
                            length: 40,
                            length2: 80,
                            lineStyle: {
                                width: 2,
                                color: c8
                            }
                        },
                        minAngle: 20,
                        roseType: 'radius',
                    })
                }

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
                    // icon: 'bar',
                    right: '10%',
                    top: '3%',
                    itemGap: 200,
                    data: new_liebie,
                    itemWidth: 50,
                    itemHeight: 15,

                    textStyle: {
                        fontSize: globalFontSize,
                        color: globalFontColor
                    }
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    top: '15%',
                    containLabel: true
                },
                color: [c9, c10, c11, c12, c2],
                series: series,
                animationDuration: 0
            };
            // 使用刚指定的配置项和数据显示图表。
            // myChart.clear();
            myChart.setOption(option);
            $('#btn').click(function() {
                // ,itemStyle:{
                //     color: function(params){
                //       var key = params.dataIndex;
                //       if(key === curInt){
                //         return '#E062AE'
                //       }else{
                //         return '#37A2DA'
                //       }
                //     }}
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