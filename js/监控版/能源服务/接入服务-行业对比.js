
var showRealData = JKB["能源服务"]["接入服务-行业对比"]


var table_data = {
    "data": [{
        "title": "数据接入服务-行业对比",
        "table": [{
            "title": "总",
            "unit": "(tce)",
            "xLabelRang": [{
                    "label": "阿里巴巴"
                },
                {
                    "label": "文化T恤和娱乐业"
                },
                {
                    "label": "人工智能岛"
                },
                {
                    "label": "健康大数据"
                },
                {
                    "label": "云从科技"
                },
                {
                    "label": "交通运输仓储和邮政业"
                },
                {
                    "label": "齐感科技"
                },
                {
                    "label": "德汇科技"
                },
                {
                    "label": "阿里巴巴"
                },
                {
                    "label": "信息传输 软件和信息技术服务业"
                },
                {
                    "label": "某研发中心"
                },
                {
                    "label": "健十大数据"
                },
                {
                    "label": "某物业公司"
                },
                {
                    "label": "某产业开放公司"
                },
                {
                    "label": "齐感科技"
                },
                {
                    "label": "某物业公司"
                },
                {
                    "label": "某研究中心"
                },
                {
                    "label": "公共管理 社会保障和社会组织"
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
                "start_color": 'rgba(255,255,255,0.31)',
                "end_color": 'rgba(255,255,255,0.74)',
                'high_color1': '#F2F2F2', //'#ed5f00',
                'high_color2': '#fce700',
                "categoryData": [{
                        "xLabel": "阿里巴巴",
                        "yLabel": "8"
                    },
                    {
                        "xLabel": "2019.02",
                        "yLabel": "15"
                    },
                    {
                        "xLabel": "2019.03",
                        "yLabel": "20"
                    },
                    {
                        "xLabel": "2019.04",
                        "yLabel": "23"
                    },
                    {
                        "xLabel": "2019.05",
                        "yLabel": "18"
                    },
                    {
                        "xLabel": "2019.06",
                        "yLabel": "25"
                    },
                    {
                        "xLabel": "2019.07",
                        "yLabel": "22"
                    },
                    {
                        "xLabel": "2019.08",
                        "yLabel": "25"
                    },
                    {
                        "xLabel": "2019.09",
                        "yLabel": "23"
                    },
                    {
                        "xLabel": "2019.10",
                        "yLabel": "21"
                    },
                    {
                        "xLabel": "2019.11",
                        "yLabel": "16"
                    },
                    {
                        "xLabel": "2019.12",
                        "yLabel": "22"
                    },
                    {
                        "xLabel": "2019.01",
                        "yLabel": "14"
                    },
                    {
                        "xLabel": "2019.02",
                        "yLabel": "18"
                    },
                    {
                        "xLabel": "2019.03",
                        "yLabel": "20"
                    },
                    {
                        "xLabel": "2019.04",
                        "yLabel": "18"
                    },
                    {
                        "xLabel": "2019.05",
                        "yLabel": "23"
                    },
                    {
                        "xLabel": "齐感科技",
                        "yLabel": "15"
                    }
                ]
            }]
        }]
    }]
};

$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/监控版/NYFW.asmx/GetEnteEnergyConsumptionMonth",
        type: "POST",
        async: true,
        data: "regionID=zj&topCount=3&startDate=2019-12&endDate=2020-01",
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
            series.length = 0;
            y_data.length = 0;
            x_label.length = 0;
            color_list.length = 0;
            new_color_list.length = 0;
            //如果只有一个二级标题，默认不显示
            if ($('.erji_title').length <= 1) {

                $('#subtitle').empty();
            }
            var unit; // 用于存放 数值单位
            const leibie_name = []; // 用于存放类别名
            var id; // 存储 一级标题点击时的 id
            var yMax = 50;
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
                        barWidth: '40px',
                        silent: true,
                        itemStyle: {
                            normal: { color: 'rgba(255,255,255,0.25)', barBorderRadius: [0, 0, 0, 0] }
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
                                shadowBlur: 20,
                                shadowColor: '#d1f6ff'

                            }   ,



                        },
                        barWidth: '40px',
                        //label: label,
                        data: y_data[i],

                        color: '#d1f6ff',
                        //     color: function(params) {
                        //         return colorList[params.dataIndex]
                        // }
                    })
            }
            console.log(new_liebie);
            myChart = echarts.init(document.getElementById('show_charts')); // 基于准备好的dom，初始化echarts实例
            option = {

                /* tooltip: {
                     trigger: 'axis',
                     axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                         type: 'none'        // 默认为直线，可选为：'line' | 'shadow'
                     },
                     textStyle: {
                         color: globalFontColor,
                         fontSize:globalFontSize,
                     }
                 },*/
                tooltip: {
                    trigger: 'item',
                    textStyle: {
                        color: globalFontColor,
                        fontSize: globalFontSize,
                    }
                },
                // backgroundColor:{
                //    image:img
                // },
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
                    left: '2.5%',
                    right: '2.5%',
                    bottom: '4%',
                    top: '5%',
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
                yAxis: [

                    {
                        name: '',
                        nameLocation: 'end',
                        nameGap: 50,
                        nameTextStyle: {
                            color: globalFontColor,
                            fontSize: globalFontSize,
                        },
                        axisTick: {
                            show: false
                        },
                        min: 0,
                        max: 50,
                        type: 'value',
                        axisLabel: {

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
                                width: 1,
                                type: 'dashed'
                            }
                        },
                    }
                ],
                series: series,
                animationDuration: 0
            };
            // 使用刚指定的配置项和数据显示图表。
            // myChart.clear();
            myChart.setOption(option);
            $('#btn').click(function() {
                /*itemStyle:{
                    color: function(params){
                      var key = params.dataIndex;
                      if(key === curInt){
                        return '#E062AE'
                      }else{
                        return '#37A2DA'
                      }
                    }}*/
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
        url: "http://localhost:2277/监控版/NYFW.asmx/"+jsonData['FunctionName'],
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