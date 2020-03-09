//播放动画
ue.interface.PlayAnimation = function(time) {
    option.animationDuration = time;
    myChart.clear();
    myChart.setOption(option);
};


var table_data = {
    "data": [{
            "title": "温度监测",
            "table": [{
                "title": "总",
                "unit": "万tce",
                "xLabelRang": [{
                        "label": "A"
                    },
                    {
                        "label": "B"
                    },
                    {
                        "label": "C"
                    },
                    {
                        "label": " "
                    },
                    {
                        "label": "A"
                    },
                    {
                        "label": "B"
                    },
                    {
                        "label": "C"
                    },
                    {
                        "label": "0"
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
                    "categoryName": "类别一",
                    "start_color": mainGraStart,
                    "end_color": mainGraEnd,
                    'high_color': '#5ceaff',
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
                            "yLabel": "500"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "150"
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
                            "yLabel": "200"
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
                            "yLabel": "120"
                        }
                    ]
                }]
            }]
        },
        {
            "title": "红外图谱",
            "table": [{
                "title": "总",
                "unit": "万tce",
                "xLabelRang": [{
                        "label": "A"
                    },
                    {
                        "label": "B"
                    },
                    {
                        "label": "C"
                    },
                    {
                        "label": " "
                    },
                    {
                        "label": "A"
                    },
                    {
                        "label": "B"
                    },
                    {
                        "label": "C"
                    },
                    {
                        "label": "0"
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
                    "categoryName": "类别一",
                    "start_color": mainGraStart,
                    "end_color": mainGraEnd,
                    'high_color': '#5ceaff',
                    "categoryData": [{
                            "xLabel": "2015",
                            "yLabel": "20"
                        },
                        {
                            "xLabel": "2016",
                            "yLabel": "240"
                        },
                        {
                            "xLabel": "2017",
                            "yLabel": "250"
                        },
                        {
                            "xLabel": "2018",
                            "yLabel": "500"
                        },
                        {
                            "xLabel": "2019",
                            "yLabel": "150"
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
                            "yLabel": "300"
                        },
          
                    ]
                }]
            }]
        },

    ]
};

var showRealData = ZSB["能源客户视角"]["温度检测-红外图谱"];
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
        $(".nav a").css({ "color": textColor })
        const id = "title" + i;
        const href = "#title" + i;
        $('.nav').append("<li role='presentation'><a href='" + href + "' aria-controls='profile' role='tab' data-toggle='tab'>" + yiji_title[i] + "</a></li>");
    }

    $('.nav a').click(function() {
        var yiji;
        var erji_index;
        for (var i = 0; i < table_data['data'].length; i++) {
            if (table_data['data'][i]['title'] === $(this).text()) {
                yiji = $(this).text();
                erji_index = i;
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
                                x_label.push(table_data['data'][i]['table'][j]['xLabelRang'][k]['label'])
                            }
                            for (var k = 0; k < table_data['data'][i]['table'][j]['data'].length; k++) {
                                const color_res = []; // 颜色过渡数组
                                leibie_name.push(table_data['data'][i]['table'][j]['data'][k]['categoryName']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['start_color']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['end_color']);
                                color_res.push(table_data['data'][i]['table'][j]['data'][k]['high_color']);
                                const res = []; // y_data 过渡数组
                                for (var m = 0; m < table_data['data'][i]['table'][j]['data'][k]['categoryData'].length; m++) {
                                    res.push(table_data['data'][i]['table'][j]['data'][k]['categoryData'][m]['yLabel'])

                                    dataShadow.push(yMax)


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
                const colorList = new_color_list[i];

                series.push(


                    {
                        name: new_liebie[i],
                        type: 'bar',
                        barGap: "-100%",
                        itemStyle: {
                            normal:{
                                color: function(params) {
                                    return colorList[params.dataIndex]
                                }},
                            emphasis: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{


                                                // 0% 处的颜色   
                                               offset: 0, color: mainHoverStart  },            {                      // 100% 处的颜色
                                               offset: 1, color: mainHoverEnd          }], false),
                                barBorderWidth: 1,
                                // shadowBlur: 50 ,
                                // shadowOffsetX: 0,
                                // shadowOffsetY: 0,
                                // shadowColor:  'rgba(255,255,0,1)' 
                            }
                        },
                        barWidth: '80px',
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
                    trigger: 'item',
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
                    left: '3%',
                    right: '3%',
                    bottom: '3%',
                    top: '10%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: x_label,
                    offset: 1,

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
                        // rotate: -50,
                        color: globalFontColor,
                        fontSize: globalFontSize,
                        margin: 50,
                        align: 'center',
                    },
                    splitLine: {
                        show: false
                    }
                }],
                yAxis: [
                    /*{
                        name: unit,
                        nameLocation: 'end',
                        nameGap: 50,
                        nameTextStyle: {
                            color: globalFontColor,
                            fontSize: globalFontSize,
                        },
                        axisTick: {
                            lineStyle: {
                                width: 5,
                                alignWithLabel: true
                            }
                        },
                        type: 'value',
                        axisLabel: {
                            color: globalFontColor,
                            fontSize: globalFontSize
                        },
                        axisLine: {
                            lineStyle: {
                                color: globalFontColor, 
                                width: 5
                            }
                        },
                        splitLine: {
                            show: false
                        },
                    }*/
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
                        type: 'value',
                        axisLabel: {
                            show: false,
                            color: globalFontColor,
                            fontSize: globalFontSize
                        },
                        axisLine: {
                            show: false
                        },
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
                animationDuration: 0,
                // animationEasing: 'elasticOut',
                // animationDelayUpdate: function (idx) {
                //     return idx * 5;
                // }
            };
            myChart.setOption(option);
            // var data= option.series[0].data;
            // var insetData = '';
            // var insetNum = 7;
            // var currentDatas = ['20','240','250','500','150','320','420','300'];
            // // myChart.setOption(option);
            // function refreshData(){  
            //     var option = myChart.getOption();//获取页面的option  
            //     option.series[0].data = data;//设置新的数据  
            //     myChart.setOption(option);//绑定到ECharts  
            // };
            // function funRandomData(){
            //     return insetData = currentDatas[insetNum];
            // }

            // window.setInterval(function()
            // {  
            //     data.shift();
            //     insetNum++;  
            //     if(insetNum == 8){
            //         insetNum =0;
            //     }
            //     var insetDatas=funRandomData();

            //     data.push(insetDatas);  
            //     console.log(data);
            //     refreshData();    
            // },
            // 1000);
            // myChart.clear();


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