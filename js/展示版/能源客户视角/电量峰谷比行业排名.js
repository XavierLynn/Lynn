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
            barWidth: '42px',
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

var table_data = {
    "data": [{
        "title": "电量峰谷比行业排名",
        "table": [{
            "title": "总",
            "unit": "",
            "xLabelRang": [{
                    "label": "阿里巴巴"
                },
                {
                    "label": "某产业开发公司"
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
                    "label": "某研发中心"
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
                    "label": "德汇科技"
                },
                {
                    "label": "阿里巴巴"
                },


            ],
            "yLabelRang": [{
                    "label": "0"
                },
                {
                    "label": "1"
                },
                {
                    "label": "2"
                },
                {
                    "label": "3"
                },
                {
                    "label": "4"
                },
                {
                    "label": "5"
                }
            ],
            "data": [{
                "categoryName": "类别一",
                "start_color": mainGraStart,
                "end_color": mainGraEnd,
                'high_color1': '#F2F2F2', //'#ed5f00',
                'high_color2': '#fce700',
                "categoryData": [{
                        "xLabel": "阿里巴巴",
                        "yLabel": "0.31"
                    },
                    {
                        "xLabel": "2019.02",
                        "yLabel": "0.47"
                    },
                    {
                        "xLabel": "2019.03",
                        "yLabel": "0.62"
                    },
                    {
                        "xLabel": "2019.04",
                        "yLabel": "0.63"
                    },
                    {
                        "xLabel": "2019.05",
                        "yLabel": "0.77"
                    },
                    {
                        "xLabel": "2019.06",
                        "yLabel": "0.93"
                    },
                    {
                        "xLabel": "2019.07",
                        "yLabel": "2.03"
                    },
                    {
                        "xLabel": "2019.08",
                        "yLabel": "2.85"
                    },
                    {
                        "xLabel": "2019.09",
                        "yLabel": "3.01"
                    },
                    {
                        "xLabel": "2019.08",
                        "yLabel": "3.22"
                    },
                    {
                        "xLabel": "2019.09",
                        "yLabel": "4.06"
                    }


                ]
            }]
        }]
    }]
};

var showRealData = ZSB["能源客户视角"]["电量峰谷比行业排名"];
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
     

            $('#show_table').empty();
            let tabvar = "";
            //行间隔
            tabvar += " <tr style='height:100px'>";
            tabvar += " <td></td>";
            tabvar += "   <td></td>";
            tabvar += "   <td></td>";
            tabvar += " </tr>";
            //第一行
            tabvar += "  <tr style='height:0px;padding:0px,'>";
            tabvar += "   <td></td>";
            tabvar += "    <td style='width:620px;height:50px;text-align:center;border-bottom: 2px #ffffff solid;border-left: 2px #ffffff solid;'>";
            tabvar += "         <text class='label'>" + "优" + "</text>";
            tabvar += "    </td>";
            //竖间隔
            tabvar += "    <td style='width:150px;'>";
            tabvar += "    </td>";

            tabvar += "    <td style='width:620px;height:50px;text-align:center;border-bottom: 2px #ffffff solid;border-right: 2px #ffffff solid;'>";
            tabvar += "         <text class='label'>" + "劣" + "</text>";
            tabvar += "    </td>";
            tabvar += " </tr>";

            $('#show_table').append(tabvar);

            var unit; // 用于存放 数值单位
            const leibie_name = []; // 用于存放类别名
            var id; // 存储 一级标题点击时的 id
            var yMax = 0;
            var dataShadow = [];
            var datas = [];

            dataShadow.length = 0;
            datas.length = 0;
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
            var maxVaule = 0;
            var maxInedx = 0;
            /* for(var x = 0; x<y_data.length;x++){
                 if(y_data[x]>maxVaule){
                     maxVaule = y_data[x];
                 }
             }*/
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
                    barWidth: '60px',
                    silent: true,
                    itemStyle: {
                        normal: { color: mainUnder,  barBorderRadius: [0, 0, 0, 0]
                                    } 
                    },
                    data: datas[i],
                }, {
                    name: new_liebie[i],
                    type: 'bar',
                    barGap: "-100%",
                    itemStyle: itemStyle = {
                        normal: {
                             barBorderRadius: [0, 0, 0, 0],
                             color: function(params) {
                                if (params.dataIndex == 5) {
                                    return colorList[params.dataIndex]
                                } else {
                                    return new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                        { offset: 0, color: "rgba(255,255,255,0.1)" },
                                        { offset: 1, color: "rgba(255,255,255,0.8)" }
                                    ])
                                }
        
                            }
                        },
                    },
                    barWidth: '60px',
                    label: label,
                    data: y_data[i],
                    color: function(params) {
                        if (params.dataIndex == 5) {
                            return colorList[params.dataIndex]
                        } else {
                            return new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                { offset: 0, color: "rgba(255,255,255,0.1)" },
                                { offset: 1, color: "rgba(255,255,255,0.8)" }
                            ])
                        }

                    }
                })

            }

            console.log(new_liebie);
            myChart = echarts.init(document.getElementById('show_charts')); // 基于准备好的dom，初始化echarts实例
            option = {
                tooltip: {
                    // formatter: '{c}%',
                    trigger: 'item',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'none' // 默认为直线，可选为：'line' | 'shadow'
                    },
                    textStyle: {
                        color: textColor,
                        fontSize: globalFontSize,
                    }
                },
                // backgroundColor:{
                //    image:img
                // },
                legend: {
                    icon: 'bar',
                    right: '10%',
                    //bottom:'100%',


                    data: new_liebie,
                    itemWidth: 20,
                    itemHeight: 12,
                    textStyle: {
                        fontSize: globalFontSize,
                        color: textColor
                    }
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '4%',
                    top: '10%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: x_label,
                    axisLine: {
                        lineStyle: {
                            color: textColor,
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


                        rotate: 0,
                        fontStyle: 'normal',
                        fontFamily: 'sans-serif',
                        color: textColor,
                        fontSize: globalFontSize,

                        margin: 20,
                        align: 'center',
                    },
                    splitLine: {
                        show: false
                    }
                }],
                yAxis: [
                   
                    {
                        name: unit,
                        nameLocation: 'end',
                        nameGap: 50,
                        nameTextStyle: {
                            color: textColor,
                            fontSize: globalFontSize,
                        },
                        axisTick: {
                            show: false
                        },
                        type: 'value',
                        min: 0,
                        max: 5,
                        axisLabel: {
                            // show:true,
                            //interval: 'auto',
                            //formatter:'{value}%',

                            color: textColor,
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