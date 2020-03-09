globalFontSize = 40;
globalFontColor = textColor;

 //使用模拟数据
var table_data = {
    "data": [{
        "title": "需求成交分类占比",
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
                        "xLabel": "设备销售",
                        "yLabel": 25
                    },

                    {
                        "xLabel": "设备租赁",
                        "yLabel": 30
                    },
                    {
                        "xLabel": "用能诊断",
                        "yLabel": 20
                    },
                    {
                        "xLabel": "用能咨询",
                        "yLabel": 90
                    },
                    {
                        "xLabel": "电能替代",
                        "yLabel": 30
                    },
                    {
                        "xLabel": "合同能源管理",
                        "yLabel": 23
                    },
                    {
                        "xLabel": "节能改造",
                        "yLabel": 40
                    },
                    {
                        "xLabel": "能源供应",
                        "yLabel": 32
                    },
                    {
                        "xLabel": "能源供应",
                        "yLabel": 26
                    },


                ]
            }, ]
        }]
    }, {
        "title": "客户行业分析",
        "table": [{
            "title": "总",
            "unit": "c",
            "data": [{
                "categoryName": "需",
                "start_color": "#00FDAD",
                "end_color": "#00FDAD",
                'high_color': '#00FDAD',
                'gradient_color': '#00FDAD',
                "categoryData": [{
                        "xLabel": "设备销售",
                        "yLabel": 40
                    },

                    {
                        "xLabel": "设备租赁",
                        "yLabel": 30
                    },
                    {
                        "xLabel": "用能诊断",
                        "yLabel": 20
                    },
                    {
                        "xLabel": "用能咨询",
                        "yLabel": 20
                    },
                    {
                        "xLabel": "电能替代",
                        "yLabel": 30
                    },
                    {
                        "xLabel": "合同能源管理",
                        "yLabel": 90
                    },
                    {
                        "xLabel": "节能改造",
                        "yLabel": 24
                    },
                    {
                        "xLabel": "能源供应",
                        "yLabel": 32
                    },
                    {
                        "xLabel": "能源供应",
                        "yLabel": 26
                    },


                ]
            }, ]
        }]
    }]
};


var showRealData = ZSB["能源服务市场"]["需求-商品成交分类占比"];


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
                                        itemStyle: {
                                            label: {

                                            },
                                            labelLine: {
                                                show: true,

                                            },
                                            normal: {
                                                borderWidth: 5,
                                                shadowBlur: 20,
                                                borderColor: mainColor,
                                                shadowColor: mainColor,
                                            }
                                        }
                                    },
                                     {
                                        value: 5,
                                        name: '',

                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    show: false
                                                },
                                                labelLine: {
                                                    show: false
                                                },
                                                color: 'rgba(0, 0, 0, 0)',
                                                borderColor: 'rgba(0, 0, 0, 0)',
                                                borderWidth: 0
                                            }
                                        }
                                    });

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
            var rich = {
                white: {
                    color: '#ddd',
                    align: 'top',
                    padding: [3, 0],
                    fontSize: 60,
                    fontFamily: '庞门正道标题体',
                    padding: [10, 0, 0, 0]
                }
            };

            for (var i = 0; i < y_data.length; i++) {
                const colorList = new_color_list[i];
                series.push({
                    name: new_liebie[i],
                    type: 'pie',
                    avoidLabelOverlap: false,
                    clockWise: false,
                    hoverAnimation: true,

                    radius: ['59%', '68%'],
                    center: ['51.3%', '50%'],

                    itemStyle: {

                        normal: {
                            color: mainColor,

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
                    hoverOffset: 15,
                    label: {
                        show: true,
                        position: 'outside',
                        fontSize: 40,
                        align: 'bottom',
                        color: textColor,
                        formatter: function(params) {
                            var percent = 0;
                            var total = 0;
                            for (var j = 0; j < y_data.length; j++) {
                                for (var k = 0; k < y_data[j].length; k++) {
                                    total += y_data[j][k]['value'];
                                }
                            }

                            percent = ((params.value / total) * 100).toFixed(0);
                            if (params.name !== '') {
                                return params.name + "     " + '{white|' + percent + '%}';
                            } else {
                                return '';
                            }
                        },
                        rich: rich

                    },
                    labelLine: {
                        length: 30,
                        length2: 150,
                    },
                    // minAngle: 20,
                    data: y_data[i],
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
                    formatter: function(params) {
                        var percent = 0;
                        var total = 0;
                        for (var j = 0; j < y_data.length; j++) {
                            for (var k = 0; k < y_data[j].length; k++) {
                                total += y_data[j][k]['value'];
                            }
                        }

                        percent = ((params.value / total) * 100).toFixed(0);
                        if (params.name !== '') {
                            return params.name + "<br/>" + params.value + "<br/>" + percent + '%';
                        } else {
                            return '';
                        }
                    },

                    textStyle: {
                        fontSize: 38,
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

                    itemWidth: 50,
                    itemHeight: 30,
                    itemGap: 60,
                    data: '',
                    textStyle: {
                        color: globalFontColor,
                        fontSize: globalFontSize,
                    }
                },


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