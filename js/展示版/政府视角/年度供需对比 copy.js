label = {
    show: true, //开启显示
    position: 'top', // 在上方显示
    textStyle: { //数值样式
        color: '#FFFFFF',
        fontSize: '2.39px'
    }
};
itemStyle = {
    normal: {
        barBorderRadius: [0, 0, 0, 0],
                  
                                color: function(params) {
                                    return colorList[params.dataIndex]},
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
//播放动画
ue.interface.PlayAnimation = function(time) {
    option.animationDuration = time;
    myChart.clear();
    myChart.setOption(option);
};
var showRealData = false;
$(function() {
   
    //使用模拟数据
    var table_data = {
        "data": [{
            "title": "年度供需对比",
            "table": [{
                "title": "总",
                "unit": "万TCE",
                "xLabelRang": [{
                        "label": "1月"
                    },
                    {
                        "label": "2月"
                    },
                    {
                        "label": "3月"
                    },
                    {
                        "label": "4月"
                    },
                    {
                        "label": "5月"
                    },
                    {
                        "label": "6月"
                    },
                    {
                        "label": "7月"
                    },
                    {
                        "label": "8月"
                    },
                    {
                        "label": "9月"
                    },
                    {
                        "label": "10月"
                    },
                    {
                        "label": "11月"
                    },
                    {
                        "label": "12月"
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
                        "categoryName": "需",
                        "start_color": "#8FC31F",
                        "end_color": "#8FC31F",
                        'high_color': '#5ceaff',
                        'gradient_color': '#8FC31F5A',
                        "categoryData": [{
                                "xLabel": "2015",
                                "yLabel": "20"
                            },
                            {
                                "xLabel": "2016",
                                "yLabel": "120"
                            },
                            {
                                "xLabel": "2017",
                                "yLabel": "250"
                            },
                            {
                                "xLabel": "2018",
                                "yLabel": "310"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "440"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "320"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "420"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "450"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "388"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "490"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "471"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "356"
                            }
                        ]
                    },
                    {
                        "categoryName": "供",
                        "start_color": "#00FBF2",
                        "end_color": "#00FBF2",
                        'high_color': '#5ceaff',
                        'gradient_color': '#00FBF25A',
                        "categoryData": [{
                                "xLabel": "2015",
                                "yLabel": "80"
                            },
                            {
                                "xLabel": "2016",
                                "yLabel": "190"
                            },
                            {
                                "xLabel": "2017",
                                "yLabel": "270"
                            },
                            {
                                "xLabel": "2018",
                                "yLabel": "380"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "500"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "390"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "490"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "530"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "438"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "560"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "521"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "386"
                            }
                        ]
                    }
                ]
            }, {
                "title": "电",
                "unit": "万kWh",
                "xLabelRang": [{
                        "label": "1月"
                    },
                    {
                        "label": "2月"
                    },
                    {
                        "label": "3月"
                    },
                    {
                        "label": "4月"
                    },
                    {
                        "label": "5月"
                    },
                    {
                        "label": "6月"
                    },
                    {
                        "label": "7月"
                    },
                    {
                        "label": "8月"
                    },
                    {
                        "label": "9月"
                    },
                    {
                        "label": "10月"
                    },
                    {
                        "label": "11月"
                    },
                    {
                        "label": "12月"
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
                        "categoryName": "需",
                        "start_color": "#8FC31F",
                        "end_color": "#8FC31F",
                        'high_color': '#5ceaff',
                        'gradient_color': '#8FC31F5A',
                        "categoryData": [{
                                "xLabel": "2015",
                                "yLabel": "70"
                            },
                            {
                                "xLabel": "2016",
                                "yLabel": "120"
                            },
                            {
                                "xLabel": "2017",
                                "yLabel": "250"
                            },
                            {
                                "xLabel": "2018",
                                "yLabel": "310"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "440"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "320"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "420"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "450"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "358"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "470"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "451"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "356"
                            }
                        ]
                    },
                    {
                        "categoryName": "供",
                        "start_color": "#00FBF2",
                        "end_color": "#00FBF2",
                        'high_color': '#5ceaff',
                        'gradient_color': '#00FBF25A',
                        "categoryData": [{
                                "xLabel": "2015",
                                "yLabel": "80"
                            },
                            {
                                "xLabel": "2016",
                                "yLabel": "190"
                            },
                            {
                                "xLabel": "2017",
                                "yLabel": "270"
                            },
                            {
                                "xLabel": "2018",
                                "yLabel": "380"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "500"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "390"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "490"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "530"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "438"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "560"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "521"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "386"
                            }
                        ]
                    }
                ]
            }, {
                "title": "气",
                "unit": "万m³",
                "xLabelRang": [{
                        "label": "1月"
                    },
                    {
                        "label": "2月"
                    },
                    {
                        "label": "3月"
                    },
                    {
                        "label": "4月"
                    },
                    {
                        "label": "5月"
                    },
                    {
                        "label": "6月"
                    },
                    {
                        "label": "7月"
                    },
                    {
                        "label": "8月"
                    },
                    {
                        "label": "9月"
                    },
                    {
                        "label": "10月"
                    },
                    {
                        "label": "11月"
                    },
                    {
                        "label": "12月"
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
                        "categoryName": "需",
                        "start_color": "#8FC31F",
                        "end_color": "#8FC31F",
                        'high_color': '#5ceaff',
                        'gradient_color': '#8FC31F5A',
                        "categoryData": [{
                                "xLabel": "2015",
                                "yLabel": "20"
                            },
                            {
                                "xLabel": "2016",
                                "yLabel": "120"
                            },
                            {
                                "xLabel": "2017",
                                "yLabel": "250"
                            },
                            {
                                "xLabel": "2018",
                                "yLabel": "280"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "290"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "320"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "340"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "450"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "388"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "490"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "471"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "356"
                            }
                        ]
                    },
                    {
                        "categoryName": "供",
                        "start_color": "#00FBF2",
                        "end_color": "#00FBF2",
                        'high_color': '#5ceaff',
                        'gradient_color': '#00FBF25A',
                        "categoryData": [{
                                "xLabel": "2015",
                                "yLabel": "80"
                            },
                            {
                                "xLabel": "2016",
                                "yLabel": "190"
                            },
                            {
                                "xLabel": "2017",
                                "yLabel": "270"
                            },
                            {
                                "xLabel": "2018",
                                "yLabel": "380"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "500"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "390"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "490"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "530"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "438"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "560"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "521"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "386"
                            }
                        ]
                    }
                ]
            }, {
                "title": "水",
                "unit": "万T",
                "xLabelRang": [{
                        "label": "1月"
                    },
                    {
                        "label": "2月"
                    },
                    {
                        "label": "3月"
                    },
                    {
                        "label": "4月"
                    },
                    {
                        "label": "5月"
                    },
                    {
                        "label": "6月"
                    },
                    {
                        "label": "7月"
                    },
                    {
                        "label": "8月"
                    },
                    {
                        "label": "9月"
                    },
                    {
                        "label": "10月"
                    },
                    {
                        "label": "11月"
                    },
                    {
                        "label": "12月"
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
                        "categoryName": "需",
                        "start_color": "#8FC31F",
                        "end_color": "#8FC31F",
                        'high_color': '#5ceaff',
                        'gradient_color': '#8FC31F5A',
                        "categoryData": [{
                                "xLabel": "2015",
                                "yLabel": "20"
                            },
                            {
                                "xLabel": "2016",
                                "yLabel": "150"
                            },
                            {
                                "xLabel": "2017",
                                "yLabel": "250"
                            },
                            {
                                "xLabel": "2018",
                                "yLabel": "280"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "440"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "320"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "350"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "450"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "388"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "490"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "471"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "356"
                            }
                        ]
                    },
                    {
                        "categoryName": "供",
                        "start_color": "#00FBF2",
                        "end_color": "#00FBF2",
                        'high_color': '#5ceaff',
                        'gradient_color': '#00FBF25A',
                        "categoryData": [{
                                "xLabel": "2015",
                                "yLabel": "80"
                            },
                            {
                                "xLabel": "2016",
                                "yLabel": "190"
                            },
                            {
                                "xLabel": "2017",
                                "yLabel": "270"
                            },
                            {
                                "xLabel": "2018",
                                "yLabel": "600"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "500"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "390"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "490"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "530"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "438"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "600"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "600"
                            },
                            {
                                "xLabel": "2019",
                                "yLabel": "600"
                            }
                        ]
                    }
                ]
            }]
        }]
    };
    var transp = '#FFFFFF00';
    var currentErjiTab = null;
    var twoLevelTitle = null;

    for (var i = 0; i < table_data['data'].length; i++) {
        yiji_title.push(table_data['data'][i]['title']);
    }

    $('.nav').append("<li id='tag'></li>");
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
                    tempA[j].style.backgroundImage = 'url("../../Image/zfsj/' + temp + '.png")';
                    twoLevelTitle = tempA;

                }
                break
            }
        }
        $('.erji_title a').click(function() {
            for (var i = 0; i < twoLevelTitle.length; i++) {
                if (twoLevelTitle[i].text == $(this).text()) {
                    if (currentErjiTab != twoLevelTitle[i]) {
                        twoLevelTitle[i].style.backgroundImage = 'url("../../Image/zfsj/' + $(this).text() + 'focus.png")';
                        if (currentErjiTab != null) {
                            currentErjiTab.style.backgroundImage = 'url("../../Image/zfsj/' + currentErjiTab.text + '.png")';
                        }
                        currentErjiTab = twoLevelTitle[i];
                    }
                }
            }
        });
        $('.erji_title a').mouseenter(function() {
            for (var i = 0; i < twoLevelTitle.length; i++) {
                if (twoLevelTitle[i].text == $(this).text()) {
                    twoLevelTitle[i].style.backgroundImage = 'url("../../Image/zfsj/' + $(this).text() + 'focus.png")';

                }
            }
        });
        $('.erji_title a').mouseleave(function() {
            for (var i = 0; i < twoLevelTitle.length; i++) {
                if (twoLevelTitle[i].text == $(this).text() && currentErjiTab != twoLevelTitle[i]) {
                    twoLevelTitle[i].style.backgroundImage = 'url("../../Image/zfsj/' + $(this).text() + '.png")';
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
            for (var i = 0; i < y_data.length; i++) {
                const colorList = new_color_list[i];
                //     var tempColor = color_list[i][0];
                //    tempColor = 'rgba(' + parseInt(tempColor.substr(1, 2), 16) + ',' + parseInt(tempColor.substr(3, 2), 16) + ',' + parseInt(tempColor.substr(5, 2), 16) + ', 1)' // 0% 处的颜色
                series.push({
                    name: new_liebie[i],
                    itemStyle: {
                        normal: {
                            barBorderRadius: [0, 0, 0, 0],
                  
                                color: function(params) {
                                    return colorList[params.dataIndex]},
                            lineStyle: {
                                width: 5 //设置曲线宽度
                            }
                        },

                    },
                    type: 'line',
                    lineStyle: { normal: { color: colorList[0] } },
                    smooth: true,
                    symbolSize: 5,
                    // areaStyle: {
                    //     normal: {
                    //         color: {
                    //             type: 'linear',
                    //             x: 0,
                    //             y: 0,
                    //             x2: 0,
                    //             y2: 1,
                    //             colorStops: [{
                    //                 offset: 0, color: tempColor // 0% 处的颜色
                    //             }, {
                    //                 offset: 0.2, color: tempColor // 0% 处的颜色
                    //             }, {
                    //                 offset: 1, color: 'rgba(0,0,0,0)'// 100% 处的颜色
                    //             }],
                    //             global: false // 缺省为 false
                    //         }
                    //     },
                    // },
                    barWidth: "12px",
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
                // backgroundColor:{
                //     image:img
                // },
                legend: {
                    icon: 'bar',
                    right: '3%',
                    top: '3%',
                    data: new_liebie,
                    itemWidth: 50,
                    itemHeight: 5,
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
                xAxis: [{
                    type: 'category',
                    data: x_label,
                    axisLine: {
                        lineStyle: {
                            color: globalFontColor,
                            width: 5,
                            offset: 5,
                        }
                    },
                    axisTick: {
                        lineStyle: {
                            width: 5,
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
                        fontSize: '180vw',
                    },
                    axisTick: {
                        show: false
                    },
                    type: 'value',
                    axisLabel: {
                        color: globalFontColor,
                        fontSize: 20
                    },
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            width: 4,
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
});