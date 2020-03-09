globalFontColor = textColor;
   //使用模拟数据
var table_data = {
    "data": [{
        "title": "产业联盟星级评定",
        "table": [{
            "title": "总",
            "unit": "(tce)",
            "xLabelRang": [{
                    "label": "<5.0"
                },
                {
                    "label": "5.0~6.0"
                },
                {
                    "label": "6.0~7.0"
                },
                {
                    "label": "7.0~8.0"
                },
                {
                    "label": "8.0~9.0"
                },
                {
                    "label": "9.0~10.0"
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
                "start_color": mainGroup['cylm']['one'],
                "end_color": mainGroup['cylm']['one'],
                'high_color1': '#F2F2F2', 
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
                        "yLabel": "3"
                    },

                ]
            }]
        }]
    }]
};

var showRealData = ZSB["能源服务市场"]["产业联盟星级评定"];



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
        $(".nav a").css({ "color": textColor })
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
            var yMax = 0.5;
            var dataShadow = [];
            var datas = [];
            // .split('').join('\n')
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
                                const res = []; // y_data 过渡数组
                              
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
                series.push(

                    {
                        name: new_liebie[i],
                        type: 'bar',
                        barGap: "5%",
                        barCategoryGap: '50%',
                        stack: 'value',
                        itemStyle: itemStyle = {
                            normal: {
                                barBorderRadius: [0, 0, 0, 0],
                                color: function(params) {
                                    return colorList[params.dataIndex]
                                },
                           
                                shadowBlur: 0,
                                shadowColor: '#418dff',
                                // shadowOffsetY: '80%',
                                // shadowPosition: 20,

                            }   ,
                        },
                        barWidth: '160px',
                        label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}%',

                            distance: 50,
                            fontSize: 50,
                            color: textColor,
                            fontFamily: '庞门正道标题体',
                            textShadowBlur: 20,
                            // textShadowColor: '#418dff',
                        },
                        data: y_data[i],
                       
                        // color: 'rgba(97,173,255,0.6)'
                        color: function(params) {
                            return colorList[params.dataIndex]
                        }
                    }, {
                        type: 'bar',
                        //barGap: "-100%",
                        barWidth: '160px',
                        silent: true,
                        stack: 'value',
                        barCategoryGap: '50%',
                        itemStyle: {
                            normal: {
                                color: mainGroup['cylm']['two'],
                                barBorderRadius: [0, 0, 0, 0],
                               
                                // shadowBlur: 20,
                                // shadowColor: '#418dff',
                            }
                        },
                        data: datas[i],
                        animation: false
                    }, )
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
                    left: '-3%',
                    right: '-3%',
                    bottom: '0%',
                    top: '7%',
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
                        fontSize: globalFontSize,
                        margin: 30,
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
                        // min: 0,
                        // max: 50,
                        type: 'value',
                        axisLabel: {
                            show: false,
                            color: globalFontColor,
                            fontSize: globalFontSize
                        },
                        axisLine: {
                            show: false
                        },
                        splitNumber: 5,
                        splitLine: {

                            show: false,
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

//使其高亮
ue.interface.Highlight = function(xlabel) {
    x_val = [xlabel];
    new_color_list = [];
    series = [];

    for (var i = 0; i < color_list.length; i++) {
        const res = []; // 存储颜色的过渡矩阵
        for (var j = 0; j < y_data[i].length; j++) {
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
    for (var i = 0; i < y_data.length; i++) {
        const colorList = new_color_list[i];
        series.push({
            name: new_liebie[i],
            type: 'bar',
            barGap: 0,
            itemStyle: itemStyle,
            barWidth: '26px',
            label: label,
            data: y_data[i],
            color: function(params) {
                return colorList[params.dataIndex]
            }
        })
    }
    option.series = series;
    myChart.clear();
    myChart.setOption(option);
};