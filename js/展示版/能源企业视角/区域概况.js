globalFontSize = 40;
globalFontColor = textColor;


var table_data = {
    "data": [{
        "title": "区域概况",
        "table": [{
            "title": "接入企业",
            "unit": "tce",
            "data": [{
                "categoryName": "需",
                "start_color": "#00FDAD",
                "end_color": "#00FDAD",
                'high_color': '#00FDAD',
                'gradient_color': '#00FDAD',
                "categoryData": [{
                        "xLabel": "户",
                        "yLabel": 719
                    },
                    {
                        "xLabel": "m²",
                        "yLabel": 715
                    },
                    {
                        "xLabel": "万元",
                        "yLabel": 12500
                    },
                    {
                        "xLabel": "%",
                        "yLabel": 68
                    }

                ]
            }, ]
        }, { "title": '面积' }, { "title": '去年经济增加值' }, { "title": '清洁能源占比' }]
    }, ]
};
var showRealData = ZSB["能源企业视角"]["区域概况"];
$(function() {
    Flush();
    $.ajax({
        url: "http://localhost:2277/ChartsService.asmx/GetQuYuDWMJNH",
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
                    $('#subtitle').append("<span class='erji_title'><a>" + table_data['data'][i]['table'][j]['title'] + "</a></span>");
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
                            if ('data' in table_data['data'][i]['table'][j]) {
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
                            else{
                                return
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
            var tips = 0;

            function loading() {
                return [{
                        value: tips,
                        itemStyle: {
                            normal: {
                                borderRadius: [15, 15, 15, 15],
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    { offset: 0, color: 'rgba(255,255,255,0)' },
                                    { offset: 0.75, color: 'rgba(255,255,255,1)' }
                                ], false),
                            }
                        }
                    },
                    {
                        value: 100 - tips,
                        itemStyle: {
                            normal: {
                                color: 'rgba(0,0,0,0)',
                            }
                        }
                    }
                ];
            }
            for (var i = 0; i < dataCategory.length; i++) {
                var legendName = { value: dataCategory[i]['yLabel'], name: dataCategory[i]['xLabel'] }
                pieChartData.push(legendName)
            };

            series = [{
                    name: 'aaa',
                    type: 'pie',
                    avoidLabelOverlap: false,
                    data:['11'],
                    radius: ['38%', '45%'],
                    center: ['12%', '35%'],
                    itemStyle: {
                        normal: {
                            borderRadius: [15, 15, 15, 15],

                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: mainGraEnd },
                                { offset: 1, color: mainGraEnd }
                            ], false),
                        }
                    },
                    label: {
                        show: true,
                     
                        formatter: function (params) {
                            return y_data[0][0].value+ "\n"+ "{a|"+y_data[0][0].name+"}"
                        },
                        rich:{
                            a:{
                                color:"#ffffff",
                                fontSize:40
                            }

                        },
                        position: 'center',
                        fontSize: 60,
                        color: '#FFFFFF',
                        padding: [5, 0, 0, 0],
                       
                        // fontFamily: '庞门正道标题体',

                    },
                    labelLine: {
                        length: 40,
                        length2: 50,
                        lineStyle: {
                            width: 5
                        }
                    },
                    hoverOffset: 0,
                    minAngle: 20,
                },
                {
                    name: 'loading',
                    type: 'pie',
                    radius: ['38%', '45%'],
                    center: ['15%', '35%'],
                    hoverAnimation: false,
                    itemStyle: {

                        shadowColor: '#418dff',
                        shadowBlur: 10,
                        shadowOffsetY: 0,


                    },
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    data: loading()
                },
                {
                    name: new_liebie[1],
                    type: 'pie',
                    avoidLabelOverlap: false,
                    data: ['12'],
                    radius: ['38%', '45%'],
                    center: ['37%', '35%'],
                    itemStyle: {
                        normal: {
                            borderRadius: [15, 15, 15, 15],
                            //color: 'rgba(255,255,255,1)',
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: mainGraEnd },
                                { offset: 1, color: mainGraEnd }
                            ], false),
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: '#418dff'
                        }
                    },
                    hoverOffset: 0,
                    label: {
                        show: true,
                        formatter: function (params) {
                            return y_data[0][1].value + "\n"+ "{a|"+y_data[0][1].name+"}"
                        },
                        rich:{
                            a:{
                                color:"#ffffff",
                                fontSize:40
                            }

                        },
                        position: 'center',
                        fontSize: 60,
                        color: '#FFFFFF',
                        padding: [5, 0, 0, 0],
                        
                        // fontFamily: '庞门正道标题体',

                    },
                    labelLine: {
                        length: 40,
                        length2: 50,
                        lineStyle: {
                            width: 5
                        }
                    },
                    minAngle: 20,
                },
                {
                    name: 'loading',
                    type: 'pie',
                    radius: ['38%', '45%'],
                    center: ['38.5%', '35%'],
                    hoverAnimation: false,
                    itemStyle: {


                        shadowColor: '#418dff',
                        shadowBlur: 10,
                        shadowOffsetY: 0,

                      
                    },
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    data: loading()
                },
                {
                    name: new_liebie[1],
                    type: 'pie',
                    avoidLabelOverlap: false,
                    data: ['12'],
                    radius: ['38%', '45%'],
                    center: ['63%', '35%'],
                    itemStyle: {
                        normal: {
                            borderRadius: [15, 15, 15, 15],
                            //color: 'rgba(255,255,255,1)',
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: mainGraEnd },
                                { offset: 1, color: mainGraEnd }
                            ], false),
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: '#418dff'
                        }
                    },
                    hoverOffset: 0,
                    label: {
                        show: true,
                        formatter: function (params) {
                            return y_data[0][2].value + "\n"+ "{a|"+y_data[0][2].name+"}"
                        },
                        rich:{
                            a:{
                                color:"#ffffff",
                                fontSize:40
                            }

                        },
                        position: 'center',
                        fontSize: 60,
                        color: '#FFFFFF',
                        padding: [5, 0, 0, 0],
                       
                        // fontFamily: '庞门正道标题体',

                    },
                    labelLine: {
                        length: 40,
                        length2: 50,
                        lineStyle: {
                            width: 5
                        }
                    },
                    minAngle: 20,
                },
                {
                    name: 'loading',
                    type: 'pie',
                    radius: ['35%', '45%'],
                    center: ['63%', '35%'],
                    hoverAnimation: false,
                    itemStyle: {

                        shadowColor: '#418dff',
                        shadowBlur: 10,
                        shadowOffsetY: 0,


                    },
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    data: loading()
                },
                {
                    name: new_liebie[1],
                    type: 'pie',
                    avoidLabelOverlap: false,
                    data: ['13'],
                    radius: ['38%', '45%'],
                    center: ['88%', '35%'],
                    itemStyle: {
                        normal: {
                            borderRadius: [15, 15, 15, 15],
                            //color: 'rgba(255,255,255,1)',
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: mainGraEnd },
                                { offset: 1, color: mainGraEnd }
                            ], false),
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    hoverOffset: 0,
                    label: {
                        show: true,
                        formatter: function (params) {
                            return y_data[0][3].value + "\n"+ "{a|"+y_data[0][3].name+"}"
                        },
                        rich:{
                            a:{
                                color:"#ffffff",
                                fontSize:40
                            }

                        },
                        position: 'center',
                        fontSize: 60,
                        color: '#FFFFFF',
                        padding: [10, 0, 0, 0],
                       
                        // fontFamily: '庞门正道标题体',


                    },
                    labelLine: {
                        length: 40,
                        length2: 50,
                        lineStyle: {
                            width: 5
                        }
                    },
                    minAngle: 20,
                },
                {
                    name: 'loading',
                    type: 'pie',
                    radius: ['35%', '45%'],
                    center: ['85%', '35%'],
                    hoverAnimation: false,
                    itemStyle: {

                        shadowColor: '#418dff',
                        shadowBlur: 10,
                        shadowOffsetY: 0,

                      
                    },
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    data: loading()
                },
            ];
            // }
            console.log(new_liebie);
            myChart = echarts.init(document.getElementById('show_charts')); // 基于准备好的dom，初始化echarts实例
            option = {
                // tooltip: {
                //     trigger: 'item',
                //     formatter: "{b}<br/> {c}" + unit + "<br/> {d}%",
                //     textStyle: {
                //         fontSize: globalFontSize,
                //     }
                // },
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
                 
                    itemWidth: 50,
                    itemHeight: 30,
                    itemGap: 60,
                    data: ['aa', 'bb', 'cc', 'dd'],
                    textStyle: {
                        color: globalFontColor,
                        fontSize: globalFontSize,
                    }
                },
               
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgba(255,255,255,0.1)' },
               
                    { offset: 1, color: 'rgba(255,255,255,0.25)' }
                ], false),
            
                series: series,
                //animationDuration: 0
                animation: false,
                animationThreshold: 100,
                animationDurationUpdate: function(idx) {
                    // 越往后的数据延迟越大
                    return idx * 1000;
                },
            };
 
            myChart.setOption(option);

        });
        //$('.erji_title a')[0].click();
    });
    $('.nav a')[0].click();
    setInterval(function () { $('body').css('background-color', 'rgba(0,0,0,0.00)') }, 1000);
};

ue.interface.Flush=function()
{
    Flush();
}

ue.interface.Load=function(data)
{
    var jsonData = JSON.parse(data);
    $.ajax({
        url: "http://localhost:2277/ChartsService.asmx/"+jsonData['FunctionName'],
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