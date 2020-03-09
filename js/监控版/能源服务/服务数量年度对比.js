
var showRealData = JKB["能源服务"]["服务金额年度对比"]

var table_data = {
    "data": [{
        "title": "服务数量年度对比",
        "table": [{
                "title": "数据接入服务 358",
                "xLabelRang": [{
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
                    },
                    {
                        "label": "6"
                    },
                    {
                        "label": "7"
                    },
                    {
                        "label": "8"
                    },
                    {
                        "label": "9"
                    },
                    {
                        "label": "10"
                    },
                    {
                        "label": "11"
                    },
                    {
                        "label": "12"
                    }

                ],
                "yLabelRang": [{
                        "label": "0"
                    },
                    {
                        "label": "20"
                    },
                    {
                        "label": "40"
                    },
                    {
                        "label": "60"
                    },
                    {
                        "label": "80"
                    },
                    {
                        "label": "120"
                    },


                ],
                "data": [
                    {
                        "categoryName": "数据接入企业数量",
                        "start_color": "rgba(1,254,234,0)",
                        "end_color": "rgba(1,254,234,1)",
                        'high_color1': '#F2F2F2', //'#ed5f00',
                        'high_color2': '#fce700',
                        "totals": '358',
                        "unit":'',
                        "categoryData": [{
                                "xLabel": "2019.01",

                                "yLabel": "70"
                            },
                            {
                                "xLabel": "2019.02",

                                "yLabel": "50"
                            },
                            {
                                "xLabel": "2019.03",

                                "yLabel": "45"
                            },
                            {
                                "xLabel": "2019.04",

                                "yLabel": "72"
                            },
                            {
                                "xLabel": "2019.05",

                                "yLabel": "65"
                            },
                            {
                                "xLabel": "2019.06",

                                "yLabel": "62"
                            },
                            {
                                "xLabel": "2019.07",

                                "yLabel": "65"
                            },
                            {
                                "xLabel": "2019.08",

                                "yLabel": "80"
                            },
                            {
                                "xLabel": "2019.09",

                                "yLabel": "72"
                            },
                            {
                                "xLabel": "2019.10",

                                "yLabel": "65"
                            },
                            {
                                "xLabel": "2019.11",

                                "yLabel": "50"
                            },
                            {
                                "xLabel": "2019.12",

                                "yLabel": "57"
                            }
                        ]
                    },
                    {
                        "categoryName": "个性化定制次数",
                        "start_color": 'rgba(255,255,255,0)',
                        "end_color": 'rgba(255,255,255,1)',
                        'high_color1': '#F2F2F2', //'#ed5f00',
                        'high_color2': '#fce700',
                        "totals": '169',
                        "unit":'',
                        "categoryData": [{
                                "xLabel": "2019.01",
                                "yLabel": "99",

                            },
                            {
                                "xLabel": "2019.02",
                                "yLabel": "80",

                            },
                            {
                                "xLabel": "2019.03",
                                "yLabel": "85",

                            },
                            {
                                "xLabel": "2019.04",
                                "yLabel": "69",

                            },
                            {
                                "xLabel": "2019.05",
                                "yLabel": "82",

                            },
                            {
                                "xLabel": "2019.06",
                                "yLabel": "75",

                            },
                            {
                                "xLabel": "2019.07",
                                "yLabel": "70",

                            },
                            {
                                "xLabel": "2019.08",
                                "yLabel": "95",

                            },
                            {
                                "xLabel": "2019.09",
                                "yLabel": "72",

                            },
                            {
                                "xLabel": "2019.10",
                                "yLabel": "85",

                            },
                            {
                                "xLabel": "2019.11",
                                "yLabel": "80",

                            },
                            {
                                "xLabel": "2019.12",
                                "yLabel": "65",

                            }
                        ]
                    },
                    {
                        "categoryName": "分析报告服务次数",
                        "start_color": 'rgba(65,141,255,0)',
                        "end_color": 'rgba(65,141,255,1)',
                        'high_color1': '#F2F2F2',
                        'high_color2': '#fce700',
                        "totals": '512',
                        "unit":'',
                        "categoryData": [{
                                "xLabel": "2019.01",
                                "yLabel": "61",

                            },
                            {
                                "xLabel": "2019.02",
                                "yLabel": "72",

                            },
                            {
                                "xLabel": "2019.03",
                                "yLabel": "86",

                            },
                            {
                                "xLabel": "2019.04",
                                "yLabel": "90",

                            },
                            {
                                "xLabel": "2019.05",
                                "yLabel": "85",

                            },
                            {
                                "xLabel": "2019.06",
                                "yLabel": "60",

                            },
                            {
                                "xLabel": "2019.07",
                                "yLabel": "92",

                            },
                            {
                                "xLabel": "2019.08",
                                "yLabel": "66",

                            },
                            {
                                "xLabel": "2019.09",
                                "yLabel": "78",

                            },
                            {
                                "xLabel": "2019.10",
                                "yLabel": "95",

                            },
                            {
                                "xLabel": "2019.11",
                                "yLabel": "68",

                            },
                            {
                                "xLabel": "2019.12",
                                "yLabel": "85",

                            }
                        ]
                    },
                ]
            },
        ]
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
   

    var twoStageTitleArray = [];
    var twoStageTitle = "";

    for (var i = 0; i < table_data['data'].length; i++) {
        yiji_title.push(table_data['data'][i]['title']);
    }


    for (var i = 0; i < table_data['data'].length; i++) {
        for (var j = 0; j < table_data['data'][i]['table'].length; j++) {
            for (var k=0; k<table_data["data"][i]['table'][j]['data'].length;k++){
                twoStageTitle = table_data['data'][i]['table'][j]['data'][k]['categoryName'] +
                "<span style = 'font-size:100px;'>" +
                ' ' + "</span>" + "<span style = 'font-size:100px; font-family: 庞门正道标题体;color:#66ADF3';>" +
                table_data['data'][i]['table'][j]['data'][k]['totals'] + "</span>" + "<span style = 'font-size:60px;color:#66ADF3'>" +
                table_data['data'][i]['table'][j]['data'][k]['unit']+ "</span>";
            twoStageTitleArray.push(twoStageTitle);

            }  

        }
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
        $('.erji_title').append(function() {
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
            let tabvar = "";
            tabvar += "<button>";
            tabvar += "<label class='column1'>" + "<label class='titleCloumn'>" +twoStageTitleArray[0]+"</label>";
            tabvar += "<label class='column2'>"  +twoStageTitleArray[1]+"</label>";
            tabvar += "<label class='column3'>"  +twoStageTitleArray[2]+"</label>";
            tabvar += "</button>";
            $('#show_labels').empty();
            $('#show_labels').append(tabvar);  
            var unit; // 用于存放 数值单位
            const leibie_name = []; // 用于存放类别名
            var id; // 存储 一级标题点击时的 id
            var yMax = 100;
            var dataShadow = [];
            var datas = [];
            for (var i = 0; i < table_data['data'].length; i++) {
                if (table_data['data'][i]['title'] === yiji) {
                    for (var j = 0; j < table_data['data'][i]['table'].length; j++) {
                        if (table_data['data'][i]['table'][j]['title'] === $(this).text()) {
                            if ("xLabelRang" in table_data['data'][i]['table'][j]) {

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
                                    const res2 = [];
                                    for (var m = 0; m < table_data['data'][i]['table'][j]['data'][k]['categoryData'].length; m++) {
                                        res.push(table_data['data'][i]['table'][j]['data'][k]['categoryData'][m]['yLabel'])

                                        dataShadow.push(table_data['data'][i]['table'][j]['data'][k]['arvg'])

                                    }

                                    y_data.push(res);

                                    datas.push(dataShadow)
                                    color_list.push(color_res);


                                }
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
            var dataArray = [];

            if (leibie_name.length > 1) {
                new_liebie = leibie_name;
            } else {
                new_liebie = [];
            }
            //new_liebie.push("人工智能岛年平均利用率","标杆企业年最大设备利用率")
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
            var label = {
                show: false, //开启显示
                position: 'top', // 在上方显示

                textStyle: { //数值样式
                    color: 'rgba(0,0,0,0)00',
                    fontSize: 35
                }
            };
            var colorHeights = ['#01feea', '#ffffff', '#418dff']
            colors = ['-', '-', '-', '#00FDAD', '#FFFFFF']
            for (var i = 0; i < y_data.length; i++) {
                dataShadow.push(yMax);
            }
            for (var i = 0; i < y_data.length; i++) {
                series.push(



                    {
                        name: new_liebie[i],
                        type: 'bar',
                        barGap: '30%',

                        itemStyle: itemStyle = {
                            normal: {
                                barBorderRadius: [15, 15, 0, 0],
                                shadowBlur: 15,
                                shadowColor: colorHeights[i],
                            },

                        },
                        barWidth: '30px',
                        label: label,
                        data: y_data[i],
                        color: new_color_list[i]
                    }, )

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
                //    image:img
                // },

                legend: {
                    //icon: 'bar',
                    right: '1%',
                    show:false,     
                    bottom: '88%',
                    itemGap: 160,
                    data: new_liebie,
                    itemWidth: 25,
                    itemHeight: 12,

                    textStyle: {
                        fontSize: 40,
                        color: globalFontColor
                    }
                },
                grid: {
                    left: '2%',
                    right: '1%',
                    bottom: '0%',
                    top: '18%',
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
                            // width: 5,
                            //alignWithLabel: true
                        }
                    },
                    axisLabel: {
                        interval: 0,

                        rotate: 0,
                        fontStyle: 'normal',
                        fontFamily: 'sans-serif',
                        color: globalFontColor,
                        fontSize: 40,

                        margin: 44,
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
                            color: globalFontColor,
                            fontSize: globalFontSize,
                        },
                        axisTick: {
                            show: false
                        },
                        type: 'value',
                        min: 0,
                        max: 120,
                        axisLabel: {
                            // show:true,
                            //interval: 'auto',
                            // formatter: '{value}%',

                            color: globalFontColor,
                            fontSize: globalFontSize
                        },
                        axisLine: {
                            show: false
                        },
                        splitNumber: 7,
                        splitLine: {

                            show: true,
                            lineStyle: {
                                width: 2,
                                type: 'dashed'
                            }
                        },
                    },

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
        // $('.erji_title a')[0].click();
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