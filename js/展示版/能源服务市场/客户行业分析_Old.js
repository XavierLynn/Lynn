globalFontSize = 40;

//播放动画
ue.interface.PlayAnimation = function(time) {
    option.animationDuration = time;
    myChart.clear();
    myChart.setOption(option);
};
var showRealData = ZSB["能源服务市场"];
$(function() {
   
    //使用模拟数据
    var table_data = {
        "data": [{
            "title": "客户行业分析",
            "table": [{
                "title": "总",
                "unit": "tce",
                "data": [{
                    "categoryName": "需",
                    "start_color": "#00FDAD",
                    "end_color": "#00FDAD",
                    'high_color': '#00FDAD',
                    'gradient_color': '#00FDAD',
                    "categoryData": [{
                            "xLabel": "信息传输 软件和信息技术服务业",
                            "yLabel": 25
                        },

                        {
                            "xLabel": "金融业",
                            "yLabel": 30
                        },
                        {
                            "xLabel": "住宿和餐饮业",
                            "yLabel": 20
                        },
                        {
                            "xLabel": "交通运输仓储和邮政业",
                            "yLabel": 25
                        },
                        {
                            "xLabel": "批发和零售业",
                            "yLabel": 30
                        },
                        {
                            "xLabel": "建筑业",
                            "yLabel": 23
                        },
                        {
                            "xLabel": "电力 热力 燃气及水生产和供应业",
                            "yLabel": 24
                        },
                        {
                            "xLabel": "制造业",
                            "yLabel": 32
                        },
                        {
                            "xLabel": "文化 体育和娱乐业",
                            "yLabel": 26
                        },
                        {
                            "xLabel": "房地产业",
                            "yLabel": 28
                        },
                        {
                            "xLabel": "租赁和商务服务业",
                            "yLabel": 27
                        },
                        {
                            "xLabel": "科学研究和技术服务业",
                            "yLabel": 25
                        },
                        {
                            "xLabel": "水利环境和公共设施管理业",
                            "yLabel": 26
                        },
                        {
                            "xLabel": "卫生和社会工作",
                            "yLabel": 26
                        },
                        {
                            "xLabel": "居民服务 修理和其他服务业",
                            "yLabel": 28
                        },
                        {
                            "xLabel": "农林牧渔业",
                            "yLabel": 26
                        },
                        {
                            "xLabel": "教育",
                            "yLabel": 25
                        },
                        {
                            "xLabel": "公共管理 社会保障和社会组织",
                            "yLabel": 21
                        }

                    ]
                }, ]
            }]
        }]
    };

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
            for (var i = 0; i < dataCategory.length; i++) {
                var legendName = { value: dataCategory[i]['yLabel'], name: dataCategory[i]['xLabel'] }
                pieChartData.push(legendName)
            }


            for (var i = 0; i < y_data.length; i++) {
                const colorList = new_color_list[i];
                series.push({
                    name: '',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: ['25%', '26%'],
                    center: ['51.8%', '53%'],
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var colorList = ['rgba(255,255,255,0.2)', '#FFFFFF'];
                                return colorList[params.dataIndex]
                            }
                        },

                        shadowColor: ['#60c7ff', '#ffffff'],
                        shadowBlur: 50,
                        shadowOffsetY: 0,
                        shadowOffsetX: 0,

                        emphasis: {

                            shadowColor: '#418dff',
                            shadowBlur: 20,
                            shadowOffsetY: 0,
                        }
                    },


                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: ['60', '40']
                }, {
                    name: '',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: ['56%', '57%'],
                    center: ['51.8%', '53%'],

                    itemStyle: {

                        normal: {
                            color: function(params) {
                                var colorList = ['#ffffff', 'rgba(255,255,255,0.2)'];
                                return colorList[params.dataIndex]
                            }
                        },
                        // shadowColor: function(params) {
                        //     var colorList = ['#ffffff', '#60c7ff'];
                        //     return colorList[params.dataIndex]
                        // },
                        shadowBlur: 20,
                        shadowOffsetY: 0,
                        shadowOffsetX: 0,

                        emphasis: {

                            shadowColor: '#418dff',
                            shadowBlur: 20,
                            shadowOffsetY: 0,
                        }
                    },


                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: ['60', '40']
                }, {
                    name: new_liebie[i],
                    type: 'pie',
                    avoidLabelOverlap: false,
                    data: y_data[i],
                    radius: ['34%', '48%'],
                    center: ['51.8%', '53%'],

                    itemStyle: {

                        normal: {
                            color: '#61ADFF'
                        },
                        // shadowColor: '#418dff',
                        shadowBlur: 20,
                        shadowOffsetY: 0,
                        shadowOffsetX: 0,

                        emphasis: {

                            // shadowColor: '#418dff',
                            shadowBlur: 20,
                            shadowOffsetY: 0,
                        }
                    },
                    hoverOffset: 30,
                    label: {
                        show: true,
                        // formatter: "{b}     {c}",
                        // formatter: '616.92\ntce',
                        formatter: function(params) {
                            var paramsNames = params.name.split("");
                            // paramsNames = paramsNames.join('aaa');
                            for (var i = 0; i < paramsNames.length; i++) {
                                var n = i + 1;
                                if (n % 5 == 0) {
                                    //alert('aaa')
                                    paramsNames.splice(i, 0, '\n');
                                }
                            }
                            paramsNames = paramsNames.join('');
                            params.name = paramsNames;
                            return params.name;
                        },
                        position: 'outside',
                        fontSize: 45,
                        color: '#FFFFFF'

                    },
                    labelLine: {
                        length: 260,
                        length2: 150,
                        lineStyle: {
                            width: 3
                        }
                    },
                    minAngle: 20,
                })
            }
            console.log(new_liebie);
            var colors = '#418dff';
            var aaaaaaaa = ['#50C9FF', '#1791FF']
            myChart = echarts.init(document.getElementById('show_charts')); // 基于准备好的dom，初始化echarts实例
            option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}<br/> {c}" + "<br/> {d}%",
                    // formatter: "{b}: {c} {d}%",
                    textStyle: {
                        fontSize: globalFontSize,
                    }
                },
                // backgroundColor:{
                //     image:img
                // },

                legend: {
                    show: false,
                    orient: 'vertical',
                    right: '0',
                    x: 'left',
                    y: 'bottom',
                    bottom: '50px',
                    formatter: function(name) {
                        var total = 0;
                        var target;
                        var value;
                        for (var i = 0; i < pieChartData.length; i++) {
                            total += pieChartData[i].value;
                            if (pieChartData[i].name == name) {
                                target = pieChartData[i].value;
                            }
                        }
                        return name + '   ' + target + unit + '   ' + ((target / total) * 100).toFixed(2) + '%';

                    },
                    // top:'middle',
                    // formatter: function(lengendNames) {
                    //     for (var i = 0; lengendNames.length; i++)
                    //         return lengendNames[0];
                    // },
                    // return item;
                    // },

                    // formatter: lengendNames[0],
                    itemWidth: 50,
                    itemHeight: 30,
                    itemGap: 60,
                    data: '',
                    textStyle: {
                        color: globalFontColor,
                        fontSize: globalFontSize,
                    }
                },
                // color: ['#50C9FF', '#1791FF', '#0373FF', '#0B4EFF', '#4751CA', '#727BE8', '#85F8FF', '#50B2FF'],
                // color: ['rgba(0,253,173,0.25)', 'rgba(0,253,173,0.43)', 'rgba(0,253,173,0.74)', 'rgba(0,253,173,1)'],
                // color: ['#d0f5fd', '#aef0fe', '#85e5fb', '#6ac7f3', '#359cd6', '#2f7bac', '#196893', '#185479', '9cbec8'],

                // color: function(params) {
                //     // alert(params.name)
                //     return params.aaaaaaaa
                // },
                color: '#d1f6ff',
                series: series,
                animationDuration: 0
            };

            // myChart.clear();
            myChart.setOption(option);
        });
        $('.erji_title a')[0].click();
    });
    $('.nav a')[0].click();
});